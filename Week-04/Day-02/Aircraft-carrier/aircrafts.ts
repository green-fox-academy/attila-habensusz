'use strict';


class Aircraft{
  type: string;
  maxAmmo: number;
  baseDamage: number;
  ammo: number;
  maxDamage: number;
  priority: boolean;


  constructor(){
    this.type = undefined;
    this.maxAmmo = 0;
    this.baseDamage = 0;
    this.ammo = 0;
    this.maxDamage = 0;
    this.priority = false;
  }

  fight(){
    let d = this.baseDamage * this.ammo;
    this.ammo = 0;
    return this.maxDamage = d;
  }

    refill(air: number){
      air -= (this.maxAmmo - this.ammo);
      this.ammo = this.maxAmmo;
      return air;
    }

    getType(){
      return this.type;
    }

    getStatus(){
      return `Type ${this.type}, Ammo: ${this.ammo}, Base Demage: ${this.baseDamage}, All Demage: ${this.maxDamage} `
    }


    isPriority(){
      return this.priority;
    }

}

class F16 extends Aircraft{
  
  constructor(){
    super();
    this.type = 'F16';
    this.maxAmmo = 8;
    this.baseDamage = 30;
    this.priority = false;
  }

}

class F35 extends Aircraft{
  
  constructor(){
    super();
    this.type = 'F35';
    this.maxAmmo = 12;
    this.baseDamage = 50;
    this.priority = true;
  }

}




export {Aircraft, F16, F35};