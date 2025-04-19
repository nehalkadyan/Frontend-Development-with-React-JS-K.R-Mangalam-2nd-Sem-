console.log("more functions")

// const arr = [1,2,3,4,5]

// for(let i = 0; i < arr.length; i++){
//     console.log(arr[i])
// }

// arr.map(function(item){
//    console.log(item)
// })


// .map () using arrow fn

// arr.map((elem) => {
//     console.log(elem)
// })

// filter function

// const arr = [1,2,3,4,5]

// const filteredArr = arr.filter(function(element){
//     return element >= 3
// })

// console.log(filteredArr)


// const names = ["ajay", "tanmay", "nehal", "kirti", "harsh"]

// const filteredNames = names.filter(function(name){
//     return name === "harshit"
// })

// console.log(filteredNames)

// .reduce() -> returns a single value

const nums = [1,2,3,4,5];

const totalSum = nums.reduce(function(sum, currentElem){
    return sum+= currentElem
}, 0)

console.log(totalSum)
