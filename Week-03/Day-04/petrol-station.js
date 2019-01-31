class Station {
    
    constructor() {
        this.gasAmount = 100000;
    }

    refill(inCar) {
        this.gasAmount -= inCar.capacity - inCar.gasAmount;
        inCar.gasAmount = 100;
    }
}

class Car {
    
    constructor() {
        this.gasAmount = 0;
        this.capacity = 100;
    }
}

let gasStation = new Station();
let myCar = new Car();

gasStation.refill(myCar);
console.log(gasStation);
console.log(myCar);