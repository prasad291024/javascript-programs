// JavaScript Array Access Examples
// --------------------------------
// Arrays are zero-indexed, meaning the first element is at index 0.
// We can access elements using their index and use .length to find the last index.

// ===============================
// Fruits Array
// ===============================
const fruits = ['banana', 'orange', 'mango', 'lemon'];

let firstFruit = fruits[0];
console.log("First fruit:", firstFruit); // banana

let secondFruit = fruits[1];
console.log("Second fruit:", secondFruit); // orange

let lastFruit = fruits[3];
console.log("Last fruit (direct):", lastFruit); // lemon

let lastIndex = fruits.length - 1;
lastFruit = fruits[lastIndex];
console.log("Last fruit (calculated):", lastFruit); // lemon

// ===============================
// Numbers Array
// ===============================
const numbers = [0, 3.14, 9.81, 37, 98.6, 100];

console.log("Numbers array:", numbers);
console.log("Length of numbers array:", numbers.length);
console.log("First number:", numbers[0]);
console.log("Last number:", numbers[numbers.length - 1]);

// ===============================
// Web Technologies Array
// ===============================
const webTechs = ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node', 'MongoDB'];

console.log("Web Technologies:", webTechs);
console.log("Length:", webTechs.length);
console.log("First tech:", webTechs[0]);
console.log("Last tech:", webTechs[webTechs.length - 1]);

// ===============================
// Countries Array
// ===============================
const countries = [
  'Albania', 'Bolivia', 'Canada', 'Denmark', 'Ethiopia',
  'Finland', 'Germany', 'Hungary', 'Ireland', 'Japan', 'Kenya'
];

console.log("Countries:", countries);
console.log("First country:", countries[0]);
console.log("Last country:", countries[countries.length - 1]);

// ===============================
// Shopping Cart Array
// ===============================
const shoppingCart = ['Milk', 'Mango', 'Tomato', 'Potato', 'Avocado', 'Meat', 'Eggs', 'Sugar'];

console.log("Shopping Cart:", shoppingCart);
console.log("First item:", shoppingCart[0]);
console.log("Last item:", shoppingCart[shoppingCart.length - 1]);
