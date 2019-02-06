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