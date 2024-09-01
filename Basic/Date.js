//Dates

let myDate = new Date
console.log(myDate.toString());
console.log(myDate.toJSON());
console.log(myDate.getFullYear());
console.log(myDate.getMinutes());


let myCreateDate = new Date (2024, 0, 24, 5, 3) //format
console.log(myCreateDate.toLocaleDateString());

let myCreateDate1 = new Date("09-01-2024")

let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log(myCreateDate.getTime());

console.log(Math.floor(Date.now()/1000));


let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth());


newDate.toLocaleString('default',{
weekday: "long",

}
)
