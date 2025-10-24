
// Constructor function is used to create objects using the new keyword.


// Example of a Constructor Function in JavaScript
// Constructor Function
function Person(name, role) {
  this.name = name;
  this.role = role;
}

const user = new Person("Prasad", "QA Engineer");
console.log(user); // { name: "Prasad", role: "QA Engineer" }
console.log(user.name); // "Prasad"
console.log(user.role); // "QA Engineer"
// Creating another object using the same constructor function
const admin = new Person("Alice", "Administrator");
console.log(admin); // { name: "Alice", role: "Administrator" }
console.log(admin.name); // "Alice"
console.log(admin.role); // "Administrator" 
// In this example, the Person constructor function is defined to create objects with name and role properties. When we use the new keyword with the Person function, it creates a new object and assigns the provided values to the name and role properties.
// This allows us to create multiple objects with the same structure easily.
// Constructor functions are a fundamental part of JavaScript's object-oriented programming capabilities.


