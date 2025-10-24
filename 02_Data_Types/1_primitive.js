// ===== PRIMITIVE DATA TYPES =====
// Numbers, Strings, Booleans are stored by VALUE, not by REFERENCE

console.log('===== NUMBERS (Primitive) =====')

// Example 1: Creating two variables with same number value
let num1 = 100
let num2 = 100

console.log('num1:', num1)
console.log('num2:', num2)
console.log('num1 == num2:', num1 == num2) // true (same value)
console.log('num1 === num2:', num1 === num2) // true (same value and type)

// Example 2: Assigning one number to another
let num3 = num1
console.log('\nnum3 = num1')
console.log('num3:', num3)
console.log('num1 == num3:', num1 == num3) // true (same value)

// Example 3: Modifying num1 does NOT affect num3
console.log('\nModifying num1 to 200:')
num1 = 200
console.log('num1:', num1)
console.log('num3:', num3) // Still 100! Not affected by change in num1

console.log('\n===== STRINGS (Primitive) =====')

// Example 1: Creating two variables with same string value
let name1 = 'Alice'
let name2 = 'Alice'

console.log('name1:', name1)
console.log('name2:', name2)
console.log('name1 == name2:', name1 == name2) // true (same value)

// Example 2: Assigning one string to another
let name3 = name1
console.log('\nname3 = name1')
console.log('name3:', name3)
console.log('name1 == name3:', name1 == name3) // true (same value)

// Example 3: Modifying name1 does NOT affect name3
console.log('\nModifying name1 to "Bob":')
name1 = 'Bob'
console.log('name1:', name1)
console.log('name3:', name3) // Still 'Alice'! Not affected

console.log('\n===== BOOLEANS (Primitive) =====')

// Example 1: Creating two variables with same boolean value
let isActive1 = true
let isActive2 = true

console.log('isActive1:', isActive1)
console.log('isActive2:', isActive2)
console.log('isActive1 == isActive2:', isActive1 == isActive2) // true (same value)

// Example 2: Assigning one boolean to another
let isActive3 = isActive1
console.log('\nisActive3 = isActive1')
console.log('isActive3:', isActive3)
console.log('isActive1 == isActive3:', isActive1 == isActive3) // true (same value)

// Example 3: Modifying isActive1 does NOT affect isActive3
console.log('\nModifying isActive1 to false:')
isActive1 = false
console.log('isActive1:', isActive1)
console.log('isActive3:', isActive3) // Still true! Not affected

console.log('\n===== COMPARISON SUMMARY =====')
console.log('Primitive types (numbers, strings, booleans) = compared by VALUE')
console.log('When you assign a primitive to another variable, you copy the VALUE')
console.log('Changing one variable does NOT affect the other')
console.log('\nNon-Primitive types (arrays, objects) = compared by REFERENCE')
console.log('When you assign a non-primitive to another variable, you copy the REFERENCE')
console.log('Changing one variable DOES affect the other (same object in memory)')