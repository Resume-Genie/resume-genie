const nodemailer = require('nodemailer');
const mailgen = require('mailgen');

const ENV = require('../utils/config.js');

// https://ethereal.email/create
let nodeConfig = {
  host: 'smtp.ethereal.email',
  port: 587,
  secure: false,
  auth: {
    user: ENV.EMAIL,
    pass: ENV.PASSWORD,
  },
};

let transporter = nodemailer.createTransport(nodeConfig);

let mailgenerator = new mailgen({
  theme: 'default',
  product: {
    name: 'Resume Genie',
    link: '/',
  },
});

function sendMail(email, usermail, subject, body, res) {
  let message = {
    from: email,
    to: usermail,
    subject: subject,
    html: body,
  };

  transporter
    .sendMail(message)
    .then(() => {
      return res.status(200).send({ msg: 'Email Sent!' });
    })
    .catch((error) => res.status(500).send({ error }));
}

/** POST: http://localhost:8080/api/mail/registerMail 
 * @param: {
  "username" : "example123",
  "userEmail" : "admin123",
  "text" : "",
  "subject" : "",
}
*/
exports.registerMail = async (req, res) => {
  const { username, userEmail } = req.body;

  let email = {
    body: {
      name: username,
      intro:
        "Welcome to Resume Genie: The Next-Gen Resume Builder Software! We're very excited to have you on board.",
      outro:
        "Need help, or have questions? Just reply to this email, we'd love to help.",
    },
  };

  let emailBody = mailgenerator.generate(email);

  sendMail(ENV.EMAIL, userEmail, 'Signup Successful', emailBody, res);
};

/** POST: http://localhost:8080/api/mail/sendOtp 
 * @param: {
  "username" : "example123",
  "userEmail" : "admin123",
  "text" : "",
  "subject" : "",
}
*/
exports.sendOtp = async (req, res) => {
  const { username, userEmail, OTP } = req.body;

  let email = {
    body: {
      name: username,
      intro: 'Your OTP is valid for 10 minutes.',
      action: {
        button: {
          color: '#45a1fa',
          text: OTP,
        },
      },
      outro:
        "Need help, or have questions? Just reply to this email, we'd love to help.",
    },
  };

  let emailBody = mailgenerator.generate(email);

  sendMail(ENV.EMAIL, userEmail, 'Resume Genie: Recovery OTP', emailBody, res);
};
