const numbers = [10,20,30,40,50];

// for(let num of numbers){
//     console.log(num);
// }

numbers.forEach(items=> console.log(items)) //foreach only array access kore but value return kore na

//map
const number = [10,20,30,40,50];

number.map(items => console.log(items+1));
const a = number.map(items => items+1); //map array access kore value return kore

console.log(a);

// find
const b = number.find(items => items===10); //ekta array te kono ekta value ache kina seta show korbe conditional way te
console.log(b);


//filter

const c = number.filter(items => items<100); // filter, ekta array condition based value gulo k khuje ber kore ekta array hisabe return kore
console.log(c);
