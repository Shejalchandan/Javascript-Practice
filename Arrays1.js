//array
const myArr = [0,1,2,3,4,5]
console.log(myArr[0]);

const myHeros=["shaktiman", "Superman"];
console.log(myHeros[1])

const myArr2 =new Array(1,2,3,4)
console.log(myArr2[3]);

// array methods
myArr.push(10)
myArr.push(100)
console.log(myArr);

myArr.pop()
console.log(myArr);

myArr.unshift(9)
console.log(myArr);

myArr.shift()
console.log(myArr);

console.log(myArr.includes(9));

console.log(myArr.indexOf(3));

const newArr = myArr.join()
console.log(myArr);
console.log(typeof newArr);

//slice, splice
console.log("A ", myArr);
const myn1 = myArr.slice(1,3);
console.log(myn1);

console.log("B ", myArr);
const myn2= myArr.splice(1,3)
console.log(myn2);