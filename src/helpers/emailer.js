import nodemailer from 'nodemailer';

const transport = nodemailer.createTransport({
  host: 'smtp.mailtrap.io',
  port: 2525,
  auth: {
    user: 'fb1426f9564a86',
    pass: '87959e9f04ca19',
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
