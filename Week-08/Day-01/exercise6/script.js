
let body = document.querySelector('body');
  let btn = document.querySelector('button');
  btn.disabled = true;
  let countClicks = 0;
  let seconds = 0;

  setInterval(function (){
    seconds++;
    if(seconds > 5) {
    btn.disabled = false;
    btn.addEventListener('click', () => {
      countClicks++;
      if(countClicks == 3) {
        let response = document.createElement('div');
        response.innerText = `5 seconds elapsed and the button was clicked ${countClicks} times`;
        body.appendChild(response);
        response.style.margin = "5rem";
      }
    })
    }
  }, 1000);

  