// split(): The split method splits a string at a specified place.
let string = "Hello World";
let result = string.split(" ");
console.log(result); // Output: [ 'Hello', 'World' ]
// Here, the string is split at the space character, resulting in an array of words.

// You can also split by other characters or substrings
let csvString = "apple,banana,cherry";
let fruits = csvString.split(",");
console.log(fruits); // Output: [ 'apple', 'banana', 'cherry' ] 

// Splitting by each character
let word = "hello";
let characters = word.split("");
console.log(characters); // Output: [ 'h', 'e', 'l', 'l', 'o' ]

// Limiting the number of splits
let limitedSplit = string.split(" ", 1);
console.log(limitedSplit); // Output: [ 'Hello' ]
// Here, the string is split at the space character, but only the first part is returned due to the limit of 1. 

// Splitting with no separator returns the entire string in an array
let noSplit = string.split();
console.log(noSplit); // Output: [ 'Hello World' ]
// Here, since no separator is provided, the entire string is returned as a single element in an array. 

// Splitting an empty string
let emptyString = "";
let emptySplit = emptyString.split(",");
console.log(emptySplit); // Output: [ '' ]
// Here, splitting an empty string results in an array with one element: an empty string.

// Splitting a string with consecutive separators
let consecutiveSeparators = "one,,two,,three";
let splitConsecutive = consecutiveSeparators.split(",");
console.log(splitConsecutive); // Output: [ 'one', '', 'two', '', 'three' ]
// Here, the string is split at each comma, resulting in empty strings for consecutive separators.

// Splitting a string with a substring as a separator
let substringSeparator = "2021-06-15";
let dateParts = substringSeparator.split("-");
console.log(dateParts); // Output: [ '2021', '06', '15' ]
// Here, the string is split at each hyphen, resulting in an array of date components.

// Splitting a string with whitespace as a separator
let whitespaceString = "   Hello   World   ";
let whitespaceSplit = whitespaceString.split(" ");
console.log(whitespaceSplit); // Output: [ '', '', '', 'Hello', '', '', 'World', '', '', '' ]
// Here, the string is split at each space, resulting in empty strings for leading, trailing, and consecutive spaces.   

// Splitting a string with a regular expression as a separator
let regexString = "apple1banana2cherry3date";
let regexSplit = regexString.split(/\d/);
console.log(regexSplit); // Output: [ 'apple', 'banana', 'cherry', 'date' ]
// Here, the string is split at each digit, resulting in an array of fruit names.

// Splitting a string with a limit of zero
let zeroLimitSplit = string.split(" ", 0);
console.log(zeroLimitSplit); // Output: []
// Here, the string is split at the space character, but since the limit is 0, an empty array is returned.

