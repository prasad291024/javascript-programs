/*
Anonymous Function
A function without a name, often used as a callback.



*/  
// Example of an anonymous function used as a callback
setTimeout(function() {
    console.log("This message is displayed after 2 seconds");
}, 2000);

console.log('--------------------------');

// Example of an anonymous function assigned to a variable
const greet = function(name) {
    return "Hello, " + name + "!";
};
console.log(greet("Alice")); // Output: Hello, Alice!
console.log(greet("Bob"));   // Output: Hello, Bob!
console.log('--------------------------');

// Another example of an anonymous function
setTimeout(function() {
  console.log("This is an anonymous function.");
}, 1000);

console.log('--------------------------');
// Using an anonymous function in an event listener
document.getElementById("myButton").addEventListener("click", function() {
    alert("Button was clicked!");
});
