// search: it takes a substring as an argument and it returns the index of the first match.
// string.search(substring)
let string = 'I love JavaScript. If you do not love JavaScript what else can you love.'
console.log(string.search('love')) // 2
console.log(string.search('JavaScript')) // 7
console.log(string.search('Python')) // -1 (not found)
console.log(string.search(/love/)) // 2 (using regular expression)
console.log(string.search(/JavaScript/)) // 7 (using regular expression)
console.log(string.search('what')) // 36

// Note: The search() method does not accept a second start position argument like indexOf().
// The search() method cannot take a string as an argument. It only takes regular expressions. 


