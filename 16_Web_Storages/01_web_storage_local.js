// Store data
localStorage.setItem("username", "Prasad");

// Retrieve data
const user = localStorage.getItem("username");
console.log(user); // Prasad

// Remove data
localStorage.removeItem("username");

// Clear all
localStorage.clear();
// Check if data exists
const checkUser = localStorage.getItem("username");
console.log(checkUser); // null

