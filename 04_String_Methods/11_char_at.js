// charAt(): Takes index and it returns the value at that index
string.charAt(index)
let string = 'Jo Jeeta Wohi Sikandar'
console.log(string.charAt(0)) // J
let lastIndex = string.length - 1
console.log(string.charAt(lastIndex)) // r
console.log(string.charAt(7)) // W  
console.log(string.charAt(100)) // '' (empty string)    
console.log(string.charAt(-5)) // '' (empty string)
console.log(string.charAt()) // J (default index is 0)
console.log(string.charAt(undefined)) // J (default index is 0)
console.log(string.charAt(null)) // J (null is converted to 0)
console.log(string.charAt('5')) // e (string '5' is converted to number 5)
console.log(string.charAt('hello')) // J (string 'hello' is converted to NaN, default index is 0)