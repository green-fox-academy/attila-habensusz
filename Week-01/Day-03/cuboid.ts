'use strict';
export {};

// Write a program that stores 3 sides of a cuboid as variables (floats)
// The program should write the surface area and volume of the cuboid like:
//
let l: any = 50;
let w: any = 20;
let h: any = 10;

let area: any = w * l * 2 + 2 * l * h + 2 * w * h;

let volume: any = l * w * h;

console.log(area);

console.log(volume);

// Surface Area: 600
// Volume: 1000