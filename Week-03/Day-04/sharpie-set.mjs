import { Sharpie } from './sharpie';

class SharpieSet {
    
    constructor() {
        this.set = [];
    }

    add (aSharpie) {
        this.set.push(aSharpie);
    }

    countUsable() {
        let usable = 0;
        this.set.forEach(function(val){
            if (val.inkAmount > 0) {
                usable += 1;
            }
        })
        console.log(usable);
    }

    remove() {
        for (let i = 0; i < this.set.length; i++) {
            if (this.set[i].inkAmount <= 0) {
                this.set.splice (i, 1);
                i = i -1;
            }
        }
        console.log(this.set);
    }
}

let sharpie1 = new Sharpie('blue', 2);
let sharpie2 = new Sharpie('pink', 1);
let sharpie3 = new Sharpie('red', 6);
let sharpie4 = new Sharpie('red', 6);
sharpie2.inkAmount = 0;
sharpie3.inkAmount = 0;

let mySet = new SharpieSet();

mySet.add(sharpie1);
mySet.add(sharpie2);
mySet.add(sharpie1);
mySet.add(sharpie2);
mySet.add(sharpie4);

mySet.countUsable();
mySet.remove();
