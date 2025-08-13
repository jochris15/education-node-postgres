const Model = require("../models")
const View = require("../views")

class Controller {
    static async readParties() {
        try {
            const data = await Model.readParties()
            View.read(data)
        } catch (error) {
            View.error(error)
        }
    }

    static async readCandidates() {
        try {
            const data = await Model.readCandidates()
            View.read(data)
        } catch (error) {
            View.error(error)
        }
    }
}

module.exports = Controller