//
//  Object Destructuring
//
/*
const person = {
  name: 'Adam',
  age: 33,
  location: {
    city: 'Raleigh',
    temp: 55,
  },
};

// equals sets a default value
const { name = 'Anonymous', age } = person;

console.log(`${name} is ${age}.`);

// destructuring off of a nested object
// colon space renames the variable
const { city, temp: temperature } = person.location;

if (city && temperature) {
  console.log(`It's ${temperature} degrees in ${city}.`);
};

// Example 2
const book = {
  title: 'Ego is the Enemy',
  author: 'Ryan Holiday',
  publisher: {
    name: 'Penguin',
  },
}
const {name: publisherName = 'Self-Published'} = book.publisher;
console.log(`${publisherName}`); */

//
//  Array Destructuring
//

const address = ['1299 South Juniper Street', 'Philadelphia', 'Pennsylvania', '19147'];

const [street, city, state = 'Default State', zip] = address;

console.log(`You are in ${city}, ${state}`)