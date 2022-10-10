const { Schema, model } = require("mongoose");



const eventSchema = new Schema({
  eventName: {
    type: String,
    required: true,
  },
  startTime: {
    type: Date,
    required: true,
  },
  endTime: {
    type: Date,
    required: true,
  },
  
});

const Event = model("Event", eventSchema);

module.exports = Event;
