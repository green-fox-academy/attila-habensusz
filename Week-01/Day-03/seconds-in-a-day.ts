'use strict';
export {};

let currentHours: number = 14;
let currentMinutes: number = 34;
let currentSeconds: number = 42;
let totalHours: number = 24;
let totalMinutes: number = 60;


let remainingHours: any = totalHours - currentHours; 
let remainingMinutes: any = totalMinutes - currentMinutes * remainingHours;

// Write a program that prints the remaining seconds (as an integer) from a
// day if the current time is represented by these variables