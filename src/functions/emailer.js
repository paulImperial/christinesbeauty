const nodemailer = require('nodemailer');

exports.handler = function (event, context, callback) {
  const body = JSON.parse(event.body);

  const message = `You have received an email from ${body.name}. \n
  The email address is ${body.email} and the referer is ${body.advert}. \n
  The message is ${body.message}.`;

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
    to: process.env.MAILADDRESS,
    subject: `You have received an email from ${body.name}`,
    text: message,
  };

  transport.sendMail(mailOptions, function (error, info) {
    if (error) {
      return {
        statusCode: 500,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Headers': 'Content-Type',
          'Access-Control-Allow-Methods': 'GET, POST',
        },
        body: JSON.stringify({
          status: error,
        }),
      };
    } else {
      return {
        statusCode: 200,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Headers': 'Content-Type',
          'Access-Control-Allow-Methods': 'GET, POST',
        },
        body: JSON.stringify({
          status: 'all good',
        }),
      };
    }
  });
};
