/* Defining a class with methods in JavaScript
Adding Methods to a Class
You can define multiple methods inside a class to represent behaviors.

*/
class Calculator {
  add(a, b) {
    return a + b;
  }

  multiply(a, b) {
    return a * b;
  }
}

const calc = new Calculator();
console.log("Add:", calc.add(5, 3));       // 8
console.log("Multiply:", calc.multiply(4, 2)); // 8
