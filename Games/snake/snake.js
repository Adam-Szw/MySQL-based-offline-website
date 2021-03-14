const canvas = document.getElementById("board")
const ctx = canvas.getContext("2d")

let speed = 6;

let tileCount = 20;
let headY= 10;
let headX= 10;
let yVelocity=0
let xVelocity=0

let tileSize = canvas.width / tileCount -2;
function drawGame(){
  clear();
  setTimeout(drawGame, 1000/speed);
  changePos();
  drawSnake();
}

function clear(){
  ctx.fillStyle = 'black';
  ctx.fillRect(0,0,canvas.width,canvas.height)
}

function drawSnake(){
  ctx.fillStyle = 'purple'
  ctx.fillRect(headX * tileCount, headY * tileCount, tileSize, tileSize)

}

function changePos(){
  headX = headX + xVelocity;
  headY = headX + yVelocity;
}

document.body.addEventListener('keydown', keyDown);

function keyDown(event){
  //w
  if(event.keyCode == 87) {
    yVelocity = -1;
    xVelocity = 0;
  }
  
}

drawGame();