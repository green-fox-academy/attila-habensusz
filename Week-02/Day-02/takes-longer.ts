'use strict';
// While saving this quote, a disk error has occured. Please fix it.
// Add "always takes longer than" between the words "It" and "you"

let quote: string = 'Hofstadter\'s Law: It you expect, even when you take into account Hofstadter\'s Law.';
let fix = "always takes longer than";
let place: any = quote.indexOf("y") - 1;

let output = [quote.slice(0, place), fix, quote.slice(place)].join(' ')

console.log(output);