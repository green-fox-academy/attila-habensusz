'use strict';

// An average Green Fox attendee codes 6 hours daily
// The semester is 17 weeks long
//
// Print how many hours is spent with coding in a semester by an attendee,
// if the attendee only codes on workdays.
var codingHours = 17 * 5 * 6;
console.log(codingHours);
//
// Print the percentage of the coding hours in the semester if the average
// work hours weekly is 52
var percentageCoding = codingHours / 52;
console.log(Math.round(percentageCoding));