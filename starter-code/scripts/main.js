var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
canvas.height = 640;
canvas.width = 640;
counter = 0;



var isPause =false;
var player = new Player();
// var bumper = new Bumper();
//var bumper2v = new Bumper2v();
//var playerGreen = new PlayerGreen();
/*var board = new board();*/
window.onload =function(){
  game();
}

function Pause() {
  document.addEventListener('keydown', function(e) {
    switch(e.keyCode) {
      case 32:
        isPause = !isPause
        isPause ? clearInterval(interval) : interval = setInterval(game, 1000/60);
    }
  }.bind(this))
}



function game() {
  ctx.clearRect(0,0,canvas.width,canvas.height);
  for (var x=40; x<=615; x=x+40){
  ctx.moveTo(x,0);
  ctx.lineTo(x,655);
  ctx.moveTo(0,x);
  ctx.lineTo(655,x);
  }
  ctx.strokeStyle = "#f00";
  ctx.stroke();  
  Pause();
    /*board.draw();*/
    
    
    for(var i=0;i<bumperVertically.length;i++){
    bumperVertically[i].draw();
  }
  for(var i=0;i<bumperHorizontally.length;i++){
    bumperHorizontally[i].draw();
  }
  player.draw();
  player.movePlayer();
  //playerGreen.draw();
  //playerGreen.movePlayer();

    bumper.collisionY(player);
    //bumper.collisionY(playerGreen);
    bumper.collisionX(player);
    //bumper.collisionX(playerGreen);
  }
  
  var interval = setInterval(game, 1000/60);
