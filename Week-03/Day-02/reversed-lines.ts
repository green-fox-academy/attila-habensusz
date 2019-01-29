'use strict';
export { };

const fs = require('fs');

let sourceText = fs.readFileSync('reversed-line.txt', 'utf-8');

function reverseLine(text: string) {
    let str: string = "";
    for (let i = text.length - 1; i>=0; i--) {
        str += text[i];
    }
    text.split(' ').reverse().join(' ');
    return str;
}

console.log(reverseLine(sourceText));