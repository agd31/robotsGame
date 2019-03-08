function Bumper2v() {
  this.x = 198;
  this.y = 0;


  this.width = 5;
  this.height = 40;
  this.color = 'rgb(112,128,144)'
}

Bumper2v.prototype.draw = function () {
  ctx.beginPath();
  ctx.fillStyle = this.color;
  ctx.fillRect(this.x, this.y, this.width, this.height);
  ctx.closePath();
}


Bumper2v.prototype.collisionX = function(player) {
  if(
    player.x + player.width >= this.x && 
    this.x + this.width >= player.x && 
    player.y + player.height >= this.y && 
    this.y + this.height >= player.y
    ) {
      
      
      player.isMovingRight=false;
      player.isMovingLeft=false;
      
  }
}

