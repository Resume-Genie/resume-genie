import asyncHandler from 'express-async-handler';
import generateToken from '../utils/generateToken.js';
import generateOTP from '../utils/generateOTP.js';
import User from '../models/userModel.js';

/** POST: http://localhost:8000/api/users/register
 * @desc    Register a new user
 * @route   POST /api/users/register
 * @access  public
 * @param: {
 * "name": "Gautam Raj",
 * "email": "example@resumegenie.com",
 * "password": "admin@123"
 * }
 */
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  const userExist = await User.findOne({ email });

  if (userExist) {
    res.status(400);
    throw new Error('User already exists');
  }

  const user = await User.create({
    name,
    email,
    password,
  });

  if (user) {
    generateToken(res, user._id, 'jwt', '30d', 30 * 24 * 60 * 60 * 1000);

    res.status(201).json({
      // message: 'User registered',
      _id: user._id,
      name: user.name,
      email: user.email,
    });
  } else {
    res.status(400);
    throw new Error('Invalid user data');
  }
});

/** POST: http://localhost:8000/api/users/login
 * @desc    Auth user & get token
 * @route   POST /api/users/login
 * @access  public
 * @param: {
 * "email": "example@resumegenie.com",
 * "password": "admin@123"
 * }
 */
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    generateToken(res, user._id, 'jwt', '30d', 30 * 24 * 60 * 60 * 1000);

    res.status(200).json({
      _id: user._id,
      name: user.name,
      email: user.email,
    });
  } else {
    res.status(401);
    throw new Error('Invalid email or password');
  }
});

/** POST: http://localhost:8000/api/users/logout
 * @desc    Logout user
 * @route   POST /api/users/logout
 * @access  private
 * @param: {}
 */
const logoutUser = asyncHandler(async (req, res) => {
  res.cookie('jwt', '', {
    httpOnly: true,
    expires: new Date(Date.now() - 10),
  });

  res.status(201).json({
    message: 'User logged out',
  });
});

/** GET: http://localhost:8000/api/users/generateOTP
 * @desc    Auth user & Generate OTP
 * @route   GET /api/users/generateOTP
 * @access  public
 * @param: {
 * "email": "example@resumegenie.com",
 * }
 */
const getOTP = asyncHandler(async (req, res) => {
  const { email } = req.body;

  const user = await User.findOne({ email });

  if (user) {
    req.app.locals.OTP = await generateOTP(res, user._id);

    res.status(201).json({
      code: req.app.locals.OTP,
      name: user.name,
      email: user.email,
    });
  } else {
    res.status(400);
    throw new Error('User not found');
  }
});

/** POST: http://localhost:8000/api/users/verifyOTP
 * @desc    Auth token & Verify OTP
 * @route   POST /api/users/verifyOTP
 * @access  private
 * @param: {
 * "code": "123456",
 * }
 */
async function verifyOTP(req, res) {
  const { code } = req.query;

  if (parseInt(req.app.locals.OTP) === parseInt(code)) {
    req.app.locals.OTP = null;
    req.app.locals.resetSession = true;

    return res
      .status(201)
      .cookie('otpToken', '', {
        httpOnly: true,
        expires: new Date(Date.now() - 10),
      })
      .send({ msg: 'Verify Successsfully!' });
  }

  return res.status(400).send({ error: 'Invalid OTP' });
}

/** POST: http://localhost:8000/api/users/resetPassword
 * @desc    Update Password && Update Reset Session to false
 * @route   POST /api/users/resetPassword
 * @access  private
 * @param: {
 * "email": "example@resumegenie.com",
 * "password": "admin@123"
 * }
 */
const resetPassword = asyncHandler(async (req, res) => {
  if (!req.app.locals.resetSession)
    return res.status(440).send({ error: 'Session expired!' });

  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (user) {
    user.password = password;
    await user.save();

    req.app.locals.resetSession = false;

    res.status(201).json({
      message: 'Password updated Successfully',
    });
  } else {
    res.status(400);
    throw new Error('Invalid user data');
  }
});

export {
  registerUser,
  loginUser,
  logoutUser,
  resetPassword,
  getOTP,
  verifyOTP,
};
