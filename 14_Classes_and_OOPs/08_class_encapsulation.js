
/*
What Is Encapsulation?
Encapsulation is the practice of hiding internal details of an object and exposing only what’s necessary. 
It helps:
Prevent unwanted access or modification
Keep code modular and maintainable
Control how data is accessed or updated

1. Using Private Fields (#)
JavaScript supports private fields using the # symbol. 
These fields are only accessible inside the class.
// Private fields are declared with a # prefix and cannot be accessed outside the class.
*/

// Example:
class BankAccount {
  #balance = 0;

  constructor(owner) {
    this.owner = owner;
  }

  deposit(amount) {
    if (amount > 0) this.#balance += amount;
  }

  getBalance() {
    return this.#balance;
  }
}

const account = new BankAccount("Prasad");
account.deposit(1000);
console.log(account.getBalance()); // 1000
// console.log(account.#balance); // ❌ SyntaxError: Private field '#balance' must be declared in an enclosing class
