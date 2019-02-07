'use strict'

interface Flyable {
    land()

    fly()

    takeOff()
}

abstract class Vehicle {
    type: string;
    speed: number;
    price: number;
}

class Helicopter extends Vehicle implements Flyable {

    constructor(type, speed, price){
        super();
    }

    land(){
        console.log("We have landed");
    }

    fly(){
        console.log("We are flying!");
    }

    takeOff(){
        console.log("We took off.");
    }
}

abstract class Animal{
    type: string;
    age: number;
    gender: string;
  }

  class Bird extends Animal implements Flyable{
    
    constructor(type, age, gender){
        super()
    }

    fly(){
        console.log("Repüüüüül")
    }
    
    land(){
      console.log('SJKSJ');
    }

    takeOff(){
    console.log('Well..');
    
    }
  }

  let huey = new Helicopter("Huey", 200, 5000);
  let hawk = new Bird("Hawk", 10, "male");

  huey.takeOff();
  huey.fly();
  huey.land();
  