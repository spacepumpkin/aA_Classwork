const CONSTANTS = {
  GRAVITY: 0.8,
  FLAP_SPEED: -8,
  TERMINAL_VEL: 12,
  BIRD_WIDTH: 40,
  BIRD_HEIGHT: 30,
};

class Bird {
  constructor(dimensions) {
    this.x = Math.floor(dimensions["width"] / 3);
    this.y = Math.floor(dimensions["height"] / 2);
    this.velocity = 0;
  }

  drawBird(ctx) {
    ctx.fillStyle = "yellow";
    ctx.fillRect(this.x, this.y, CONSTANTS.BIRD_WIDTH, CONSTANTS.BIRD_HEIGHT);
  }

  animate(ctx) {
    this.move();
    this.drawBird(ctx);
  }

  move() {
    this.y += this.velocity;
    this.velocity += CONSTANTS.GRAVITY;
  }

  flap() {
    this.velocity = CONSTANTS.FLAP_SPEED;
  }
}

module.exports = Bird;
