
// what is a data type in JavaScript?
// A data type in JavaScript is a classification that specifies the type of value a variable can hold. 
// JavaScript has several built-in data types, including:
// 1. Primitive Data Types:
//    - Number: Represents both integer and floating-point numbers.
//    - String: Represents a sequence of characters enclosed in quotes.
//    - Boolean: Represents a logical value that can be either true or false.
//    - Undefined: Represents a variable that has been declared but has not yet been assigned a value.
//    - Null: Represents the intentional absence of any object value.
//    - Symbol: Represents a unique and immutable value, often used as object property keys.

// 2. Reference Data Types:
//    - Object: Represents a collection of key-value pairs and is used to store more complex entities.
//    - Array: Represents an ordered list of values and is a special type of object.
//    - Function: Represents a reusable block of code that can be called with arguments.


// lets take a look at some examples of each data type:

// Example of Primitive Data Types
let age = 25; // Number
let name = "John"; // String
let isStudent = true; // Boolean
let address; // Undefined
let car = null; // Null
const uniqueID = Symbol("id"); // Symbol

// Example of Reference Data Types
let person = { name: "Alice", age: 30 }; // Object
let numbers = [1, 2, 3, 4, 5]; // Array
function greet() {
  console.log("Hello!");
} // Function



console.log(typeof age);
console.log(typeof name);
console.log(typeof isStudent);
console.log(typeof address);
console.log(typeof car);
console.log(typeof uniqueID);
console.log(typeof person);
console.log(typeof numbers);
console.log(typeof greet);


// INTERVIEW QUESTIONS 
//  What is the difference between null and undefined in JavaScript?
//  - null is an assignment value. It can be assigned to a variable as a representation of no value.
//  - undefined means a variable has been declared but has not yet been assigned a value.

// what is the difference between primitive and reference data types in JavaScript?
// - Primitive data types are immutable and hold their value directly. They include Number, String, Boolean, Undefined, Null, and Symbol.
// - Reference data types are mutable and hold a reference to the memory location where the value is stored. They include Object, Array, and Function.


// what is the purpose typeof operator in JavaScript?
// The typeof operator is used to determine the data type of a variable or an expression. It returns a string indicating the type of the unevaluated operand.

// WHAT IS THE RESULT OF typeof NULL IN JavaScript?
// The result of typeof null in JavaScript is "object". This is a known bug in JavaScript that has been around since the beginning.

// WHAT  ARE primitive DATA TYPES IN JAVASCRIPT?
// Primitive data types in JavaScript are the basic building blocks of data. They include:
// 1. Number: Represents both integer and floating-point numbers.
// 2. String: Represents a sequence of characters enclosed in quotes.
// 3. Boolean: Represents a logical value that can be either true or false.
// 4. Undefined: Represents a variable that has been declared but has not yet been assigned a value.
// 5. Null: Represents the intentional absence of any object value.
// 6. Symbol: Represents a unique and immutable value, often used as object property keys.


// EXPLAIN THE CONCEPT OF TRUTHY AND FALSY VALUES IN JAVASCRIPT?
// In JavaScript, values are categorized as either "truthy" or "falsy" based on their evaluation in a Boolean context (e.g., conditionals).
// - Falsy values are values that evaluate to false when coerced to a Boolean. They include:
//   1. false
//   2. 0 (zero)
//   3. "" (empty string)
//   4. null
//   5. undefined
//   6. NaN (Not-a-Number)

// - Truthy values are all values that are not falsy. They include:
//   1. true
//   2. Any non-zero number
//   3. Any non-empty string
//   4. Any object (including arrays and functions)
//   5. Symbol values

// Example of Truthy and Falsy values
let truthyValues = [true, 42, "Hello", {}, []];
let falsyValues = [false, 0, "", null, undefined, NaN];
