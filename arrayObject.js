const products = [
    {id:1, name:'hp', price: 160000},
    {id:2, name:'walton', price: 16000},
    {id:3, name:'asus', price: 120000},
    {id:4, name:'lenovo', price: 65000},
]

// map
const names = products.map(product => product.name);
const price = products.map(device => device.price);

console.log(names, price);


// foreach
products.forEach(product => console.log(product.id));

// filter
const priceFilter = products.filter(p=> p.price>100000);
console.log(priceFilter);

// find
const affordable = products.find(p=>p.price<70000);
console.log(affordable);

// reduce
const total = products.reduce((previous,current) => previous+current.price, 0);
console.log(total);