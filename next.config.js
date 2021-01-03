require("dotenv").config();
module.exports = {
  env: {
    // Reference a variable that was defined in the .env file and make it available at Build Time
    TTTEEEEEEEEESSSSSSSSSSSTTTTTTTTT_ENV:
      process.env.TTTEEEEEEEEESSSSSSSSSSSTTTTTTTTT_ENV,
    CLIENT_EMAIL: process.env.CLIENT_EMAIL,
    PRIVATE_KEY_A: process.env.PRIVATE_KEY_A,
  },
};
