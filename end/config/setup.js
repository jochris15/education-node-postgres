const { Pool } = require('pg')

const pool = new Pool({
    user: 'postgres',
    password: 'postgres',
    host: 'localhost',
    port: 5432,
    database: 'Pemilu2025',
    idleTimeoutMillis: 500
})

module.exports = pool