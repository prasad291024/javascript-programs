// length: The string length method returns the number of characters in a string included empty space. Example:

let js = 'JavaScript'
console.log(js.length)        // 10
let firstName = 'Wonderful'
console.log(firstName.length) // 8
let lastName = 'May Day'
console.log(lastName.length)  // 7
let country = 'United States of America'
console.log(country.length)   // 24
let city = 'New York'
console.log(city.length)      // 8  
let space = ' '
console.log(space.length)     // 1
let emptyString = ''
console.log(emptyString.length) // 0
let paragraph = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
console.log(paragraph.length) // 77
let sentence = 'The quick brown fox jumps over the lazy dog.'
console.log(sentence.length)  // 44

//------------------------------------------//
console.log('----------------------------------')
// Different types of empty strings
let emptyString1 = ''        // empty string using single quotes
let emptyString2 = ""        // empty string using double quotes
let emptyString3 = ``        // empty string using template literals

// Check their lengths
console.log(emptyString1.length)  // 0
console.log(emptyString2.length)  // 0
console.log(emptyString3.length)  // 0
console.log('----------------------------------')

// Compare with strings containing spaces
let spaceString = ' '        // string with one space added
let twoSpaces = '  '        // string with two spaces added

// Check their lengths
console.log(spaceString.length)   // 1  
console.log(twoSpaces.length)     // 2