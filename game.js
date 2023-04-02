var canvas = document.getElementById("gameCanvas");
var ctx = canvas.getContext("2d");

var sprite = new Image();
sprite.src = "0.png";
sprite.onload = function() {
    ctx.drawImage(sprite, 0, 0);

var penguinX =0;
var penguinY =0;
var penguinX2 =0;
var penguinY2 =0;


function drawPenguin(){
  ctx.clearRect(0,0,canvas.canvas.width, canvas.height);
  ctx.drawImage(image,penguinX, penguinY)

}

function updatePenguin(){


  penguinX += penguinX2;
  penguinY += penguinY2;

  if (penguinX < 0 || penguinX > canvas.width - image.width) {
    penguinX2 = -penguinX2;

  }
  if (penguinY < 0 || penguinY > canvas.height - image.height) {
    penguinY2 = -penguinY2;
  } 

}
function gameLoop() {
  updatePenguin();
  drawPenguin();
}

  }