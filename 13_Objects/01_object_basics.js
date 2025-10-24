// Theory 
// An object is a collection of properties, and a property is an association between a name (or key) and a value.
// A property's value can be a function, in which case the property is known as a method.    
// In JavaScript, almost "everything" is an object. A number, a string, a boolean value, a function, an array, all are objects.

// Creating an object using object literal syntax
const person = {
  firstName: 'John',
  lastName: 'Doe',
    age: 30,
    isMarried: false,
    skills: ['JavaScript', 'HTML', 'CSS'],
    greet: function() {
        console.log(`Hello, my name is ${this.firstName} ${this.lastName}`);
    }
};

// Accessing object properties
console.log(person.firstName); // John
console.log(person['lastName']); // Doe
console.log(person.age); // 30
console.log(person.skills); // ['JavaScript', 'HTML', 'CSS']