import mailgen from 'mailgen';

import mailConfig from '../utils/generateMail.js';

let mailgenerator = new mailgen({
  theme: 'default',
  product: {
    name: 'Resume Genie',
    link: 'https://resumegenie.vercel.app/',
  },
});

/** POST: http://localhost:8080/api/mail/registerMail 
 * @param: {
  "username" : "example123",
  "userEmail" : "admin123",
  "text" : "",
  "subject" : "",
}
*/
const registerMail = async (req, res) => {
  const { username, userEmail } = req.body;

  let email = {
    body: {
      name: username,
      greeting: 'Hey',
      intro: [
        "Welcome to Resume Genie: The Next-Gen Resume Builder Software! We're very excited to have you on board.",
        "Build your dream resume in a SNAP! It's that easy! Just follow the 4 easy steps and you're good to go!",
      ],
      table: [
        {
          // Optionally, add a title to each table.
          title: '4 Steps to Build Your Resume',
          data: [
            {
              item: 'Step 1',
              description: 'Enter your details',
            },
            {
              item: 'Step 2',
              description: 'Choose a template',
            },
            {
              item: 'Step 3',
              description: 'Download your resume',
            },
            {
              item: 'Step 4',
              description: 'Get your dream job',
            },
          ],
          columns: {
            // Optionally, customize the column widths
            customWidth: {
              item: '30%',
              description: '70%',
            },
            // Optionally, change column text alignment
            customAlignment: {
              price: 'right',
            },
          },
        },
      ],
      action: {
        instructions:
          "Need help, or have questions or concerns ? Just reply to this email, we'd love to help. or Contact us at: ",
        button: {
          color: '#54b862',
          text: 'Email Support',
          link: 'mailto:gautamraj255225@gmail.com',
        },
      },
    },
  };

  let emailBody = mailgenerator.generate(email);

  mailConfig(req, res, userEmail, 'Signup Successful', emailBody);
};

/** POST: http://localhost:8080/api/mail/sendOtp 
 * @param: {
  "username" : "example123",
  "userEmail" : "admin123",
  "text" : "",
  "subject" : "",
}
*/
const sendOtp = async (req, res) => {
  const { username, userEmail, OTP } = req.body;

  let email = {
    body: {
      name: username,
      greeting: 'Hey',
      intro:
        'You have received this email because a password reset request for your account was received.',
      action: [
        {
          instructions:
            'OTP is valid for 10 minutes. Use this OTP to recover your account:',
          button: {
            color: '#54b862',
            text: OTP,
            link: 'https://resumegenie.vercel.app/recovery',
          },
        },
        {
          instructions: [
            'If you did not request a password reset, no further action is required on your part. Just Ignore this email and your account will be safe.',
            'If you have any questions or concerns, please contact us at:',
          ],
          button: {
            color: '#54b862',
            text: 'Email Support',
            link: 'mailto:gautamraj255225@gmail.com',
          },
        },
      ],
    },
  };

  let emailBody = mailgenerator.generate(email);

  mailConfig(req, res, userEmail, 'Resume Genie: Recovery OTP', emailBody);
};

export { registerMail, sendOtp };
