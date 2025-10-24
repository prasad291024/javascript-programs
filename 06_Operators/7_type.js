// Type Operators - Checking data types

console.log('=== Type Operators ===\n')

// typeof operator - returns the type of a variable

let name = 'Alice'
let age = 28
let salary = 55000.50
let isActive = true
let hobbies = ['reading', 'gaming']
let profile = { username: 'alice123', role: 'admin' }
let nothing = null
let notDefined

console.log('Variable: name =', name)
console.log('Type:', typeof name)
console.log()

console.log('Variable: age =', age)
console.log('Type:', typeof age)
console.log()

console.log('Variable: salary =', salary)
console.log('Type:', typeof salary)
console.log()

console.log('Variable: isActive =', isActive)
console.log('Type:', typeof isActive)
console.log()

console.log('Variable: hobbies =', hobbies)
console.log('Type:', typeof hobbies)  // "object" (arrays are objects)
console.log('Is Array?', Array.isArray(hobbies))
console.log()

console.log('Variable: profile =', profile)
console.log('Type:', typeof profile)
console.log()

console.log('Variable: nothing =', nothing)
console.log('Type:', typeof nothing)  // "object" (this is a known quirk)
console.log()

console.log('Variable: notDefined =', notDefined)
console.log('Type:', typeof notDefined)
console.log()

// Practical Example: Type validation function
function validateInput(value) {
    let valueType = typeof value
    
    console.log('=== Input Validation ===')
    console.log('Value:', value)
    console.log('Type:', valueType)
    
    if (valueType === 'string') {
        console.log('✓ Valid string input')
    } else if (valueType === 'number') {
        console.log('✓ Valid number input')
    } else if (valueType === 'boolean') {
        console.log('✓ Valid boolean input')
    } else {
        console.log('✗ Invalid input type')
    }
    console.log()
}

validateInput('Hello')
validateInput(42)
validateInput(true)
validateInput([1, 2, 3])

// instanceof operator - checks if object is instance of a class
console.log('=== instanceof Operator ===\n')

let today = new Date()
let numbers = [1, 2, 3, 4, 5]
let pattern = /hello/

console.log('today instanceof Date:', today instanceof Date)
console.log('numbers instanceof Array:', numbers instanceof Array)
console.log('pattern instanceof RegExp:', pattern instanceof RegExp)
console.log('numbers instanceof Object:', numbers instanceof Object)  // true (arrays are objects)