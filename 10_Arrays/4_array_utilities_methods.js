// JavaScript Array Utility Methods
// --------------------------------
// These methods help inspect, search, convert, and manipulate arrays beyond basic add/remove operations.

// ===============================
// 1. Array Constructor
// ===============================
const emptyArray = Array(); // Creates an empty array
const eightEmptySlots = Array(8); // Creates 8 empty slots
console.log("Empty array:", emptyArray); // []
console.log("Eight empty slots:", eightEmptySlots); // [empty × 8]

// ===============================
// 2. fill() – Fill with static values
// ===============================
const filledWithX = Array(8).fill('X');
const filledWithZero = Array(8).fill(0);
const filledWithFour = Array(4).fill(4);
console.log("Filled with X:", filledWithX);
console.log("Filled with 0:", filledWithZero);
console.log("Filled with 4:", filledWithFour);

// ===============================
// 3. concat() – Merge arrays
// ===============================
const firstList = [1, 2, 3];
const secondList = [4, 5, 6];
const mergedList = firstList.concat(secondList);
console.log("Merged list:", mergedList);

const fruits = ['banana', 'orange'];
const vegetables = ['carrot', 'onion'];
const allItems = fruits.concat(vegetables);
console.log("Fruits + Vegetables:", allItems);

// ===============================
// 4. length – Get array size
// ===============================
const numbers = [1, 2, 3, 4, 5];
console.log("Length of numbers:", numbers.length);

// ===============================
// 5. indexOf() – Find index of item
// ===============================
console.log("Index of 5:", numbers.indexOf(5)); // 4
console.log("Index of 0:", numbers.indexOf(0)); // -1

// ===============================
// 6. lastIndexOf() – Find last index
// ===============================
const repeated = [1, 2, 3, 2, 1];
console.log("Last index of 2:", repeated.lastIndexOf(2)); // 3
console.log("Last index of 1:", repeated.lastIndexOf(1)); // 4

// ===============================
// 7. includes() – Check existence
// ===============================
console.log("Includes 3:", numbers.includes(3)); // true
console.log("Includes 9:", numbers.includes(9)); // false

// ===============================
// 8. Array.isArray() – Check type
// ===============================
console.log("Is array:", Array.isArray(numbers)); // true
console.log("Is array:", Array.isArray(100)); // false

// ===============================
// 9. toString() – Convert to string
// ===============================
console.log("Array to string:", numbers.toString()); // "1,2,3,4,5"

// ===============================
// 10. join() – Join elements
// ===============================
const names = ['Prasad', 'Mathias', 'Elias'];
console.log("Join with comma:", names.join()); // "Prasad,Mathias,Elias"
console.log("Join with space:", names.join(' ')); // "Prasad Mathias Elias"
console.log("Join with #:", names.join(' # ')); // "Prasad # Mathias # Elias"

// ===============================
// 11. slice() – Copy part of array
// ===============================
console.log("Slice all:", numbers.slice()); // [1,2,3,4,5]
console.log("Slice from index 1 to 4:", numbers.slice(1, 4)); // [2,3,4]

// ===============================
// 12. splice() – Insert/remove/replace
// ===============================
const spliceExample = [1, 2, 3, 4, 5];
spliceExample.splice(2, 1, 99); // Replace index 2 with 99
console.log("After splice:", spliceExample); // [1,2,99,4,5]

// ===============================
// 13. reverse() – Reverse array
// ===============================
const reversed = [...numbers].reverse();
console.log("Reversed:", reversed);

// ===============================
// 14. sort() – Sort array
// ===============================
const unsorted = [3, 1, 4, 2];
unsorted.sort();
console.log("Sorted:", unsorted); // [1,2,3,4]
