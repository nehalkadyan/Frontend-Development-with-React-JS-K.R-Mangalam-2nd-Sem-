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