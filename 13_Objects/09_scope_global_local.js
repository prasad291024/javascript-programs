/* Scope in JavaScript: Global vs Local

Scope defines where variables are accessible.
Global scope: Accessible everywhere.
Local scope: Accessible only within a function or block.
*/
// Example demonstrating scope in JavaScript
// Global scope
let globalVar = "I'm a global variable";

function testScope() {
  let localVar = "I'm a local variable";
  console.log(globalVar); // Accessible
  console.log(localVar);  // Accessible
}

testScope();

console.log(globalVar); // Accessible
// console.log(localVar); // ❌ Error: localVar is not defined




// Local scope inside a block
if (true) {
  let blockVar = "I'm a block-scoped variable";
  console.log(blockVar); // Accessible
}
// console.log(blockVar); // ❌ Error: blockVar is not defined




// Global variable without var, let, or const
undeclaredVar = "I'm implicitly global";
console.log(undeclaredVar); // Accessible globally
function checkUndeclared() {
  console.log(undeclaredVar); // Accessible
}
checkUndeclared();

// Summary:
// 1. Variables declared with var, let, or const inside functions or blocks are local to that scope.
// 2. Variables declared outside any function or block are global.
// 3. Implicitly declared variables (without var, let, or const) become global, which is not recommended.
