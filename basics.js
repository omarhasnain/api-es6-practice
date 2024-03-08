//non-primitive or reference type data type
const nums = [1,2,3];
const omar = {name: 'jihan'};

let num1 = nums;
num1.push(4,5,6);
console.log('num1', num1);

let info = omar;
info.age = 23;  //adding new property to Info | it will also be added into the main object 'Omar'
console.log('info', info);


// truthy or falsy value check

// truth values = true, 1, 1234, "Omar", " ",{},[]
// false values = false, 0, null, NaN, undefined, ""

// checking truthy or Falsy
const num = NaN;
console.log(!!num); 


