const person = {
    name: 'Omar',
    age: 23,
    address: 'Chittagong',
    p:[1,2,3,4]
}

const person1 = {...person};
person1.mobile = '01999333643';
console.log('person1', person1);

// de-structuring
const cricketer = {
    name: 'Warner',
    age: 23,
    address: {
        province: 'Melbourne',
        city: 'southampton'
    },
    p:[1,2,3,4]
}

const {age, name, address} = cricketer; //sequentially property na bosaileo hobe, cz ekhane array nai so index er bepar separ o nai.
const {city, province} = address; // deeply de-structuring, mane object er vetore object thakle setar property ber korbo
console.log(name, age, address);
console.log(city, province);


// Property Renaming
const actor = {
    actorName: 'Tiger Sroff',
    actorAge: 23,
    actorAddress: {
        province: 'Calcutta',
        city: 'Bankura'
    },
    p:[1,2,3,4]
}

const {actorName:hero, actorAge} = actor;
console.log(hero);


// Object in Object - Property renaming in the same line
const footballer = {
    footballerName: 'Bale',
    footballerAge: 23,
    footballerAddress: {
        country: 'Wales',
        city: 'washington'
    },
    p:[1,2,3,4]
} 

const {footballerAddress:{country:origin}} = footballer; //one line a deep destructuring kore rename korlam
console.log(origin);



const user = {
    sex: 'male',
    size: 'xxl',
    height: 12
}

const {sex:gender} = user;
console.log(gender);