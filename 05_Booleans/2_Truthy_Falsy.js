// Truthy and Falsy Values in JavaScript

console.log('=== TRUTHY VALUES ===\n')

// All numbers except zero are truthy
console.log('--- Numbers (Truthy) ---')
console.log('Boolean(42):', Boolean(42))           // true
console.log('Boolean(-15):', Boolean(-15))         // true
console.log('Boolean(3.14):', Boolean(3.14))       // true
console.log('Boolean(999):', Boolean(999))         // true
console.log('Boolean(-0.5):', Boolean(-0.5))       // true
console.log()

// All strings except empty strings are truthy
console.log('--- Strings (Truthy) ---')
console.log('Boolean("Hello"):', Boolean("Hello"))           // true
console.log('Boolean("JavaScript"):', Boolean("JavaScript")) // true
console.log('Boolean("0"):', Boolean("0"))                   // true (string zero, not number)
console.log('Boolean(" "):', Boolean(" "))                   // true (space is a character)
console.log('Boolean("false"):', Boolean("false"))           // true (string, not boolean)
console.log()

// Boolean true
console.log('--- Boolean True ---')
console.log('Boolean(true):', Boolean(true))       // true
console.log()

console.log('=== FALSY VALUES ===\n')

// Zero is falsy
console.log('--- Zero (Falsy) ---')
console.log('Boolean(0):', Boolean(0))             // false
console.log('Boolean(-0):', Boolean(-0))           // false
console.log()

// BigInt zero is falsy
console.log('--- BigInt Zero (Falsy) ---')
console.log('Boolean(0n):', Boolean(0n))           // false
console.log()

// null is falsy
console.log('--- null (Falsy) ---')
console.log('Boolean(null):', Boolean(null))       // false
console.log()

// undefined is falsy
console.log('--- undefined (Falsy) ---')
console.log('Boolean(undefined):', Boolean(undefined))   // false
let notDefined
console.log('Boolean(notDefined):', Boolean(notDefined)) // false
console.log()

// NaN is falsy
console.log('--- NaN (Falsy) ---')
console.log('Boolean(NaN):', Boolean(NaN))         // false
console.log('Boolean(0/0):', Boolean(0/0))         // false (results in NaN)
console.log()

// Boolean false
console.log('--- Boolean False (Falsy) ---')
console.log('Boolean(false):', Boolean(false))     // false
console.log()

// Empty strings are falsy
console.log('--- Empty Strings (Falsy) ---')
console.log('Boolean(""):', Boolean(""))           // false
console.log('Boolean(\'\'):', Boolean(''))         // false
console.log()   
// Summary
console.log('=== SUMMARY ===\n')
console.log('Truthy values include: non-zero numbers, non-empty strings, and true.');
console.log('Falsy values include: 0, 0n, null, undefined, NaN, false, and empty strings.');    
console.log('Understanding these values is crucial for control flow and logical operations in JavaScript.');
