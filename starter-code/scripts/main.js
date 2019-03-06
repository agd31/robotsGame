var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
canvas.height = 640;
canvas.width = 640;
counter = 0;



var isPause =false;
var player = new Player();
var bumper = new Bumper();
/*var board = new board();*/
window.onload =function(){
  game();
}

function Pause() {
  document.addEventListener('keydown', function(e) {
    switch(e.keyCode) {
      case 32:
        isPause = !isPause
        isPause ? clearInterval(interval) : interval = setInterval(game, 1000/60);
    }
  }.bind(this))
}



function game() {
    Pause();
    /*board.draw();*/
    player.draw();
    player.movePlayer();
    bumper.draw();
    bumper.collision(player);
  }
  
  var interval = setInterval(game, 1000/60);
