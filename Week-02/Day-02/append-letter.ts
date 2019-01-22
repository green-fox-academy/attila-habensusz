'use strict';
// Create a function called "appendA()" that adds "a" to every string in the far list.
// The parameter should be a list.

let far: string[] = ['bo', 'anacond', 'koal', 'pand', 'zebr'];

console.log(far.map(function(name) {
    return name + "a";
}));



// The output should be: 'boa', 'anaconda', 'koala', 'panda', 'zebra'

