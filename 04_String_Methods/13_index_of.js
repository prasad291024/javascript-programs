// indexOf(): Takes takes a substring and if the substring exists in a string it returns the first position of the substring if does not exist it returns -1

string.indexOf(substring)
let string = 'Winter is Coming'
console.log(string.indexOf('Coming')) // 10
console.log(string.indexOf('Winter')) // 0
console.log(string.indexOf('is')) // 7
console.log(string.indexOf('Summer')) // -1 
console.log(string.indexOf(' ')) // 6
console.log(string.indexOf('o')) // 11
console.log(string.indexOf('n')) // 5
console.log(string.indexOf('z')) // -1 
console.log(string.indexOf('')) // 0
console.log(string.indexOf('x')) // -1
console.log(string.indexOf('winter')) // -1 (case-sensitive)
