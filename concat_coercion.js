
// type coercion is the process of converting a value from one data type to another, often automatically by the JavaScript engine.
 // This can happen during operations like addition or concatenation, 
 // where JavaScript tries to make sense of the types involved.
// For example, if you try to add a number and a string, JavaScript will convert the number to a string and concatenate them instead of performing arithmetic addition.


/*String concatenation and type coercion examples in JavaScript*/

// Example 1: Concatenating strings
const str1 = "Hello";
const str2 = "World";
const result1 = str1 + " " + str2; // "Hello World"

// Example 2: Concatenating string and number (type coercion)
const num = 42;
const result2 = "The answer is " + num; // "The answer is 42"

// Example 3: Concatenating boolean and string
const bool = true;
const result3 = "Value is " + bool; // "Value is true"

// Example 4: Adding numbers vs concatenating strings
const a = 10;
const b = 20;
const sum = a + b; // 30
const concat = "" + a + b; // "1020"

// Example 5: Using template literals
const name = "Alice";
const age = 30;
const result4 = `${name} is ${age} years old.`; // "Alice is 30 years old."

console.log(result1);
console.log(result2);
console.log(result3);
console.log(sum);
console.log(concat);
console.log(result4);

// TRICKY QUESTIONS
console.log("5" + 5); // "55" (string concatenation)
console.log(5 + 5 + "5"); // "105" (number addition followed by string concatenation)
console.log("5" - 5); // 0 (string is coerced to number)
console.log("5" * 5); // 25 (string is coerced to number)
console.log("5" / 5); // 1 (string is coerced to number)
console.log("" + ""); // "" (concatenating two empty strings)
console.log("5" + true); // "5true" (string concatenation)
console.log("sahil" - "sahil"); // NaN (string subtraction)
console.log(false + false); // 0 (boolean is coerced to number)
console.log(false + true); // 1 (boolean is coerced to number)
console.log(true + false); // 1 (boolean is coerced to number)
console.log(true + true); // 2 (boolean is coerced to number)
