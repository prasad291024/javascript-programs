
// hasOwnProperty()
// Checks if an object has a specific property (not inherited).
// Example demonstrating the use of hasOwnProperty method in JavaScript
// The hasOwnProperty method checks if an object has a specific property as its own (not inherited) property.
// It returns true if the property exists directly on the object, otherwise false.
// Syntax: object.hasOwnProperty(propertyName)
// propertyName is a string representing the name of the property to check.
// Example:

const user = { name: "Prasad", age: 30 };
console.log(user.hasOwnProperty("name")); // true
console.log(user.hasOwnProperty("email")); // false
console.log(user.hasOwnProperty("age")); // true