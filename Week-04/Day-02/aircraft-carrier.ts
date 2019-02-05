class Aircraft {
    type: string;
    ammo: number;
    damage: number;

    constructor(model, maxAmmo = 0, baseDamage) {
        this.type = model;
        this.ammo = maxAmmo;
        this.damage = baseDamage;
    }

    fight(){
        console.log(this.damage * this.ammo);
        this.ammo = 0;   
    }

    refill(n:number) {
    if (n < this.ammo){
            this.ammo -= n;
    } else {
        console.log("You cant have that much ammo");
    }
    console.log(this.ammo);
  }

  getType() {
      console.log(this.type);
  }

  getStatus(){
      console.log(`Type ${this.type}, ammo: ${this.ammo}, base damage: ${this.damage}, all damage: ${this.damage * this.ammo}`)
  }

  isPriority(){
      if(this.type === "F35") {
        console.log(true);
      } else {
          console.log(false);
      }
  }
}

const jet1 = new Aircraft ("F16", 30, 50);
jet1.isPriority();
console.log(jet1);