// Splitting a string with special characters
let specialCharString = "hello@world#2024";
let specialCharSplit = specialCharString.split(/[@#]/);
console.log(specialCharSplit); // Output: [ 'hello', 'world', '2024' ]
// Here, the string is split at both '@' and '#' characters, resulting in an array of substrings.

// Splitting a string with newline characters
let newlineString = "line1\nline2\nline3";
let newlineSplit = newlineString.split("\n");
console.log(newlineSplit); // Output: [ 'line1', 'line2', 'line3' ]
// Here, the string is split at each newline character, resulting in an array of lines.

// Splitting a string with tab characters
let tabString = "item1\titem2\titem3";
let tabSplit = tabString.split("\t");
console.log(tabSplit); // Output: [ 'item1', 'item2', 'item3' ]
// Here, the string is split at each tab character, resulting in an array of items.

// Splitting a string with multiple character separators
let multiCharString = "apple--banana--cherry";
let multiCharSplit = multiCharString.split("--");
console.log(multiCharSplit); // Output: [ 'apple', 'banana', 'cherry' ]
// Here, the string is split at each occurrence of the substring "--", resulting in an array of fruit names.

// Splitting a string with no matches for the separator
let noMatchString = "hello world";
let noMatchSplit = noMatchString.split(",");
console.log(noMatchSplit); // Output: [ 'hello world' ]
// Here, since there are no commas in the string, the entire string is returned as a single element in an array.

// Splitting a string with leading and trailing separators
let leadingTrailingString = ",apple,banana,cherry,";
let leadingTrailingSplit = leadingTrailingString.split(",");
console.log(leadingTrailingSplit); // Output: [ '', 'apple', 'banana', 'cherry', '' ]
// Here, the string is split at each comma, resulting in empty strings for leading and trailing separators.

// Splitting a string with Unicode characters
let unicodeString = "café,naïve,façade";
let unicodeSplit = unicodeString.split(",");
console.log(unicodeSplit); // Output: [ 'café', 'naïve', 'façade' ]
// Here, the string is split at each comma, correctly handling Unicode characters.

// Splitting a string with a mix of different separators
let mixedSeparatorString = "apple,banana;cherry|date";
let mixedSeparatorSplit = mixedSeparatorString.split(/[,;|]/);
console.log(mixedSeparatorSplit); // Output: [ 'apple', 'banana', 'cherry', 'date' ]
// Here, the string is split at commas, semicolons, and pipe characters, resulting in an array of fruit names.

// Splitting a string with a long limit
let longLimitSplit = string.split(" ", 10);
console.log(longLimitSplit); // Output: [ 'Hello', 'World' ]
// Here, the string is split at the space character, and since the limit is greater than the number of splits, all parts are returned.

// Splitting a string with special whitespace characters
let specialWhitespaceString = "hello\u00A0world";
let specialWhitespaceSplit = specialWhitespaceString.split("\u00A0");
console.log(specialWhitespaceSplit); // Output: [ 'hello', 'world' ]
// Here, the string is split at the non-breaking space character, resulting in an array of words.   

// Splitting a string with an empty separator and limit
let emptySeparatorLimitSplit = string.split("", 5);
console.log(emptySeparatorLimitSplit); // Output: [ 'H', 'e', 'l', 'l', 'o' ]
// Here, the string is split into individual characters, but only the first 5 characters are returned due to the limit.

// Splitting a string with a separator that is not present
let absentSeparatorString = "hello world";
let absentSeparatorSplit = absentSeparatorString.split("x");
console.log(absentSeparatorSplit); // Output: [ 'hello world' ]
// Here, since the separator 'x' is not present in the string, the entire string is returned as a single element in an array.   

// Splitting a string with multiple consecutive spaces
let multiSpaceString = "hello    world";
let multiSpaceSplit = multiSpaceString.split(" ");
console.log(multiSpaceSplit); // Output: [ 'hello', '', '', '', 'world' ]
// Here, the string is split at each space, resulting in empty strings for consecutive spaces.

// Splitting a string with a separator at the start and end
let edgeSeparatorString = ",apple,banana,cherry,";
let edgeSeparatorSplit = edgeSeparatorString.split(",");
console.log(edgeSeparatorSplit); // Output: [ '', 'apple', 'banana', 'cherry', '' ]
// Here, the string is split at each comma, resulting in empty strings for the separators at the start and end.

// Splitting a string with a mix of uppercase and lowercase letters
let caseMixString = "HelloWorld";
let caseMixSplit = caseMixString.split(/(?=[A-Z])/);
console.log(caseMixSplit); // Output: [ 'Hello', 'World' ]
// Here, the string is split before each uppercase letter, resulting in an array of words.

// Splitting a string with a separator that includes spaces
let spaceSeparatorString = "apple - banana - cherry";
let spaceSeparatorSplit = spaceSeparatorString.split(" - ");
console.log(spaceSeparatorSplit); // Output: [ 'apple', 'banana', 'cherry' ]
// Here, the string is split at each occurrence of " - ", resulting in an array of fruit names.

// Splitting a string with a separator that is a substring of another word
let substringOfWordString = "cat,cater,caterpillar";
let substringOfWordSplit = substringOfWordString.split("cat");
console.log(substringOfWordSplit); // Output: [ '', ',er,', 'erpillar' ]
// Here, the string is split at each occurrence of "cat", resulting in an array with empty strings and remaining parts.

// Splitting a string with a separator that is a special regex character
let specialRegexCharString = "one.two.three";
let specialRegexCharSplit = specialRegexCharString.split(".");
console.log(specialRegexCharSplit); // Output: [ 'one', 'two', 'three' ]
// Here, the string is split at each period character, resulting in an array of words.
// Note: In the last example, the period is treated as a literal character because it is not used in a regex context.

