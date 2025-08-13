const pool = require('../config/setup')

const dataParties = require('../data/parties.json')

const parties = dataParties.map((el) => {
    const { name, leader } = el
    return `('${name}', '${leader}')`
}).join(",\n")

const partiesSeed = `
INSERT INTO "Parties" ("name" , "leader")
    VALUES ${parties}
`

const dataCandidates = require('../data/candidates.json')

const candidates = dataCandidates.map((el) => {
    const { name, money, vision, PartyId } = el
    return `('${name}', '${money}', '${vision}', '${PartyId}')`
}).join(",\n")

const candidatesSeed = `
INSERT INTO "Candidates" ("name" , "money", "vision", "PartyId")
    VALUES ${candidates}
`

async function seed() {
    try {
        await pool.query(partiesSeed)
        console.log("Succeed insert data parties");

        await pool.query(candidatesSeed)
        console.log("Succeed insert data candidates");
    } catch (error) {
        console.log(error);
    }
}

seed()
