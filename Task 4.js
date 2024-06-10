// password-generator.js
const generatePassword = require('generate-password');

function generateRandomPassword() {
  const password = generatePassword.generate({
    length: 12,
    numbers: true,
    symbols: true,
    uppercase: true,
    lowercase: true,
  });

  console.log(password);
}

// Generate and log a random password
generateRandomPassword();
