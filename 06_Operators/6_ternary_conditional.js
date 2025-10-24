// Ternary Operator - Shorthand if-else

console.log('=== Ternary Operator ===\n')

// Basic syntax: condition ? valueIfTrue : valueIfFalse

let age = 20
let status = age >= 18 ? 'Adult' : 'Minor'
console.log('Age:', age)
console.log('Status:', status)
console.log()

// Multiple examples
let temperature = 30
let weather = temperature > 25 ? 'Hot' : 'Cold'
console.log('Temperature:', temperature + '°C')
console.log('Weather:', weather)
console.log()

let score = 75
let result = score >= 50 ? 'Pass' : 'Fail'
console.log('Score:', score)
console.log('Result:', result)
console.log()

// Nested ternary (for multiple conditions)
let marks = 85
let grade = marks >= 90 ? 'A' : 
            marks >= 80 ? 'B' : 
            marks >= 70 ? 'C' : 
            marks >= 60 ? 'D' : 'F'

console.log('Marks:', marks)
console.log('Grade:', grade)
console.log()

// Practical Example: E-commerce discount
let totalAmount = 1500
let isMember = true

let discount = totalAmount > 1000 ? 15 : 10
let finalDiscount = isMember ? discount + 5 : discount

console.log('=== Discount Calculator ===')
console.log('Total Amount: $' + totalAmount)
console.log('Is Member:', isMember)
console.log('Base Discount:', discount + '%')
console.log('Final Discount:', finalDiscount + '%')

let discountAmount = totalAmount * (finalDiscount / 100)
let finalPrice = totalAmount - discountAmount

console.log('Discount Amount: $' + discountAmount)
console.log('Final Price: $' + finalPrice)
console.log()

// Access control example
let userAge = 16
let hasPermission = false

let accessLevel = userAge >= 18 ? 'Full Access' : 
                  hasPermission ? 'Limited Access' : 'No Access'

console.log('=== Access Control ===')
console.log('User Age:', userAge)
console.log('Has Permission:', hasPermission)
console.log('Access Level:', accessLevel)