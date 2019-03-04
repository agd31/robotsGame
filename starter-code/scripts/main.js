var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
canvas.height = 500;
canvas.width = 500;
counter = 0;


var player = new Player();

window.onload =function(){
  game();
}

function game() {
    
    player.draw();
    player.movePlayer();
    
  }
  
