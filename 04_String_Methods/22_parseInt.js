// Casting: Converting one data type to another data type
// String to Int - Converting string numbers to integers

console.log('=== String to Integer Conversion ===\n')

// Method 1: Using parseInt()
let price = '599'
let priceInt = parseInt(price)
console.log('Original string:', price, '| Type:', typeof price)
console.log('Using parseInt():', priceInt, '| Type:', typeof priceInt)
console.log()

// Method 2: Using Number()
let quantity = '25'
let quantityInt = Number(quantity)
console.log('Original string:', quantity, '| Type:', typeof quantity)
console.log('Using Number():', quantityInt, '| Type:', typeof quantityInt)
console.log()

// Method 3: Using Plus sign (+)
let age = '28'
let ageInt = +age
console.log('Original string:', age, '| Type:', typeof age)
console.log('Using + sign:', ageInt, '| Type:', typeof ageInt)
console.log()

// Practical example: Adding string numbers (shows why conversion is needed)
let score1 = '50'
let score2 = '30'
console.log('Without conversion:', score1 + score2) // "5030" (string concatenation)
console.log('With conversion:', parseInt(score1) + parseInt(score2)) // 80 (actual addition)


console.log('\n=== Edge Cases ===\n')
// Edge Case 1: Non-numeric strings
let invalidNumber = 'abc'
let result1 = parseInt(invalidNumber)
console.log('Parsing non-numeric string:', invalidNumber, '| Result:', result1) // NaN  
console.log('Is NaN:', isNaN(result1)) // true
console.log()   
// Edge Case 2: Strings with mixed content
let mixedString = '123abc'
let result2 = parseInt(mixedString)
console.log('Parsing mixed string:', mixedString, '| Result:', result2) // 123
console.log()
// Edge Case 3: Strings with leading/trailing spaces
let spacedString = '   456   '
let result3 = parseInt(spacedString)
console.log('Parsing spaced string:', `"${spacedString}"`, '| Result:', result3) // 456
console.log()
// Edge Case 4: Empty string
let emptyString = ''
let result4 = parseInt(emptyString)
console.log('Parsing empty string:', `"${emptyString}"`, '| Result:', result4) // NaN
console.log('Is NaN:', isNaN(result4)) // true
console.log()
// Edge Case 5: Decimal strings
let decimalString = '78.9'
let result5 = parseInt(decimalString)
console.log('Parsing decimal string:', decimalString, '| Result:', result5) // 78
console.log()
console.log('=== End of Examples ===')

// Float to Int - Converting decimal numbers to integers

console.log('=== Float to Integer Conversion ===\n')

// Using parseInt() to convert float to int
let rating = 4.7
let ratingInt = parseInt(rating)
console.log('Original float:', rating, '| Type:', typeof rating)
console.log('Using parseInt():', ratingInt, '| Type:', typeof ratingInt)
console.log('Note: Decimal part is removed (not rounded)\n')

// More examples
let distance = 125.89
let distanceInt = parseInt(distance)
console.log('Distance:', distance, 'km')
console.log('Rounded down to:', distanceInt, 'km\n')

let percentage = 87.3
let percentageInt = parseInt(percentage)
console.log('Percentage:', percentage + '%')
console.log('Integer value:', percentageInt + '%\n')

// Practical example: Calculating pages read
let bookPages = 234.8
let pagesRead = parseInt(bookPages)
console.log('Total pages (with decimal):', bookPages)
console.log('Complete pages read:', pagesRead)