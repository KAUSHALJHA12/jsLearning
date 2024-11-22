const myArray = new Array(1, 2, 3, 4)

myArray.push(6)
myArray.pop(2)
myArray.unshift(9)
console.log(myArray)
console.log(myArray.includes(9));

//slice, splice

console.log("A", myArray);

const myn1 = myArray.slice(1,3)
console.log(myn1);
console.log("B", myArray);

const myn2 = myArray.splice(1,3)
console.log("C", myArray);
console.log(myn2);


const marvel_heroes = ["thor", "Itonman", "Spiderman"]
const dc_heroes = ["Superman", "Batman"]

const all_heroes = marvel_heroes.concat(dc_heroes)
console.log(all_heroes)


const other_arry = [1, 2, 3, [4, 5, [ 6, 7]]]
const real_another_array = other_arry.flat(Infinity)

console.log(Array.from("kaushal")) // directly creates array
console.log(Array.isArray("kaushal")) // will give output false
console.log(Array.from({name: "kaushal"})) // will give output as empty array because it is confused whether i make array from key or the value.

let score1 = 100
let score2 = 200
let score3 = 300 

console.log(array.of)