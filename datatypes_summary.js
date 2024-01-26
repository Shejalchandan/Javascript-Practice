// 2 types of datatypes in JS
//1)Primitive
//7 types : call by value

//String Number, Boolean, null, undefined, symbol, BigInt

const score=100;
const scoreValue=100.34
const isLoggedIn = false
const outsideTemp=null
let userEmail
const id=Symbol('123')
const anotherId = Symbol('123')
console.log(id==anotherId);
const bigNumber=2828372828n

// dynamically typed Language

//2)Reference(Non Primitive) ==> return type object
// Array, Objects, Functions
const heros=["shaktiman", "ironman", "hulk"];

//object
let myObj = {
    name: "Shejal",
    age=22,
}

// function
const myFunction = function(){
    confirm.log("hello world")
}
//type of datatype
console.log(typeof id);
//************************************* */
//Stack (Primitive) == variable ka copy milta h
// Heap (Non-Primitive) == original value ka reference milta he(original me change hoga)

let myname="shejalchandan"
let anotherName=myname
anotherName="Fruity"
console.log(anotherName);
console.log(anotherName);