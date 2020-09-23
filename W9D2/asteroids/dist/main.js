/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/asteroid.js":
/*!*************************!*\
  !*** ./src/asteroid.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// * Spacerock. It inherits from MovingObject.\nconst MovingObject = __webpack_require__(/*! ./moving_object */ \"./src/moving_object.js\");\nconst Util = __webpack_require__(/*! ./utils */ \"./src/utils.js\");\n\n// inherits(childClass, parentClass) {\n//   function Surrogate() { }; //create empty Surrogate pointer class\n//   Surrogate.prototype = parentClass.prototype; // set Surrogate prototype to parent prototype\n//   childClass.prototype = new Surrogate(); // set child prototype to new Surrogate instance (to link prototype chain)\n//   childClass.prototype.constructor = childClass; // set child constructor to child\n// },\n\nUtil.inherits(Asteroid, MovingObject)\n\nconst CONSTANT = {\n  COLOR: \"black\",\n  RADIUS: 30,\n  \n}\n\nfunction Asteroid(options){\n    // options.pos should be passed in\n    options.color = CONSTANT.COLOR;\n    options.radius = CONSTANT.RADIUS;\n    options.vel = Util.randomVec(6);\n\n    MovingObject.call(this, options);\n\n}\n\n// randomVec(length){\n//   const deg = 2 * Math.PI * Math.random();\n//   return Util.scale([Math.sin(deg), Math.cos(deg)], length);\n// },\n\nmodule.exports = Asteroid;\n\n\n//# sourceURL=webpack:///./src/asteroid.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// * Holds collections of the asteroids, bullets, and your ship.\n// * Game.prototype.step method calls Game.prototype.move on all the objects, \n//   and Game.prototype.checkCollisions checks for colliding objects.\n// * Game.prototype.draw(ctx) draws the game.\n// * Keeps track of dimensions of the space; wraps objects around when they drift off the screen.\n\nconst CONSTANTS = {\n  DIM_X: window.innerWidth,\n  DIM_Y: window.innerHeight,\n  // DIM_X: 1000,\n  // DIM_Y: 1000,\n  NUM_ASTEROIDS: 20\n}\n\nfunction Game () {\n    this.asteroids = this.addAsteroids();\n}\n\nGame.prototype.addAsteroids = function() {\n  let asteroids = [];\n  for (let i = 0; i < CONSTANTS.NUM_ASTEROIDS; i++ ) {\n    asteroids.push(new Asteroid({ pos: this.randomPosition() }));\n  }\n  return asteroids\n}\n\nGame.prototype.randomPosition = function() {\n  return [Math.random() * CONSTANTS.DIM_X, Math.random() * CONSTANTS.DIM_Y];\n}\n\n\nGame.prototype.draw = function(ctx) {\n    ctx.clearRect(0,0, CONSTANTS.DIM_X, CONSTANTS.DIM_Y);\n    this.asteroids.forEach((asteroid)=>{\n      asteroid.draw(ctx);\n    })\n} \n\nGame.prototype.moveObjects = function (){\n    this.asteroids.forEach((asteroid)=>{\n        asteroid.move();\n    })\n};\n\nGame.prototype.wrap = function(pos){\n    let x = pos[0];\n    let y = pos[1];\n    let newPosition = [];\n    if(x > 0){\n    newPosition[0] = x % CONSTANTS.DIM_X;\n    }else{\n        newPosition[0] = CONSTANTS.DIM_X + x;\n    }\n\n}\n\nmodule.exports = Game;\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/game_view.js":
