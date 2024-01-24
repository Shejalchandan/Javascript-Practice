const accountId = 172763
let accountEmail= "shejal@gmail.com"
var accountPassword ="12345" //scope problem
accountCity = "Jaipur"
let accountState; // undefined
// accountId=2 -- Not Allowed
/*
Prefer not to use var because of issue in block scope or functional scope
*/
accountEmail="hshs@gmail.com"
accountPassword="397373"
accountCity ="Indore"
console.log([accountId, accountEmail, accountPassword, accountCity, accountState]);