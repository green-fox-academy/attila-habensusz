'use strict'

const fs = require('fs');
const content = fs.readFileSync("countchar.txt", "utf-8");

function mostFrequent(fileName: any) {

  let result: string[] = fileName.split("");

  let max: number = 1;
  let count: number = 0;
  let item: string;

  for (let i: number = 0; i < result.length; i++) {
    for (let j: number = i; j < result.length; j++) {
      if (result[i] === result[j]) {
        count++;
      }

      if (max < count) {
        max = count;
        item = result[i];
      }
    }

    count = 0;
  }

  return item;
}

console.log(mostFrequent(content));



