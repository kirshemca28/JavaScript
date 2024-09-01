const score = 700
console.log(score);


const balance = new Number(100.0253436)
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2));

const otherNumber = 23.05858784
console.log(otherNumber.toPrecision(4));

console.log(otherNumber.toLocaleString(2));

const hundreds = 100000
console.log(hundreds.toLocaleString('en-IN')); // Indian


//================== Maths ====================

console.log(Math);
console.log(Math.abs(-8)); // Absolute Value (Positive Value)

console.log(Math.round(4.4));
console.log(Math.ceil(4.2));
console.log(Math.floor(7.7));
console.log(Math.min(7, 4, 8,2));
console.log(Math.max(7, 4, 8,2));

console.log(Math.random()*10 + 1);
console.log((Math.random()*10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)