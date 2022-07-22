// const nodeMailer = require("nodemailer");

// const sendEmail = async (options) => {
//   const transporter = nodeMailer.createTransport({
//     host: 'smtp.gmail.com',
//     port: 465,

//     service: process.env.SMPT_SERVICE,
//     auth: {
//       user: process.env.SMPT_MAIL,
//       pass: process.env.SMPT_PASSWORD,
//     },
//   });

//   const mailOptions = {
//     from: process.env.SMPT_MAIL,
//     to: options.email,
//     subject: options.subject,
//     text: options.message,
//   };

//   await transporter.sendMail(mailOptions);
// };

// module.exports = sendEmail;



// const nodeMailer = require("nodemailer");

// const sendEmail = async (options) => {
//   const transporter = nodeMailer.createTransport({
//     host: process.env.SMPT_HOST,
//     port: process.env.SMPT_PORT,
//     service: process.env.SMPT_SERVICE,
//     auth: {
//       user: process.env.SMPT_MAIL,
//       pass: process.env.SMPT_PASSWORD,
//     },
//   });

//   const mailOptions = {
//     from: process.env.SMPT_MAIL,
//     to: options.email,
//     subject: options.subject,
//     text: options.message,
//   };

//   await transporter.sendMail(mailOptions);
// };


var nodemailer = require('nodemailer');
const sendEmail = async (options) => {
var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'kharemani22@gmail.com',
    pass: 'MANISHA@KHARE'
  }
});

var mailOptions = {
  from:'kharemani22@gmail.com',
  to: 'kharemani22@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

await transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }

});
}
module.exports = sendEmail;
