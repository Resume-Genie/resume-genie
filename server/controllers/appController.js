/** POST: http://localhost:8000/api/register
 * @param: {
 * "email": "example@gmail.com",
 * "password": "admin@123",
 * "name": "Gautam Raj",
 * }
 */
async function register(req, res) {
  res.json('register route');
}

/** POST: http://localhost:8000/api/login
 * @param: {
 * "email": "example@gmail.com",
 * "password": "admin@123",
 * }
 */
async function login(req, res) {
  res.json('login route');
}

// GET: http://localhost:8000/api/user/admin123
async function getUser(req, res) {
  res.json('getUser route');
}

// GET: http://localhost:8000/api/generateOTP
async function generateOTP(req, res) {
  res.json('generateOTP route');
}

// GET: http://localhost:8000/api/verifyOTP
async function verifyOTP(req, res) {
  res.json('verifyOTP route');
}

// Successfully redirect the user when OTP is valid
// GET: http://localhost:8000/api/createResetSession
async function createResetSession(req, res) {
  res.json('createResetSession route');
}

/** PUT: http://localhost:8000/api/updateUser
 * @param: {
 * "email": "example@gmail.com",
 * "password": "admin@123",
 * "name": "Gautam Raj"
 * }
 */
async function updateUser(req, res) {
  res.json('updateUser route');
}

/** PUT: http://localhost:8000/api/resetPassword */
async function resetPassword(req, res) {
  res.json('resetPassword route');
}

module.exports = {
  register,
  login,
  getUser,
  generateOTP,
  verifyOTP,
  createResetSession,
  updateUser,
  resetPassword,
};
