// javascript function

//  a function is a reusable block of code that can be executed when called.
//  functions are used to perform specific tasks, calculations, or operations.





// function declaration 
// in javascript a function can be defined using the `function`
//  keyword followed by the function name,
//  parentheses for parameters, and curly braces for the function body.

function add(a, b) {
  return a + b;
}

console.log(add(2, 3)); // returns 5




// now we see function invocation with greet function

function greet(){
    console.log("hey sahil good evening!!")
}
greet() 


// function with parameters
// in this function, we define two parameters: param1 and param2.
function parametersExample(param1, param2) {
    console.log("Parameter 1:", param1);
    console.log("Parameter 2:", param2);
}


parametersExample("Hello", 42); // in this function we say arguments are passed to the parameters

// what is function expressions
// a function expression define a function
// as part of an expression. it can be either Named
// or anonymous. if its named it becomes a named function expression,

let result = function add(a,b){
    console.log(a,b)
}
// add (5,5) not call
result(5,5) // this is a function expression




// anonymous function 

// a anonymous function is function without a name. 
// it can be created using either a function expression or 
// function declaration without a specified name.


var add = function (b,c){
    console.log(b*c)
}

add(19,9)


// what is return 
// in functions, the return statement is used to exit 
// a function and return a value to the caller.

function minus(a,b){
  
    return a-b
}
var result2= minus(44,4)
console.log("the result is ",result2);



// IIFE - immediately invoked function expression

// is a JavaScript function that runs as soon as it is defined.

(function (a, b){
console.log(a+b)   
})(100,10);

// this function is immediately invoked with arguments 100 and 10