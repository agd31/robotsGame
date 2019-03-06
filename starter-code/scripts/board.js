function Board() {}

Board.prototype.draw = function() {
  ctx.beginPath();
  for (var x = 40; x <= 615; x = x + 40) {
    ctx.moveTo(x, 0);
    ctx.lineTo(x, 655);
  }

  for (var y = 40; y <= 615; y = y + 40) {
    ctx.moveTo(0, y);
    ctx.lineTo(655, y);
  }

  ctx.strokeStyle = "#f00";
  ctx.stroke();
  ctx.closePath();
};
