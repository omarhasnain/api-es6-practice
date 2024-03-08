// function add (x,y){
//     return x+y;
// }

// console.log(add(2,3));


// we can add arrow function to write a normal function more easily

const add = (x,y) => x+y;
console.log(add(2,4));

const double = x => x*2; //parameter 1ta hole first bracket na dileo hobe
const gun = x => {
    const a = x*4;
    return a;
}; // multiple line likhe return korte hole 2nd bracket dite hobe and 2nd bracket use korle must RETURN likhte hobe;
console.log(double(5));
console.log(gun(4));