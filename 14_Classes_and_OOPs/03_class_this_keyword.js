
/*Using this Keyword
this refers to the current instance of the class. 
It allows you to access properties and methods of the class within its own methods.*/



//Example:
class Car {
  constructor(brand, year) {
    this.brand = brand;
    this.year = year;
  }

  getDetails() {
    return `${this.brand} - ${this.year}`;
  }
}

const myCar = new Car("Toyota", 2022);
console.log(myCar.getDetails()); // Toyota - 2022
