'use strict';

const students: any[] = [
  {name: 'Theodor', age: 3, candies: 2},
  {name: 'Paul', age: 9.5, candies: 2},
  {name: 'Mark', age: 12, candies: 5},
  {name: 'Peter', age: 7, candies: 3},
  {name: 'Olaf', age: 12, candies: 7},
  {name: 'George', age: 10, candies: 1}
];

// create a function that takes a list of students and logs: 
// - How many candies are owned by students altogether

// create a function that takes a list of students and logs:
// - The sum of the age of people who have less than 5 candies

function candyLog(list: any []) {
    let candySum: number= 0;
   for (let i:number = 0; i < list.length; i++) {
       candySum+= list[i].candies;
   }
   return candySum;
    
}
console.log(candyLog(students));

function ageSum(list: any[]) {
    let sum: number = 0;
    for (let i:number = 0; i<list.length; i++) {
        if (list[i].candies < 5) {
            sum+= list[i].age;
        }
    }
    return sum;
}
console.log(ageSum(students));



/*for (let key in students) {
    let obj = students[key];
    for (let prop in obj) {
       if(obj.hasOwnProperty(prop)){
         console.log(prop + " = " + obj[prop]);
       }
    }
 }*/