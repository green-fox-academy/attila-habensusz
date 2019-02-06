'use strict';

abstract class Instrument {
    protected name: string;

    constructor(){

    }

    sound(instrument: string, stringNumber: number, sound: string){
        console.log(`${instrument}, a ${stringNumber}-stringed instrument that goes with ${sound}`);
    }
}

abstract class StringedInstrument extends Instrument {
    numberOfString: number;
    voice: string;

    constructor(strings: number, voic: string){
        super();
        this.numberOfString = strings;
        this.voice = voic;
    }

    introduce(){
        console.log(this.numberOfString);
    }

    play(){
        this.sound(this.name, this.numberOfString, this.voice);
    }
}

class ElectricGuitar extends StringedInstrument {
    protected name: string = 'Electric guitar';

    constructor(strings: number = 6, voic: string = 'Yeeeah') {
        super(strings, voic)
    }
}

class Violin extends StringedInstrument {
    protected name: string = 'Violin';

    constructor(strings: number = 4, voic: string = 'Veee') {
        super(strings, voic)
    }
}

class BassGuitar extends StringedInstrument {
    protected name: string = 'Bass Guitar';

    constructor(strings: number = 4, voic: string = 'Vmmm') {
        super(strings, voic)
    }
}

export{Instrument, StringedInstrument, ElectricGuitar, Violin, BassGuitar}