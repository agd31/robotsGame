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


//PAUSAR EL JUEGO CON ESPACIO
function Pause() {
  document.addEventListener('keydown', function(e) {
    switch(e.keyCode) {
      case 32:
        isPause = !isPause
        isPause ? clearInterval(interval) : interval = setInterval(game, 1000/60);
    }
  }.bind(this))
}


//FUNCIÓN PRINCIPAL INICIAR EL JUEGO
function game() {
  /*board.draw();*/
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
    
    //PINTAR BUMPER VERTICALES
    for(var i=0;i<bumperVertically.length;i++){
    bumperVertically[i].draw();
    }

    //PINTAR BUMPER HORIZONTALES
    for(var i=0;i<bumperHorizontally.length;i++){
    bumperHorizontally[i].draw();
    }
  
    //PINTAR JUGADOR
    player.draw();
    //MOVER JUGADOR
    player.movePlayer();
  //playerGreen.draw();
  //playerGreen.movePlayer();

   //COLISIÓN BUMPERS horizontales 
   for(var i=0;i<bumperHorizontally.length;i++){
    bumperHorizontally[i].collisionY(player);
    }
   
    //bumper.collisionY(playerGreen);
    //COLISIÓN BUMPERS VERTICALES
    for(var i=0;i<bumperVertically.length;i++){
      bumperVertically[i].collisionX(player);
      }
    
    //bumper.collisionX(playerGreen);
  }
  
  var interval = setInterval(game, 1000/60);
