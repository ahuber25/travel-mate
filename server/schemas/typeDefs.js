// import the gql tagged template function
const { gql } = require('apollo-server-express');

// create our typeDefs
const typeDefs = gql`
type User {
  _id: ID
  username: String
  email: String
  trip: [Trip]
  days: [User]
}

type Trip {
  _id: ID
  location: String
  tripStart: Int
  tripEnd: Int
  country: String
  city: String
  days: Day
}

type Event {
  _id: ID
  eventName: String
  startTime: Int
  endTime: Int
}

type Day {
    _id: ID
    location: String
    createdAt: String
  }
  type User {
    _id: ID
    username: String
    email: String
    events: [event]
  }


type Query {
  days: [Day]
  trips(day: ID, location: String): [Trip]
  trip(_id: ID!): Trip
  user: User
  event(_id: ID!): Event
}

type Mutation {
  login(email: String!, password: String!): Auth
  addUser(username: String!, email: String!, password: String!): Auth
  addTrip(location: String!): Trip
  addDay(tripId: ID!, location: String!): Trip
}

type Auth {
  token: ID!
  user: User
}

`;


// export the typeDefs
module.exports = typeDefs;