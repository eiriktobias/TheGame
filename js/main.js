class Player {
  constructor() {
    this.width = 10;
    this.height = 10;
    this.positionX = 45;
    this.positionY = 10;
  }
}

const player = new Player();

createDomElement() {
    this.domElement = document.createElement("div");
    this.domElement = "player";
}
//Players movement
moveLeft() {
    this.positionX = this.positionX - 2;
    this.domElement.style.left = this.positionX + "vw";
}

moveLeft() {
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

class Enemy {
    constructor() {
        this.width = 10;
        this.height = 10;
        this.positionX = 45;
        this.positionY = 100;
    }
}

const enemy = new Enemy();