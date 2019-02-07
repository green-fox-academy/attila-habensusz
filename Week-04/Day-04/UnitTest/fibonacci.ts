'use strict';

export function fibonacci(num){
    let a = 1; 
    let b = 0; 
    let temp;
  
    //calculate the next number by adding the current number to the old number
    while (num >= 0){
      temp = a; //1
      a = a + b; //1 + 0
      b = temp; // 1
      num--;
    }
  
    return b;
  }

  console.log(fibonacci(5));