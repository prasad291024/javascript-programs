/*
The for loop is used to repeat a block of code a specific number of times. It’s ideal when you know how many iterations you need.

Syntax:

for (initialization; condition; increment) {
  // Code to execute
}
- initialization: Sets the starting point (e.g., let i = 0).
- condition: The loop continues as long as this condition is true (e.g., i < 10).
- increment: Updates the loop variable after each iteration (e.g., i++).

*/

//Example:

for (let i = 0; i < 5; i++) {
  console.log("Iteration:", i);
}
// This will print "Iteration: 0" to "Iteration: 4"

console.log("-----");
// Example: Sum of first 10 natural numbers
let sum = 0;
for (let i = 1; i <= 10; i++) {
  sum += i; // sum = sum + i
}
console.log("Sum of first 10 natural numbers is:", sum);
// Output: Sum of first 10 natural numbers is: 55   

console.log("-----");
// Example: Looping through an array
let fruits = ['Apple', 'Banana', 'Cherry'];
for (let i = 0; i < fruits.length; i++) {
  console.log("Fruit:", fruits[i]);
}   
// Output:
// Fruit: Apple
// Fruit: Banana
// Fruit: Cherry

console.log("-----");
// Example: Looping backwards
for (let i = 5; i > 0; i--) {
  console.log("Countdown:", i);
}
// Output:
// Countdown: 5
// Countdown: 4 
// Countdown: 3
// Countdown: 2
// Countdown: 1 

console.log("-----");
// Example: Nested for loop
for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 2; j++) {
    console.log(`i: ${i}, j: ${j}`);
  }
}
// Output:
// i: 1, j: 1
// i: 1, j: 2
// i: 2, j: 1
// i: 2, j: 2
// i: 3, j: 1
// i: 3, j: 2

console.log("-----");
// Example: Using break and continue
for (let i = 1; i <= 10; i++) {
  if (i === 5) {
    console.log("Breaking at i =", i);
    break; // Exit the loop when i is 5
  }
    if (i % 2 === 0) {
    console.log("Skipping even number:", i);
    continue; // Skip even numbers
  }
    console.log("Current number:", i);
}
// Output:
// Current number: 1
// Skipping even number: 2
// Current number: 3
// Skipping even number: 4
// Breaking at i = 5

console.log("-----");

// Example: Using for loop to iterate over string characters
let message = "Hello";
for (let i = 0; i < message.length; i++) {
  console.log(`Character at index ${i}:`, message[i]);
}
// Output:
// Character at index 0: H
// Character at index 1: e
// Character at index 2: l
// Character at index 3: l
// Character at index 4: o
console.log("-----");

// Example: Multiplication table using for loop
let number = 3;
for (let i = 1; i <= 10; i++) {
  console.log(`${number} x ${i} = ${number * i}`);
}
// Output:
// 3 x 1 = 3
// 3 x 2 = 6
// 3 x 3 = 9
// 3 x 4 = 12
// 3 x 5 = 15
// 3 x 6 = 18
// 3 x 7 = 21
// 3 x 8 = 24
// 3 x 9 = 27
// 3 x 10 = 30
console.log("-----");

// Example: Finding factorial of a number using for loop
let num = 5;
let factorial = 1;
for (let i = 1; i <= num; i++) {
  factorial *= i; // factorial = factorial * i
}
console.log(`Factorial of ${num} is:`, factorial);
// Output: Factorial of 5 is: 120
console.log("-----");

// Example: Generating Fibonacci series using for loop
let n = 7; // Number of terms
let a = 0, b = 1;
console.log("Fibonacci Series:");   
for (let i = 1; i <= n; i++) {
  console.log(a);
  let nextTerm = a + b;
  a = b;
  b = nextTerm;
}
// Output:
// Fibonacci Series:
// 0
// 1
// 1
// 2    
// 3
// 5
// 8
console.log("-----");