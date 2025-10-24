// lastIndexOf(): Takes takes a substring and if the substring exists in a string it returns the last position of the substring if it does not exist it returns -1

let string = 'I love JavaScript. If you do not love JavaScript what else can you love.'
console.log(string.lastIndexOf('love'))       // 67
console.log(string.lastIndexOf('you'))        // 63
console.log(string.lastIndexOf('JavaScript')) // 38
console.log(string.lastIndexOf('Python'))     // -1
console.log(string.lastIndexOf(' '))          // 70
console.log(string.lastIndexOf(''))           // 71
console.log(string.lastIndexOf('love', 20))  // 10
console.log(string.lastIndexOf('love', 9))   // -1
console.log(string.lastIndexOf('JavaScript', 30)) // 18
console.log(string.lastIndexOf('JavaScript', 17)) // -1
console.log(string.lastIndexOf('.', 70))     // 69
console.log(string.lastIndexOf('.', 68))     // 38
console.log(string.lastIndexOf('.', 37))     // -1
console.log(string.lastIndexOf('I', 0))      // 0
console.log(string.lastIndexOf('I', -1))     // 0
console.log(string.lastIndexOf('x', -5))     // -1
console.log(string.lastIndexOf('x', -50))    // -1
console.log(string.lastIndexOf('love', 100)) // 67
console.log(string.lastIndexOf('JavaScript', 100)) // 38
console.log(string.lastIndexOf('.', 100))   // 69
console.log(string.lastIndexOf('I', 100))   // 0
console.log(string.lastIndexOf('x', 100))   // -1
console.log(string.lastIndexOf(''))         // 71
console.log(string.lastIndexOf('', 50))     // 50
console.log(string.lastIndexOf('', 0))      // 0
console.log(string.lastIndexOf('', -5))    // 0
console.log(string.lastIndexOf('', -50))   // 0
console.log(string.lastIndexOf('', 100))   // 71
console.log(string.lastIndexOf('', string.length)) // 71
console.log(string.lastIndexOf('', string.length + 10)) // 71
console.log(string.lastIndexOf('', -string.length)) // 0
console.log(string.lastIndexOf('', -string.length - 10)) // 0
console.log(string.lastIndexOf('love', NaN)) // 67
console.log(string.lastIndexOf('JavaScript', NaN)) // 38
console.log(string.lastIndexOf('.', NaN)) // 69
console.log(string.lastIndexOf('I', NaN)) // 0
console.log(string.lastIndexOf('x', NaN)) // -1
console.log(string.lastIndexOf('', NaN)) // 71
