// includes(): It takes a substring argument and it check if substring argument exists in the string. includes() returns a boolean. It checks if a substring exist in a string and it returns true if it exists and false if it doesn't exist.
let string = 'With great power, comes great responsibility.'
console.log(string.includes('great'))    // true
console.log(string.includes('power'))    // true
console.log(string.includes('responsibility'))    // true
console.log(string.includes('hello'))    // false
console.log(string.includes('With'))    // true
console.log(string.includes('with'))    // false    





let anotherString = 'JavaScript is the most popular language in 2024 Days'
console.log(string.includes('Days'))     // true
console.log(string.includes('days'))     // false
console.log(string.includes('Script'))     // true
console.log(string.includes('script'))     // false
console.log(string.includes('java'))     // false
console.log(string.includes('Java'))     // true




let captianAmerica = 'avengers assemble!'
console.log(captianAmerica.includes('assemble')) // true
console.log(captianAmerica.includes('Assemble')) // false
console.log(captianAmerica.includes('captian')) // false
console.log(captianAmerica.includes('avengers')) // true    
console.log(captianAmerica.includes('!')) // true
console.log(captianAmerica.includes(' ')) // true