const env = process.env.NODE_ENV || 'development';

const knexConfig = require('../knexfile')
const config = knexConfig[env];
const knex = require('knex')(config)


module.exports = knex
