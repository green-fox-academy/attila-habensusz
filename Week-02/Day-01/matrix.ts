'use strict';

let size: number = 10;
let matrix: any[][] = [];

for (let i = 0; i<size; i++){
    matrix[i] = [];
    for (let j = 0; j<size; j++){
        if (i+j === size-1){
            matrix[i][j] = 1;
        }
        else {matrix[i][j] = 0;}
        
    }
    console.log(matrix[i]);
}