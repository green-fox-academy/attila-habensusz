"use strict";

let data = "";
let request = new XMLHttpRequest();
request.open("GET", "/booknames");

console.log(request.responseText);

request.onload = () => {
  data = JSON.parse(request.responseText);
  console.log(data);
    for (let i = 0; i < data.length; i++ ) {
      let content = document.getElementsByClassName("list")[0];
      let element = document.createElement("li")
      element.innerText = data[i].book_name;
      content.appendChild(element);
    }
  };

request.send();