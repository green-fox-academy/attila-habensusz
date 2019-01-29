'use strict'
export{};

let fs = require('fs');

function copy (from: string, to: string) {
    let fileContent = fs.readFileSync(from, 'utf-8');
    fs.writeFileSync(to, fileContent);
}

try {
    copy('a.txt', 'b.txt');
    console.log (true);
} catch {
    console.log(false);
}