'use strict'
export{};

let fs = require('fs');

function writeM (path: string, word: string, number: number) {
    try {
        let str: string= "";
        for (let i: 0; i < number; i++) {
            str += [i];
        }
        fs.readFileSync(path);
        fs.writeFileSync(path, word);
         
            throw new Error ("Unable to write file")
        
        
      } catch (error) {
        console.log(error.message);
      }
    }