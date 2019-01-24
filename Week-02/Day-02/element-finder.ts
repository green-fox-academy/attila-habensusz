'use strict';
export{};

// Write a function that checks if the array contains "7"
// if it contains return "Hoorray" otherwise return "Noooooo"

const arr: number[] = [1, 2, 3, 4, 5, 6, 8];
function containsSeven(list: number[] ){
    if (list.indexOf(7) !== -1){
        return "Hooray";
    }
    else {return "Noooo";}
}

console.log(containsSeven(arr));