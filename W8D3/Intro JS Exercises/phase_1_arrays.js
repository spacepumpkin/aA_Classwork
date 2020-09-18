Array.prototype.uniq = function() {
    let x = [];
    for (let i = 0; i < this.length; i++) {
        if (x.includes(this[i])) {   
            continue;
        }
        else {
            x.push(this[i]);
        };
    };
    return x;
};

// console.log([1,2,3,3,3].uniq());

Array.prototype.twoSum = function() {
    let pairs = [];
    for (let i = 0; i < this.length; i+=1) { //i++ is the same as i += 1
        for (let j = 0; j < this.length; j++) {
            if (j > i) {
                if (this[i] + this[j] === 0) {
                    pairs.push([i,j]);
                };
            };
        };
    };
    return pairs;
};

// console.log([1,2,3,3,3,-1,-2].twoSum());
// go thru array with 2 index pointers, see if the sums === 0; push to arr if true

Array.prototype.transpose = function() {
    
    let transposed = []
    let i = 0
    while (i < this.length) {
        transposed.push([]);
        i++;
    }
        
    for (let i = 0; i < this.length; i ++) {
        for (let j = 0; j < this[0].length; j++) {
            transposed[i][j] = this[j][i];
        }
    }
    return transposed;
}

console.log([[1, 2, 3], [4, 5, 6], [7, 8, 9]].transpose())