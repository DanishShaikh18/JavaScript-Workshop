// Arithmetic Operators
let a = 10;
let b = 5;
console.log("Arithmetic Operators:");
console.log("Addition (a + b):", a + b);        // Output: 15
console.log("Subtraction (a - b):", a - b);     // Output: 5
console.log("Multiplication (a * b):", a * b);  // Output: 50
console.log("Division (a / b):", a / b);        // Output: 2
console.log("Modulus (a % b):", a % b);         // Output: 0
console.log("Exponentiation (a ** b):", a ** b);// Output: 100000
console.log("Increment (a++):", a++);           // Output: 10 (returns value before increment)
console.log("After Increment:", a);             // Output: 11
console.log("Decrement (--b):", --b);           // Output: 4 (decrement before return)
console.log("\n");

// Assignment Operators
console.log("Assignment Operators:");
let c = 20;
console.log("Initial c:", c);                   // Output: 20
c += 10; // c = c + 10
console.log("Add and Assign (c += 10):", c);    // Output: 30
c -= 5;  // c = c - 5
console.log("Subtract and Assign (c -= 5):", c); // Output: 25
c *= 2;  // c = c * 2
console.log("Multiply and Assign (c *= 2):", c); // Output: 50
c /= 10; // c = c / 10
console.log("Divide and Assign (c /= 10):", c);  // Output: 5
c %= 3;  // c = c % 3
console.log("Modulus and Assign (c %= 3):", c);  // Output: 2
console.log("\n");

// Comparison Operators
let x = 8, y = "8";
console.log("Comparison Operators:");
console.log("Equal (x == y):", x == y);         // Output: true (values are equal)
console.log("Strict Equal (x === y):", x === y);// Output: false (type mismatch)
console.log("Not Equal (x != y):", x != y);     // Output: false
console.log("Strict Not Equal (x !== y):", x !== y); // Output: true
console.log("Greater Than (x > 5):", x > 5);    // Output: true
console.log("Less Than (x < 5):", x < 5);       // Output: false
console.log("Greater or Equal (x >= 8):", x >= 8);// Output: true
console.log("Less or Equal (x <= 7):", x <= 7);   // Output: false
console.log("\n");

// Logical Operators
let isAdult = true, hasLicense = false;
console.log("Logical Operators:");
console.log("AND (isAdult && hasLicense):", isAdult && hasLicense); // Output: false
console.log("OR (isAdult || hasLicense):", isAdult || hasLicense);  // Output: true
console.log("NOT (!isAdult):", !isAdult);                          // Output: false
