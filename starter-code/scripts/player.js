//constructor jugador
function Player(x,y, color) {
    this.x = x;
    this.y = y;
    this.isMovingRight = false;
    this.isMovingLeft = false;
    this.isMovingUp = false;
    this.isMovingDown = false;
  
    this.width = 40;
    this.height = 40;
    this.color = color;
  }
  
//CREAR JUGADORES
var arrayPlayers=[
  player1 = new Player(0,0,'blue'),
  player2 = new Player(200,400,'red'),
  player3 = new Player(160,80,'green'),
  player4 = new Player(440,520,'yellow'),
]

Player.prototype.choosePlayer = function() {
  //del 49 al 52 mover jugadores
  document.onkeydown = function(e) {
    switch(e.keyCode){
      case 49:
      player=player1;
      break
      case 50:
      player=player2;
      break
      case 51:
      player=player3;
      break
      case 52:
      player=player4;
      break
    }
  }
}
 //mover jugador 
Player.prototype.movePlayer = function() {
  document.onkeydown = function(e) {
    switch(e.keyCode){
      case 39:
      this.isMovingLeft = false;
      this.isMovingUp = false;
      this.isMovingDown = false;  
      this.isMovingRight = true;
      counter++;
        break
      case 37:
      this.isMovingRight = false;
    this.isMovingUp = false;
    this.isMovingDown = false;
        this.isMovingLeft = true;
        counter++;
        break
      case 38:
      this.isMovingRight = false;
      this.isMovingLeft = false;
      this.isMovingDown = false;
        this.isMovingUp = true;
        counter++;
        break
      case 40:
      this.isMovingRight = false;
    this.isMovingLeft = false;
    this.isMovingUp = false;
    this.isMovingDown = true;
    counter++;
        break
      }
      
  }.bind(this)

  /*document.onkeyup = function(e) {
    this.isMovingRight = false;
    this.isMovingLeft = false;
    this.isMovingUp = false;
    this.isMovingDown = false;
  }.bind(this)*/

  /*Derecha, la primera lo mueve la segunda lo para*/
  if(this.isMovingRight === true && this.x+1 + this.width <= canvas.width){this.x += 10};
  if(this.isMovingRight === true && this.x+this.width>=canvas.width-1){this.isMovingRight = false};
  /*Izquierda*/
  if(this.isMovingLeft === true && this.x-1 > 0){this.x -= 10};
  if(this.isMovingLeft === true && this.x<=1){this.isMovingLeft = false};
  /*Arriba*/
  if(this.isMovingUp === true && this.y-1 >= 0){this.y -= 10};
  if(this.isMovingUp === true && this.y<=1){this.isMovingUp = false};
  /*Abajo*/
  if(this.isMovingDown === true && this.y+1 + this.height <= canvas.height){this.y += 10};
  if(this.isMovingDown === true && this.y+this.height>=canvas.height-1){this.isMovingDown =false}
  /*if(this.x=canvas.width){this.isMovingRight===false};
  if(this.x=1){this.isMovingLeft===false};*/
  
}

//pintar jugador
  Player.prototype.draw = function() {
    
    ctx.save();
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
    ctx.restore();
    
  }