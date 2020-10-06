const nodemailer = require('nodemailer');

exports.handler = function (values, event, context, callback) {
  const body = JSON.parse(event.body);

  const message = `You have received an email from ${body.name}. The email address is ${body.email} and the referer is ${body.advert}. The message is ${body.text}.`;

  const transport = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true, // use SSL
    auth: {
      user: process.env.GMAIL_ACCOUNT,
      pass: process.env.GMAIL_PASSWORD,
    },
  });

  const mailOptions = {
    to: 'paul.imperialroad@gmail.com',
    subject: `You have received an email from ${values.name}`,
    text: message,
  };

  transport.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
};
