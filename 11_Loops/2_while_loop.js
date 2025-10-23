
/*
The while loop repeats a block of code as long as the condition is true. It’s useful when the number of iterations is unknown.

while (condition) {
  // Code to execute
}

*/


// Example: Print numbers from 0 to 4
let i = 0;
while (i < 5) {
  console.log("While loop:", i);
  i++;
}
// Output: 0, 1, 2, 3, 4
// Example: Sum of first 5 natural numbers
let sum = 0;
let n = 1;  
while (n <= 5) {
  sum += n;
  n++;
}   
console.log("Sum of first 5 natural numbers:", sum); // Output: 15

// Example: Print characters of a string one by one
let str = "Hello";
let index = 0;
while (index < str.length) {
  console.log("Character at index", index + ":", str[index]);
  index++;
}   
// Output: H, e, l, l, o
// Example: Using while loop to validate user input (simulated here)
let userInput = ""; // Simulated user input
let attempts = 0;
const maxAttempts = 3;
while (userInput !== "secret" && attempts < maxAttempts) {
  // Simulate user input (in real scenario, get input from user)
  userInput = "wrong"; // Simulated wrong input
  attempts++;
  console.log("Attempt", attempts + ": Incorrect password");
}
  