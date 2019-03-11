let main = document.querySelector('.wrapper');

function getRandomColor() {
  let letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

const genRandom = () => {
  let randomNumber = Math.floor(Math.random() * 11) + 10;
  return randomNumber;
}

for (let i = 0; i < genRandom(); i++) {
  main.insertAdjacentHTML('beforeend', `<div class="randombox" style="background-color:${getRandomColor()}" ></div>`);
}

const expandScroll = (e) => {
  for (let i = 0; i < genRandom(); i++) {
    main.insertAdjacentHTML(e, `<div class="randombox" style="background-color:${getRandomColor()}" ></div>`);
  }
}

main.addEventListener('scroll', (e) => {
 
  if (e.target.scrollTop + e.target.clientHeight === e.target.scrollHeight) {
       expandScroll('beforeend');       
  }

 if (e.target.scrollTop <= 0) {
    expandScroll('afterbegin');
 } 
})