// Comparison Operators - Comparing values

console.log('=== Comparison Operators ===\n')

let price1 = 50
let price2 = 75
let price3 = '50'  // String

console.log('Price 1:', price1)
console.log('Price 2:', price2)
console.log('Price 3 (string):', price3)
console.log()

// Equal to (checks value only)
console.log('price1 == price3:', price1 == price3)  // true

// Strict equal to (checks value and type)
console.log('price1 === price3:', price1 === price3)  // false

// Not equal to
console.log('price1 != price2:', price1 != price2)  // true

// Strict not equal to
console.log('price1 !== price3:', price1 !== price3)  // true

// Greater than
console.log('price2 > price1:', price2 > price1)  // true

// Less than
console.log('price1 < price2:', price1 < price2)  // true

// Greater than or equal to
console.log('price1 >= 50:', price1 >= 50)  // true

// Less than or equal to
console.log('price2 <= 100:', price2 <= 100)  // true
console.log()

// Practical Example: Age Verification System
let userAge = 22
let minimumAge = 18
let maximumAge = 65

console.log('=== Age Verification ===')
console.log('User Age:', userAge)
console.log('Minimum Age:', minimumAge)
console.log('Maximum Age:', maximumAge)
console.log()

let isOldEnough = userAge >= minimumAge
let isNotTooOld = userAge <= maximumAge
let isEligible = isOldEnough && isNotTooOld

console.log('Old enough?', isOldEnough)
console.log('Not too old?', isNotTooOld)
console.log('Eligible?', isEligible)

console.log('-------------------------------------------\n')
// String Comparison Example
console.log('=== String Comparison ===\n')
console.log(3 > 2)              // true, because 3 is greater than 2
console.log(3 >= 2)             // true, because 3 is greater than 2
console.log(3 < 2)              // false,  because 3 is greater than 2
console.log(2 < 3)              // true, because 2 is less than 3
console.log(2 <= 3)             // true, because 2 is less than 3
console.log(3 == 2)             // false, because 3 is not equal to 2
console.log(3 != 2)             // true, because 3 is not equal to 2
console.log(3 == '3')           // true, compare only value
console.log(3 === '3')          // false, compare both value and data type
console.log(3 !== '3')          // true, compare both value and data type
console.log(3 != 3)             // false, compare only value
console.log(3 !== 3)            // false, compare both value and data type
console.log(0 == false)         // true, equivalent
console.log(0 === false)        // false, not exactly the same
console.log(0 == '')            // true, equivalent
console.log(0 == ' ')           // true, equivalent
console.log(0 === '')           // false, not exactly the same
console.log(1 == true)          // true, equivalent
console.log(1 === true)         // false, not exactly the same
console.log(undefined == null)  // true
console.log(undefined === null) // false
console.log(NaN == NaN)         // false, not equal
console.log(NaN === NaN)        // false
console.log(typeof NaN)         // number

console.log('mango'.length == 'avocado'.length)  // false
console.log('mango'.length != 'avocado'.length)  // true
console.log('mango'.length < 'avocado'.length)   // true
console.log('milk'.length == 'meat'.length)      // true
console.log('milk'.length != 'meat'.length)      // false
console.log('tomato'.length == 'potato'.length)  // true
console.log('python'.length > 'dragon'.length)   // false