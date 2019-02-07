'use strict';
// Create a function called "appendA()" that adds "a" to every string in the far list.
// The parameter should be a list.
// The output should be: 'boa', 'anaconda', 'koala', 'panda', 'zebra'

let far: string[] = ['bo', 'anacond', 'koal', 'pand', 'zebr'];

function letterAppend (arr: string[]){
    return arr.map(function(letr) {
    return letr.concat("a");
    })};

console.log(letterAppend(far));

/* far.forEach(function(name){
    console.log(name + "a")
})*/