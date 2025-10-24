// startsWith: it takes a substring as an argument and it checks if the string starts with that specified substring. It returns a boolean(true or false).
// string.startsWith(substring)
let string = 'Love is the best to in this world'
console.log(string.startsWith('Love')) // true
console.log(string.startsWith('love')) // false
console.log(string.startsWith('world')) // false

let country = 'Indonesia'


console.log(country.startsWith('Ind')) // true
console.log(country.startsWith('ind')) // false
console.log(country.startsWith('in')) //  true
console.log(country.startsWith('nesia')) // false
console.log(country.startsWith('Indonesia')) // true
console.log(country.startsWith('Indonesian')) // false
console.log(country.startsWith('')) // true
console.log(country.startsWith(' ')) // false
console.log(country.startsWith('Indonesia ')) // false
console.log(country.startsWith(' Indonesia')) // false