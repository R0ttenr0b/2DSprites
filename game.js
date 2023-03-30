var canvas = document.getElementById("gameCanvas");
var ctx = canvas.getContext("2d");

var sprite = new Image();
sprite.src = "0.png";
sprite.onload = function() {
    ctx.drawImage(sprite, 0, 0);
  };