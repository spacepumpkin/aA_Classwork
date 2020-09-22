//#####

// function sum() {
//   let args = Array.from(arguments);
//   // no built-in sum for Arr
//   let total = 0;
//   for (let i = 0; i < args.length; i++) {
//     total += args[i];
//   }
//   return total;
// }

function sum() {
  let args = [...arguments];
  // no built-in sum for Arr
  let total = 0;
  for (let i = 0; i < args.length; i++) {
    total += args[i];
  }
  return total;
}

// console.log(sum(1, 2, 3, 4) === 10); // true
// console.log(sum(1, 2, 3, 4, 5) === 15); // true

//################################ myBind curried ###############################

Function.prototype.myBind = function (ctx, ...bindargs) {
  // let bindargs = args;
  return (...callargs) => {
    let totalargs = bindargs.concat(callargs);
    return this.apply(ctx, totalargs);
  };
};

// class Cat {
//   constructor(name) {
//     this.name = name;
//   }

//   says(sound, person) {
//     console.log(`${this.name} says ${sound} to ${person}!`);
//     return true;
//   }
// }

// class Dog {
//   constructor(name) {
//     this.name = name;
//   }
// }

// const markov = new Cat("Markov");
// const pavlov = new Dog("Pavlov");

// markov.says("meow", "Ned");
// // Markov says meow to Ned!
// // true

// // bind time args are "meow" and "Kush", no call time args
// markov.says.myBind(pavlov, "meow", "Kush")();
// // Pavlov says meow to Kush!
// // true

// // no bind time args (other than context), call time args are "meow" and "a tree"
// markov.says.myBind(pavlov)("meow", "a tree");
// // Pavlov says meow to a tree!
// // true

// // bind time arg is "meow", call time arg is "Markov"
// markov.says.myBind(pavlov, "meow")("Markov");
// // Pavlov says meow to Markov!
// // true

// // no bind time args (other than context), call time args are "meow" and "me"
// const notMarkovSays = markov.says.myBind(pavlov);
// notMarkovSays("meow", "me");
// // Pavlov says meow to me!
// // true

//############################### sumThree #################################

function sumThree(num1, num2, num3) {
  return num1 + num2 + num3;
}

function curriedSum(numArgs) {
  let numbers = [];
  return (_curriedSum = (num) => {
    numbers.push(num);
    if (numbers.length === numArgs) {
      return sum(...numbers);
    } else {
      return _curriedSum;
    }
  });
}

// const testSum = curriedSum(4);
// console.log(testSum(5)(30)(20)(1)); // => 56

// sumThree(4, 20, 6); // == 30

Function.prototype.curry = function (numArgs) {
  let seenArgs = [];
  const that = this;
  return function _curried() {
    seenArgs = seenArgs.concat(Array.from(arguments));
    console.log(seenArgs);
    if (seenArgs.length === numArgs) {
      return that.apply(null, seenArgs);
      // return that(...seenArgs);
    } else {
      return _curried;
    }
  };
};

// Function.prototype.curry = function (numArgs) {
//   let seenArgs = [];
//   return (_curried = (...nums) => {
//     seenArgs = seenArgs.concat(nums);
//     console.log(seenArgs);
//     if (seenArgs.length === numArgs) {
//       // return this.apply(this, seenArgs);
//       return this(...seenArgs);
//     } else {
//       return _curried;
//     }
//   });
// };

// you'll write `Function#curry`!
let f1 = sumThree.curry(3); // tells `f1` to wait until 3 arguments are given before running `sumThree`
f1 = f1(4); // [Function]
f1 = f1(20); // [Function]
f1 = f1(6); // = 30

// or more briefly:
console.log(sumThree.curry(3)(4)(20)(6)); // == 30
