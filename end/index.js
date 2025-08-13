const Controller = require("./controllers");

const command = process.argv[2]

switch (command) {
    case "parties":
        Controller.readParties()
        break;

    case "candidates":
        Controller.readCandidates()
        break;

    default:
        Controller.readParties()
        break;
}
