// match(): Takes a substring or regular expression pattern as an argument and returns an array if there is a match, otherwise returns null.
// Regular expressions start with / and end with /

let word = 'coding'
let simplePattern = /coding/ // without any flag
let globalPattern = /coding/gi // g = search in whole text, i = case insensitive

console.log(word.match(simplePattern))

// Example with a longer sentence
let message = 'I enjoy coding in JavaScript. Coding helps me solve problems. Many developers love coding.'
console.log(message.match('coding'))
/*
output
["coding", index: 8, input: "I enjoy coding in JavaScript. Coding helps me solve problems. Many developers love coding.", groups: undefined]
*/

let caseInsensitivePattern = /coding/gi
console.log(message.match(caseInsensitivePattern)) // ["coding", "Coding", "coding"]

// Extract numbers from text using regular expressions
let story = 'In 2024, I completed 50 projects. By 2025, I plan to build 100 more applications and learn 5 new frameworks.'
let singleDigitRegex = /\d/g // \d matches any single digit
// + means one or more consecutive digits
// g means global search (find all matches)

console.log(story.match(singleDigitRegex)) // ["2", "0", "2", "4", "5", "0", "2", "0", "2", "5", "1", "0", "0", "5"]
console.log(story.match(/\d+/g)) // ["2024", "50", "2025", "100", "5"]

// Extract email patterns
let email = 'Contact me at john.doe@example.com or support@company.org for assistance.'
let emailPattern = /\w+@\w+\.\w+/g
console.log(email.match(emailPattern)) // ["john.doe@example.com", "support@company.org"]

// Find words starting with capital letters
let sentence = 'JavaScript and TypeScript are Amazing Programming Languages.'
let capitalPattern = /[A-Z]\w+/g
console.log(sentence.match(capitalPattern)) // ["JavaScript", "TypeScript", "Amazing", "Programming", "Languages"]