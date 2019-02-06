'use strict';

abstract class Animal {
    name: string;
    age: number;
    gender: string;
    aggressiveness: number;
    isHungry: boolean;
    breedType: string;

    constructor(nameOfAnimal: string) {
        this.name = nameOfAnimal;
    }

    getName(): string {
        return this.name;
    }

    breed(){
        return this.breedType;
    }

    aggressiveLevel(){
        return this.aggressiveness;
    }

    isItHungry(){
        return this.isHungry;
    }
}

class Reptile extends Animal {
    breedType: string = "Lays eggs"
}

class Mammal extends Animal {
    breedType: string = "Pushing kids from themselves"
}

class Bird extends Animal {
    breedType: string = "Also lays eggs"
}

let reptile = new Reptile("Snek");
let mammal = new Mammal("Seal");
let bird = new Bird("Eagle");

console.log("How do you breed?");
console.log("A " + reptile.getName() + " is breeding by " + reptile.breed());
console.log("A " + mammal.getName() + " is breeding by " + mammal.breed());
console.log("A " + bird.getName() + " is breeding by " + bird.breed());