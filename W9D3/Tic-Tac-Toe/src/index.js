
const View = require('./ttt-view.js'); // require appropriate file
const Game = require('./ttt-code/game.js'); // require appropriate file

  $(() => {
    console.log("hello webpack works!");
    $el = $(".ttt");
    let _game = new Game();
    let _view = new View(_game, $el);
    _view.bindEvents();

    // Your code here
  });
