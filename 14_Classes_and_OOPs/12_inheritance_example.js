class Engine {
  start() {
    console.log("Engine started");
  }
}

class Car extends Engine {
  drive() {
    console.log("Car is driving");
  }
}

const myCar = new Car();
myCar.start(); // Engine started
myCar.drive(); // Car is driving
