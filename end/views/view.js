class View {
    static help() {
        console.log(`
        ======= COMMAND =======
        node help
        node readParties
        node readCandidates
        `);
    }

    static read(data) {
        console.table(data)
    }

    static error(err) {
        console.log(err);
    }
}

module.exports = View