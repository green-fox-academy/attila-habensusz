class Sharpie  {
    color;
    width;
    inkAmount;

    constructor(cl, wdt, ink = 100) {
        this.color = cl;
        this.width = wdt;
        this.inkAmount = ink;
    }

   use () {
       this.inkAmount -= 1;
   }

}

const shar = new Sharpie ("blue", 30);
shar.use();
console.log(shar);

