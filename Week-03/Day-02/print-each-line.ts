'use strict'
export{};

let fs = require('fs');

try {
let fileContent = fs.readFileSync('my-file.txt', 'utf-8');
if (fileContent) {
    console.log(fileContent);
} else {
    throw new Error ("Unable to read my-file.txt");
    }
} catch (error) {
    console.log(error.message);
} /*finally {
    console.log("i am still here!");
}*/

/* With function

function readThat(file: string, utf: string) {
    try {
    let fileContent = fs.readFileSync(file, 'utf-8');
    if (fileContent) {
    console.log(fileContent);
} else {
    throw new Error("Unable to read" + file);
    }
} catch (error) {
    console.log(error.message);
}
}

readThat('my-file.txt', 'utf-8');
*/