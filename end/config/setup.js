const { Pool } = require('pg')

const pool = new Pool({
    user: 'postgres',
    password: 'postgres',
    host: 'localhost',
    port: 5432,
    database: 'Pemilu2025',
    idleTimeoutMillis: 500
})

async function testConnection() {
    try {
        console.log(await pool.query('SELECT NOW()'));
    } catch (error) {
        console.log(error);
    }
}

// testConnection()

module.exports = pool