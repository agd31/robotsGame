var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
canvas.height = 500;
canvas.width = 500;

var player = new Player();

function game(){
    player.draw();
    player.movePlayer();

}