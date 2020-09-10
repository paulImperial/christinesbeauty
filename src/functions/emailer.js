const nodemailer = require('nodemailer');

exports.handler = function (event, context, callback) {
  const transport = nodemailer.createTransport({
    srervice: 'gmail',
    auth: {
      user: process.env.GMAIL_ACCOUNT,
      pass: process.env.GMAIL_PASSWORD,
    },
  });

  const mailOptions = {
    from: 'paul.imperialroad@gmail.com',
    to: 'paul.imperialroad@gmail.com',
    subject: 'Sending Email using Node.js',
    text: 'That was easy!',
  };

  transport.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
};
