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
        return this.damage * this.ammo;
        this.ammo = 0;   
    }
}