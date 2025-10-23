// String Operators - Working with text

console.log('=== String Operators ===\n')

// Concatenation with +
let firstName = 'Sarah'
let lastName = 'Johnson'
let fullName = firstName + ' ' + lastName

console.log('First Name:', firstName)
console.log('Last Name:', lastName)
console.log('Full Name:', fullName)
console.log()

// Concatenate and assign +=
let message = 'Hello'
message += ', '
message += 'World'
message += '!'

console.log('Message:', message)
console.log()

// Practical Example: Building an Email
let username = 'john.doe'
let domain = 'example'
let extension = 'com'

let email = username + '@' + domain + '.' + extension
console.log('Email Address:', email)
console.log()

// Building a formatted address
let street = '123 Main St'
let city = 'New York'
let state = 'NY'
let zip = '10001'

let address = street + ', ' + city + ', ' + state + ' ' + zip
console.log('Full Address:', address)
console.log()

// Creating a product description
let productName = 'Laptop'
let brand = 'TechPro'
let model = 'X500'
let year = 2024

let description = brand + ' ' + productName + ' ' + model + ' (' + year + ')'
console.log('Product:', description)
console.log()

// Building a greeting message
let greeting = 'Welcome'
let userName = 'Alex'
let time = 'morning'

let welcomeMessage = greeting + ', ' + userName + '! Good ' + time + '.'
console.log(welcomeMessage)