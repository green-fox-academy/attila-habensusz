document.addEventListener('DOMContentLoaded', () => {
  let button = document.querySelector('button');
  button.addEventListener('click', () => {
  setTimeout(()=>delayMessage('2 seconds have ellapsed'), 2000);
  })
})

function delayMessage(input){
  let body = document.querySelector('body');
  let response = document.createElement('div');
  response.innerText = input;
  body.appendChild(response);
  response.style.margin = "3rem";
}