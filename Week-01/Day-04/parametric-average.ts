'use strict';
export{}

let sum: number = null;
let numb: number = 5; 
let addition: number = null;
let average: number = null;

if (numb === undefined || numb == 0) {
    console.log("Please write a number into the numb variable");
} else {
    for (let i: number = 0; i < numb; i++) {
        addition += (i + 5);
        sum += addition;
    }
    average = sum / numb;
    console.log(average);
    console.log(sum);
}

