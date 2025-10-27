sessionStorage.setItem("authToken", "abc123");

const token = sessionStorage.getItem("authToken");
console.log(token); // abc123

sessionStorage.removeItem("authToken");
