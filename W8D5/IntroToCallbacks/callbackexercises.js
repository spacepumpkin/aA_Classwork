// ------ Clock ---------------------

// chant() {
//     let i = 0;
//     that = setInterval(this._yar, 1000) // accepts callback fn and delay time in ms
//     i ++
//     if i == 10 {
//         clearInterval(that);
//     }    
// }

class Clock {
    constructor() {
        this.date = new Date();// 1. Create a Date object.
        this.hours = this.date.getHours(); // 2. Store the hours, minutes, and seconds.
        this.minutes = this.date.getMinutes();
        this.seconds = this.date.getSeconds();
        this._tick = this._tick.bind(this);
        setInterval(this._tick, 1000);
        // 3. Call printTime.
        // 4. Schedule the tick at 1 second intervals.
    }
    
    printTime() {
        console.log(`${this.hours}:${this.minutes}:${this.seconds}`)
        // Format the time in HH:MM:SS
        // Use console.log to print it.
    }
    
    _tick() {
        if (this.seconds === 59) {
            this.minutes += 1;
            this.seconds = 0;
            if (this.minutes === 59) {
                this.hours += 1;
                this.minutes = 0;
                if (this.hours === 23) {
                    this.hours = 0;
                }
            }
        } else {
            this.seconds += 1;
        }
        
        this.printTime();
        // 1. Increment the time by one second.
        // 2. Call printTime.
    }
}

// const clock = new Clock();
// console.log(clock);
// console.log(clock.printTime());
// console.log(clock.printTime());






// ------ ADD NUMBERS ---------------------

// const readline = require('readline');

// const reader = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// function addNumbers(sum, numsLeft, completionCallBack) {
//     if (numsLeft === 0) {
//         reader.close();
//         // return completionCallBack(sum);
//         // reader.close breaks out of recursive call!
//     }
//     if (numsLeft > 0) {
//         reader.question("Give me a number! ", (res) => {
//             sum += parseInt(res);
//             completionCallBack(sum)
//             addNumbers(sum, numsLeft - 1, completionCallBack);
//         });
//     } 
// }

// addNumbers(0, 3, sum => console.log(`Total Sum: ${sum}`));





// function teaAndBiscuits() {
//     let answer1, answer2;

//     reader.question("Do you want tea?", (res) => {
//         answer1 = res;
//         console.log(`You replied ${res}`)
//     });

//     reader.question("Do you want biscuits?", (res) => {
//         answer2 = res;
//         console.log(`You replied ${res}.`)
//     });

//     const firstRes = (answer1 === 'yes') ? 'do' : 'don\'t';
//     const secondRes = (answer2 === 'yes') ? 'do' : 'don\'t';
//     console.log(`So you ${firstRes} want tea and you ${secondRes} want biscuits.`);
//     reader.close();
// }



// ------ ABSURD BUBBLE SORT ---------------------


const readline = require('readline');

const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Write this first.
function askIfGreaterThan(el1, el2, callback) {
    // Prompt user to tell us whether el1 > el2; pass true back to the
    // callback if true; else false.

    reader.question(`Is ${el1} greater than ${el2}? Reply Y/N.`, (res) => {
        (res === 'Y') ? callback(true) : callback(false) ;
        // reader.close();
    })

}

// askIfGreaterThan(1, 2, (res) => { console.log(res) })

// Once you're done testing askIfGreaterThan with dummy arguments, write this.
function innerBubbleSortLoop(arr, i, madeAnySwaps, outerBubbleSortLoop) {
    // Do an "async loop":
    // 1. If (i == arr.length - 1), call outerBubbleSortLoop, letting it
    //    know whether any swap was made.
    if (i === arr.length - 1) {
        // console.log(madeAnySwaps);
        return outerBubbleSortLoop(madeAnySwaps);
    } else {
        askIfGreaterThan(arr[i], arr[i+1], (isGreaterThan) => {
            if (isGreaterThan === true) {
                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
                madeAnySwaps = true
                // console.log(arr)
            }
            innerBubbleSortLoop(arr, i+1, madeAnySwaps, outerBubbleSortLoop)
        });
    }
    // 2. Else, use `askIfGreaterThan` to compare `arr[i]` and `arr[i +
    //    1]`. Swap if necessary. Call `innerBubbleSortLoop` again to
    //    continue the inner loop. You'll want to increment i for the
    //    next call, and possibly switch madeAnySwaps if you did swap.
}

// innerBubbleSortLoop([5,8,3,2,1], 0, false);

// Once you're done testing innerBubbleSortLoop, write outerBubbleSortLoop.
// Once you're done testing outerBubbleSortLoop, write absurdBubbleSort.

function absurdBubbleSort(arr, sortCompletionCallback) {
    // let i = 0; 
    
    function outerBubbleSortLoop(madeAnySwaps) {
        // Begin an inner loop if you made any swaps. Otherwise, call
        // `sortCompletionCallback`.
        // i = 0
        if (madeAnySwaps) {
            innerBubbleSortLoop(arr, i = 0, false, outerBubbleSortLoop);
        } else {
            sortCompletionCallback(arr);
        }
    }
    outerBubbleSortLoop(true)
    // Kick the first outer loop off, starting `madeAnySwaps` as true.
}

absurdBubbleSort([3, 2, 1], function (arr) {
    console.log("Sorted array: " + JSON.stringify(arr));
    reader.close();
});

// SAME
// OMG : D


// WHAT A DAY! <----- !!!
// so its not logically correct... but it works LOL
// Im smiling too much right now LOL <-- SAME XD