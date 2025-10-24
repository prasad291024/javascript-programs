//Function without parameters and with return value
//Doesn’t take input but returns a result.

//Syntax:
function getCurrentYear() {
  return new Date().getFullYear();
}
// Example usage:
const year = getCurrentYear();
console.log("Current Year is:", year); // Current Year is: 2025     
//  (or current year)
console.log("Year:", getCurrentYear()); // e.g., 2025
// Directly logging the returned value