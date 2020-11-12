const nodemailer = require('nodemailer');

exports.handler = function (event, context, callback) {
  if (event.httpMethod === 'OPTIONS') {
    // To enable CORS
    const headers = {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Methods': 'POST',
    };
    return {
      statusCode: 200, // <-- Must be 200 otherwise pre-flight call fails
      headers,
      body: 'This was a preflight call!',
    };
  }

  if (event.httpMethod === 'POST') {
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

    transport.sendMail(
      {
        mailOptions,
      },
      function (error, info) {
        if (error) {
          callback(error);
        } else {
          callback(null, {
            statusCode: 200,
            body: JSON.stringify({
              result: 'success',
              info,
            }),
          });
        }
      }
    );
  }
};

// const headers = {
//   'Access-Control-Allow-Origin': '*',
//   'Access-Control-Allow-Headers': 'Content-Type',
//   'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE',
// };

// if (event.httpMethod !== 'POST') {
//   // To enable CORS
//   return {
//     statusCode: 200, // <-- Important!
//     headers,
//     body: 'This was not a POST request!',
//   };
// }
