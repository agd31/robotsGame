
//CONSTRUCTOR METAS
function Goal(x, y, width, height, color) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.color = color;
  }

  //PINTAR METAS
  Goal.prototype.draw = function () {
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x+4, this.y+4, this.width, this.height);
    ctx.closePath();
  }

//METAS  
  var arrayGoals=[
    goal1 = new Goal(480,40,32,32, 'green'),
    goal2 = new Goal(40,80,32,32, 'FF00FF'),
    goal3 = new Goal(200,360,32,32, 'blue'),
    goal4 = new Goal(320,400,32,32, 'FFA500'),
]

//INDICAR METAS A ALCANZAR Y COMPROBAR VICTORIA 
var randomnumber = Math.floor(Math.random() * 4);
var objetiveGoal=arrayGoals[randomnumber];

function win(obj){
    if(obj.x == arrayGoals[randomnumber].x && obj.y == arrayGoals[randomnumber].y 
    && obj.color==arrayGoals[randomnumber].color) {
        ctx.beginPath()
        ctx.font = "36px";
        ctx.fillStyle = obj.color;
        ctx.fillText('SE ACABÓ EL JUEGO', 150, 200);
        ctx.fillText('HAN SIDO '+counter+ ' MOVIMIENTOS', 110, 480);
        ctx.closePath()
      }
    }

    function objetiveGoals(){
    ctx.beginPath();
    ctx.fillStyle = objetiveGoal.color;
    ctx.fillRect(280, 280, 80, 80);
    ctx.closePath();
    }

