
/*
The do...while loop is similar to while, 
but it executes at least once before checking the condition

Syntax: 
do {
  // Code to execute
} while (condition);

*/
// Example:
let i = 0;
do {
  console.log("Do-While loop:", i);
  i++;
} while (i < 5);
// This will print numbers 0 to 4

// The key difference is that the code block inside do will always execute at least once,
// even if the condition is false from the beginning.

