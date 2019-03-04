function Player() {
    this.x = 50;
    this.y = 50;
    this.isMovingRight = false;
    this.isMovingLeft = false;
    this.isMovingUp = false;
    this.isMovingDown = false;
  
    this.width = 50;
    this.height = 50;
    this.color = 'blue'
  }
  
  
Player.prototype.movePlayer = function() {

  document.onkeydown = function(e) {
    switch(e.keyCode){
      case 39:
        this.isMovingRight = true;
        break
      case 37:
        this.isMovingLeft = true;
        break
      case 38:
        this.isMovingUp = true;
        break
      case 40:
        this.isMovingDown = true;
        break
      }
      console.log("Inutil");
  }.bind(this)

  /*document.onkeyup = function(e) {
    this.isMovingRight = false;
    this.isMovingLeft = false;
    this.isMovingUp = false;
    this.isMovingDown = false;
  }.bind(this)*/

  /*Derecha, la primera lo mueve la segunda lo para*/
  if(this.isMovingRight === true && this.x+1 + this.width <= canvas.width){this.x += 1};
  if(this.isMovingRight === true && this.x+this.width==canvas.width-1){this.isMovingRight = false};
  /*Izquierda*/
  if(this.isMovingLeft === true && this.x-1 > 0){this.x -= 1};
  if(this.isMovingLeft === true && this.x==1){this.isMovingLeft = false};
  /*Arriba*/
  if(this.isMovingUp === true && this.y-1 >= 0){this.y -= 1};
  if(this.isMovingUp === true && this.y==1){this.isMovingUp = false};
  /*Abajo*/
  if(this.isMovingDown === true && this.y+1 + this.height <= canvas.height){this.y += 1};
  if(this.isMovingDown === true && this.y+canvas.height==canvas.height-1){this.isMovingDown =false}
  /*if(this.x=canvas.width){this.isMovingRight===false};
  if(this.x=1){this.isMovingLeft===false};*/
  
}
  Player.prototype.draw = function() {
    ctx.clearRect(0,0,canvas.width,canvas.height);
    ctx.save();
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
    ctx.restore();
    
  }