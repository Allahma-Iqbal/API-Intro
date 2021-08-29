
//Javascript Object Notation;
// JSON = Javascript Object Notation;


const user = { id: 23, name: 'shohel', job: 'actor' }

const stringified = JSON.stringify(user);

// console.log(user);
// console.log(stringified)

const shop = {
    name: 'Alia Store',
    address: 'Ranbir Road',
    profit: 15000,
    products: ['Laptop', 'Mobile', 'Pepsi'],
    owner: {
        name: 'Alia Bhatt',
        profession: 'actor'
    },
    isExpensive: false
}

const shopStringified = JSON.stringify(shop);
// console.log(shop);
console.log(shopStringified);
const converted = JSON.parse(shopStringified);
console.log(converted.owner);








