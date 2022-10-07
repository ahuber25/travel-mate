const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    trips: [Trip]
  }
  type Trip {
    _id: ID
    location: String
    tripStart: Date
    tripEnd: Date
    country: String
    city: String
    days: [Day]
  }
  type Day {
    _id: ID
    reactionBody: String
    createdAt: String
    username: String
  }
  type Auth {
    token: ID!
    user: User
  }
  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addTrip(location: String!, tripStart: Date!, tripEnd: Date!, country: String!, city: String): Day
    addDays(location: String!): Trip
  }
`;

module.exports = typeDefs;