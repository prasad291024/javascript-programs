

// Arrow Function Example

const greet = () => {
  console.log("Hello from arrow function!");
};


// Call the function
greet(); // Hello from arrow function!


// Example with parameters
const divide = (a, b) => a / b;

console.log("Division:", divide(10, 2)); // 5
console.log("Division:", divide(9, 3)); // 3
// Example with single parameter
const square = x => x * x;
console.log("Square:", square(4)); // 16
console.log("Square:", square(7)); // 49
// Example with no parameters
const getCurrentYear = () => new Date().getFullYear();
console.log("Current Year:", getCurrentYear()); // Current Year: 2024 (or current year)
console.log("Current Year:", getCurrentYear()); // Current Year: 2024 (or current year)
// Example with multiple statements
const calculateArea = (length, width) => {
  const area = length * width;
  return area;
}
console.log("Area:", calculateArea(5, 3)); // 15
console.log("Area:", calculateArea(7, 4)); // 28
console.log("Area:", calculateArea(10, 2)); // 20
console.log("Area:", calculateArea(6, 8)); // 48
console.log("Area:", calculateArea(9, 5)); // 45
console.log("Area:", calculateArea(12, 3)); // 36
console.log("Area:", calculateArea(4, 4)); // 16
console.log("Area:", calculateArea(11, 2)); // 22
console.log("Area:", calculateArea(15, 2)); // 30


