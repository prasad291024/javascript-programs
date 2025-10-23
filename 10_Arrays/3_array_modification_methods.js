// JavaScript Array Modification Methods
// -------------------------------------
// Arrays are mutable, meaning we can change their contents using various methods.

// ===============================
// 1. Adding Elements
// ===============================

const fruits = ['banana', 'orange'];

// push() – Add to the end
fruits.push('mango');
console.log("After push:", fruits); // ['banana', 'orange', 'mango']

// unshift() – Add to the beginning
fruits.unshift('apple');
console.log("After unshift:", fruits); // ['apple', 'banana', 'orange', 'mango']

// ===============================
// 2. Removing Elements
// ===============================

// pop() – Remove from the end
fruits.pop();
console.log("After pop:", fruits); // ['apple', 'banana', 'orange']

// shift() – Remove from the beginning
fruits.shift();
console.log("After shift:", fruits); // ['banana', 'orange']

// ===============================
// 3. Updating Elements
// ===============================

fruits[1] = 'lemon'; // Change 'orange' to 'lemon'
console.log("After update:", fruits); // ['banana', 'lemon']

// ===============================
// 4. Inserting or Removing with splice()
// ===============================

const vegetables = ['Tomato', 'Potato', 'Cabbage', 'Onion'];

// Insert at index 2
vegetables.splice(2, 0, 'Carrot');
console.log("After splice insert:", vegetables); // ['Tomato', 'Potato', 'Carrot', 'Cabbage', 'Onion']

// Remove 1 item at index 3
vegetables.splice(3, 1);
console.log("After splice remove:", vegetables); // ['Tomato', 'Potato', 'Carrot', 'Onion']

// Replace item at index 1
vegetables.splice(1, 1, 'Sweet Potato');
console.log("After splice replace:", vegetables); // ['Tomato', 'Sweet Potato', 'Carrot', 'Onion']

// ===============================
// 5. Concatenating Arrays
// ===============================

const drinks = ['water', 'juice'];
const snacks = ['chips', 'cookies'];

const partyItems = drinks.concat(snacks);
console.log("Concatenated array:", partyItems); // ['water', 'juice', 'chips', 'cookies']

// ===============================
// 6. Copying Part of an Array
// ===============================

const webTechs = ['HTML', 'CSS', 'JavaScript', 'React', 'Node'];
const frontend = webTechs.slice(0, 3);
console.log("Sliced array:", frontend); // ['HTML', 'CSS', 'JavaScript']

// ===============================
// 7. Reversing and Sorting
// ===============================

const numbers = [3, 1, 4, 2];
numbers.sort(); // Sorts alphabetically by default
console.log("Sorted numbers:", numbers); // [1, 2, 3, 4]

numbers.reverse();
console.log("Reversed numbers:", numbers); // [4, 3, 2, 1]

// ===============================
// 8. Filling an Array
// ===============================

const filledArray = new Array(5).fill('X');
console.log("Filled array:", filledArray); // ['X', 'X', 'X', 'X', 'X']

// ===============================
// 9. Removing All Elements
// ===============================

let cart = ['Milk', 'Eggs', 'Bread'];
cart.length = 0;
console.log("Emptied cart:", cart); // []

