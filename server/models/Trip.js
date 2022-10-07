<<<<<<< HEAD
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
      type: Date,
      required: true,
    },
    tripEnd: {
      type: Date,
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
=======
const {Schema, model}= require('mongoose');
const { Schema } = mongoose;


const tripSchema = new Schema(
    {
          location: {
            type: String,
            required: true,
            trim: true
          },
          description: {
            type: Date,
            default: Date.now,
            get: timestamp => dateFormat(timestamp)
          },
          country: {
            type: String,
            required: true,
          },
          city: {
            type: String,
            required: true,
          },
          travelMode: {
            type: String,
            required: true,
          },
        
          day: {
            type: Schema.Types.ObjectId,
             ref: "Day",
             required: true
          }
        }
     );


const Trip = model('Trip', tripSchema);

module.exports = Trip
>>>>>>> 55ce8b85b2c707184ae73e4d69f3e874c0e88999
