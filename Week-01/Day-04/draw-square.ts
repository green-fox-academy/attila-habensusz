'use strict';

let lineCount: number = 6;
let str: string = "";

for (let i = 0; i < lineCount; i++) {
    // Top and bottom parts
    if (i === 0 || i === lineCount-1) {
        for (let j = 0; j < lineCount; j++) {
            str += "%";
        }
    }

    //Side parts
    else {
        for (let j = 0; j < lineCount; j++) {
            if (j === 0 || j === lineCount-1) {
                str += "%";
            }
            else {
                str += " ";
            }
        }
    }
    console.log(str);
    str = "";
}



