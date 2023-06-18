import asyncHandler from 'express-async-handler';

import User from '../models/userModel.js';

/** POST: http://localhost:8000/api/users/profile
 * @desc    Get user profile
 * @route   GET /api/users/profile
 * @access  Private
 * @param: {
 * "name": "Gautam Raj",
 * "email": "example@resumegenie.com",
 * "password": "admin@123"
 * }
 */
const getUserProfile = asyncHandler(async (req, res) => {
  const user = {
    _id: req.user._id,
    name: req.user.name,
    email: req.user.email,
  };

  res.status(200).json(user);
});

/** POST: http://localhost:8000/api/users/profile
 * @desc    Get user profile
 * @route   GET /api/users/profile
 * @access  Private
 * @param: {
 * "name": "Gautam Raj",
 * "email": "example@resumegenie.com",
 * "password": "admin@123"
 * }
 */
const updateUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);

  if (!user) {
    res.status(404);
    throw new Error('User not found');
  }

  user.name = req.body.name || user.name;
  user.email = req.body.email || user.email;

  if (req.body.password) {
    user.password = req.body.password;
  }

  const updatedUser = await user.save();

  res.status(200).json({
    _id: updatedUser._id,
    name: updatedUser.name,
    email: updatedUser.email,
  });
});

export { getUserProfile, updateUserProfile };
