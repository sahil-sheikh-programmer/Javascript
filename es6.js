// let  and const - ecmascript 2015

// let keyword : 
//     The `let` keyword is used to declare block-scoped variables, 
//     meaning the variable is only accessible within the block it is defined.
// //     It allows you to create variables that can be reassigned later.
// EXAMPLE :

let x = 10;
x = 20; // Reassignment is allowed
console.log(x); // Output: 20

if (true) {
    let name = "John";
    console.log(name); // Output: John
}
//  console.log(name); // Output: name is not defined

// const keyword :
//     The `const` keyword is also used to declare block-scoped variables, 
//     but the value of a `const` variable cannot be reassigned 
//     after it is initialized.

const PI = 3.14;   // global (outer scope) PI

if (true) {
    const PI = 300;   // new PI (inner scope, only inside this block)
    console.log(PI);  // 👉 300
}

console.log(PI);  // 👉 3.14 (outer PI, untouched)



// in ECMAscript 6 template literals, you can embed expressions
//  inside backticks (`` ` ``) using the `${expression}` syntax. T
//     his allows for easier string interpolation and multi-line strings.

// Example:

const name = "John";
const greeting = `Hello, ${name}!`;
console.log(greeting); // Output: Hello, John!


let surname = `sdfdfd
fdfdf
fdfdf
fdf`
console.log(surname)

/*
Default Function Parameters:
    In ES6, you can assign default values to function parameters.
    If an argument is not provided or is undefined, the default value is used.
*/

// Example:
function greet(person = "Guest") {
    console.log(`Hello, ${person}!`);
}

greet();           // Output: Hello, Guest!
greet("Alice");    // Output: Hello, Alice!





// const multi = function (a,b){
//    let result = a * b
//    console.log(result)

// }
// multi(5,6)

// console.log(multi(5,6))  function should be return value


// Arrow Functions:
// Arrow functions provide a more concise syntax for writing function expressions.
const multi = (a, b) => result = a * b;

// multi(5,5)
console.log(multi(5, 6)) //arrow function should not be return value not like anonymous function


// write a javascript function that takes two numbers and an operator as parameters and returns
// the result of the operation..the function should handle addition, subtraction, multiplication, and division.



const calculation = (a, b, operator) => {
    switch (operator) {
        case "-":
            return result = a - b;

        case "+":
            return result = a + b;

        case "/":
            if (b === 0) {
                return "lllvalue is 0"
            }
            else {
                return result = a / b;
            }
        case "*":
            return result = a * b;
        default:
            console.log("plz check the operator")

    }

}
console.log(calculation(12, 0, "/"))




// Reverse a string  : write a function to reverse a given string without using built-in
// reverse methods.

// const isReverse=(str)=>{
//     console.log(str)
//     console.log(str.length)
//   let reverse=""
// for(let char = str.length-1; char>=0;char--){

//   reverse=reverse+str[char];

// }
//  console.log(reverse)

// }
// isReverse("sahil sheikh")



// palindrome function



const isPalindrome = (str) => {

    let reverse = "";
    for (let char = str.length - 1; char >= 0; char--) {

        reverse = reverse + str[char];

    }
    return str === reverse ? true : false;

}


console.log(isPalindrome("level"))
console.log(isPalindrome("sahil"))



