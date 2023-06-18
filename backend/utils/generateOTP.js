import generateToken from './generateToken.js';

async function generateOTP(res, userId) {
  const otp = Math.floor(100000 + Math.random() * 900000);

  generateToken(res, userId, 'otpToken', '10m', 10 * 60 * 1000);

  return otp;
}

export default generateOTP;
