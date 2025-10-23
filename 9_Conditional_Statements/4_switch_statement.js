// JavaScript Conditional Statement: switch
// ----------------------------------------
// Compares one expression against multiple case values.

/*

Syntax:
switch (expression) {
  case value1:
    // Code for value1
    break;
  case value2:
    // Code for value2
    break;
  default:
    // Code if no case matches
}

*/




//// Example: Grade Evaluation
const grade = 'B';

switch (grade) {
  case 'A':
    console.log("Excellent!");
    break;
  case 'B':
    console.log("Good job!");
    break;
  case 'C':
    console.log("Needs improvement.");
    break;
  default:
    console.log("Invalid grade.");
}
// Output: Good job!
console.log("End of evaluation.");
console.log('-------------------');

//// Example: Day of the Week
const day = 3;
let dayName;
switch (day) {
  case 1:
    dayName = 'Monday';
    break;
  case 2:
    dayName = 'Tuesday';
    break;
  case 3:
    dayName = 'Wednesday';
    break;
  case 4:
    dayName = 'Thursday';
    break;
  case 5:
    dayName = 'Friday';
    break;
  case 6:
    dayName = 'Saturday';
    break;
  case 7:
    dayName = 'Sunday';
    break;
  default:
    dayName = 'Invalid day';
}
console.log(`Day ${day} is ${dayName}.`);
// Output: Day 3 is Wednesday.

