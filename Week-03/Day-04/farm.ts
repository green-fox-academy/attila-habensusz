import { Animal } from '../Day-03/animals';

class Farm {
    animals: Animal[]
    size: number
  
    constructor() {
      this.size = 5
      this.animals = []
    }
  
    add(newAnimal: Animal) {
      this.animals.push(newAnimal)
  
    }
  
    breed() {
      console.log(this.size);
      console.log(this.animals.length);
      if (this.size > this.animals.length) {
        let newAnimal = new Animal;
        this.animals.push(newAnimal);
      }
    }
  
    slaughter() {
      let slaughterIndex = 0;
      for (let index: number = 1; index < this.animals.length; index++) {
        if (this.animals[slaughterIndex].hunger > this.animals[index].hunger) {
          slaughterIndex = index;
        }
      }
      this.animals.splice(slaughterIndex, 1);
    }
  }
  
  let farm1 = new Farm;
  let dog = new Animal;
  let cat = new Animal;
  let cow = new Animal;
  let parrot = new Animal;
  farm1.add(dog);
  farm1.add(cat);
  farm1.add(cow);
  farm1.add(parrot);
  farm1.breed();
  farm1.breed();
  dog.eat();
  farm1.slaughter();
  console.log(farm1);