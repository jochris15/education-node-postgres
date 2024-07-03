const View = require('../views/view')
const Model = require('../models/model')

class Controller {
    static help() {
        View.help()
    }

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