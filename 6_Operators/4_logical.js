// Logical Operators - Combining conditions

console.log('=== Logical Operators ===\n')

let hasAccount = true
let isVerified = true
let hasPayment = false

console.log('Has Account:', hasAccount)
console.log('Is Verified:', isVerified)
console.log('Has Payment Method:', hasPayment)
console.log()

// AND operator (&&) - All must be true
let canPurchase = hasAccount && isVerified && hasPayment
console.log('Can purchase (all true)?', canPurchase)  // false

// OR operator (||) - At least one must be true
let canLogin = hasAccount || isVerified
console.log('Can login (at least one true)?', canLogin)  // true

// NOT operator (!) - Inverts boolean
let needsSetup = !hasPayment
console.log('Needs payment setup?', needsSetup)  // true
console.log()

// Practical Example: Access Control System
let username = 'admin'
let password = 'secure123'
let isAdmin = true
let isModerator = false

console.log('=== Access Control System ===')
console.log('Username:', username)
console.log('Is Admin:', isAdmin)
console.log('Is Moderator:', isModerator)
console.log()

let hasCredentials = username !== '' && password !== ''
let hasPrivileges = isAdmin || isModerator
let canAccessDashboard = hasCredentials && hasPrivileges

console.log('Has valid credentials?', hasCredentials)
console.log('Has admin privileges?', hasPrivileges)
console.log('Can access dashboard?', canAccessDashboard)
console.log()

// Complex conditions
let age = 25
let hasLicense = true
let hasInsurance = true
let carAvailable = false

let canDrive = age >= 18 && hasLicense && hasInsurance
let canRentCar = canDrive && !carAvailable

console.log('=== Car Rental Check ===')
console.log('Age:', age)
console.log('Has License:', hasLicense)
console.log('Has Insurance:', hasInsurance)
console.log('Own Car Available:', carAvailable)
console.log()
console.log('Can drive legally?', canDrive)
console.log('Should rent a car?', canRentCar)
console.log()

// Summary
console.log('Logical operators allow combining multiple conditions to make complex decisions in code.')     
console.log('AND (&&) requires all conditions to be true.')
console.log('OR (||) requires at least one condition to be true.')
console.log('NOT (!) inverts the truth value of a condition.')
console.log('These operators are essential for control flow and decision-making in programming.')
