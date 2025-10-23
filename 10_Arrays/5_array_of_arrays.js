// JavaScript Array of Arrays (Nested Arrays)
// ------------------------------------------
// Arrays can store any data type, including other arrays.
// This allows us to create multidimensional or grouped data structures.

// ===============================
// 1. Basic Nested Arrays
// ===============================
const firstNums = [1, 2, 3];
const secondNums = [1, 4, 9];

const arrayOfArray = [firstNums, secondNums];

console.log("Array of arrays:", arrayOfArray);         // [[1, 2, 3], [1, 4, 9]]
console.log("First inner array:", arrayOfArray[0]);    // [1, 2, 3]
console.log("Second inner array:", arrayOfArray[1]);   // [1, 4, 9]
console.log("First element of second array:", arrayOfArray[1][0]); // 1

// ===============================
// 2. Real-World Example: Full Stack
// ===============================
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux'];
const backEnd = ['Node', 'Express', 'MongoDB'];

const fullStack = [frontEnd, backEnd];

console.log("Full Stack:", fullStack);
// [["HTML", "CSS", "JS", "React", "Redux"], ["Node", "Express", "MongoDB"]]

console.log("Length of fullStack:", fullStack.length); // 2
console.log("Front-end stack:", fullStack[0]);         // ['HTML', 'CSS', 'JS', 'React', 'Redux']
console.log("Back-end stack:", fullStack[1]);          // ['Node', 'Express', 'MongoDB']
console.log("First tech in front-end:", fullStack[0][0]); // HTML
console.log("Last tech in back-end:", fullStack[1][2]);   // MongoDB
