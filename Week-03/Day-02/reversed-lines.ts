'use strict';
export { };

const fs = require('fs');

function reverseLine(fileName: string) {
    let sourceText = fs.readFileSync(fileName, 'utf-8').split('\r');
    let arr: string[][] = [];
    let output: string = '';
    sourceText.forEach(function(value){
        arr.push(value.split(''));
    })
    for (let i = 0; i < arr.length; i++) {
        for (let k = (arr[i].length - 1); k >= 0; k--) {
            output += arr[i][k];
        }
    }
    console.log(output);
}

console.log(reverseLine("reversed-line.txt"));