/*!**************************!*\
  !*** ./src/game_view.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// * Stores a Game instance.\n// * Stores a canvas context to draw the game into.\n// * Installs key listeners to move the ship and fire bullets.\n// * Installs a timer to call Game.prototype.step\n\nconst Game = __webpack_require__(/*! ./game */ \"./src/game.js\");\n\nfunction GameView (game, ctx) {\n  this.game = game;\n  this.ctx = ctx;\n}\n\nGameView.prototype.start = function() {\n  let that = this;\n  // setInterval( , 20 );\n  setInterval( function() {\n    that.game.moveObjects()\n    // console.log(\"hit\");\n    that.game.draw(that.ctx);\n    }, \n    20 \n  );\n  // this.game.draw(this.ctx);\n}\n\nmodule.exports = GameView;\n\n//# sourceURL=webpack:///./src/game_view.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// const canvasEl = document.getElementById(\"game-canvas\");\n\n\nconst MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./src/moving_object.js\");\nconst Asteroid = __webpack_require__(/*! ./asteroid.js */ \"./src/asteroid.js\");\nconst Game = __webpack_require__(/*! ./game.js */ \"./src/game.js\");\nconst GameView = __webpack_require__(/*! ./game_view.js */ \"./src/game_view.js\");\nwindow.MovingObject = MovingObject;\nwindow.Asteroid = Asteroid;\nwindow.Game = Game;\nwindow.GameView = GameView;\n\n\nconsole.log('webpack is working')\n\nwindow.addEventListener(\"DOMContentLoaded\", (event) => {\n  const canvasEl = document.getElementById(\"game-canvas\")\n  canvasEl.height = window.innerHeight;\n  canvasEl.width = window.innerWidth;\n  ctx = canvasEl.getContext(\"2d\");\n\n  const game = new Game();\n  new GameView(game, ctx).start();\n})\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/moving_object.js":
/*!******************************!*\
  !*** ./src/moving_object.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// * Base class for anything that moves.\n// * Most important methods are MovingObject.prototype.move, \n// * MovingObject.prototype.draw(ctx), MovingObject.prototype.isCollidedWith(otherMovingObject).\n\n\nfunction MovingObject (options) {\n  this.pos = options[\"pos\"]; // [x, y]\n  this.vel = options[\"vel\"]; // [vel_x, vel_y]\n  this.radius = options[\"radius\"];\n  this.color = options[\"color\"];\n}\n\nMovingObject.prototype.draw = function(ctx) {\n  ctx.fillStyle = this.color; // sets color to fill\n  ctx.beginPath(); // starts a new \"path\" (drawing of line)\n\n  // ctx.arc(x, y, radius, starting angle, ending angle);\n  ctx.arc(\n    this.pos[0], // this.pos[0]\n    this.pos[1], // this.pos[1]\n    this.radius,\n    0, // 0 radians\n    2 * Math.PI, // 360 degrees === 2*pi\n    false\n  );\n\n  ctx.fill(); // fills closed shape/path\n}\n\nMovingObject.prototype.move = function() {\n  let vel_x = this.vel[0]\n  let vel_y = this.vel[1]\n  this.pos = [vel_x + this.pos[0], vel_y + this.pos[1]];\n}\n\nmodule.exports = MovingObject;\n\n//# sourceURL=webpack:///./src/moving_object.js?");

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// * Utility code, especially vector math stuff\n\n// this is math, not JavaScript\n// Dist([x_1, y_1], [x_2, y_2]) = sqrt((x_1 - x_2) ** 2 + (y_1 - y_2) ** 2)\n\n// Norm([x_1, y_1]) = Dist([0, 0], [x_1, y_1])\n\nconst Util = {\n  inherits(childClass, parentClass) {\n    function Surrogate() {}; //create empty Surrogate pointer class\n    Surrogate.prototype = parentClass.prototype; // set Surrogate prototype to parent prototype\n    childClass.prototype = new Surrogate(); // set child prototype to new Surrogate instance (to link prototype chain)\n    childClass.prototype.constructor = childClass; // set child constructor to child\n  },\n\n  randomVec(length){\n      const deg = 2 * Math.PI * Math.random();\n      return Util.scale([Math.sin(deg), Math.cos(deg)], length);\n  },\n  \n  scale(vec, m) {\n    return [vec[0] * m, vec[1] * m];\n  }\n};\n\nmodule.exports = Util;\n\n\n//# sourceURL=webpack:///./src/utils.js?");

/***/ })

/******/ });