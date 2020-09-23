// * Spacerock. It inherits from MovingObject.
const MovingObject = require("./moving_object");
const Util = require("./utils");

// inherits(childClass, parentClass) {
//   function Surrogate() { }; //create empty Surrogate pointer class
//   Surrogate.prototype = parentClass.prototype; // set Surrogate prototype to parent prototype
//   childClass.prototype = new Surrogate(); // set child prototype to new Surrogate instance (to link prototype chain)
//   childClass.prototype.constructor = childClass; // set child constructor to child
// },

Util.inherits(Asteroid, MovingObject)

const CONSTANT = {
  COLOR: "black",
  RADIUS: 30,
  
}

function Asteroid(options){
    // options.pos should be passed in
    options.color = CONSTANT.COLOR;
    options.radius = CONSTANT.RADIUS;
    options.vel = Util.randomVec(6);

    MovingObject.call(this, options);

}

// randomVec(length){
//   const deg = 2 * Math.PI * Math.random();
//   return Util.scale([Math.sin(deg), Math.cos(deg)], length);
// },

module.exports = Asteroid;
