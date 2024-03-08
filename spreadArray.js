// solving non primitive data type

const number = [2,3,4];

const number1 = [...number]; //numbe theke 1ta kore data niye number1 a add hobe
// const number1 = [];
// for(let num of number){
//     number1.push(num)
// } 

number.push(10);
number1.push(20);

console.log('number', number);
console.log('number1', number1);



// De-Structuring (mane ekta array theke individually data show kora [1,2,3,4] ekhan theke single single vabe 1 2 3 4 evabe figure out kora)
const nums = [1,2,3,4];
const [a,b,c,d] = nums;

const figures = [10,20,30,40,50,60,70,80,90,100];
const [e,f,g,...h] = figures; // ...h = rest operator, mane e te ekta variable, f te ekta, g te ekta, and baki variable sob h te show korbe
console.log(e,f,g,h);




