
function Goal(x, y, width, height, color) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.color = color;
  }
  Goal.prototype.draw = function () {
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x+4, this.y+4, this.width, this.height);
    ctx.closePath();
  }
  var arrayGoals=[
    goal1 = new Goal(480,40,32,32, 'green'),
    goal2 = new Goal(40,80,32,32, 'red'),
    goal3 = new Goal(200,360,32,32, 'lightblue'),
    goal4 = new Goal(320,400,32,32, 'yellow'),
]
var randomnumber = Math.floor(Math.random() * 2);
var objetiveGoal=arrayGoals[randomnumber];

function win(obj){
    if(obj.x == arrayGoals[randomnumber].x && obj.y == arrayGoals[randomnumber].y) {
        ctx.beginPath()
        ctx.font = "34px Comic Sans MS";
        ctx.fillStyle = 'Red'
        ctx.fillText('SE ACABÓ EL JUEGO', 200, 200)
        ctx.closePath()
      }
    }

    function objetiveGoals(){

        ctx.beginPath();
    ctx.fillStyle = objetiveGoal.color;
    ctx.fillRect(280, 280, 80, 80);
    ctx.closePath();
    }