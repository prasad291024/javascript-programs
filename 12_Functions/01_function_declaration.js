
/*
A named function defined using the function keyword. 
It can be called before it's defined due to hoisting.

// Function Declaration
function greet() {
  console.log("Hello, Prasad!");
}
*/


// Function Declaration Example: 
function add(a, b) {
  return a + b;
}

console.log("Sum:", add(5, 3)); // 8
console.log("Sum:", add(10, 20)); // 30
// Calling the function before its declaration
console.log("Sum:", add(7, 2)); // 9    

