// * Utility code, especially vector math stuff

// this is math, not JavaScript
// Dist([x_1, y_1], [x_2, y_2]) = sqrt((x_1 - x_2) ** 2 + (y_1 - y_2) ** 2)

// Norm([x_1, y_1]) = Dist([0, 0], [x_1, y_1])

const Util = {
  inherits(childClass, parentClass) {
    function Surrogate() {}; //create empty Surrogate pointer class
    Surrogate.prototype = parentClass.prototype; // set Surrogate prototype to parent prototype
    childClass.prototype = new Surrogate(); // set child prototype to new Surrogate instance (to link prototype chain)
    childClass.prototype.constructor = childClass; // set child constructor to child
  },

  randomVec(length){
      const deg = 2 * Math.PI * Math.random();
      return Util.scale([Math.sin(deg), Math.cos(deg)], length);
  },
  
  scale(vec, m) {
    return [vec[0] * m, vec[1] * m];
  }
};

module.exports = Util;
