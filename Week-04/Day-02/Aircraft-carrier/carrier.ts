import { Aircraft, F16, F35 } from './aircrafts';

class Carrier {
    birds: Aircraft[];
    ammoStore;
    health;
    damage: number;

    constructor(ammo, hp = 100) {
        this.birds = [];
        this.ammoStore = ammo;
        this.health = hp;
    }

    add(birds: Aircraft) {
        this.birds.push(birds);
    }

    fill() {
        try {
            if (this.ammoStore === 0) {
                throw new Error("no ammo");
            }
            else {
                this.damage = 0;
                this.birds.forEach(function(air) {
                    if (air.isPriority()) {
                        this.ammoStore = air.refill(this.ammoStore);
                        this.damage += air.ammo * air.baseDamage;
                    }
                });
                this.birds.forEach(function(air) {
                    if (!air.isPriority()) {
                        this.ammoStore = air.refill(this.ammoStore);
                        this.damage += air.ammo * air.baseDamage
                    }
                });
            }
        }
        catch (e) {
            console.log(e);
        }
    }

    fight(anotCarrier) {
        anotCarrier.health -= this.damage;
    }

    getStatus() {

    }
}

let jet1 = new F16();
let jet2 = new F35();
let UssJames = new Carrier(100, 50);

console.log(jet1);