// slice vs splice
//different array methods like push, pop, shift, unshift and mnay more

// flat spreads the different values of array into single array


const array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_array = array.flat(Infinity)
console.log(real_array);

// use array.from to convert anything into array