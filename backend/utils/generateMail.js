import nodemailer from 'nodemailer';

let nodeConfig;
let message;

const sendMail = async (req, res) => {
  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport(nodeConfig);

  // send mail with defined transport object
  let info = await transporter.sendMail(message);

  // Preview only available when sending through an Ethereal account
  console.log('Message sent: %s', info.messageId);
  console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

  res.json(info);
};

const mailConfig = async (req, res, userEmail, subject, body) => {
  // Development Environment
  if (process.env.NODE_ENV === 'development') {
    // Generate test SMTP service account from ethereal.email
    // Only needed if you don't have a real mail account for testing
    let testAccount = await nodemailer.createTestAccount();

    nodeConfig = {
      host: 'smtp.ethereal.email',
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: testAccount.user, // generated ethereal user
        pass: testAccount.pass, // generated ethereal password
      },
    };
  }

  // Production Environment
  if (process.env.NODE_ENV === 'production') {
    nodeConfig = {
      service: 'gmail',
      auth: {
        user: process.env.PROD_EMAIL,
        pass: process.env.PROD_PASSWORD,
      },
    };
  }

  message = {
    from: '"Resume Genie" <no-reply@resumegenie.com>',
    to: userEmail,
    subject: subject,
    html: body,
  };

  sendMail(req, res);
};

export default mailConfig;
