const pool = require('../config/setup')

const dropTable = `DROP TABLE IF EXISTS "Candidates", "Parties"`

const partiesTable = `
    CREATE TABLE IF NOT EXISTS "Parties" (
        "id" SERIAL PRIMARY KEY NOT NULL,
        "name" VARCHAR,
        "leader" VARCHAR
    );
`

const candidatesTable = `
    CREATE TABLE IF NOT EXISTS "Candidates" (
        "id" SERIAL PRIMARY KEY NOT NULL,
        "name" VARCHAR,
        "money" INTEGER,
        "vision" VARCHAR,
        "PartyId" INTEGER, 
            FOREIGN KEY ("PartyId") 
            REFERENCES "Parties"("id")
    );
`

async function migration() {
    try {
        await pool.query(dropTable)
        console.log("Drop table succeed");
        await pool.query(partiesTable)
        console.log("Table parties created");
        await pool.query(candidatesTable)
        console.log("Table candidates created");
    } catch (error) {
        throw error
    }
}

migration()