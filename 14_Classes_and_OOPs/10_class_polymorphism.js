/*
What Is Polymorphism?
Polymorphism means “many forms.” 
In OOP, it allows different classes to define methods with the same name but different behavior.
This is especially useful in testing and automation when you want to write generic code that works across multiple object types.
Example: Method Overriding (Polymorphism)
Polymorphism in JavaScript Classes
This example demonstrates polymorphism through method overriding in classes.
Different subclasses provide their own implementation of the send method.
*/

// Example:
class Notification {
  send() {
    console.log("Sending a generic notification...");
  }
}

class EmailNotification extends Notification {
  send() {
    console.log("Sending an email notification...");
  }
}

class SMSNotification extends Notification {
  send() {
    console.log("Sending an SMS notification...");
  }
}

function triggerNotification(notification) {
  notification.send();
}

const email = new EmailNotification();
const sms = new SMSNotification();

triggerNotification(email); // Sending an email notification...
triggerNotification(sms);   // Sending an SMS notification...
