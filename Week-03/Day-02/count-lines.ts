'use strict'
export{};

let fs = require('fs');

//function countThat(file: string) {
    /*
    let fileContent = fs.readFileSync(file);
    let lineNumber = 0;
    //if (fileContent) {
    for (let i = 0; i = fileContent.length; i++) {
        if (file[i] === '\n') {
        lineNumber++;
        }
    }   //console.log(fileContent);
    return lineNumber;
    
}
countThat('my-file.txt');*/

function countThat(file: string) {
    try {
    
    let fileContent = fs.readFileSync(file);
    if (fileContent) {
        let emptyArr= [];
        for (let i = 0; i <= fileContent.length; i++) {
            emptyArr.push[i];
        }
    console.log(fileContent);
} else {
    throw new Error("Unable to read" + file);
    }
} catch (error) {
    console.log(error.message);
}
}

countThat('my-file.txt');

