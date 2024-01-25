let score="33"
console.log(typeof score);
console.log(typeof (score));

let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber); //NAN

//"33" = 33
// "33abc" = NAN
// true=1; false=0

let isLoggedIn ="hitesh"
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);
//1 - true
// ""=> false
// "hitesh" = true

let someNum =33
let stringNum = String(someNum)
console.log(stringNum);
console.log(typeof(stringNum));