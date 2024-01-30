//singleton -- constructor
// object creation
// object literals

const mySum=Symbol("key1")

const JsUser ={
    name: "Hitesh",
    "full name": "Chaudhary",
    [mySum]:"mykey1",
    age :19,
    location: "Jaipur",
    email: "hitesh@gmail.com",
    isloggedIn : false,
    lastLogin: ["Monday","Saturday"]

}
console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(typeof JsUser.mySum); // not used as a symbol
console.log(JsUser[mySum]);// now used as a symbol
JsUser.email="shejalchandan@gmail.com"
//Object.freeze(JsUser)
JsUser.email="hitesh@chatgpt.com"
console.log(JsUser);

JsUser.greeting = function(){
  console.log("Hello Users");
}
console.log(JsUser.greeting());


JsUser.greeting2 = function(){
    console.log(`Hello Users ,${this.name}`);
  }
  console.log(JsUser.greeting2());
  