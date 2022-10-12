const { AuthenticationError } = require("apollo-server-express");
const { User, Trip, Day } = require("../models");
const { signToken } = require("../utils/auth");

// const resolvers = {
//   Query: {
//     me: async (parent, args, context) => {
//       if (context.user) {
//         const userData = await User.findOne({ _id: context.user._id }).select(
//           "-__v -password"
//         );

//         return userData;
//       }

//       throw new AuthenticationError("Not logged in");
//     },
//     users: async () => {
//       return User.find().select("-__v -password");
//     },
//     user: async (parent, { username }) => {
//       return User.findOne({ username }).select("-__v -password");
//     },
//   },

//   Mutation: {
//     addUser: async (parent, args) => {
//       const user = await User.create(args);
//       const token = signToken(user);

//       return { token, user };
//     },
//     addtrips: async (parent, args) => {
//       const Trip = await Trip.create(args);
//       const token = signToken(trip);
//       return { token, trip };
//     },
//     addDays: async (parent, args) => {
//       const Day = await Day.create(args);
//       const token = signToken(Day);

//       return { token, day };
//     },
//     login: async (parent, { email, password }) => {
//       const user = await User.findOne({ email });

//       if (!user) {
//         throw new AuthenticationError("Incorrect credentials");
//       }

//       const correctPw = await user.isCorrectPassword(password);

//       if (!correctPw) {
//         throw new AuthenticationError("Incorrect credentials");
//       }

//       const token = signToken(user);
//       return { token, user };
//     },
//   },
// };

// module.exports = resolvers;

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        const user = await User(context.user._id).populate({
          path: "events.trips",
          populate: "day",
        });
        return user;
      }

      throw new AuthenticationError("Not logged in");
    },

    user: async (parent, args, context) => {
      if (context.user) {
        const user = await User(context.user._id).populate({
          path: "events.trips",
          populate: "day",
        });

        return user;
      }

      throw new AuthenticationError("Not logged in");
    },
    trip: async (parent, { _id }) => {
      return await Trip.findById(_id).populate("day");
    },
    event: async (parent, { _id }, context) => {
      if (context.user) {
        const user = await User.findById(context.user._id).populate({
          path: "events.trips",
          populate: "day",
        });

        return user.events.id(_id);
      }

      throw new AuthenticationError("Not logged in");
    },
  },
  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
    addTrip: async (parent, args) => {
      const trip = await Trip.create(args);
      const token = signToken(trip);

      return { token, trip };
    },

    // addEvent: async (parent, { trips }, context) => {
    //   if (context.user) {
    //     const event = new Event({ trips });
    //     await User.findByIdAndUpdate(context.user._id, {
    //       $push: { events: event },
    //     });
    //     return event;
    //   }

    //   throw new AuthenticationError("Not logged in");
    // },

    updatetrip: async (parent, { _id, quantity }) => {
      const decrement = Math.abs(quantity) * -1;

      return await Trip.findByIdAndUpdate(
        _id,
        { $inc: { quantity: decrement } },
        { new: true }
      );
    },
    // Delete Trip

    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const token = signToken(user);

      return { token, user };
    },
  },
};

module.exports = resolvers;