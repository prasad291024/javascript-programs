/*
The for...of loop is used to iterate over iterable objects like arrays, strings, etc.

Syntax:
for (const item of iterable) {
  // Code to execute
}

*/
// Example: Iterating over an array of fruits
const fruits = ['apple', 'banana', 'mango'];
for (const fruit of fruits) {
  console.log("Fruit:", fruit);
}
// Output:
// Fruit: apple
// Fruit: banana
// Fruit: mango


const numbers = [1, 2, 3, 4, 5]

for (const num of numbers) {
  console.log(num)
}

// 1 2 3 4 5

for (const num of numbers) {
  console.log(num * num)
}

// 1 4 9 16 25

// adding all the numbers in the array
let sum = 0
for (const num of numbers) {
  sum = sum + num  
	// can be also shorten like this, sum += num
  // after this we will use the shorter synthax(+=, -=, *=, /= etc)
}
console.log(sum) // 15

const webTechs = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB'
]

for (const tech of webTechs) {
  console.log(tech.toUpperCase())
}

// HTML CSS JAVASCRIPT REACT NODE MONGODB

for (const tech of webTechs) {
  console.log(tech[0]) // get only the first letter of each element,  H C J R N M
}
for (const tech of webTechs) {
  console.log(tech.length) // get the length of each element
}
// 4 3 10 5 5 4 7

const countries = ['Finland', 'Sweden', 'Norway', 'Denmark', 'Iceland']
const newArr = []
for(const country of countries){
  newArr.push(country.toUpperCase())
}

console.log(newArr)  // ["FINLAND", "SWEDEN", "NORWAY", "DENMARK", "ICELAND"]
