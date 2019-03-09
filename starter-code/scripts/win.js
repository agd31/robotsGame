

function win(obj){
if(obj.x == canvas.width - obj.width && obj.y == canvas.height -obj.height) {
    ctx.beginPath()
    ctx.font = "20px Helvetica";
    ctx.fillStyle = 'Green'
    ctx.fillText('SE ACABÓ EL JUEGO', canvas.width / 2, canvas.height / 2)
    ctx.closePath()
  }
}