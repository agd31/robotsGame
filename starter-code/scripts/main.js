var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
canvas.height = 640;
canvas.width = 640;
counter = 0;



var isPause =false;
var player = new Player();

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
    player.draw();
    player.movePlayer();
    
  }
  
  var interval = setInterval(game, 1000/60);
