/*Getters and Setters
Used to access and update properties safely.*/
// Example:
class User {
  constructor(name) {
    this._name = name;
  }

  get name() {
    return this._name;
  }

  set name(newName) {
    this._name = newName;
  }
}

const user = new User("Prasad");
console.log(user.name); // Prasad
user.name = "Ravi";
console.log(user.name); // Ravi
