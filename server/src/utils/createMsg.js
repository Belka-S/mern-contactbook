const path = require('path');

const { convert } = require('html-to-text');

const renderEjsTemplate = require('./renderEjsTemplate');
const { APP_NAME, NODEMAILER_USER } = process.env;

const createMsg = (ejsTmp, data) => {
  console.log('data: ', data);
  console.log(data.email);

  const file = path.join(__dirname, '..', 'views', `${ejsTmp}`);
  const html = renderEjsTemplate(file, { APP_NAME, ...data });

  return {
    from: `"Support" <${NODEMAILER_USER}>`,
    to: data.email,
    subject: `${APP_NAME} Confirmation`,
    text: convert(html),
    html,
  };
};

module.exports = createMsg;
