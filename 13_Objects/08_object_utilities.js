
// Object Utility Methods in JavaScript
// Object.keys(), Object.values(), Object.entries(), Object.hasOwn()

// Example demonstrating Object utility methods
const laptop = {
  brand: "Dell",
  ram: "16GB",
  storage: "512GB"
};

console.log(Object.keys(laptop));   // ['brand', 'ram', 'storage']
console.log(Object.values(laptop)); // ['Dell', '16GB', '512GB']
console.log(Object.entries(laptop)); // [['brand', 'Dell'], ['ram', '16GB'], ['storage', '512GB']]
console.log(Object.hasOwn(laptop, 'ram')); // true
console.log(Object.hasOwn(laptop, 'processor')); // false