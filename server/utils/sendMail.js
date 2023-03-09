const nodemailer = require('nodemailer');
const mailgen = require('mailgen');

const ENV = require('../utils/config.js');

// https://ethereal.email/create
let nodeConfig = {
  host: 'smtp.ethereal.email',
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: ENV.EMAIL, // generated ethereal user
    pass: ENV.PASSWORD, // generated ethereal password
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

/** POST: http://localhost:8080/api/registerMail 
 * @param: {
  "username" : "example123",
  "userEmail" : "admin123",
  "text" : "",
  "subject" : "",
}
*/
exports.registerMail = async (req, res) => {
  const { username, userEmail, text, subject } = req.body;

  // body of the email
  var email = {
    body: {
      name: username,
      intro:
        text ||
        "Welcome to Resume Genie: The Next-Gen Resume Builder Software! We're very excited to have you on board.",
      outro:
        "Need help, or have questions? Just reply to this email, we'd love to help.",
    },
  };

  var emailBody = mailgenerator.generate(email);

  let message = {
    from: ENV.EMAIL,
    to: userEmail,
    subject: subject || 'Signup Successful',
    html: emailBody,
  };

  // send mail
  transporter
    .sendMail(message)
    .then(() => {
      return res
        .status(200)
        .send({ msg: 'Email Sent!' });
    })
    .catch((error) => res.status(500).send({ error }));
};
