class Party {
    constructor(name, leader) {
        this.name = name
        this.leader = leader
    }
}

class Candidate {
    constructor(name, money, vision, party) {
        this.name = name
        this.money = money
        this.vision = vision
        this.party = party
    }
}

module.exports = { Party, Candidate }