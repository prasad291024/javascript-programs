// Complete demonstration of all casting methods

console.log('=== Complete Type Casting Demo ===\n')

// Scenario: E-commerce calculations
let productPrice = '1299.99'
let discountPercent = '15'
let shippingCost = '25.50'

console.log('--- Product Details ---')
console.log('Product Price (string):', productPrice)
console.log('Discount (string):', discountPercent + '%')
console.log('Shipping Cost (string):', shippingCost)
console.log()

// Convert and calculate
let priceNum = parseFloat(productPrice)
let discountNum = parseInt(discountPercent)
let shippingNum = parseFloat(shippingCost)

let discountAmount = priceNum * (discountNum / 100)
let finalPrice = priceNum - discountAmount + shippingNum

console.log('--- Calculations ---')
console.log('Original Price: $' + priceNum)
console.log('Discount Amount: $' + discountAmount.toFixed(2))
console.log('After Discount: $' + (priceNum - discountAmount).toFixed(2))
console.log('Shipping Cost: $' + shippingNum)
console.log('Final Total: $' + finalPrice.toFixed(2))
console.log()

// Converting back to integer for display
let wholeDollars = parseInt(finalPrice)
console.log('Whole dollars to pay: $' + wholeDollars)

// Showing error without conversion
console.log('\n--- Why Conversion is Important ---')
console.log('Without conversion:', productPrice + shippingCost) // String concatenation!
console.log('With conversion:', priceNum + shippingNum) // Proper addition