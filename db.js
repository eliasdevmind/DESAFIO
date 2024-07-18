// db.js
const { Pool } = require('pg');

const connectionString = '';

const pool = new Pool({
  connectionString: connectionString,
  ssl: {
    rejectUnauthorized: false,
  }
});

module.exports = pool;
