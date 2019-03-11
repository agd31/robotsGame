

function win(obj){
if(obj.x == canvas.width - obj.width && obj.y == canvas.height -obj.height) {
    ctx.beginPath();
    ctx.font = "72px Comic Sans MS";
    ctx.fillStyle = 'Green';
    ctx.textAlign= 'Center';
    ctx.fillText('SE ACABÓ EL JUEGO', canvas.width / 2, canvas.height / 2);
    ctx.closePath()
  }
}