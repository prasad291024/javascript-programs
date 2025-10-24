/*
Accessing characters in a string: 
We can access characters in a string using their index position. 
The index position starts from 0.
 Let us access the first character in 'JavaScript' string.
*/


let string = 'JavaScript'// J a v a S c r i p t
let firstLetter = string[0] // J
console.log(firstLetter) // J
let secondLetter = string[1] // a
let thirdLetter = string[2] // v
let lastLetter = string[9] // t
console.log(secondLetter) // a
console.log(thirdLetter) // v   
console.log(lastLetter) // t
let lastIndex = string.length - 1 // 9
console.log(lastIndex) // 9
console.log(string[lastIndex]) // t