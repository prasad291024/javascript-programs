
// Nested Objects:
// Example of a nested object representing a company
const company = {
  name: "TechCorp",
  location: {
    city: "Pune",
    country: "India"
  },
  employees: ["Prasad", "Ravi", "Sneha"]
};

console.log(company.location.city); // Pune
console.log(company.employees[0]);  // Prasad
console.log(company['location']['country']); // India
console.log(company['employees'][2]); // Sneha
company.location.city = "Mumbai";
console.log(company.location.city); // Mumbai
company.employees.push("Anita");
console.log(company.employees); // ["Prasad", "Ravi", "Sneha", "Anita"]
company.location.zipCode = "400001";
console.log(company.location.zipCode); // 400001
delete company.location.country;
console.log(company.location); // { city: 'Mumbai', zipCode: '400001' }
console.log(company);
