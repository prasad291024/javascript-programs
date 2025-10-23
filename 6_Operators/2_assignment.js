// Assignment Operators - Assigning and modifying values

console.log('=== Assignment Operators ===\n')

// Simple assignment
let score = 100
console.log('Initial score (=):', score)
console.log()

// Add and assign
score += 25  // score = score + 25
console.log('After += 25:', score)

// Subtract and assign
score -= 15  // score = score - 15
console.log('After -= 15:', score)

// Multiply and assign
score *= 2  // score = score * 2
console.log('After *= 2:', score)

// Divide and assign
score /= 4  // score = score / 4
console.log('After /= 4:', score)

// Modulus and assign
score %= 20  // score = score % 20
console.log('After %= 20:', score)

// Exponentiation and assign
score **= 2  // score = score ** 2
console.log('After **= 2:', score)
console.log()

// Practical Example: Game Score System
let playerScore = 0
console.log('=== Game Score System ===')
console.log('Starting score:', playerScore)

playerScore += 50  // Collected coins
console.log('Collected coins (+50):', playerScore)

playerScore += 100  // Defeated enemy
console.log('Defeated enemy (+100):', playerScore)

playerScore -= 20  // Took damage
console.log('Took damage (-20):', playerScore)

playerScore *= 2  // Score multiplier bonus
console.log('2x multiplier bonus:', playerScore)

console.log('\nFinal Score:', playerScore)