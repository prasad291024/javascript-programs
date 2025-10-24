// Boolean Data Type - Working with true and false values

console.log('=== Boolean Values ===\n')

// Direct boolean assignments
let isOnline = true
let hasDiscount = false
let isVerified = true
let needsUpdate = false

console.log('User is online:', isOnline)
console.log('Has discount code:', hasDiscount)
console.log('Account verified:', isVerified)
console.log('Needs software update:', needsUpdate)
console.log()

// Boolean values from comparisons
let passedExam = 85 > 60        // true
let failedTest = 45 > 50        // false
let isAdult = 21 >= 18          // true
let isTooYoung = 15 >= 18       // false
let hasStock = 10 > 0           // true
let outOfStock = 0 > 0          // false

console.log('=== Comparison Results ===\n')
console.log('Score 85 > 60:', passedExam)
console.log('Score 45 > 50:', failedTest)
console.log('Age 21 >= 18:', isAdult)
console.log('Age 15 >= 18:', isTooYoung)
console.log('Stock 10 > 0:', hasStock)
console.log('Stock 0 > 0:', outOfStock)
console.log()

// Practical example with multiple conditions
let temperature = 25
let isSunny = true
let isWeekend = true

let isWarm = temperature > 20   // true
let perfectDay = isSunny && isWeekend && isWarm

console.log('=== Weather Check ===\n')
console.log('Temperature:', temperature + '°C')
console.log('Is it warm (>20°C)?', isWarm)
console.log('Is it sunny?', isSunny)
console.log('Is it weekend?', isWeekend)
console.log('Perfect day for outing?', perfectDay)
console.log()

// E-commerce scenario
let itemPrice = 500
let userBalance = 750
let isPremiumMember = true

let canAfford = userBalance >= itemPrice    // true
let getsFreeShipping = isPremiumMember      // true
let qualifiesForDeal = canAfford && isPremiumMember

console.log('=== Purchase Eligibility ===\n')
console.log('Item Price: $' + itemPrice)
console.log('User Balance: $' + userBalance)
console.log('Can afford item?', canAfford)
console.log('Premium member?', isPremiumMember)
console.log('Gets free shipping?', getsFreeShipping)
console.log('Qualifies for special deal?', qualifiesForDeal)