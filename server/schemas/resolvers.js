const { AuthenticationError } = require('apollo-server-express');
const { User, Trip, Day } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    days: async () => {
      return await Day.find();
    },
    trips: async (parent, { day, name }) => {
      const params = {};

      if (day) {
        params.day = day;
      }

      if (name) {
        params.name = {
          $regex: name
        };
      }

      return await Trip.find(params).populate('day');
    },
    trip: async (parent, { _id }) => {
      return await Trip.findById(_id).populate('day');
    },
    user: async (parent, args, context) => {
      if (context.user) {
        const user = await User.findById(context.user._id).populate({
          path: 'events.trips',
          populate: 'day'
        });

        user.events.sort((a, b) => b.purchaseDate - a.purchaseDate);

        return user;
      }

      throw new AuthenticationError('Not logged in');
    },
    event: async (parent, { _id }, context) => {
      if (context.user) {
        const user = await User.findById(context.user._id).populate({
          path: 'events.trips',
          populate: 'day'
        });

        return user.events.id(_id);
      }

      throw new AuthenticationError('Not logged in');
    }
  },
  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
    addEvent: async (parent, { trips }, context) => {
      console.log(context);
      if (context.user) {
        const event = new Event({ trips });

        await User.findByIdAndUpdate(context.user._id, { $push: { events: event } });

        return event;
      }

      throw new AuthenticationError('Not logged in');
    },
    updateUser: async (parent, args, context) => {
      if (context.user) {
        return await User.findByIdAndUpdate(context.user._id, args, { new: true });
      }

      throw new AuthenticationError('Not logged in');
    },
    updatetrip: async (parent, { _id, quantity }) => {
      const decrement = Math.abs(quantity) * -1;

      return await Trip.findByIdAndUpdate(_id, { $inc: { quantity: decrement } }, { new: true });
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
    }
  }
};

module.exports = resolvers;