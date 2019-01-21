'use strict';
/*
let lineCount: any = 7;

for (let i = 0; i <= Math.floor(lineCount / 2); i++) {
    let str = "";
    for (let j = 1; j <= Math.floor(lineCount / 2)-i; j++) {
        str = str + " ";
    }
    for (let k = 1; k <= (2*i+1); k++) {
        str = str + "*";
    }
    console.log(str);
}

    for (let i= lineCount - 2; i>=1; i--){
        let str2 = " ";
        for(let k = Math.floor(lineCount /2 ); k >= lineCount - i; k--){
            str2 += "";
        }
        for(let j=i; j>=1; j--){
            str2 += "*";
        }
        console.log(str2);
        
    }
*/


    'use strict';

let lineCount: any = 7;
let str: string = "";

for (let i: number = 1; i <= lineCount; i++) {
    if (i <= Math.round(lineCount / 2)) {
    for (let j: number = 0; j < Math.round(lineCount / 2) - i; j++) {
        str = str + " ";
    }
    for (let k: number = 0; k <= 2*(i-1)+1; k++) {
        str = str + "*";
    }
}

else {
    for (let m: number = 0; m <i-Math.round(lineCount / 2); m++) {
        str = str + " ";
    }
    for (let j: number = 0; j < 2*(lineCount-i)+1; j++) {
        str = str + "*";
    }
}
    console.log(str);
    str = "";
    
}
