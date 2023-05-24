class Player {
  constructor() {
    this.width = 5.5;
    this.height = 6;
    this.positionX = 2;
    this.positionY = 2;

    this.domElement = null;
    this.createDomElement();
  }

  createDomElement() {
    this.domElement = document.createElement("div");
    this.domElement.id = "player";
    this.domElement.style.width = this.width + "rem";
    this.domElement.style.height = this.height + "rem";
    this.domElement.style.left = this.positionX + "rem";
    this.domElement.style.bottom = this.positionY + "rem";

    const parentElm = document.getElementById("board");
    parentElm.appendChild(this.domElement);
  }

  //Players movement
  moveLeft() {
    this.positionX = this.positionX - 2;
    this.domElement.style.left = this.positionX + "rem";
  }
  moveRight() {
    this.positionX = this.positionX + 2;
    this.domElement.style.left = this.positionX + "rem";
  }
  moveUp() {
    this.positionY = this.positionY + 2;
    this.domElement.style.bottom = this.positionY + "rem";
  }
  moveDown() {
    this.positionY = this.positionY - 2;
    this.domElement.style.bottom = this.positionY + "rem";
  }
  shoot() {}
} // E N D  C L A S S  P L A Y E R

const player = new Player();
let score = 0;

class Enemy {
  constructor() {
    this.width = 6.2;
    this.height = 6;
    this.positionX = Math.floor(
      Math.random() * (45 - this.width + 1)
    ); /* 0 .... 45-w */
    this.positionY = 100;
    this.domElement = null;
    this.createDomElement();
  }
  createDomElement() {
    this.domElement = document.createElement("div");
    this.domElement.className = "enemy";
    this.domElement.style.width = this.width + "rem";
    this.domElement.style.height = this.height + "rem";
    this.domElement.style.left = this.positionX + "rem";
    this.domElement.style.bottom = this.positionY + "rem";

    const parentElm = document.getElementById("board");
    parentElm.appendChild(this.domElement);
  }
  moveDown() {
    this.positionY = this.positionY - 0.2;
    this.domElement.style.bottom = this.positionY + "rem";
  }
} // E N D  C L A S S  E N E M Y

const enemyArray = [];

setInterval(() => {
  const newEnemy = new Enemy();
  enemyArray.push(newEnemy);
}, 3500);

setInterval(() => {
  enemyArray.forEach((collision) => {
    //move enemy
    collision.moveDown();

    //detect colision enemy vs. player
    if (
      collision.positionX < player.positionX + player.width &&
      collision.positionX + collision.width > player.positionX &&
      collision.positionY < player.positionY + player.height &&
      collision.height + collision.positionY > player.positionY
    ) {
      console.log("game over");
      location.href = "./gameover.html";
    }

    //detect collision enemy vs. any bullet
    bulletsArray.forEach((bullet) => {
      //detect colision enemy vs. player
      if (
        bullet.positionX < collision.positionX + collision.width &&
        bullet.positionX + bullet.width > collision.positionX &&
        bullet.positionY < collision.positionY + collision.height &&
        bullet.height + bullet.positionY > collision.positionY
      ) {
        score += 2;
        document.getElementById("score").innerHTML = score;
        collision.domElement.remove();
      }
    });
  });
}, 7);

// ENEMY 2
class Enemy2 {
  constructor() {
    this.width = 6;
    this.height = 6.3;
    this.positionX = Math.floor(Math.random() * (45 - this.width + 1));
    this.positionY = 100;
    this.domElement = null;
    this.createDomElement();
  }
  createDomElement() {
    this.domElement = document.createElement("div");
    this.domElement.className = "enemy2";
    this.domElement.style.width = this.width + "rem";
    this.domElement.style.height = this.height + "rem";
    this.domElement.style.left = this.positionX + "rem";
    this.domElement.style.bottom = this.positionY + "rem";

    const parentElm = document.getElementById("board");
    parentElm.appendChild(this.domElement);
  }
  moveDown() {
    this.positionY = this.positionY - 0.1;
    this.domElement.style.bottom = this.positionY + "rem";
  }
} // E N D  C L A S S  E N E M Y

const enemy2Array = [];

///////////////////////////////////////////////////////////////

setInterval(() => {
  const newEnemy2 = new Enemy2();
  enemy2Array.push(newEnemy2);
}, 7500);

