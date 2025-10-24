

// Object.assign(): Copying objects
// The Object.assign() method is used to copy the values of all enumerable own properties from one or more source objects to a target object. It will return the target object.
// Example


const original = { name: "Prasad", role: "QA" };
const copy = Object.assign({}, original);

copy.name = "Ravi";

console.log("Original:", original); // { name: "Prasad", role: "QA" }
console.log("Copy:", copy);         // { name: "Ravi", role: "QA" }
// In the above example, we created a copy of the original object using Object.assign(). Modifying the copy does not affect the original object.

// Merging objects
const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };
const merged = Object.assign({}, obj1, obj2);

console.log("Merged:", merged); // { a: 1, b: 3, c: 4 }
// In this example, properties from obj2 overwrite those in obj1 when there are conflicts.
// Note: Object.assign() performs a shallow copy, meaning that if the source object contains nested objects, only the reference to the nested object is copied, not the actual nested object itself.

