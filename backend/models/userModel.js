const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    fullName: {
      require: true,
      type: String,
    },
    userMail: {
      require: true,
      type: String,
      unique: true,
    },
    userPassword: {
      require: true,
      type: String,
    },
    userCourse: {
      require: true,
      type: String,
    },
    gender: {
      require: true,
      type: String,
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("user", userSchema);
