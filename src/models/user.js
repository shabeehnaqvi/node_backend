const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phoneNumber: {
    type: Number,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  moneySpent: {
    type: Number,
    default: 0,
  },
  password: String,
});

const User = mongoose.model("Users", userSchema);

module.exports = User