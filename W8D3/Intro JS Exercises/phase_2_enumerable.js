// myEach
Array.prototype.myEach = function(callback) {
    for(let i = 0; i < this.length; i++) {
        callback(this[i]);
    };
};

function doubler(el) {
    // console.log(el * 2);
    debugger
    return el * 2
};

// console.log([1,2,3,4,5].myEach(doubler));
// console.log([1,2,3,4,5].myEach( function (el) {
//     return el * 2;
// }));
// console.log([1,2,3,4,5].myEach( (el) => {
//     return el * 2;
// }));

// with Aishwarya
// Array.prototype.myMap = function (callback) {
//     let res = [];
//     for (let i = 0; i < this.length; i++) {
//         res.push(callback(this[i]));
//     };
//     return res;
// };

// with Julia flextime
Array.prototype.myMap = function(callback) {
    let res = [];
    
    this.myEach( function (el) {
        res.push(callback(el));
    });
    
    return res;
};

console.log(test.myMap( (num) => num * num));
console.log(test.myMap( (num) => {
    return num * num
}));


// console.log([1, 2, 3, 4, 5].myMap(doubler));

Array.prototype.myReduce = function (callback, initialValue) {
    let newArr = this
    let acc

    if (initialValue) {
        acc = initialValue; //can't use let here because we can't access it outside the block, so we declare it outside
    }
    else {
        acc = this[0];
        newArr = newArr.slice(1)
    }

    newArr.myEach(el => acc = callback(acc, el)); //el here is like |el| in ruby

    return acc;
}

console.log([1, 2, 3].myReduce(function (acc, el) {return acc + el;})); 
// console.log([1, 2, 3].myReduce((acc, el) => {return acc + el;})); 

console.log([1, 2, 3].myReduce(function (acc, el) {
    return acc + el;
}, 25));


// const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
// console.log(animals.slice(2));
// // expected output: Array ["camel", "duck", "elephant"]

// console.log(animals.slice(2, 4));
// // expected output: Array ["camel", "duck"]