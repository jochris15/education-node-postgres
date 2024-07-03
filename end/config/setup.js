const { Pool } = require('pg')

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'Pemilu2024',
    password: 'postgres',
    port: 5432,
    idleTimeoutMillis: 500
})

module.exports = pool