// Creating an array

const fruits = ["apple", "banana", "grapes", "mango", "pineapple"]
// indexing        0        1         2         3         4

// how to access an element in array
console.log(fruits[2]);

// length of array

// console.log(fruits.length)

// Basic operations in array

// 1) push() -> inserts at the end

fruits.push("lemon");

// 2) unshift() -> to store new element at the start
fruits.unshift("papaya");

// console.log(fruits)

// 3) pop() -> removes the last element

fruits.pop()

// 4) shift() -> removes the first element

fruits.shift() 

console.log(fruits)

// 5) indexOf() -> returns the index of the first occurrence of the specified value

console.log(fruits.indexOf("banana"))

// 6) includes() -> tells whether a specified value is present in the array or not

console.log(fruits.includes("nehal"))



