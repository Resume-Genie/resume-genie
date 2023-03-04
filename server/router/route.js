const { Router } = require('express');

const controller = require('./../controllers/appController');
const { Auth } = require('./../auth/auth');

const router = Router();

// POST Method
router.route('/register').post(controller.register);
// router.route('/registerMail').post(controller);
router.route('/authentication').post((req, res) => res.end());
router.route('/login').post(controller.verifyUser, controller.login);

// GET Methods
router.route('/user/:username').get(controller.getUser);
router.route('/generateOTP').get(controller.generateOTP);
router.route('/verifyOTP').get(controller.verifyOTP);
router.route('/createResetSession').get(controller.createResetSession);

// PUT Method
router.route('/updateuser').put(Auth, controller.updateUser);
router.route('/resetPassword').put(controller.resetPassword);

module.exports = router;
