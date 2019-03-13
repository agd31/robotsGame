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
    this.left = function() {return this.x};
    this.right = function() {return (this.x + this.width)};
    this.top = function() {return this.y };
    this.bottom = function() {return (this.y + this.height)};
  }
  
  


Player.prototype.choosePlayer = function() {
  //del 49 al 52 mover jugadores
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

  
  
  Player.prototype.questionCollision = function(obj) {
      //  return!(this.left()==obj.right())  ||
      //         (this.right()==obj.left())||
      //         (this.top()==obj.bottom())   ||
      //         (this.bottom()==obj.top())
      return (((this.left() === obj.right()) && ((this.top() === obj.top()) && (this.isMovingLeft==true || this.isMovingRight==true))) || 
                ((this.right() == obj.left()) && ((this.top() == obj.top()) && (this.isMovingLeft==true || this.isMovingRight==true)))|| 
                ((this.top() == obj.bottom()) && ((this.left() == obj.left()) && (this.isMovingUp==true || this.isMovingDown==true))) || 
                ((this.bottom() == obj.top()) && ((this.left() == obj.left()) && (this.isMovingUp==true || this.isMovingDown==true)))
              )
                
              
  }
  Player.prototype.collisionPlayers = function() {
    
    arrayPlayers.some(function(obj) {
      console.log(this.questionCollision(obj))
      if(this!=obj && this.questionCollision(obj)){
        console.log(this.right(), this.left(), this.bottom(), this.top())
        console.log(obj.right(), obj.left(), obj.bottom(), obj.top())
       this.isMovingLeft=false;
       this.isMovingRight=false;
       this.isMovingUp=false;
       this.isMovingDown=false;

      }
    }.bind(this));
  }
    
  
  
  
  
  
  /*for(i=1;i<=3;i++){
      if(arrayPlayers[0].isMovingUp==true || arrayPlayers[0].isMovingDown==true){
        if(
          (arrayPlayers[0].x + arrayPlayers[0].width/2 == arrayPlayers[i].x+arrayPlayers[0].width/2 && 
         arrayPlayers[0].y + arrayPlayers[0].height == arrayPlayers[i].y) || 
         (arrayPlayers[i].x + arrayPlayers[i].width/2 == arrayPlayers[0].x+arrayPlayers[i].width/2 && 
          arrayPlayers[i].y + arrayPlayers[i].height == arrayPlayers[0].y)
          ) {
            arrayPlayers[0].isMovingUp=false;
            arrayPlayers[0].isMovingDown=false;
          }
      }
    }*/

  



  /*for(i=1;i<=3;i++){
      if(player.isMovingUp==true || player.isMovingDown==true){
        if(
          arrayPlayers[0].x + arrayPlayers[0].width > arrayPlayers[i].x && 
          arrayPlayers[i].x + arrayPlayers[i].width > arrayPlayers[0].x 
          ) {
            player.isMovingUp=false;
          player.isMovingDown=false;
          }Component.call(this, x, y, width, height);
      }
    }
    
    for(i=1;i<=3;i++){
      
      if(
        arrayPlayers[0].x + arrayPlayers[0].width >= arrayPlayers[i].x && 
        arrayPlayers[i].x + arrayPlayers[i].width >= arrayPlayers[0].x && 
        arrayPlayers[0].y + arrayPlayers[0].height > arrayPlayers[i].y && 
        arrayPlayers[i].y + arrayPlayers[i].height > arrayPlayers[0].y
        ) {
          if(player.isMovingUp==true || player.isMovingDown==true){
            player.isMovingUp=false;
          player.isMovingDown=false;
          } else{
            player.isMovingRight=false;
            player.isMovingLeft=false;
          }
        }
        
    }
    //colision del 1 con 2 y 3
    for(i=2;i<=3;i++){
      if(
        arrayPlayers[1].x + arrayPlayers[1].width >= arrayPlayers[i].x && 
        arrayPlayers[i].x + arrayPlayers[i].width >= arrayPlayers[1].x && 
        arrayPlayers[1].y + arrayPlayers[1].height > arrayPlayers[i].y && 
        arrayPlayers[i].y + arrayPlayers[i].height > arrayPlayers[1].y
        ) {
        
          if(player.isMovingUp==true || player.isMovingDown==true){
            player.isMovingUp=false;
          player.isMovingDown=false;
          } else{
            player.isMovingRight=false;
            player.isMovingLeft=false;
          }
        
        
        }
    }
    //colision del 2 y 3
    if(
      arrayPlayers[2].x + arrayPlayers[2].width >= arrayPlayers[3].x && 
      arrayPlayers[3].x + arrayPlayers[3].width >= arrayPlayers[2].x && 
      arrayPlayers[2].y + arrayPlayers[2].height > arrayPlayers[3].y && 
      arrayPlayers[3].y + arrayPlayers[3].height > arrayPlayers[2].y
      ) {
      
        if(player.isMovingUp==true || player.isMovingDown==true){
          player.isMovingUp=false;
        player.isMovingDown=false;
        } else{
          player.isMovingRight=false;
          player.isMovingLeft=false;
        }
      
      }*/