setInterval(() => {
  enemy2Array.forEach((collision) => {
    collision.moveDown();

    if (
      collision.positionX < player.positionX + player.width &&
      collision.positionX + collision.width > player.positionX &&
      collision.positionY < player.positionY + player.height &&
      collision.height + collision.positionY > player.positionY
    ) {
      console.log("game over");
      location.href = "./gameover.html";
    }
    bulletsArray.forEach((bullet) => {
      //detect colision enemy vs. player
      if (
        bullet.positionX < collision.positionX + collision.width &&
        bullet.positionX + bullet.width > collision.positionX &&
        bullet.positionY < collision.positionY + collision.height &&
        bullet.height + bullet.positionY > collision.positionY
      ) {
        score += 1;
        document.getElementById("score").innerHTML = score;
        collision.domElement.remove();
      }
    });
  });
}, 10);

// ENEMY 3
class Enemy3 {
  constructor() {
    this.width = 6.2;
    this.height = 6.1;
    this.positionX = Math.floor(Math.random() * (45 - this.width + 1));
    this.positionY = 100;
    this.domElement = null;
    this.createDomElement();
  }
  createDomElement() {
    this.domElement = document.createElement("div");
    this.domElement.className = "enemy3";
    this.domElement.style.width = this.width + "rem";
    this.domElement.style.height = this.height + "rem";
    this.domElement.style.left = this.positionX + "rem";
    this.domElement.style.bottom = this.positionY + "rem";

    const parentElm = document.getElementById("board");
    parentElm.appendChild(this.domElement);
  }
  moveDown() {
    this.positionY = this.positionY - 0.1;
    this.domElement.style.bottom = this.positionY + "rem";
  }
} // E N D  C L A S S  E N E M Y

const enemy3Array = [];

///////////////////////////////////////////////////////////////

setInterval(() => {
  const newEnemy3 = new Enemy3();
  enemy3Array.push(newEnemy3);
}, 6000);

setInterval(() => {
  enemy3Array.forEach((collision) => {
    collision.moveDown();

    if (
      collision.positionX < player.positionX + player.width &&
      collision.positionX + collision.width > player.positionX &&
      collision.positionY < player.positionY + player.height &&
      collision.height + collision.positionY > player.positionY
    ) {
      console.log("game over");
      location.href = "./gameover.html";
    }
    bulletsArray.forEach((bullet) => {
      //detect colision enemy vs. player
      if (
        bullet.positionX < collision.positionX + collision.width &&
        bullet.positionX + bullet.width > collision.positionX &&
        bullet.positionY < collision.positionY + collision.height &&
        bullet.height + bullet.positionY > collision.positionY
      ) {
        score += 1;
        document.getElementById("score").innerHTML = score;
        collision.domElement.remove();
        console.log(score);
      }
    });
  });
}, 5);

class Bullet {
  constructor() {
    this.width = 0.7;
    this.height = 1.5;
    this.positionX = player.positionX + player.width / 4;
    this.positionY = player.positionY + player.height / 3;
    this.domElement = document.createElement("div");
  }

  createDomElement() {
    this.domElement.className = "bullet";
    this.domElement.style.width = this.width + "rem";
    this.domElement.style.height = this.height + "rem";
    this.domElement.style.left = this.positionX + "rem";
    this.domElement.style.bottom = this.positionY + "rem";

    const parentElm = document.getElementById("board");
    parentElm.appendChild(this.domElement);
  }

  shoot() {
    this.positionY = this.positionY + 0.1;
    this.domElement.style.bottom = this.positionY + "rem";
  }
}

setInterval(() => {
  bulletsArray.forEach((element, i) => {
    element.shoot();
    if (element.positionY > 200) {
      bulletsArray.splice(i, 1);
    }
  });
}, 3);

const bulletsArray = [];

document.addEventListener("keydown", (event) => {
  if (event.code === "ArrowLeft") {
    player.moveLeft();
  } else if (event.code === "ArrowRight") {
    player.moveRight();
  } else if (event.code === "ArrowUp") {
    player.moveUp();
  } else if (event.code === "ArrowDown") {
    player.moveDown();
  } else if (event.key === " ") {
    const newBullet = new Bullet();
    bulletsArray.push(newBullet);
    newBullet.createDomElement();
    console.log(bulletsArray);
  }
});

///////////////////////////////////////////////////////////////////////////////
////////////////////////////////// T  E  S  T /////////////////////////////////
///////////////////////////////////////////////////////////////////////////////
