/* let upBtn = document.querySelector('[data-direction]');
let dwn = document.getElementById('dwn');
let left = document.getElementById('left');
let right = document.getElementById('right');
let main = document.getElementById('mainImg');
let zoomIn = document.getElementById('zoom-in');


//               UP             //

function moveUp() {
  let offsetBottom = 0;
   offsetBottom += 20;
   let main = document.getElementById('mainImg');
   main.style.position = "relative";
   main.style.bottom = (offsetBottom)+"px";
}

upBtn.addEventListener('click', function(){
  moveUp()
});

//               Down             //

function moveDown() {
  let offsetDown = 0;
   offsetDown += 20;
   let main = document.getElementById('mainImg');
   main.style.position = "relative";
   main.style.top = (offsetDown)+"px";
}

dwn.addEventListener('click', function(){
  moveDown()
});

//         LEFT        //

function moveLeft() {
  let offsetRight = 0;
   offsetRight += 20;
   let main = document.getElementById('mainImg');
   main.style.position = "relative";
   main.style.right = (offsetRight)+"px";
}

left.addEventListener('click', function(){
  moveLeft()
});


//         RIGHT        //

function moveRight() {
  let offsetLeft = 0;
   offsetLeft += 20;
   let main = document.getElementById('mainImg');
   main.style.position = "relative";
   main.style.left = (offsetLeft)+"px";
}

right.addEventListener('click', function(){
  move()
});

function zoomInside() {
  let offset = 0;
  offset += 2;
  let main = document.getElementById('mainImg');
  main.style.width += (offset)+"%";
  main.style.height += (offset)+"%";
}

zoomIn.addEventListener('click', function(){
  zoomInside();
})
 */

 //Starting a new solution


document.addEventListener('DOMContentLoaded', () => {
  let navBar = document.getElementsByTagName('nav')[0];
  let img = document.querySelector('.img-inspector');
  let imgSize = 200;
  let imgPosition = {
    x: 0,
    y: 0
  }
  
  navBar.addEventListener('click', (e) => {
    let dataAction = e.target.dataset.action;
    let dataDirection = e.target.dataset.direction;
    if(dataAction === 'zoom'){
      dataDirection === 'in' && imgSize > 20 ? imgSize += 20 : imgSize -= 20;
      img.setAttribute('style', `background-size: ${imgSize}%`)
    }else if(dataAction = 'move'){
      
      if(dataDirection === 'up'){
        imgPosition.y += 30;
      }else if(dataDirection === 'down'){
        imgPosition.y -= 30;
      }else if(dataDirection === 'right'){
        imgPosition.x -= 30;
      }else if(dataDirection === 'left'){
        imgPosition.x += 30;
      }
      
      img.setAttribute('style', `background-position: ${imgPosition.x}px ${imgPosition.y}px;`);
    }
    
  })
})