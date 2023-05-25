
- refactr Enemy class (if makes sense, have a single class Enemy & pass arguments when you create it)

- shooting:
  - class Bullet
    - positionX
    - width
    - constructor(){
        setInterval(this.moveUp(), 100);
    }
    - moveUp()
  - when user presses spacebar: new Bullet()
  - implemente collision detection bullet vs. enemies (ex. when we move enemies)


/////

class Enemy{}

const myEnemy = new Enemy(20);
const myEnemy = new Enemy(40);


setInterval(function(){
    new Enemy(20);
}, 2000);



setInterval(function(){
    new Enemy(40);
}, 10000);


//////

function go(x) {
    $({ score: 0 }).animate(
      { score: x },
      {
        duration: 1000,
        easing: "linear",
        step: function (now, fx) {
          $("#score").html(score + Math.floor(now));
        },
        queue: false,
        complete: function (now, fx) {
          score += x;
        },
      }
    );
    $("#tag")
      .fadeIn({
        duration: 700,
        easing: "linear",
        step: function (now, fx) {
          $(this).css("top", -55 * now + "px");
        },
      })
      .fadeOut({
        duration: 300,
        step: function (now, fx) {
          $(this).css("top", -55 * (2 - now) + "px");
        },
      });
  }