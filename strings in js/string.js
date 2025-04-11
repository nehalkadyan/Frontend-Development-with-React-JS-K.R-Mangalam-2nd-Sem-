console.log("Strings in JS")

let myString = "hello"

// myString = "world"

// console.log(myString)

// for(let i = 0; i < myString.length; i++){
//     console.log(myString[i])
// }

let name = "Ajay"
let age = 30;
let gender = "male"

// let sentence = "Hi my name is " + name


// string template literal
let sentence = `Hi my name is ${name}, my age ${age} and gender ${gender}`

// console.log(sentence)

// ES 6 , for of loop

const fruits = ["apple", "banana", "grapes", "watermelon", "mango"]

// spread operator

// console.log(...fruits)

// for(let i = 0; i < fruits.length; i++){
//     console.log(fruits[i])
// }

// for(let element of fruits){
//     console.log(element)
// }

const nums1 = [1,2,3,4,5]

const nums2 = [6,7,8,9,10]

const result = [...nums1, ...nums2]

console.log(result)