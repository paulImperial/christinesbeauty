// import nodemailer from 'nodemailer';

// exports.handler = function (event, context, callback) {
//   const transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//       user: 'chiefspammer@yourgreatdomain.com',
//       pass: 'SuperSecretPassword', // naturally, replace both with your real credentials or an application-specific password
//     },
//   });

//   const mailOptions = {
//     from: 'barry@baz.com',
//     to: 'paul.imperialroad@gmail.com',
//     subject: 'Test',
//     text: 'This is a test',
//   };

//   transporter.sendMail(mailOptions, function (error, info) {
//     if (error) {
//       console.log(error);
//     } else {
//       console.log('Email sent: ' + info.response);
//     }
//   });
// };
