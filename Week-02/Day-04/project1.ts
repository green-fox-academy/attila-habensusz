/*'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');


function drawGreen(x1: number, y1: number) {
    ctx.strokeStyle = "green";
    ctx.beginPath();
    ctx.moveTo(10,10);
    ctx.lineTo(x1, y1);
    ctx.stroke();

    for (let i = 0; i < x1-1; i++) {
        drawGreen() 
}
}



function drawPurple(x1: number, y1: number) {
    ctx.strokeStyle = "purple";
    ctx.beginPath();
    ctx.moveTo(0,10);
    ctx.lineTo();
    ctx.stroke();
}
*/

'use strict';
const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

let container: number = 600;
let divider: number = 25;
let spot: number = 0;

for (let i = 1; i < container / divider; i++) {
    spot = container - i * container / divider;
    //Purple begins
    ctx.beginPath();
    ctx.strokeStyle = 'purple';
    ctx.moveTo(spot, 0);
    ctx.lineTo(container, spot);
    ctx.stroke();
}

for (let i = 1; i < container / divider; i++) {
    spot = container - i * container / divider;
    //Green begins
    ctx.beginPath();
    ctx.strokeStyle = 'green';
    ctx.moveTo(0, spot);
    ctx.lineTo(spot, container);
    ctx.stroke();
}
