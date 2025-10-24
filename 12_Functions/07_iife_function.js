//Immediately Invoked Function Expression (IIFE)
//A function that runs immediately after it's defined.


// Example of an IIFE
(function() {
    console.log("IIFE executed! This function runs immediately!");
})();


// IIFE with parameters
(function(name) {
    console.log("Hello, " + name + "!");
})("Alice");


// IIFE that returns a value
const result = (function(a, b) {
    return a + b;
})(5, 10);
console.log("The result of the IIFE is: " + result);


// IIFE with arrow function syntax
(() => {
    console.log("IIFE using arrow function syntax!");
})();


// IIFE with parameters and return value
const multiplyResult = ((x, y) => x * y)(4, 5);
console.log("The multiplication result from IIFE is: " + multiplyResult);


// IIFE to create a private scope
const counter = (function() {
    let count = 0;
    return {
        increment: function() {
            count++;
            return count;
        },
        decrement: function() {
            count--;
            return count;
        }   
    };
})();
console.log("Counter increment: " + counter.increment());
console.log("Counter increment: " + counter.increment());
console.log("Counter decrement: " + counter.decrement());
