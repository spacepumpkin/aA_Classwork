Array.prototype.bubbleSort = function() {
    let sorted = false;
    // let arr = this;
    // go through each el o
    // f/
//i wanted to see if this works lol nope
// maybe it could, but we havne't got the base one to work yet
// yeah. might want to stop the terminal lol

    while (!sorted) {
        // this.forEach( el => {

        // })
        sorted = true;
        for(let i = 0; i < this.length-1; i++) {
            if (this[i] > this[i+1]) {
                [this[i], this[i+1]] = [this[i+1], this[i]]; //yeah there's prob something wrong with this
                sorted = false;  
            };
        };
    };
    return this;  
};

console.log([1,6,3,4,0].bubbleSort());