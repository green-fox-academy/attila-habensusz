let upVoteBtn = document.querySelector(".fa-arrow-up");
let downVoteBtn = document.querySelector(".fa-arrow-down");

let isClicked = false;

function clickUpVoteOnce() {
  if(isClicked === false){
    upVoteBtn.style.color = "orange";
  }
  isClicked = true;
}

function clickDownVoteOnce() {
  if(isClicked === false){
   downVoteBtn.style.color = "orange";
  }
  isClicked = true;
}


upVoteBtn.addEventListener("click", function(){
  clickUpVoteOnce();
})

downVoteBtn.addEventListener("click", function(){
  clickDownVoteOnce();
})