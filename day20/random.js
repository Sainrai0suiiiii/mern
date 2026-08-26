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

function divide(a, b) {

    if (b === 0) {
        return "Cannot divide by zero";
    }

    return a / b;
}

console.log("Division:", divide(20, 4));


// ==========================================
// 7. FUNCTION TO CHECK EVEN OR ODD
// ==========================================

function checkEvenOdd(number) {

    if (number % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }
}

console.log(checkEvenOdd(10));
console.log(checkEvenOdd(7));


// ==========================================
// 8. FUNCTION TO FIND SQUARE
// ==========================================

function square(number) {
    return number * number;
}

console.log("Square:", square(5));


// ==========================================
// 9. FUNCTION TO FIND CUBE
// ==========================================

function cube(number) {
    return number * number * number;
}

console.log("Cube:", cube(3));


// ==========================================
// 10. FUNCTION TO FIND AREA OF RECTANGLE
// ==========================================

function calculateArea(length, width) {

    return length * width;

}

console.log("Area:", calculateArea(10, 5));


// ==========================================
// 11. FUNCTION TO CHECK AGE
// ==========================================

function checkAge(age) {

    if (age >= 18) {
        return "You are an adult";
    } else {
        return "You are a minor";
    }

}

console.log(checkAge(25));
console.log(checkAge(15));


// ==========================================
// 12. FUNCTION EXPRESSION
// ==========================================

const welcome = function () {

    console.log("Welcome to JavaScript!");

};

welcome();


// ==========================================
// 13. FUNCTION EXPRESSION WITH PARAMETERS
// ==========================================

const sum = function (a, b) {

    return a + b;

};

console.log("Sum:", sum(10, 20));


// ==========================================
// 14. ARROW FUNCTION
// ==========================================

const hello = () => {

    console.log("Hello from Arrow Function");

};

hello();


// ==========================================
// 15. ARROW FUNCTION WITH PARAMETERS
// ==========================================

const addNumbers = (a, b) => {

    return a + b;

};

console.log(addNumbers(50, 25));


// ==========================================
// 16. SHORT ARROW FUNCTION
// ==========================================

const double = number => number * 2;

console.log("Double:", double(10));


// ==========================================
// 17. FUNCTION WITH DEFAULT PARAMETER
// ==========================================

function introduce(name = "Guest") {

    console.log("Hello " + name);

}

introduce("Sain");
introduce();


// ==========================================
// 18. CALLBACK FUNCTION
// ==========================================

function processUser(name, callback) {

    console.log("Processing user: " + name);

    callback();

}

function completed() {

    console.log("Process completed!");

}

processUser("Sain", completed);


// ==========================================
// 19. CALLBACK USING ANONYMOUS FUNCTION
// ==========================================

processUser("Ram", function () {

    console.log("Ram's process completed!");

});


// ==========================================
// 20. HIGHER-ORDER FUNCTION
// A function that accepts another function
// ==========================================

function calculate(a, b, operation) {

    return operation(a, b);

}

function addition(a, b) {
    return a + b;
}

function subtraction(a, b) {
    return a - b;
}

console.log(calculate(10, 5, addition));
console.log(calculate(10, 5, subtraction));


// ==========================================
// 21. HIGHER-ORDER FUNCTION WITH ARROW FUNCTION
// ==========================================

const result = calculate(10, 5, (a, b) => a * b);

console.log("Result:", result);


// ==========================================
// 22. FUNCTION USING ARRAY
// ==========================================

function printNames(names) {

    for (let i = 0; i < names.length; i++) {

        console.log(names[i]);

    }

}

const students = ["Sain", "Ram", "Hari", "Shyam"];

printNames(students);


// ==========================================
// 23. FUNCTION TO FIND LARGEST NUMBER
// ==========================================

function findLargest(a, b, c) {

    if (a >= b && a >= c) {
        return a;
    } else if (b >= a && b >= c) {
        return b;
    } else {
        return c;
    }

}

console.log("Largest:", findLargest(10, 25, 15));


// ==========================================
// 24. FUNCTION TO CALCULATE DISCOUNT
// ==========================================

function calculateDiscount(price, discountPercentage) {

    let discountAmount = price * discountPercentage / 100;

    let finalPrice = price - discountAmount;

    return finalPrice;

}

console.log("Final Price:", calculateDiscount(1000, 10));


// ==========================================
// 25. FUNCTION FOR LOGIN
// ==========================================

function login(username, password) {

    if (username === "admin" && password === "1234") {

        return "Login successful";

    } else {

        return "Invalid username or password";

    }

}

console.log(login("admin", "1234"));
console.log(login("user", "5678"));


// ==========================================
// 26. IIFE
// Immediately Invoked Function Expression
// ==========================================

(function () {

    console.log("IIFE executed immediately");

})();


// ==========================================
// 27. FUNCTION RETURNING ANOTHER FUNCTION
// ==========================================

function outerFunction() {

    return function () {

        console.log("Inner function executed");

    };

}

const innerFunction = outerFunction();

innerFunction();


// ==========================================
// 28. REST PARAMETER
// Accept multiple arguments
// ==========================================

function addAll(...numbers) {

    let total = 0;

    for (let number of numbers) {

        total = total + number;

    }

    return total;

}

console.log("Total:", addAll(10, 20, 30, 40));


// ==========================================
// 29. RECURSIVE FUNCTION
// Function calling itself
// ==========================================

function countdown(number) {

    if (number === 0) {

        console.log("Done!");

        return;

    }

    console.log(number);

    countdown(number - 1);

}

countdown(5);


// ==========================================
// 30. FINAL EXAMPLE
// Putting everything together
// ==========================================

function studentInfo(name, age, marks) {

    let result;

    if (marks >= 40) {
        result = "Pass";
    } else {
        result = "Fail";
    }

    return {
        name: name,
        age: age,
        marks: marks,
        result: result
    };

}

const student = studentInfo("Sain", 25, 78);

console.log(student);


// ==========================================
// END
// ==========================================