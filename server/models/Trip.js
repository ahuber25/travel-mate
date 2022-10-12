const { Schema, model } = require("mongoose");
const daySchema = require("./Day");

const tripSchema = new Schema(
  {
    location: {
      type: String,
      required: true,
      trim: true,
    },
    tripStart: {
      type: String,
      required: true,
    },
    tripEnd: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
  },
  {
    days: [daySchema],
  }
);

const Trip = model("Trip", tripSchema);

module.exports = Trip;
