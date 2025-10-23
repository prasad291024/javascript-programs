// String to Float - Converting string decimal numbers to float

console.log('=== String to Float Conversion ===\n')

// Method 1: Using parseFloat()
let temperature = '36.6'
let tempFloat = parseFloat(temperature)
console.log('Original string:', temperature, '| Type:', typeof temperature)
console.log('Using parseFloat():', tempFloat, '| Type:', typeof tempFloat)
console.log()

// Method 2: Using Number()
let weight = '68.5'
let weightFloat = Number(weight)
console.log('Original string:', weight, '| Type:', typeof weight)
console.log('Using Number():', weightFloat, '| Type:', typeof weightFloat)
console.log()

// Method 3: Using Plus sign (+)
let height = '5.9'
let heightFloat = +height
console.log('Original string:', height, '| Type:', typeof height)
console.log('Using + sign:', heightFloat, '| Type:', typeof heightFloat)
console.log()

// Practical example: Calculating total cost
let itemPrice = '49.99'
let taxRate = '0.08'
let total = parseFloat(itemPrice) * (1 + parseFloat(taxRate))
console.log('Item Price: $' + itemPrice)
console.log('Tax Rate:', taxRate)
console.log('Total with Tax: $' + total.toFixed(2))