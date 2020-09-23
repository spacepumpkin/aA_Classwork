// const canvasEl = document.getElementById("game-canvas");


const MovingObject = require("./moving_object.js");
const Asteroid = require("./asteroid.js");
const Game = require("./game.js");
const GameView = require("./game_view.js");
window.MovingObject = MovingObject;
window.Asteroid = Asteroid;
window.Game = Game;
window.GameView = GameView;


console.log('webpack is working')

window.addEventListener("DOMContentLoaded", (event) => {
  const canvasEl = document.getElementById("game-canvas")
  canvasEl.height = window.innerHeight;
  canvasEl.width = window.innerWidth;
  ctx = canvasEl.getContext("2d");

  const game = new Game();
  new GameView(game, ctx).start();
})