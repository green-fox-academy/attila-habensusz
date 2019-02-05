import {Aircraft} from './aircraft-carrier';

class Carrier  {
    public birds: Aircraft[];
    ammoStore;
    health;

    constructor(ammo, hp = 100) {
        this.birds = [];
        this.ammoStore = ammo;
        this.health = hp;
    }

    add(birds: Aircraft){
        this.birds.push(birds);
    }

    fill(n) {
        if(this.ammoStore >= 10) {
            this.birds.forEach(function(){
                this.ammo -= n;
            })
        } else if (this.ammoStore < 1) {
            this.birds.forEach(function(){
                if(this.isPriority) {
                    this.ammo -= n;
                }
            })
        } else {
            console.log("There is no ammo!");
        }
        return n;   
    }

    fight(anotCarrier) {
        this.birds.forEach(function(){
            this.damage - this.health;
            this.ammo = 0;
        }) 
    }

    getStatus(){
        
    }
}