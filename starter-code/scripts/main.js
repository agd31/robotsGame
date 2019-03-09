var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
canvas.height = 640;
canvas.width = 640;
counter = 0;

//CREAR JUGADORES
var arrayPlayers=[
  player1 = new Player(0,0,'blue'),
  player2 = new Player(200,400,'red'),
  player3 = new Player(160,80,'green'),
  player4 = new Player(440,520,'yellow'),
]
var player=arrayPlayers[0];

Player.prototype.choosePlayer = function() {
  //del 49 al 52 mover jugadores
  document.onkeydown = function(e) {
    switch(e.keyCode){
      case 49:
      player=arrayPlayers[0];
      break
      case 50:
      player=arrayPlayers[1];
      break
      case 51:
      player=arrayPlayers[2];
      break
      case 52:
      player=arrayPlayers[3];
      break
    }console.log(blablaba)
  }
}

var isPause =false;

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

    //PINTAR GOALS
    for(var i=0;i<arrayGoals.length;i++){
      arrayGoals[i].draw();
      }
  
    //PINTAR JUGADOR
    for(var i=0;i<arrayPlayers.length;i++){
      arrayPlayers[i].draw();
      }
    
    //MOVER JUGADOR
    player.choosePlayer();
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
    win(player);
    //bumper.collisionX(playerGreen);
  }
  
  var interval = setInterval(game, 1000/60);
