'use strict';
// Create a function that can reverse a string, which is passed as the parameter
// Use it on this reversed string to check it!

let reversed: string = '.eslaf eb t\'ndluow ecnetnes siht ,dehctiws erew eslaf dna eurt fo sgninaem eht fI';

function reverseString(str: string) {
    let newString = "";
     /* The starting point of the loop will be (str.length - 1) which corresponds to the 
       last character of the string.
       As long as i is greater than or equals 0, the loop will go on
       We decrement i after each iteration */
    for (let i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}

console.log(reverseString(reversed));
export = reversed;