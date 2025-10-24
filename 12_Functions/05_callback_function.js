/*

A function passed as an argument to another function and executed later.
A callback function is a function passed into another function as an argument,
which is then invoked inside the outer function to complete some kind of routine or action.

*/// Example of a callback function
function greet(name, callback) {
    console.log("Hello, " + name + "!");
    callback();
}
function sayGoodbye() {
    console.log("Goodbye!");
}
// Using the callback function
greet("Alice", sayGoodbye);
// Output:
// Hello, Alice!
// Goodbye!

console.log("--------------------------------------------------");
// Another example of a callback function
function greetUser(name, callback) {
  console.log("Hello", name);
  callback();
}

function showMessage() {
  console.log("Welcome to JavaScript functions!");
}

greetUser("Prasad", showMessage);
// Output:
// Hello Prasad
// Welcome to JavaScript functions!

