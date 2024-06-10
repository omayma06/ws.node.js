// email-sender.js
const nodemailer = require('nodemailer');

// Create a transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'your_email@gmail.com', // Replace with your email
    pass: 'your_password', // Replace with your password
  },
});

// Setup email data
const mailOptions = {
  from: 'your_email@gmail.com',
  to: 'recipient_email@example.com', // Replace with recipient's email
  subject: 'Test Email',
  text: 'This is a test email from Node.js',
};

// Send email
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    return console.log(error);
  }
  console.log('Email sent: ' + info.response);
});
