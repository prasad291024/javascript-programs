// Looping Through Objects
// Example of looping through an object's properties using a for...in loop

const student = {
  name: "Prasad",
  grade: "A",
  subject: "Math"
};

for (const key in student) {
  console.log(`${key}: ${student[key]}`);
}
