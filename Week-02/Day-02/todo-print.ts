'use strict';
// Add "My todo:" to the beginning of the todoText
// Add " - Download games" to the end of the todoText
// Add " - Diablo" to the end of the todoText but with indention

// Expected outpt:

// My todo:
//  - Buy milk
//  - Download games
//      - Diablo

let listName: string = "My todo:\n";
let todoText: string = ' - Buy milk\n';
let gameDwn: string = " - Download games\n\t";
let gameName: string = " - Diablo";

let output = listName.concat(todoText, gameDwn, gameName)

console.log(output);