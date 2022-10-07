const { Schema, model } = require("mongoose");
const dateFormat = require('../utils/dateFormat');


const daySchema = new Schema({
  location: {
    type: String,
    required: true,
    trim: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (timestamp) => dateFormat(timestamp),
  }
},
{
    // events: [eventSchema]
}
);

const Day = model("Day", daySchema);

module.exports = daySchema;
