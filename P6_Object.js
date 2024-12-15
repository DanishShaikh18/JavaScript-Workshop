let person = {
    name: "Danish",
    age: 21,
    isStudent: true
};

console.log(person);

person.city = "Pune"; // Add a new property
person.age = 23;      // Modify an existing property
delete person.isStudent; // Delete a property

console.log(person);
console.log(person.name);        // Output: Danish
console.log(person["city"]);    // Output: Pune


let bike = new Object();
bike.brand = "Royal Enfield";
bike.model = "Meteor";
console.log(bike);
