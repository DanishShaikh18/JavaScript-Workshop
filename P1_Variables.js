// VARIABLES and Types

// var
// let
// const

// Var 
var name = "Danish";
console.log(name); // Output: Danish

if (true) {
    var age = 21;
}
console.log(age); // Output: 25 (accessible outside the block)

var name = "Shaikh"; // Redeclaration allowed
console.log(name); // Output: Shaikh


// LET 

let city = "Pune";
console.log(city); // Output: Pune

if (true) {
    let country = "India";
    console.log(country); // Output: India
}
// console.log(country); // Error: country is not defined

city = "Mumbai"; // Reassignment allowed
console.log(city); // Output: Mumbai

// let city = "Delhi"; // Error: Cannot redeclare 'city'

// CONST

const pi = 3.14;
console.log(pi); // Output: 3.14

// pi = 3.14159; // Error: Assignment to constant variable

if (true) {
    const gravity = 9.8;
    console.log(gravity); // Output: 9.8
}
// console.log(gravity); // Error: gravity is not defined

// const pi = 22 / 7; // Error: Cannot redeclare 'pi'

