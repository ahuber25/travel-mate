<<<<<<< HEAD
// const { Schema, model } = require("mongoose");
// const { Schema } = mongoose;

// const eventSchema = new Schema({
//   eventName: {
//     type: String,
//     required: true,
//   },
//   startTime: {
//     type: Date,
//     required: true,
//   },
//   endTime: {
//     type: Date,
//     required: true,
//   },
  
// });

// const Event = model("Event", eventSchema);

// module.exports = eventSchema;
=======
const {Schema, model}= require('mongoose');
const { Schema } = mongoose;

const eventSchema = new Schema(
    {
          travelDate: {
            type: String,
            required: true,
          },
          activity: {
            type: String,
            required: true,
          },
          startDate: {
            type: Date,
            required: true
          },
          endDate: {
            type: Date,
            required: true
          },
        trips: [
            {
            type: Schema.Types.ObjectId,
             ref: "Trips"
            }
         ],
        }
     );


const Event = model('Event', eventSchema);

module.exports = eventSchema
>>>>>>> 55ce8b85b2c707184ae73e4d69f3e874c0e88999
