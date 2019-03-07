"use strict";

let data = "";
let request = new XMLHttpRequest();
request.open("GET", "/booklist");

console.log(request.responseText);

request.onload = () => {
  data = JSON.parse(request.responseText);
  console.log(data);
  
  };

request.send();

for (let i = 0; i < data.length; i++ ) {
  let mainContent = document.getElementsByClassName("book_list")[0];
  let element = document.createElement("li")
  element.innerText = data[i].book_name;
  mainContent.appendChild(element);
}