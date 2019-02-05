'use strict';

class Pirate {
    name: string
    gold: number
    hp: number
    captain?: boolean
    hasWoodenLeg?: boolean

    constructor(pirateName, goldAmount, health = 10, cpt, wooden) {
        this.name = pirateName;
        this.gold = goldAmount;
        this.hp = health;
        this.captain = cpt;
        this.hasWoodenLeg = wooden;
    }

    work() {
        if (this.captain) {
            this.gold += 10;
            this.hp -= 5;
        } else {
            this.gold += 1;
            this.hp -= 1;
        }
    }
    party() {
        if (this.captain) {
            this.hp += 10;
        } else {
            this.hp += 1;
        }
    }

    woodenLeg() {
        if (this.hasWoodenLeg) {
            console.log("'Hello, I'm Jack. I have a wooden leg and 20 golds.")
        } else {
            console.log("Hello, I'm Jack. I still have my real legs and 20 golds.")
        }
    }
}

/*
const pirate1 = new Pirate("John", 50, 60, true, false);
const notCaptain = new Pirate("Simple man", 20, 30, false, false);
const woody = new Pirate("Pinocchio", 70, 40, false, true);
pirate1.work();
notCaptain.party();
woody.woodenLeg();

console.log(woody);*/

class Ship {
    pirates: Pirate[];
    captain;
    hasWoodenLeg;

    constructor() {
        this.pirates = [];
    }

    fillShip(Pirate) {
        this.pirates.push(new Pirate);
    }

    getPoorPirates () {
        this.pirates.map(function(){
            if (this.Pirate.hasWoodenLeg === true && this.Pirate.gold > 15) {
                return this.pirates;
            }
        })
    }

    getGolds() {
        let sum = 0;
        for (let i = 0; i < this.pirates.length; i++) {
            sum = sum + this.pirates[i].gold;
        }
        return sum
    }
    lastDayOnTheShip(pirate: Pirate) {
        pirate.party();
        console.log("Let's party!")
    }

    prepareForBattle(pirate: Pirate) {
        for (let i = 0; i < 5; i++) {
            pirate.work();
        }
        this.lastDayOnTheShip(pirate)
        return pirate;
    }
}


const fregatte = new Ship();
const pirate1 = new Pirate ("John", 8, 5, true, true);
fregatte.fillShip(pirate1);