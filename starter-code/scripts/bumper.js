function Bumper() {
  this.x = 0;
  this.y = 198;


  this.width = 40;
  this.height = 5;
  this.color = 'rgb(112,128,144)'
}

Bumper.prototype.draw = function () {
  ctx.beginPath();
  ctx.fillStyle = this.color;
  ctx.fillRect(this.x, this.y, this.width, this.height);
  ctx.closePath();
}


/*
Bumper.prototype.collision = function(player) {
  if(
    player.x + player.width >= this.x && 
    this.x + this.width >= player.x && 
    player.y + player.height >= this.y && 
    this.y + this.height >= player.y
    ) {
      
      player.isMovingRight=false;
      player.isMovingLeft=false;
      player.isMovingUp=false;
      player.isMovingDown=false;
      //player.x=this.x;REVISAR ESTO
      
  }
}
*/

Bumper.prototype.collision = function(player) {
  if(
    player.x + player.width >= this.x && 
    this.x + this.width >= player.x && 
    player.y + player.height >= this.y && 
    this.y + this.height >= player.y
    ) {
      
      
      player.isMovingUp=false;
      player.isMovingDown=false;
      //colision arriba abajo
      
  }
}

