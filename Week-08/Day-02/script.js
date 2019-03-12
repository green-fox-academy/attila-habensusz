let firstButton = document.querySelector('.one');
let secondButton = document.querySelector('.two');
let thirdButton = document.querySelector('.three');


firstButton.addEventListener('click', function (){
  secondButton.classList.toggle('permahover');
  thirdButton.classList.toggle('permahover');
  
})