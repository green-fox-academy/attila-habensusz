let dog = document.getElementById('dog');
let cat = document.getElementById('cat');
let catBtn = document.getElementById('cats-btn');
let signUpBtn = document.getElementById('sign-up-btn');
let yesBtn = document.getElementById('yes');
let goldfish = document.getElementById('goldfish');

dog.addEventListener("click", function(){
  signUpBtn.removeAttribute('disabled');
  signUpBtn.classList.add('nodecoration');
})

cat.addEventListener("click", function(){
  signUpBtn.removeAttribute('disabled');
  signUpBtn.classList.add('nodecoration');
})

yesBtn.addEventListener("click", function(){
  catBtn.removeAttribute('disabled');
  catBtn.classList.add('nodecoration');
})

goldfish.addEventListener("click", function(){
  signUpBtn.removeAttribute('disabled');
  signUpBtn.classList.add('nodecoration');
})

catBtn.addEventListener("click", function(){
  alert("Thank you, you've successfully signed up for cat facts")
})

signUpBtn.addEventListener("click", function(){
  alert("Sigh, we still added you to the cat facts list");
})

