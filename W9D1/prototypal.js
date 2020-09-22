// Function.prototype.inherits = function (parentClass) {
//   function Surrogate() {}
//   Surrogate.prototype = parentClass.prototype;
//   this.prototype = new Surrogate();
//   this.prototype.constructor = this;
// };

function MovingObject(speed) {
  this.speed = speed;
}

MovingObject.prototype.move = function () {
  console.log(`We can move at ${this.speed} mps!`);
};

function Ship(speed, type) {
  MovingObject.call(this, speed);
  this.type = type;
}

// Ship.inherits(MovingObject);

Ship.prototype = Object.create(MovingObject.prototype);
Ship.prototype.constructor = Ship;

Ship.prototype.boost = function () {
  console.log(`I am a ${this.type} so I can go this fast: ${this.speed} mps`);
};

function Asteroid(speed, mass) {
  MovingObject.call(this, speed);
  this.mass = mass;
}

Asteroid.prototype = Object.create(MovingObject.prototype);
Asteroid.prototype.constructor = Asteroid;

Asteroid.prototype.smash = function () {
  console.log(
    `I am crashing at ${this.speed} mps with my full mass: ${this.mass} tons`
  );
};

let asteroid1 = new Asteroid(100, 10000);
let ship1 = new Ship(50, "falcon");

asteroid1.move();
ship1.move();
asteroid1.smash();
ship1.boost();
// ship1.smash();
// asteroid1.boost();
