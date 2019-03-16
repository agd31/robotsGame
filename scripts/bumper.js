//constructor
function Bumper(x, y , width, height ) {
  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;
  this.color = '#191919'
}
//pintar el bumper
Bumper.prototype.draw = function () {
  ctx.beginPath();
  ctx.fillStyle = this.color;
  ctx.fillRect(this.x, this.y, this.width, this.height);
  ctx.closePath();
}
//array de bumpers verticales
var bumperVertically=[
  bumper1 = new Bumper(158,0,5,40),
  bumper2 =new Bumper(438,0,5,40),
  bumper3 = new Bumper(238,40,5,40),
  bumper4 =new Bumper(478,40,5,40),
  bumper5 =new Bumper(38,80,5,40),
  bumper6 =new Bumper(558,80,5,40),
  bumper7 =new Bumper(318,120,5,40),
  bumper8 =new Bumper(278,160,5,40),
  bumper9 =new Bumper(398,200,5,40),
  bumper10 =new Bumper(118,240,5,40),
  bumper11 =new Bumper(478,240,5,40),
  bumper12 =new Bumper(278,280,5,40),
  bumper13 = new Bumper(358,280,5,40),
  bumper14 = new Bumper(278,320,5,40),
  bumper15 = new Bumper(358,320,5,40),
  bumper16 = new Bumper(78,360,5,40),
  bumper17 = new Bumper(198,360,5,40),
  bumper18 = new Bumper(358,400,5,40),
  bumper19 = new Bumper(518,440,5,40),
  bumper20 = new Bumper(278,480,5,40),
  bumper21 = new Bumper(358,520,5,40),
  bumper22 = new Bumper(118,560,5,40),
  bumper23 = new Bumper(598,560,5,40),
  bumper24 = new Bumper(238,600,5,40),
  bumper25 = new Bumper(478,600,5,40),
  ]
//array de bumpers horizontales
  var bumperHorizontally=[
    bumper26 = new Bumper(0,158,40,5),
    bumper27 = new Bumper(0,438,40,5),
    bumper28 = new Bumper(40,118,40,5),
    bumper29 = new Bumper(40,358,40,5),
    bumper30 = new Bumper(80,278,40,5),
    bumper31 = new Bumper(80,598,40,5),
    bumper32 = new Bumper(200,38,40,5),
    bumper33 = new Bumper(200,358,40,5),
    bumper34 = new Bumper(240,198,40,5),
    bumper35 = new Bumper(240,518,40,5),
    bumper36 = new Bumper(280,278,40,5),
    bumper37 = new Bumper(280,358,40,5),
    bumper38 = new Bumper(320,158,40,5),
    bumper39 = new Bumper(320,278,40,5),
    bumper40 = new Bumper(320,358,40,5),
    bumper41 = new Bumper(320,438,40,5),
    bumper42 = new Bumper(360,238,40,5),
    bumper43 = new Bumper(360,558,40,5),
    bumper44 = new Bumper(440,238,40,5),
    bumper45 = new Bumper(480,38,40,5),
    bumper46 = new Bumper(520,438,40,5),
    bumper47 = new Bumper(560,118,40,5),
    bumper48 = new Bumper(560,558,40,5),
    bumper49 = new Bumper(600,198,40,5),
    bumper50 = new Bumper(600,398,40,5),
  ] 

//COLISIÓN BUMPERS HORIZONTALES
Bumper.prototype.collisionY = function(player) {
  if(
    player.x + player.width > this.x && 
    this.x + this.width > player.x && 
    player.y + player.height > this.y && 
    this.y + this.height > player.y
    ) {
      player.isMovingUp=false;
      player.isMovingDown=false;
      
      //colision arriba abajo
      
  }
}

//COLISIÓN BUMPERS VERTICALES
Bumper.prototype.collisionX = function(player) {
  if(
    player.x + player.width > this.x && 
    this.x + this.width > player.x && 
    player.y + player.height > this.y && 
    this.y + this.height > player.y
    ) {
      
      
      player.isMovingRight=false;
      player.isMovingLeft=false;
      //colision izquierda derecha
      
  }
}