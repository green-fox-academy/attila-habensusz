'use strict';

let request = new XMLHttpRequest();
request.open('GET', '/booknames');
let data = '';

request.onload = () => {
  data = JSON.parse(request.responseText);

  for (let i = 0; i < data.length; i++) {
    let mainContent = document.getElementsByClassName('book_list')[0];
    let element = document.createElement('li');
    element.innerText = data[i].book_name;
    mainContent.appendChild(element);
  }
};

request.send();