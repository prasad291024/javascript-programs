/*
Function Expression
A function expression assigns an anonymous function to a variable. 
It cannot be called before it's defined, as it is not hoisted.

Syntax:
const greet = function() {
  console.log("Hello from expression!");
};


*/ 

//Function Expression Example:
const multiply = function(x, y) {
  return x * y;
};

console.log("Product:", multiply(4, 5)); // 20
console.log("Product:", multiply(7, 3)); // 21

// Calling the function expression after its definition
greet(); // "Hello from expression!"        
// Uncommenting the line below will cause an error because function expressions are not hoisted
// greet(); // Error: greet is not defined
/*
A function expression assigns an anonymous function to a variable. 
It cannot be called before it's defined, as it is not hoisted.
*/
/* Function Expression Example: 
const subtract = function(a, b) {
  return a - b;
};
console.log("Difference:", subtract(10, 4)); // 6
console.log("Difference:", subtract(20, 5)); // 15
*/
