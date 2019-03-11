/* 'use strict';

function counter(list) {
  let counter = 0;
  Array.from(list).forEach(element => {

    return counter++;
  });
  let p = document.getElementsByClassName('result')[0];
  p.innerText = counter;
}

let li = document.querySelector('li');
let button = document.querySelector('button');

button.addEventListener('click', function(){
  counter(li);
});
 */

function itemCounter (list) {
  let counter = 0;
  Array.from(list).forEach(element => {
  return counter++;
  });
 let result = document.getElementsByClassName("result")[0];
 result.innerText = counter;
}

let counterbutton = document.querySelector("button");
let li = document.getElementsByTagName("li");

counterbutton.addEventListener('click', function () {
  itemCounter(li);
});

/* function withoutForEach() {
let x = document.querySelector('ul').childElementCount;
document.getElementsByClassName('result').innerHTML = x;
}
 */

