//constructor robots
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
    this.left = function() {return this.x};
    this.right = function() {return (this.x + this.width)};
    this.top = function() {return this.y };
    this.bottom = function() {return (this.y + this.height)};
  }


Player.prototype.choosePlayer = function() {
  //mover a los robots
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
  
  
}

//pintar robots
  Player.prototype.draw = function() {
    ctx.save();
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
    ctx.restore();
  }

  
  //preguntar si hay colisiones
  Player.prototype.questionCollision = function(obj) {
      
    return (((this.left() === obj.right()) && ((this.top() === obj.top()) && 
              (this.isMovingLeft==true || this.isMovingRight==true))) || 
            
              ((this.right() == obj.left()) && ((this.top() == obj.top()) && 
              (this.isMovingLeft==true || this.isMovingRight==true)))||
              
              ((this.top() == obj.bottom()) && ((this.left() == obj.left()) &&
              (this.isMovingUp==true || this.isMovingDown==true))) || 
              
              ((this.bottom() == obj.top()) && ((this.left() == obj.left()) && 
              (this.isMovingUp==true || this.isMovingDown==true)))
              )           
  }

  //colisiones robots
  Player.prototype.collisionPlayers = function() {
    
    arrayPlayers.some(function(obj) {
      
      if(this!=obj && this.questionCollision(obj)){
       this.isMovingLeft=false;
       this.isMovingRight=false;
       this.isMovingUp=false;
       this.isMovingDown=false;

      }
    }.bind(this));
  }
    