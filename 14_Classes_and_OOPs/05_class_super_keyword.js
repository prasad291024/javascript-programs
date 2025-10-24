/*Using super() in Subclasses
super() calls the parent class constructor or methods.*/
/* JavaScript Class Inheritance Example
    This example demonstrates how to use the super keyword to call the parent class constructor and methods.
*/

class Vehicle {
  constructor(type) {
    this.type = type;
  }

  describe() {
    console.log(`This is a ${this.type}.`);
  }
}

class Bike extends Vehicle {
  constructor(type, brand) {
    super(type);
    this.brand = brand;
  }

  showBrand() {
    console.log(`Brand: ${this.brand}`);
  }
}

const myBike = new Bike("Two-wheeler", "Honda");
myBike.describe();   // This is a Two-wheeler.
myBike.showBrand();  // Brand: Honda
