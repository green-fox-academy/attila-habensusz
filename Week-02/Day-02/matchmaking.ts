'use strict';
// Write a function that joins two array by matching one girl with one boy in a new array
// If someone has no pair, he/she should be the element of the array too
// Exepected output: ["Eve", "Joe", "Ashley", "Fred"...]

let girls: string[] = ['Eve', 'Ashley', 'Claire', 'Kat', 'Jane'];
let boys: string[] = ['Joe', 'Fred', 'Tom', 'Todd', 'Neef', 'Jeff'];

function makingMatches (arr1:string[], arr2:string[]){
    let pairs: string[] = [];
    let listLength: number = 0;
    if (girls.length<boys.length){
         listLength = boys.length;
    }
    else {listLength = girls.length;}

    for(let i: number = 0; i<listLength; i++){
        if(typeof girls[i] == "string"){
            pairs.push(girls[i]);
        }
        if(typeof boys[i] == "string"){
            pairs.push(boys[i]);
        }
    }
    return pairs;
}

console.log(makingMatches(girls, boys));

export = makingMatches;