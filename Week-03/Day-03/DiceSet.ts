class DiceSet {
  dice: number[];
  readonly numOfDices: number = 6;

  roll(): number[] {
      this.dice = [];
      for(var i = 0; i < this.numOfDices; i++) { 
          this.dice.push(Math.floor(Math.random() * 6 + 1));
      }
      return this.dice;
  }

  reroll(index?: number) {
      if(index == undefined) {
          for(var i = 0; i < this.numOfDices; i++) { 
              this.dice[i] = Math.floor(Math.random() * 6 + 1);
          }
      } else {
          this.dice[index] = Math.floor(Math.random() * 6 + 1);
      }
  }
  
  getCurrent(index?: number) {
      if(index == undefined) {
          for(var i = 0; i < this.numOfDices; i++) { 
              return this.dice[i];
          }
      } else {
          return this.dice[index];
      }        
  }
}

export {DiceSet};

