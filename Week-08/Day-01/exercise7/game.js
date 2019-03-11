let candies = document.querySelector('.candies');
let productionRate = document.querySelector('.speed');
let buyLollypop = document.querySelector('.buy-lollypops');
let lollypopDisplay = document.querySelector('.lollypops');
let createCandy = document.querySelector('.create-candies');
let makeCandyRain = document.querySelector('.candy-machine');
let resetBtn = document.querySelector('.reset');


let countCandy = 0;
let speed = 0;
let lollyCount = 0;

createCandy.addEventListener('click', () => {
  countCandy++;
  candies.textContent = countCandy;
});

buyLollypop.addEventListener('click', () => {
  lollyCount++;
  lollypopDisplay.textContent += '🍬';
  countCandy -= 10;
  candies.textContent = countCandy;
  productionRate.textContent = speed;
})

resetBtn.addEventListener('click', () => {
  candies.textContent = 0;
  lollypopDisplay.textContent = '🍭🍭🍭';
})

let generateCandy = setInterval(() => {
  speed = Math.round(lollyCount / 3);
  countCandy += speed;
  candies.textContent = countCandy;
}, 1000);

makeCandyRain.addEventListener('click', () => {
  speed = speed * 10;
  lollyCount = speed * 10;
  productionRate.textContent = speed;
})

 