// Accessing Object Properties in JavaScript
// This program demonstrates different ways to access properties of an object.
// We will create an object representing a user and access its properties using dot notation and bracket notation.
// Creating an object
const user = {
  username: "prasad123",
  email: "prasad@example.com"
};

console.log(user.username);       // Dot notation
console.log(user["email"]);       // Bracket notation
const key = "username";
console.log(user[key]);           // Bracket notation with variable

/*
Dynamic Access Key points:
You can use any variable type (const, let, or var) to store the property name.
The variable name can be anything.
What matters is that the variable’s value matches a property key in the object.
Dynamic access always uses bracket notation — objectName[propertyVariable].
*/

// Dynamic property access using a variable
const user2 = { name: "Prasad", role: "Tester" };

const key1 = "name";
let key2 = "role";

console.log(user2[key1]); // "Prasad"
console.log(user2[key2]); // "Tester"
// Changing the variable value to access different property
key2 = "name";
console.log(user2[key2]); // "Prasad"

// Note: Dot notation cannot be used with variables
// console.log(user.key2); // This will be undefined because it looks for a property named 'key2'


// Summary:
// 1. Use dot notation for static property access: objectName.propertyName
// 2. Use bracket notation for dynamic property access: objectName[variableContainingPropertyName]
// 3. Bracket notation allows the use of variables to access properties dynamically.
