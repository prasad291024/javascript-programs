

// JavaScript Class Basics
// A class is a blueprint for creating objects with shared properties and methods.
// It defines properties (data) and methods (functions) that its instances will have.

// Defining a simple class named Animal
// Class without constructor
class Animal {
  speak() {
    console.log("Animal makes a sound");
  }
}

const dog = new Animal();
dog.speak(); // Animal makes a sound

// Class with constructor
class Cat {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  meow() {
    console.log(`${this.name} says Meow!`);
  }
}

const kitty = new Cat("Whiskers", 2);
kitty.meow(); // Whiskers says Meow!
console.log(kitty.name); // Whiskers
console.log(kitty.age); // 2


console.log("-----");




// Here, we define a simple class called Person with a constructor and a method.
// Defining a class named Person
class Person {
  constructor(name, role) {
    this.name = name;
    this.role = role;
  }

  greet() {
    console.log(`Hello, I'm ${this.name}, and I work as a ${this.role}.`);
  }
}

const user1 = new Person("Prasad", "QA Engineer");
user1.greet(); // Hello, I'm Prasad, and I work as a QA Engineer.
const user2 = new Person("Alice", "Developer");
user2.greet(); // Hello, I'm Alice, and I work as a Developer.
const user3 = new Person("Bob", "Designer");
user3.greet(); // Hello, I'm Bob, and I work as a Designer.
console.log(user1.name); // Prasad
console.log(user2.role); // Developer
// You can create multiple instances of the Person class with different attributes
console.log(user3.name); // Bob
console.log(user3.role); // Designer
// This is a basic example of how to define a class, create instances, and use methods in JavaScript.