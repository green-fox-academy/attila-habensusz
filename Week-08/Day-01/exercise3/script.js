let btn = document.querySelector('button');
let pTag = document.querySelector('p');

///Solution #1:
let isClicked = false;

function clickOnce() {
  if(isClicked === false) {
    pTag.innerText = +new Date;
  }
  isClicked = true;
}

btn.addEventListener('click', function(){
 clickOnce();
})

 //Solution#2
/* btn.addEventListener('click', function(){
 pTag.innerText = +new Date;
 btn.disabled = true;
})
 */
