/*
2. Encapsulation with Getters and Setters
You can also use get and set to control access to internal properties.
*/


// Example:
class User {
  #email;

  constructor(name, email) {
    this.name = name;
    this.#email = email;
  }

  get email() {
    return this.#email;
  }

  set email(newEmail) {
    if (newEmail.includes("@")) {
      this.#email = newEmail;
    } else {
      console.log("Invalid email format");
    }
  }
}

const user = new User("Prasad", "prasad@example.com");
console.log(user.email); // prasad@example.com
user.email = "new@example.com"; // ✅
user.email = "invalid-email";   // ❌ Invalid email format
console.log(user.email); // 
