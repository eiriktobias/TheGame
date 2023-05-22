class Player {
  constructor() {
    this.width = 10;
    this.height = 10;
    this.positionX = 25;
    this.positionY = 10;

    this.domElement = null;
    this.createDomElement();
  }

  createDomElement() {
    this.domElement = document.createElement("div");
    this.domElement.id = "player";
    this.domElement.style.width = this.width + "vw";
    this.domElement.style.height = this.height + "vh";
    this.domElement.style.left = this.positionX + "vw";
    this.domElement.style.bottom = this.positionY + "vh";

    const parentElm = document.getElementById("board");
    parentElm.appendChild(this.domElement);
  }

  //Players movement
  moveLeft() {
    this.positionX = this.positionX - 2;
    this.domElement.style.left = this.positionX + "vw";
  }
  moveRight() {
    this.positionX = this.positionX + 2;
    this.domElement.style.left = this.positionX + "vw";
  }
  moveUp() {
    this.positionY = this.positionX + 2;
    this.domElement.style.up = this.positionY + "vh";
  }
  moveDown() {
    this.positionY = this.positionX - 2;
    this.domElement.style.up = this.positionY + "vh";
  }
} // E N D  C L A S S  P L A Y E R

const player = new Player();

class Enemy {
  constructor() {
    this.width = 10;
    this.height = 10;
    this.positionX = 45;
    this.positionY = 100;
    this.domElement = null;
    this.createDomElement();
  }
  createDomElement() {
    this.domElement = document.createElement("div");
    this.domElement.className = "enemy";
    this.domElement.style.width = this.width + "vw";
    this.domElement.style.height = this.height + "vh";
    this.domElement.style.left = this.positionX + "vw";
    this.domElement.style.bottom = this.positionY + "vh";

    const parentElm = document.getElementById("board");
    parentElm.appendChild(this.domElement);
  }
  moveDown() {
    this.positionY = this.positionY - 1;
    this.domElement.style.bottom = this.positionY + "vh";
  }
} // E N D  C L A S S  E N E M Y

const enemyArray = [];

setInterval(() => {
  const newEnemy = new Enemy();
  enemyArray.push(newEnemy);
}, 3500);

setInterval(() => {
  enemyArray.forEach((enemyInstance) => {
    enemyInstance.moveDown();
  });
}, 60);
