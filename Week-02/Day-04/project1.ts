'use strict';
const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

function lineMaker(li: number) {

    for (let i = 0; i < canvas.height; i += li) {
      ctx.strokeStyle = "green";
      ctx.beginPath();
      ctx.moveTo(0, i);
      ctx.lineTo(i, canvas.height);
      ctx.stroke();
    }
    
    for (let i = 0; i < canvas.width; i = i + li) {
      ctx.strokeStyle = "purple";
      ctx.beginPath();
      ctx.moveTo(i, 0);
      ctx.lineTo(canvas.width, i);
      ctx.stroke();
    }
  }
  
  lineMaker(13);