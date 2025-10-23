// JavaScript Conditional Statement: Ternary Operator
// ---------------------------------------------------
// A shorthand for simple if...else decisions.

//Syntax: condition ? expressionIfTrue : expressionIfFalse;

// Example:
const score = 60;
const result = (score >= 50) ? "Pass" : "Fail";

console.log(result); // Output: Pass
// Explanation:
// The expression (score >= 50) is evaluated.
// If true, "Pass" is assigned to result; otherwise, "Fail" is assigned.
// This is equivalent to:
/*
let result;
if (score >= 50) {
    result = "Pass";
}
else {
    result = "Fail";
}
*/  
// Ternary operators can be nested for multiple conditions, but readability should be considered.
const age = 20;
const category = (age < 13) ? "Child" :
                 (age < 20) ? "Teenager" :
                 (age < 65) ? "Adult" : "Senior";
console.log(category); // Output: Adult 
// Explanation:
// The age is checked against multiple ranges to determine the category.
// Note: For complex conditions, traditional if...else statements are often clearer.
