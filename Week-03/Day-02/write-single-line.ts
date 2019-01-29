'use strict'
export{};

let fs = require('fs');


function writeTo(fileName: string, newContent: string) {
  try {
    let fileContent = fs.readFileSync('my-file.txt', 'utf-8');
    if (fileContent) {
    fs.readFileSync(fileName);
    fs.writeFileSync(fileName, newContent);
    } 
    
  } catch {
    console.log("Cant write into: " + fileName);
  }
}

writeTo('my-files.txt', 'Attila');












/*
function writeTo(fileName: string, newContent: string) {
  try {
    if (fileName === "my-file.txt") {
    fs.readFileSync(fileName);
    fs.writeFileSync(fileName, newContent);
    } 
    
  } catch (error) {
    console.log(error.message);
  }
}

writeTo('my-files.txt', 'Atti');*/