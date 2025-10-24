// JavaScript Conditional Statement: if...else if...else
// ------------------------------------------------------
// Checks multiple conditions in sequence.

/*Syntax:
if (condition1) {
  // Code if condition1 is true
} else if (condition2) {
  // Code if condition2 is true
} else {
  // Code if none are true
}
*/

// Example:
const score = 72;

if (score >= 90) {
  console.log("Excellent!");
} else if (score >= 75) {
  console.log("Very good!");
} else if (score >= 50) {
  console.log("Passed.");
} else {
  console.log("Failed.");
}
// Output: Very good!

// Explanation: 
// The program evaluates the score variable against multiple conditions.
// It first checks if the score is 90 or above, then 75 or above,
// then 50 or above, and finally defaults to "Failed." if none of the
// previous conditions are met.
// This structure allows for clear and organized handling of multiple
// conditional branches.
