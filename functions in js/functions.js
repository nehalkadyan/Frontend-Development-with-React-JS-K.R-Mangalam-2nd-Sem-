// console.log("Functions in JavaScript")

// // creating a function in js

function printHello() {
    console.log("Hello")
}


// // function calling 
printHello()

// Functions with parameters

function addTwo(num1, num2) {

    return num1 + num2
}

console.log(addTwo(5, 10))


// Deafult Parameters


function addTwoNums(num1 = 10, num2 = 20) {
    return num1 + num2
}

console.log(addTwoNums())

//  // Function Expression

function addTwoNumbers(num1, num2){
   return num1 + num2
}

let a = addTwoNumbers;

console.log(a(10, 20))


// Arrow functions

// function addTwo(num1, num2){
//     return num1 + num2
// }

// let addTwo = (num1, num2) => {
//      return num1 + num2
// }

let addTwoArrow = (num1, num2) => num1 + num2

console.log(addTwoArrow(10, 10))





