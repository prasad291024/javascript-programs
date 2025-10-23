// Different JavaScript data types
// Let's declare different data types

let userName = 'Alex'           // string
let userSurname = 'Morgan'      // string
let nation = 'Canada'           // string
let hometown = 'Toronto'        // string
let experience = 5              // number
let salary                      // undefined, because a value was not assigned

console.log(typeof 'Developer')  // string
console.log(typeof userName)     // string
console.log(typeof 42)           // number
console.log(typeof 99.99)        // number
console.log(typeof true)         // boolean
console.log(typeof false)        // boolean
console.log(typeof NaN)          // number
console.log(typeof salary)       // undefined
console.log(typeof undefined)    // undefined
console.log(typeof null)         // object

// Additional examples with different data types
let isActive = true             // boolean
let score = 87.5                // number
let productName = 'Laptop'      // string
let discount                    // undefined
let emptyValue = null           // object (special case in JavaScript)

console.log(typeof isActive)     // boolean
console.log(typeof score)        // number
console.log(typeof productName)  // string
console.log(typeof discount)     // undefined
console.log(typeof emptyValue)   // object

// Demonstrating more data types
let hobbies = ['reading', 'gaming', 'coding']  // object (arrays are objects)
let profile = { name: 'Sam', role: 'Engineer' } // object

console.log(typeof hobbies)      // object
console.log(typeof profile)      // object
console.log(Array.isArray(hobbies))  // true (to check if it's specifically an array)