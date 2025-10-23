// Bitwise Operators - Working with binary

console.log('=== Bitwise Operators ===\n')

let a = 5   // Binary: 0101
let b = 3   // Binary: 0011

console.log('Number a:', a, '(Binary: 0101)')
console.log('Number b:', b, '(Binary: 0011)')
console.log()

// AND (&) - Both bits must be 1
console.log('a & b:', a & b)  // 1 (Binary: 0001)

// OR (|) - At least one bit must be 1
console.log('a | b:', a | b)  // 7 (Binary: 0111)

// XOR (^) - Bits must be different
console.log('a ^ b:', a ^ b)  // 6 (Binary: 0110)

// NOT (~) - Inverts all bits
console.log('~a:', ~a)  // -6

// Left shift (<<) - Shifts bits left
console.log('a << 1:', a << 1)  // 10 (Binary: 1010)

// Right shift (>>) - Shifts bits right
console.log('a >> 1:', a >> 1)  // 2 (Binary: 0010)
console.log()

// Practical Example: Permission system using bitwise
const READ = 1      // Binary: 001
const WRITE = 2     // Binary: 010
const EXECUTE = 4   // Binary: 100

let userPermissions = READ | WRITE  // 3 (Binary: 011)
let adminPermissions = READ | WRITE | EXECUTE  // 7 (Binary: 111)

console.log('=== Permission System ===')
console.log('User Permissions:', userPermissions)
console.log('Can Read?', (userPermissions & READ) !== 0)
console.log('Can Write?', (userPermissions & WRITE) !== 0)
console.log('Can Execute?', (userPermissions & EXECUTE) !== 0)
console.log()

console.log('Admin Permissions:', adminPermissions)
console.log('Can Read?', (adminPermissions & READ) !== 0)
console.log('Can Write?', (adminPermissions & WRITE) !== 0)
console.log('Can Execute?', (adminPermissions & EXECUTE) !== 0)