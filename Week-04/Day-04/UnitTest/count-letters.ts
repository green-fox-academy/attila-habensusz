'use strict'

export function countLetters(str: string) {
  let chars: string[] = str.split('');
  let listAll:string = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let filteredChars: string[] = chars.filter(function(char: string):boolean{
      return listAll.indexOf(char) > -1;
  });
  let numberOfStr: object = {};

  filteredChars.forEach(function(char: string): void {
      if (typeof numberOfStr[char] === 'undefined') {
          numberOfStr[char] = 0;
      }
      numberOfStr[char]++;
  });

    return numberOfStr;
  };

console.log(countLetters("apppple"));