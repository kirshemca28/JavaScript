// 7 Premitive Data Types

/* 1. String
   2. Number
   3. Boolean
   4. Null
   5. Undefined
   6. Symbol
   7. BigInt
*/


const score = 100
const scoreValue = 100.3
const isLoggedIn = false
const outsideTemp = null

let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id  === anotherId);

const bigNumber = 458758325252352525252n //BigInt => use n
console.log(bigNumber);



// Reference (Non Premitive) Data Types

/*
   1. Array
   2. Objects
   3. Functions
*/

const heros = ["shaktiman", "nagRaj", "Doga"]   //Array
let myObj = {
    name: "Kirti",
    age: 31,
}

const myFunction = function()
{
    console.log("Hello World!!");
}

console.log(typeof anotherId);



/* ******************* Stack and Heap Memory ******************* */

// Stack use in Premitive (Get Copy) // Heap use in Non-Premitive (Get Refrence)

let myInstaname = "kirtishekhar"

let anotherName = myInstaname
anotherName = "KirSheMca"

console.log(myInstaname);
console.log(anotherName);


let userOne = {
    email: "email@gmail.com",
    upiname: "userYbl",
}

let userTwo = userOne

userTwo.email = "mail@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);


