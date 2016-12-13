// Update with your config settings.
const dotenv = require('dotenv');
dotenv.config();

console.log(process.env.DATABASE_URL);

module.exports = {
  development: {
    client: 'pg',
    connection: process.env.DEVELOPMENT_DATABASE_URL
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL + '?ssl=true'
  }
};
