function Player() {
    this.x = 0;
    this.y = 0;
    this.isMovingRight = false;
    this.isMovingLeft = false;
    this.isMovingUp = false;
    this.isMovingDown = false;
  
    this.width = 40;
    this.height = 40;
    this.color = 'blue'
  }
  
  
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
      console.log("Inutil");
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
  Player.prototype.draw = function() {
    ctx.clearRect(0,0,canvas.width,canvas.height);
    ctx.save();
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
    ctx.restore();
    
    for (var x=40; x<=615; x=x+40){
      ctx.moveTo(x,0);
      ctx.lineTo(x,655);
      ctx.moveTo(0,x);
      ctx.lineTo(655,x);
    }
    
    
    
    ctx.strokeStyle = "#f00";
    ctx.stroke();
  }