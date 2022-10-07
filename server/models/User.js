<<<<<<< HEAD
const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/.+@.+\..+/, "Must match an email address!"],
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
  },
  trips: [
    {
      type: Schema.Types.ObjectId,
      ref: "Trip",
    },
  ],
});

//pre-password
userSchema.pre("save", async function (next) {
  if (this.isNew || this.isModified("password")) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});
//password confirm

userSchema.methods.isCorrectPassword = async function (password) {
  return bcrypr.compare(password, this.password);
};

const User = model('User', userSchema)

module.exports = User;
=======
const {Schema, model}= require('mongoose');
const { Schema } = mongoose;
const bcrypt = require('bcrypt');
const userSchema = new Schema(
    {
        firstname: {
            type: String,
            required: true,
            trim: true
          },
          lastname: {
            type: String,
            required: true,
            trim: true
          },
          email: {
            type: String,
            required: true,
            unique: true
            
          },
          password: {
            type: String,
            required: true,
            minlength: 6
          },
          trips: [
            {
            type: Schema.Types.ObjectId,
             ref: "Trips"
            }
         ],
        events: [
            {
            type: Schema.Types.ObjectId,
             ref: "Events"
            }
         ],
       
        });
        userSchema.pre('save', async function(next) {
          if (this.isNew || this.isModified('password')) {
            const saltRounds = 10;
            this.password = await bcrypt.hash(this.password, saltRounds);
          }
        
          next();
        });
        
        // compare the incoming password with the hashed password
        userSchema.methods.isCorrectPassword = async function(password) {
          return await bcrypt.compare(password, this.password);
        };


const User = model('User', userSchema);

module.exports = User;



>>>>>>> 55ce8b85b2c707184ae73e4d69f3e874c0e88999
