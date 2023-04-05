const { Router } = require('express');

const controller = require('./../controllers/appController');
const tesseractController = require('./../controllers/tesseractController');
const { Auth, localVariables } = require('./../auth/auth');
const { registerMail, sendOtp } = require('../utils/sendMail');

const router = Router();

// POST Method
router.route('/register').post(controller.register);
router.route('/mail/registerMail').post(registerMail);
router.route('/mail/sendOtp').post(sendOtp);
router
  .route('/authenticate')
  .post(controller.verifyUser, (req, res) => res.end());
router.route('/login').post(controller.verifyUser, controller.login);

// GET Methods
router.route('/user/:username').get(controller.getUser);
router
  .route('/generateOTP')
  .get(controller.verifyUser, localVariables, controller.generateOTP);
router.route('/verifyOTP').get(controller.verifyOTP);
router.route('/createResetSession').get(controller.createResetSession);
console.log(controller.createResetSession);
console.log(tesseractController.uploadFile);
// PUT Method
router.route('/updateuser').put(Auth, controller.updateUser);
router
  .route('/resetPassword')
  .put(controller.verifyUser, controller.resetPassword);

// router.route('/upload').post(tesseractController.uploadFile);

module.exports = router;
