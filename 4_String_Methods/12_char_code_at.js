// charCodeAt(): Takes index and it returns char code(ASCII number) of the value at that index

string.charCodeAt(index)
let string = 'its my life'
console.log(string.charCodeAt(3)) // 32 ASCII is for space

console.log(string.charCodeAt(0)) // i ASCII is 105
console.log(string.charCodeAt(1)) // t ASCII is 116
console.log(string.charCodeAt(2)) // s ASCII is 115
console.log(string.charCodeAt(4)) // m ASCII is 109

let lastIndex = string.length - 1
console.log(string.charCodeAt(lastIndex)) // e ASCII is 101

console.log(string.charCodeAt(20)) // NaN
// If index is greater than the string length it will return NaN

console.log(string.charCodeAt()) // 105
// If index is not provided it will consider index as 0

console.log(string.charCodeAt(-4)) // NaN
// If index is negative it will return NaN

console.log(string.charCodeAt(4.7)) // 109
// If index is a decimal it will consider only the integer part 

console.log(string.charCodeAt('3')) // 32
// If index is a string containing a number it will convert it to number and return the char code at that index

console.log(string.charCodeAt(null)) // 105
// If index is null it will consider index as 0

console.log(string.charCodeAt(undefined)) // 105
// If index is undefined it will consider index as 0

console.log(string.charCodeAt(true)) // 109
// If index is true it will consider index as 1

console.log(string.charCodeAt(false)) // 105
// If index is false it will consider index as 0    

console.log(string.charCodeAt(NaN)) // 105
// If index is NaN it will consider index as 0

console.log(string.charCodeAt({})) // 105
// If index is an object it will consider index as 0

console.log(string.charCodeAt([])) // 105
// If index is an empty array it will consider index as 0

console.log(string.charCodeAt([4])) // 109
// If index is an array with a single number it will consider that number as index

console.log(string.charCodeAt([2,3,4])) // 105
// If index is an array with multiple values it will consider index as 0

console.log(string.charCodeAt(function(){return 3})) // 105
// If index is a function it will consider index as 0

console.log(string.charCodeAt(function(){return 5}())) // 109
// If index is a invoked function it will consider the returned value as index

console.log(string.charCodeAt(Symbol())) // 105
// If index is a Symbol it will consider index as 0 

console.log(string.charCodeAt(BigInt(2))) // 105
// If index is a BigInt it will consider index as 0

console.log(string.charCodeAt(-Infinity)) // 105
// If index is -Infinity it will consider index as 0

console.log(string.charCodeAt(1e2)) // 105
// If index is a very large number it will consider index as 0  

console.log(string.charCodeAt(1e-2)) // 105
// If index is a very small number it will consider index as 0  