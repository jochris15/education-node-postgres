const command = process.argv[2]
const Controller = require('./controllers/controller')

switch (command) {
    case "help":
        Controller.help()
        break;

    case "readParties":
        Controller.readParties()
        break;

    case "readCandidates":
        Controller.readCandidates()
        break;
    default:
        Controller.help()
        break;
}