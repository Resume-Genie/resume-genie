const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, 'Please provide unique Username'],
    unique: [true, 'Username already Exist'],
  },
  password: {
    type: String,
    required: [true, 'Please provide a password'],
    unique: false,
  },
  email: {
    type: String,
    required: [true, 'Please provide a unique email.'],
    unique: [true, 'Email already Exist.'],
  },
});

module.exports = mongoose.model.Users || mongoose.model('User', userSchema);
