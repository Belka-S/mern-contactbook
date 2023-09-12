const nodemailer = require('nodemailer');
require('dotenv').config();

const { META_PASS, HOST_URL } = process.env;

const nodemailerCofig = {
  host: 'smtp.meta.ua',
  port: '465',
  secure: true,
  auth: {
    user: 'it.dev@meta.ua',
    pass: META_PASS,
  },
};

const transporter = nodemailer.createTransport(nodemailerCofig);

const sendEmail = async (to, verificationCode) => {
  const emailOptions = {
    from: '"Support" <it.dev@meta.ua>', // sender address
    to, // list of receivers
    subject: 'Email verification', // Subject line
    text: 'Hello! Click the link below to email verification ✔', // plain text body
    html: `<a href='${HOST_URL}/api/users/verify/${verificationCode}' target='_blank'>✔ Click the link to verify <b>${to}</b></a>`, // html body
  };
  try {
    await transporter.sendMail(emailOptions);
    console.log(`Email sent to ${emailOptions.to}`);
  } catch (error) {
    console.log(error.message);
    return error;
  }
};

module.exports = { sendEmail };
