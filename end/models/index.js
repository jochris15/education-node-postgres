const pool = require("../config/setup")
const { Party, Candidate } = require("./class")

class Model {
    static async readParties() {
        try {
            const query = `
            SELECT * FROM "Parties"
            `

            const { rows } = await pool.query(query)
            const parties = rows.map((el) => {
                const { name, leader } = el
                return new Party(name, leader)
            })

            return parties
        } catch (error) {
            throw error
        }
    }

    static async readCandidates() {
        try {
            const query = `
            SELECT c.*, p."name" AS "party" FROM "Candidates" c
                JOIN "Parties" p ON c."PartyId" = p."id"
                ORDER BY c."name" ASC
            `

            const { rows } = await pool.query(query)

            const candidates = rows.map((el) => {
                const { name, money, vision, party } = el
                return new Candidate(name, money, vision, party)
            })

            return candidates
        } catch (error) {
            throw error
        }
    }
}

module.exports = Model