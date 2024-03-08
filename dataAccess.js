const data = [{id:1, name:'abul', address: 'kochu'}];

console.log(data[0].address);

const products = {
    count: 5000,
    data: [
        {id:1, name:'HP', price: 1000},
        {id:2, name:'Lenovo', price: 1000},
    ]
}

// pick 2nd product price
console.log(products.data[1].price);


const actor = {
    id:5001,
    name:'raaj',
    address:{
        street:{
            first: '123',
            second: 'agrabdad',
            third: 'chittagong'
        },
        country: 'Bangladesh'

    }
}

const user2 = {
    name: 'Rajib',
    address: {
        city: 'Mumbai',
        country: 'India'
    }
}

console.log(actor.address.country);
console.log(user2.address.street?.second);