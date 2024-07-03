const pool = require('../config/setup')
const fs = require('fs')

//Parties
const data = JSON.parse(fs.readFileSync('./data/parties.json', 'utf-8'))

const parties = data.map(el => {
    const { name, leader } = el
    return `('${name}', '${leader}')`
}).join(',\n')

const partiesSeed = `
    INSERT INTO "Parties" ("name", "leader")
    VALUES ${parties}
`

//Candidates
const data1 = JSON.parse(fs.readFileSync('./data/candidates.json', 'utf-8'))

const candidates = data1.map(el => {
    const { name, money, vision, PartyId } = el
    return `('${name}', '${money}', '${vision}', '${PartyId}')`
}).join(',\n')

const candidatessSeed = `
    INSERT INTO "Candidates" ("name", "money", "vision", "PartyId")
    VALUES ${candidates}
`

async function seeding() {
    try {
        await pool.query(partiesSeed)
        console.log("Insert parties data succeed");
        await pool.query(candidatessSeed)
        console.log("Insert candidates data succeed");
    } catch (error) {
        throw error
    }
}

seeding()