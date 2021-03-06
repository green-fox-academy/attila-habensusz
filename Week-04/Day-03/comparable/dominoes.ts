import {Domino} from "./domino";

class DominoSet{
  dominoes: any[];

  constructor(inirialize: Domino[] = []){
    this.dominoes = inirialize;
  }
}

function initializeDominoes(): Domino[] {
    let dominoes = [];
    dominoes.push(new Domino(5, 2));
    dominoes.push(new Domino(4, 6));
    dominoes.push(new Domino(1, 5));
    dominoes.push(new Domino(6, 7));
    dominoes.push(new Domino(2 ,4));
    dominoes.push(new Domino(7, 1));
    return dominoes;
}

function print(dominoes: Domino[]) {
    this.dominoes.forEach(function (value) {
        console.log(value);
    });
}

let dominoes = new DominoSet(initializeDominoes());

let smallest: number = 10;
let sIndex: number = 0;
let dominoSnake: any [] = [];
//choose the smallest number
this.Domino.dominoes.forEach(function(domino, index) {
  if(domino.getNumber(0) < smallest) {
    smallest = domino.getNumber(0);
    sIndex = index;
    return sIndex;
  }
})
dominoSnake.push(dominoes[sIndex].values);

//organise them in order
for(let i: number = 0; i < this.dominoes.length - 1; i++){
  this.domino.dominoes.forEach(domino => {
    if(dominoSnake[i][1] === domino.getNumber(0)){
      dominoSnake.push(domino.values);
    }
  })
}
// console.log(dominoSnake);

print(dominoSnake);