var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
canvas.height = 640; //16 casillas de 40 px cada una
canvas.width = 640;
counter = 0; //va a contar el número de movimientos que se hacen


//CREAR JUGADORES
var arrayPlayers=[
  player1 = new Player(0,80,'blue'),
  player2 = new Player(440,520,'#FF00FF'),
  player3 = new Player(80,480,'green'),
  player4 = new Player(440,120,'#FFA500'),
]
var player=arrayPlayers[0];
document.getElementById("key1").style.color = arrayPlayers[0].color;
document.getElementById("key2").style.color = arrayPlayers[1].color;
document.getElementById("key3").style.color = arrayPlayers[2].color;
document.getElementById("key4").style.color = arrayPlayers[3].color;
document.getElementById("currentRobot").style.color = player.color;
document.getElementById("currentRobotColor").style.backgroundColor = player.color;
document.getElementById("moves").innerHTML = "Llevas " + counter + " movimientos"

//ARRANCA TODO AL INICIAR EL JUEGO
window.onload = function (){
  document.getElementById('botonStart').onclick = function(){
  document.getElementById('imagenInicial').style.display = 'none';
  document.getElementById('canvas').style.display = 'block';
  document.getElementById('indicadores').style.display = 'block';
    game(); 
  }
}


document.getElementById("reload").onclick = function() {

  window.location.reload();

}

//elegir robots 
function setListeners(){
  document.addEventListener("keydown", function(e){
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

      }
      document.getElementById("currentRobot").style.color = player.color;
document.getElementById("currentRobotColor").style.color = player.color;
document.getElementById("currentRobotColor").style.backgroundColor = player.color;
document.getElementById("moves").innerHTML = "Llevas " + counter + " movimientos"
  });
}


//PAUSAR EL JUEGO CON ESPACIO
var isPause =false;
function Pause() {
  document.addEventListener('keydown', function(e) {
    switch(e.keyCode) {
      case 32:
        isPause = !isPause
        isPause ? clearInterval(interval) : interval = setInterval(game, 1000/60);
    }
  }.bind(this))
}

//crear tablero y pintarlo
function createBoard(){
  ctx.clearRect(0,0,canvas.width,canvas.height);
  for (var x=40; x<=615; x=x+40){
    ctx.moveTo(x,0);
    ctx.lineTo(x,655);
   ctx.moveTo(0,x);
    ctx.lineTo(655,x);
  }
  ctx.strokeStyle = "rgb(112,128,144)";
  ctx.stroke();
}

//PINTAR BUMPER VERTICALES
function verticalBumperDraw(){
  for(var i=0;i<bumperVertically.length;i++){
    bumperVertically[i].draw();
  }
}

//PINTAR BUMPER HORIZONTALES
function horizontalBumperDraw(){
  for(var i=0;i<bumperHorizontally.length;i++){
    bumperHorizontally[i].draw();
  }
}

//PINTAR GOALS
function goalsDrawing(){
  for(var i=0;i<arrayGoals.length;i++){
  arrayGoals[i].draw();
  }
}

//PINTAR ROBOTS
function playerDrawing(){
for(var i=0;i<arrayPlayers.length;i++){
  arrayPlayers[i].draw();
  }
}

//FUNCIÓN PRINCIPAL INICIAR EL JUEGO
function game() {
  createBoard();
  Pause();
  objetiveGoals();
  verticalBumperDraw();
  horizontalBumperDraw();
  goalsDrawing();
  playerDrawing();  
  player.choosePlayer();
  player.collisionPlayers();
  setListeners();
  
   //COLISIÓN BUMPERS horizontales 
   for(var i=0;i<bumperHorizontally.length;i++){
    bumperHorizontally[i].collisionY(player);
    }
   
    
    //COLISIÓN BUMPERS VERTICALES
    for(var i=0;i<bumperVertically.length;i++){
      bumperVertically[i].collisionX(player);
      }
    win(player);
    
  }
  
  var interval = setInterval(game, 1000/60);
