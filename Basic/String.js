const name = "Kirti"
const repoCount = 1

//console.log(name + repCount + "Value");

console.log(`Hello my name is ${name} and my repCount is ${repoCount}`);

const gameName = new String('kirti-hc')
console.log(gameName[0]);


//console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 3)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "   Kirti   "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://wwww.google.com"
console.log(url.replace('%20','-'));
console.log(url.includes('google')); //google exist so --true
console.log(url.includes('kirti')); //kirti not exist so --false


console.log(gameName.split('-'));
