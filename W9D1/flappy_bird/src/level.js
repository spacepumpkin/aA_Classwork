// export default class Level {

const CONSTANTS = {
  DISTANCE: 220,
  GAP: 150,
};

class Level {
  constructor(dimensions) {
    this.dimensions = dimensions;
    this.pipes = [
      { x: 520, y: 400 },
      { x: 720, y: 300 },
      { x: 940, y: 350 },
    ];
  }

  drawBackground(ctx) {
    ctx.fillStyle = "skyblue";
    ctx.fillRect(0, 0, this.dimensions.width, this.dimensions.height);
  }

  animate(ctx) {
    this.drawBackground(ctx);
  }

  movePipes() {
    for (let i = 0; i < this.pipes.length; i++) {
      this.pipes[i].x -= 5;
    }
    if (this.pipes[0].x === 0) {
      let newPipe = {
        x: this.pipes[2].x + CONSTANTS.DISTANCE,
        y: Math.floor(Math.random() * 470 + 170),
      };
      this.pipes.shift();
      this.pipes.push(newPipe);
    }
  }
}

module.exports = Level;
