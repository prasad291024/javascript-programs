// ===== NON-PRIMITIVE DATA TYPES =====
// Arrays and Objects are stored by REFERENCE, not by VALUE

console.log('===== ARRAYS (Non-Primitive) =====')

// Example 1: Creating two separate arrays with same values
let fruits1 = ['apple', 'banana', 'orange']
let fruits2 = ['apple', 'banana', 'orange']

console.log('fruits1:', fruits1)
console.log('fruits2:', fruits2)
console.log('fruits1 == fruits2:', fruits1 == fruits2) // false (different references)
console.log('fruits1 === fruits2:', fruits1 === fruits2) // false (different references)

// Example 2: Assigning one array to another (copying reference)
let fruits3 = fruits1
console.log('fruits3 = fruits1')
console.log('fruits3:', fruits3)
console.log('fruits1 == fruits3:', fruits1 == fruits3) // true (same reference)

// Example 3: Modifying through reference
console.log('\nModifying fruits1[0] to "mango":')
fruits1[0] = 'mango'
console.log('fruits1:', fruits1)
console.log('fruits3:', fruits3) // Also changed! Because it points to same array

console.log('\n===== OBJECTS (Non-Primitive) =====')

// Example 1: Creating two separate objects with same properties
let student1 = {
  name: 'John',
  age: 20,
  grade: 'A'
}

let student2 = {
  name: 'John',
  age: 20,
  grade: 'A'
}

console.log('student1:', student1)
console.log('student2:', student2)
console.log('student1 == student2:', student1 == student2) // false (different references)

// Example 2: Assigning one object to another (copying reference)
let student3 = student1
console.log('\nstudent3 = student1')
console.log('student3:', student3)
console.log('student1 == student3:', student1 == student3) // true (same reference)

// Example 3: Modifying through reference
console.log('\nModifying student1.name to "Jane":')
student1.name = 'Jane'
console.log('student1:', student1)
console.log('student3:', student3) // Also changed! Because it points to same object

console.log('\n===== COMPARISON SUMMARY =====')
console.log('Primitive types (numbers, strings, booleans) = compared by VALUE')
console.log('Non-Primitive types (arrays, objects) = compared by REFERENCE (memory address)')