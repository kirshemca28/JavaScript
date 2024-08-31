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
