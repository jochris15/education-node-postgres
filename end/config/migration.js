const pool = require('./setup')

const dropTable = `DROP TABLE IF EXISTS "Candidates", "Parties"`

const partiesTable = `
CREATE TABLE IF NOT EXISTS "Parties"(
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR,
    "leader" VARCHAR
);
`

const candidatesTable = `
CREATE TABLE IF NOT EXISTS "Candidates"(
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR,
    "money" INTEGER,
    "vision" VARCHAR,
    "PartyId" INTEGER
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
        console.log(error);
    }
}

migration()