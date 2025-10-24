
/*
What Are Static Methods?
Static methods belong to the class itself, not to instances of the class. 
You call them using the class name, not this.
They’re useful for utility functions, calculations, or logic that doesn’t depend on instance properties.
*/


// Example:
class MathUtils {
  static square(x) {
    return x * x;
  }

  static cube(x) {
    return x * x * x;
  }
}

console.log(MathUtils.square(4)); // 16
console.log(MathUtils.cube(3));   // 27

// const m = new MathUtils();
// m.square(4); // ❌ Error: square is not accessible via instance
