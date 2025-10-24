
// A function that calls itself to solve a problem.

// Example: Recursive Function in JavaScript
// Recursive function to calculate the factorial of a number
function factorial(n) {
  if (n === 0) return 1;
  return n * factorial(n - 1);
}

console.log("Factorial of 5:", factorial(5)); // 120
console.log("Factorial of 0:", factorial(0)); // 1
console.log("Factorial of 7:", factorial(7)); // 5040