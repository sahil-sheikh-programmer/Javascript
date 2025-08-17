
// JavaScript Operators: Types, Explanation, and Logical Examples

// 1. Arithmetic Operators
//     - Used for mathematical calculations.
//     - Examples: +, -, *, /, %, **

//     Example:
    let a = 10, b = 3;
    console.log(a + b); // 13
    console.log(a - b); // 7
    console.log(a * b); // 30
    console.log(a / b); // 3.333...
    console.log(a % b); // 1
    console.log(a ** b); // 1000

// 2. Assignment Operators
//     - Assign values to variables.
//     - Examples: =, +=, -=, *=, /=, %=, **=

//     Example:
    let x = 5;
    x += 3; // x = x + 3 => 8
    x *= 2; // x = x * 2 => 16

// 3. Comparison Operators
//     - Compare two values and return a boolean.
//     - Examples: ==, ===, !=, !==, >, <, >=, <=

//     Example:
    let age = 18;
    console.log(age >= 18); // true
    console.log(age === '18'); // false (strict equality)

// 4. Logical Operators
//     - Combine multiple conditions.
//     - Examples: && (AND), || (OR), ! (NOT)

//     Example:
    let isAdult = age >= 18;
    let hasID = true;   
    console.log(isAdult && hasID); // true
    console.log(isAdult || hasID); // true
    console.log(!isAdult); // false

// 5. Bitwise Operators
//     - Operate on binary representations.
//     - Examples: &, |, ^, ~, <<, >>, >>>

//     Example:
    let p = 5; // 0101
    let q = 3; // 0011
    console.log(p & q); // 1 (0001)
    console.log(p | q); // 7 (0111)
    console.log(p ^ q); // 6 (0110)
    console.log(~p); // -6

// 6. Ternary Operator
//     - Shortcut for if-else.
//     - Syntax: condition ? expr1 : expr2

//     Example:
    let result = (age >= 18) ? "Adult" : "Minor";
    console.log(result); // "Adult"

//  
    console.log(typeof age); // "number"
    console.log([] instanceof Array); // true

// 8. String Operators
//    - Used for string concatenation.
//    - Example: 
    let firstName = "John";
    let lastName = "Doe";
    console.log(firstName + " " + lastName); // "John Doe"

// 9. Unary Operators
//    - Operate on a single operand.
//    - Examples: +, -, ++, --, !

//    Example:
    let count = 1;
    count++; // 2
    console.log(count); // 2
    console.log(!true); // false  

    // var result1 = 0.1 + 0.2;
    // console.log(result); // 0.30000000000000004
    // why does this happen?
    // This happens because of the way floating-point numbers are represented in JavaScript.
    // JavaScript uses the IEEE 754 standard for representing numbers, which can lead to precision issues.
//    To avoid this, you can use methods like toFixed() to format the number or use libraries for precise decimal arithmetic.
    console.log((0.1 + 0.2).toFixed(2)); // "0.300"l  