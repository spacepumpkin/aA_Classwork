// * Holds collections of the asteroids, bullets, and your ship.
// * Game.prototype.step method calls Game.prototype.move on all the objects, 
//   and Game.prototype.checkCollisions checks for colliding objects.
// * Game.prototype.draw(ctx) draws the game.
// * Keeps track of dimensions of the space; wraps objects around when they drift off the screen.

const CONSTANTS = {
  DIM_X: window.innerWidth,
  DIM_Y: window.innerHeight,
  // DIM_X: 1000,
  // DIM_Y: 1000,
  NUM_ASTEROIDS: 20
}

function Game () {
    this.asteroids = this.addAsteroids();
}

Game.prototype.addAsteroids = function() {
  let asteroids = [];
  for (let i = 0; i < CONSTANTS.NUM_ASTEROIDS; i++ ) {
    asteroids.push(new Asteroid({ pos: this.randomPosition() }));
  }
  return asteroids
}

Game.prototype.randomPosition = function() {
  return [Math.random() * CONSTANTS.DIM_X, Math.random() * CONSTANTS.DIM_Y];
}


Game.prototype.draw = function(ctx) {
    ctx.clearRect(0,0, CONSTANTS.DIM_X, CONSTANTS.DIM_Y);
    this.asteroids.forEach((asteroid)=>{
      asteroid.draw(ctx);
    })
} 

Game.prototype.moveObjects = function (){
    this.asteroids.forEach((asteroid)=>{
        asteroid.move();
    })
};

Game.prototype.wrap = function(pos){
    let x = pos[0];
    let y = pos[1];
    let newPosition = [];
    if(x > 0){
    newPosition[0] = x % CONSTANTS.DIM_X;
    }else{
        newPosition[0] = CONSTANTS.DIM_X + x;
    }

}

module.exports = Game;