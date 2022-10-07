const { AuthenticationError } = require('apollo-server-express');
const { User, Trip } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {

      me: async (parent, args, context) => {
        if (context.user) {
          const userData = await User.findOne({ _id: context.user._id })
            .select('-__v -password')
            .populate('trip')
            .populate('days');
  
          return userData;
        }
  
        throw new AuthenticationError('Not logged in');
      },

      // get all users
      users: async () => {
        return User.find()
          .select('-__v -password')
          .populate('trip')
          .populate('days');
      },
      
      // get a user by username
      user: async (parent, { username }) => {
        return User.findOne({ username })
          .select('-__v -password')
          .populate('days')
          .populate('trip');
      },
      trip: async (parent,{username}) => {
        const params = username ? { username } : {};
        return Trip.find(params).sort({ tripStart: 1 });
  
      },
        // place this inside of the `Query` nested object right after `thoughts`   
      trip: async (parent, { _id }) => {
        return Trip.findOne({ _id });
      },
     
  },

  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);
    
      return { token, user };
    
    },

    // logic here remains the same
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
    },

    addTrip: async (parent, args, context) => {
      console.log(context.user);
      if (context.user) {
        const trip = await Trip.create({ ...args, username: context.user.username });
        
        await User.findByIdAndUpdate(
          { _id: context.user._id },
          { $push: { trip: trip._id } },
          { new: true }
        );

        return trip;
      }
      throw new AuthenticationError('You need to be logged in!');
    },

    // addEvent: async (parent, { tripId, location }, context) => {
    //   if (context.user) {
    //     const updatedTrip = await Trip.findOneAndUpdate(
    //       { _id: tripId },
    //       { $push: { days: { eventName, username: context.user.username } } },
    //       { new: true, runValidators: true }
    //     );

    //     return updatedTrip;
    //   }

    //   throw new AuthenticationError('You need to be logged in!');
    // },
    
      addDay: async (parent, { friendId }, context) => {
        if (context.user) {
          const updatedUser = await User.findOneAndUpdate(
            { _id: context.user._id },
            { $addToSet: { days: dayId } },
            { new: true }
          ).populate('days');
      
          return updatedUser;
        }
      
        throw new AuthenticationError('You need to be logged in!');
      
      }
    }
  };
  
  module.exports = resolvers;
  