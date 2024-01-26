const name="shejal"
const surname="chandan"
//console.log(name+surname);
console.log(`Hello my name is ${name} and my surname is ${surname}`);

const gameNew = new String("Shejal");
console.log(gameNew[0]);
console.log(gameNew.length);
console.log(gameNew.toUpperCase());
console.log(gameNew.charAt(5));
console.log(gameNew.indexOf('S'));

const str=gameNew.substring(0,4)
console.log(str);

const Str1= gameNew.slice(-8,4);
console.log(Str1);

const s= "    priya    "
console.log(s);
console.log(s.trim());

const url="https://shejal.com/C%20handan"
url.replace('%20', '-')
console.log(url.replace('%20', '-'));
console.log(url.includes('sundar'));

const st="chnadan-shejal-is-girl"
console.log(st.split('-'))