let singleQuote = 'Hello';  // Single Quote
let doubleQuote = "World"; // DOuble Quote 
let templateLiteral = `Hello, ${doubleQuote}!`;  // Template Literals
console.log(templateLiteral); // Output: Hello, World!

// Builtin Methods 

let greeting = "  Hello World  ";
console.log(greeting.toUpperCase()); // Output: HELLO WORLD
console.log(greeting.toLowerCase()); // Output: hello world
console.log(greeting.trim());   // HelloWorld

// Multiline String 
let multiLine = `This is
a multi-line
string.`;
console.log(multiLine);

// Strings are Immutable 
let original = "Hello";
original[0] = "Y"; // This does nothing
console.log(original); // Output: Hello
