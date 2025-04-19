// creating an object

const person = {
   name : "Ajay",
   city : "Delhi",
   age : 30,
   department : "CS",
   hasLicense : true,
   credentials : null,
   numbers : [1,2,3,4,5],
   password : undefined,
   printHello : function(){
     console.log("Hello")
   }
}

//modify existing key value
person.name = "Manju";

// add a new key
person.salary = 50000

console.log(person)

// console.log(person.printHello())

// Methods for Objects


// to print keys -> returns an array of keys
console.log(Object.keys(person))

// to print values -> returns an array of values

console.log(Object.values(person))

// to print both keys and values in subarrays

console.log(Object.entries(person))
