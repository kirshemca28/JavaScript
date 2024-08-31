const accountId = 123456
let accountEmail = "info@gmail.com"
var accountPassword = "007700"
accountCity = "Patna"
let accountState = "Bihar"
var assume = 'Raj'

//accountId = 2 // not allowed

/*
Prefer not to use var
Because of issues in block scope and functional scope
*/
accountEmail = "email@gmail.com"
accountPassword = "458458"
accountCity = "Gaya"

console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

