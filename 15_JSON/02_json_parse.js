// Parsing JSON 
// JSON.parse() method is used to convert a JSON string into a JavaScript object.

const jsonData = '{"name":"Prasad","role":"QA Engineer"}';
const obj = JSON.parse(jsonData);

console.log(obj.name); // Prasad
console.log(obj.role); // QA Engineer
console.log(typeof obj); // object
console.log(obj); // { name: 'Prasad', role: 'QA Engineer' }
