'use strict';

// Create a method that decrypts encoded-lines.txt

let fs = require('fs');

function encodedLines(fileName: string) {
  let content: string[] = fs.readFileSync(fileName, 'utf-8').split('\r');
  let arr: string[][] = [];
  let sentences: string = '';
  content.forEach(function(val){
      arr.push(val.split(''))
  })

  for (let i = 0; i < arr.length; i++) {
      for (let k = 0; k < arr[i].length; k++) {
          if (arr[i][k] === '\n' || arr[i][k] === ' ') {
              sentences += arr[i][k];
          } else {
              sentences += String.fromCharCode(arr[i][k].charCodeAt(0) - 1);
          }
      }
  }
  console.log(sentences);
}

encodedLines('EncodedLines.txt');
