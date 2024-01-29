const hero =["thor", "ironman","spiderman"]
const hero2=["superman", "flash", "batman"]

hero.push(hero2)
console.log(hero);
console.log(hero[3][1]);

 const all_hero =hero.concat(hero2)
console.log(all_hero);

const allheroes =[...hero, ...hero2]
console.log(allheroes);

const arr = [1,2,3,[4,5,6],[6,7,[4,5]]]
const arr2 = arr.flat(Infinity)
console.log(arr2);


console.log(Array.isArray("Hitesh"));
console.log(Array.from("Hitesh"));
console.log(Array.from({name: "hitesh"}));//interesting


let score1=986
let score2=566
let score3=2398
console.log(Array.of(score1,score2,score3));
