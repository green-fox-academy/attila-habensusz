class Animal  {
    hunger;
    thirst;

    constructor(hng = 50, trst = 50) {
        this.hunger = hng;
        this.thirst = trst;
    }

    eat() {
    this.hunger -= 1;
    }
    drink(){
    this.thirst -= 1;
    }

    play() {
    this.thirst -= 1;
    this.hunger -= 1;
  }

}

const an1 = new Animal ();
an1.eat();
an1.drink();
an1.play();
console.log(an1);

export {Animal};
