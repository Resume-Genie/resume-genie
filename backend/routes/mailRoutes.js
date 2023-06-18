import express from 'express';

import { registerMail, sendOtp } from '../controllers/mailController.js';

const router = express.Router();

// Called when user registers
router.post('/registerMail', registerMail);
// Called when user requests OTP
router.post('/sendOtp', sendOtp);

export default router;
