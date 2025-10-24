// Step 1: Display a welcome alert
window.alert("Welcome to the Window Methods Demo!");

// Step 2: Ask the user for their name using prompt
const userName = window.prompt("What's your name?");

// Step 3: Confirm if the user wants to proceed
const wantsToContinue = window.confirm(`Hi ${userName || "Guest"}, do you want to continue?`);

if (wantsToContinue) {
  window.alert(`Great! Let's proceed, ${userName || "Guest"} 🚀`);
} else {
  window.alert("No worries! You can come back anytime 😊");
}
