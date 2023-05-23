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

class Enemy {
  constructor() {
    this.width = 6.2;
    this.height = 6;
    this.positionX = Math.floor(
      Math.random() * (45 - this.width + 1)
    ); /* 0 .... 100-w */
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
  });
}, 10);

// ENEMY 2
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
  });
}, 5);

class Bullet {
  constructor() {
    this.width = 1;
    this.height = 1.5;
  }
}

document.addEventListener("keydown", (event) => {
  if (event.code === "ArrowLeft") {
    player.moveLeft();
  } else if (event.code === "ArrowRight") {
    player.moveRight();
  } else if (event.code === "ArrowUp") {
    player.moveUp();
  } else if (event.code === "ArrowDown") {
    player.moveDown();
  } else if (event.code === " ") {
    player.shoot();
  }
});

///////////////////////////////////////////////////////////////////////////////
////////////////////////////////// T  E  S  T /////////////////////////////////
///////////////////////////////////////////////////////////////////////////////
