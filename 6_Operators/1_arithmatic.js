// Arithmetic Operators - Mathematical calculations

console.log('=== Arithmetic Operators ===\n')

let num1 = 25
let num2 = 4

console.log('Number 1:', num1)
console.log('Number 2:', num2)
console.log()

// Addition
let sum = num1 + num2
console.log('Addition (+):', num1, '+', num2, '=', sum)

// Subtraction
let difference = num1 - num2
console.log('Subtraction (-):', num1, '-', num2, '=', difference)

// Multiplication
let product = num1 * num2
console.log('Multiplication (*):', num1, '*', num2, '=', product)

// Division
let quotient = num1 / num2
console.log('Division (/):', num1, '/', num2, '=', quotient)

// Modulus (Remainder)
let remainder = num1 % num2
console.log('Modulus (%):', num1, '%', num2, '=', remainder)

// Exponentiation (Power)
let power = num1 ** num2
console.log('Exponentiation (**):', num1, '**', num2, '=', power)
console.log()

// Increment and Decrement
let counter = 10
console.log('Initial counter:', counter)

counter++  // Increment by 1
console.log('After increment (++):', counter)

counter--  // Decrement by 1
console.log('After decrement (--):', counter)
console.log()

// Practical Example: Shopping Cart
let itemPrice = 299
let quantity = 3
let taxRate = 0.08

let subtotal = itemPrice * quantity
let taxAmount = subtotal * taxRate
let total = subtotal + taxAmount

console.log('=== Shopping Cart Calculation ===')
console.log('Item Price: $' + itemPrice)
console.log('Quantity:', quantity)
console.log('Subtotal: $' + subtotal)
console.log('Tax (8%): $' + taxAmount.toFixed(2))
console.log('Total: $' + total.toFixed(2))