// * Stores a Game instance.
// * Stores a canvas context to draw the game into.
// * Installs key listeners to move the ship and fire bullets.
// * Installs a timer to call Game.prototype.step

const Game = require("./game");

function GameView (game, ctx) {
  this.game = game;
  this.ctx = ctx;
}

GameView.prototype.start = function() {
  let that = this;
  // setInterval( , 20 );
  setInterval( function() {
    that.game.moveObjects()
    // console.log("hit");
    that.game.draw(that.ctx);
    }, 
    20 
  );
  // this.game.draw(this.ctx);
}

module.exports = GameView;