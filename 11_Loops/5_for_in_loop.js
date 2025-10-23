/*
Title: JavaScript for...in Loop
The for...in loop is used to iterate over the keys (properties) of an object.

Syntax:
for (const key in object) {
  // Code to execute
}

*/

// Example:
const person = { name: 'Prasad', age: 30, role: 'QA Engineer' };
for (const key in person) {
  console.log(`${key}: ${person[key]}`);
}
// Output:
// name: Prasad
// age: 30
// role: QA Engineer