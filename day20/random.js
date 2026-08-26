// ==========================================
// JAVASCRIPT FUNCTIONS - BEGINNER PRACTICE
// ==========================================


// 1. FUNCTION DECLARATION
// A simple function with no parameter

function sayHello() {
    console.log("Hello, welcome to JavaScript!");
}

// Calling the function
sayHello();


// ==========================================
// 2. FUNCTION WITH PARAMETER
// ==========================================

function greet(name) {
    console.log("Hello " + name);
}

// Calling function and passing an argument
greet("Sain");
greet("Ram");


// ==========================================
// 3. FUNCTION WITH MULTIPLE PARAMETERS
// ==========================================

function add(a, b) {
    console.log(a + b);
}

add(10, 20);
add(5, 3);


// ==========================================
// 4. FUNCTION WITH RETURN
// ==========================================

function subtract(a, b) {
    return a - b;
}

let subtractionResult = subtract(20, 5);

console.log("Subtraction:", subtractionResult);


// ==========================================
// 5. FUNCTION WITH RETURN AND PARAMETERS
// ==========================================

function multiply(a, b) {
    return a * b;
}

let multiplicationResult = multiply(5, 4);

console.log("Multiplication:", multiplicationResult);


// ==========================================
// 6. DIVISION FUNCTION
// ==========================================

