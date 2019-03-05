let currentImg = document.getElementsByTagName("a");
let firstPhoto = document.querySelector(".first");
let secondPhoto = document.querySelector(".second");
let thirdPhoto = document.querySelector(".third");
let fourthPhoto = document.querySelector(".fourth");
let fifthPhoto = document.querySelector(".fifth");
let mainPhoto = document.getElementById("main_gallery");

let gallerypics1 = [
  {
    path: "views/masni.jpg",
    name: "The first picture of Masni.",
    title: "This is one very lazy dog."
  },
  {
    path: "views/masni2.jpg",
    name: "The second picture of Masni.",
    title: "This is one very lazy dog."
  },
  {
    path: "views/masni3.jpg",
    name: "The third picture of Masni.",
    title: "This is one very lazy dog."
  },
  {
    path: "views/masni4.jpg",
    name: "The fourth picture of Masni.",
    title: "This is one very lazy dog."
  }
];


for (let i = 0; i < currentImg.length; i++) {
  currentImg[i].addEventListener("click", imgClick);
  }
  function imgClick(){
    this.classList.toggle("selected");
  }

  function reset(){

  }

    
   firstPhoto.addEventListener("click", function(){
    mainPhoto.style.backgroundImage = "url('pic1.jpg')";
  });
  
  secondPhoto.addEventListener("click", function(){
    mainPhoto.style.backgroundImage = "url('pics/pic2.jpg')";
  });

  thirdPhoto.addEventListener("click", function(){
    mainPhoto.style.backgroundImage = "url('pics/pic4.jpg')";
  });
  
  fourthPhoto.addEventListener("click", function(){
    mainPhoto.style.backgroundImage = "url('pics/pic5.jpg')";
  });

  fifthPhoto.addEventListener("click", function(){
    mainPhoto.style.backgroundImage = "url('pics/pic6.jpg')";
  }); 
   
  
  
  

