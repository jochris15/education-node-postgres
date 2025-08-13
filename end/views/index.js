class View {
    static read(data) {
        console.table(data)
    }

    static error(error) {
        console.log(error);
    }
}

module.exports = View