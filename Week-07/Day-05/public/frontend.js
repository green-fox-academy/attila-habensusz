'use strict';

let request = new XMLHttpRequest();
request.open('GET', '/getpost');
let data = '';

request.onload = () => {
  data = JSON.parse(request.responseText);
  console.log(data);

  for (let i = 0; i < data.length; i++) {
    let mainContent = document.getElementsByClassName('post')[0];
    let element = document.createElement('li');
    element.innerText = data[i].title;
    mainContent.appendChild(element);
  }
};

request.send();