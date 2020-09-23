// * Base class for anything that moves.
// * Most important methods are MovingObject.prototype.move, 
// * MovingObject.prototype.draw(ctx), MovingObject.prototype.isCollidedWith(otherMovingObject).


function MovingObject (options) {
  this.pos = options["pos"]; // [x, y]
  this.vel = options["vel"]; // [vel_x, vel_y]
  this.radius = options["radius"];
  this.color = options["color"];
}

MovingObject.prototype.draw = function(ctx) {
  ctx.fillStyle = this.color; // sets color to fill
  ctx.beginPath(); // starts a new "path" (drawing of line)

  // ctx.arc(x, y, radius, starting angle, ending angle);
  ctx.arc(
    this.pos[0], // this.pos[0]
    this.pos[1], // this.pos[1]
    this.radius,
    0, // 0 radians
    2 * Math.PI, // 360 degrees === 2*pi
    false
  );

  ctx.fill(); // fills closed shape/path
}

MovingObject.prototype.move = function() {
  let vel_x = this.vel[0]
  let vel_y = this.vel[1]
  this.pos = [vel_x + this.pos[0], vel_y + this.pos[1]];
}

module.exports = MovingObject;