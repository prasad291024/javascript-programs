/*What Is Abstraction?
Abstraction means hiding internal implementation details and exposing only the essential features of an object.
In JavaScript, abstraction is more of a design pattern than a language-enforced feature (like in Java or C#). 
You achieve it by:
Using methods to hide internal logic
Exposing a clean interface to the user
Avoiding direct access to internal properties
*/

// Example: Abstracting Internal Logic
class PaymentProcessor {
  #logTransaction(details) {
    console.log("Logging transaction:", details);
  }

  processPayment(amount) {
    if (amount <= 0) {
      console.log("Invalid amount");
      return;
    }

    // Internal logic hidden from user
    this.#logTransaction({ amount, status: "Processed" });
    console.log(`Payment of ₹${amount} processed successfully.`);
  }
}

const processor = new PaymentProcessor();
processor.processPayment(500); // ✅ Clean interface
// processor.#logTransaction(...) // ❌ Not accessible
