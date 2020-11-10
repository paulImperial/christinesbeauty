const nodemailer = require('nodemailer');

exports.handler = function (event, context, callback) {
  console.log({ event }, { context });
  const body = JSON.parse(event.body);

  const message = `You have received an email from ${body.name}.The email address is ${body.email} and the referer is ${body.advert}. The message is ${body.message}.`;

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
    subject: `You have received an email from ${body.name}`,
    text: message,
  };

  transport.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      return {
        statusCode: 200,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Headers': 'Content-Type',
        },
        body: JSON.stringify({
          status: info,
        }),
      };
    }
  });
};
