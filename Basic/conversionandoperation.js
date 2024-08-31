// ********************** Conversion *********************** //

//let score = 28 // Number
let score = true // string (Because in double quote) // NaN // null // undefined // true
//let score = "28kirti" // string (Because in double quote) // NaN


console.log(typeof score);
console.log(typeof (score));

let valueInNumber = Number(score)
console.log(typeof (valueInNumber));
console.log(valueInNumber); //Conversion



//Notes

// "33" => 33
// "33abc" => NaN
// true => 1; false => 0

let isLoggedIn = "1"

let booleanIsloggedIn = Boolean(isLoggedIn)
console.log(booleanIsloggedIn);


// 1 => true; 0 => false
// "" => false
// "Kirti" => true

let someNumber = 45

let stringNumber = String(someNumber)
console.log(stringNumber);

console.log(typeof (stringNumber));

//********************** Operation ********************** */

let value = 7
let negValue = -value
console.log(negValue);

//console.log(2+2);
//console.log(2+2);
//console.log(2-2);
//console.log(2*2);
//console.log(2**3);
//console.log(2/3);
//console.log(2%3);

let str1 = "Hello"
let str2 = " Kirti"

let str3 = str1 + str2
console.log(str3);

//console.log("1" + 2);
//console.log(1 + "2");
//console.log("1" + 2 + 2);
//console.log(1 + 2 + "2");

// Not to write this above code

console.log(true);
console.log(+true);

let gameCounter = 100
gameCounter++;
console.log(gameCounter); // Value => 101

