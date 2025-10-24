/*To create a template strings, we use two back-ticks. 
We can inject data as expressions inside a template string. 
To inject data, we enclose the expression with a curly bracket({}) preceded by a $ sign. 
See the syntax below.
//Syntax
`String literal text`
`String literal text ${expression}`
*/

//Example - 1
let firstName = 'Joline'
let lastName = 'Patil'    
let country = 'India'
let city = 'Kameri'
let language = 'JavaScript'
let job = 'Insurance agent'
let age = 35

//Using template string to create a multi line string
let fullName = `I am ${firstName} ${lastName}. I live in ${country}, ${city}.
I am a ${job}. I am learning ${language}. I am ${age} years old.`
console.log(fullName)

//Example - 2
//Using template string to create an expression
let a = 5
let b = 10
console.log(`Fifteen is ${a + b} \nand\nFifteen is not ${2 * a + b}.`)   