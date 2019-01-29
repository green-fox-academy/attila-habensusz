'use strict';
export { };

const fs = require('fs');

let originalText = fs.readFileSync('duplicated-chars.txt', 'utf-8');

function removeDoubles(text: string) {
    let out: string = '';
    for (let i: number = 0; i < text.length; i++) {
        if (text.charAt(i) !== text.charAt(i + 1)) {
            out += text.charAt(i);
        }
    }
    return out;
}

console.log(removeDoubles(originalText));