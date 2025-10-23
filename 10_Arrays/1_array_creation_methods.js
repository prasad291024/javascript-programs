// JavaScript Array Creation Methods
// ----------------------------------
// Arrays are used to store multiple values in a single variable.
// They can hold elements of any data type and are zero-indexed.

// ===============================
// 1. Creating an Empty Array
// ===============================

// Using Array constructor
const emptyArray1 = Array();
console.log("Empty array using Array():", emptyArray1); // []

// Using new Array()
const emptyArray2 = new Array();
console.log("Empty array using new Array():", emptyArray2); // []

// Using square brackets (recommended)
const emptyArray3 = [];
console.log("Empty array using []:", emptyArray3); // []

// ===============================
// 2. Creating Arrays with Initial Values
// ===============================

const numbers = [0, 3.14, 9.81, 37, 98.6, 100];
const fruits = ['banana', 'orange', 'mango', 'lemon'];
const vegetables = ['Tomato', 'Potato', 'Cabbage', 'Onion', 'Carrot'];
const animalProducts = ['milk', 'meat', 'butter', 'yoghurt'];
const webTechs = ['HTML', 'CSS', 'JS', 'React', 'Redux', 'Node', 'MongoDB'];
const countries = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland'];

// Print arrays and their lengths
console.log("Numbers:", numbers, "| Length:", numbers.length);
console.log("Fruits:", fruits, "| Length:", fruits.length);
console.log("Vegetables:", vegetables, "| Length:", vegetables.length);
console.log("Animal Products:", animalProducts, "| Length:", animalProducts.length);
console.log("Web Technologies:", webTechs, "| Length:", webTechs.length);
console.log("Countries:", countries, "| Length:", countries.length);

// ===============================
// 3. Arrays with Mixed Data Types
// ===============================

const mixedArray = [
  'Prasad',
  250,
  true,
  { country: 'India', city: 'Walwa' },
  { skills: ['HTML', 'CSS', 'JS', 'React', 'Python'] }
];

console.log("Mixed Data Array:", mixedArray);

// ===============================
// 4. Creating Arrays Using split()
// ===============================

// Splitting a string into characters
const js = 'JavaScript';
const charsInJavaScript = js.split('');
console.log("Characters in 'JavaScript':", charsInJavaScript);

// Splitting a comma-separated string
const companiesString = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
const companies = companiesString.split(', ');
console.log("Companies:", companies);

// Splitting a sentence into words
const sentence = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.';
const words = sentence.split(' ');
console.log("Words in sentence:", words);
