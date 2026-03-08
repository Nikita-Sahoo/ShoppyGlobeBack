const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'name is required'],
    trim: true,
  },
  email: {
    type: String,
    required: [true, 'email is required'],
    
  },
  password: {
    type: String,
    required: [true, 'password is required'],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;