import express from 'express';

import { protect } from '../middleware/authMiddleware.js';
import { protectOTP } from '../middleware/otpMiddleware.js';
import {
  registerUser,
  loginUser,
  logoutUser,
  resetPassword,
  getOTP,
  verifyOTP,
} from '../controllers/authController.js';
import {
  getUserProfile,
  updateUserProfile,
} from '../controllers/userControllers.js';
import localVariables from '../config/localConfig.js';

const router = express.Router();

// Authentication
router.post('/register', registerUser);
router.post('/login', loginUser);
router.post('/logout', protect, logoutUser);

router.put('/resetPassword', resetPassword);

// OTP
router.get('/generateOTP', localVariables, getOTP);
router.get('/verifyOTP', protectOTP, verifyOTP);

// User
router.get('/profile', protect, getUserProfile);
router.put('/profile', protect, updateUserProfile);

export default router;
