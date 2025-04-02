//  ========================= Object Methods

// 1. assign

// const car = {model: 'Harrier', brand: 'Tata'};
// const person = {name: 'Sanjay', email: 'sanjay@gmail.com'};

// const mergedObject = Object.assign(car, person);
// console.log(person);
// mergedObject.name = "Ravi"
// console.log(mergedObject);


// const newPerson = Object.assign({}, person);
// newPerson.name = "Ravi";
// console.log(person);
// console.log(newPerson);


// 2. Object.keys()  // ***************
// returns an array of all keys/property name.

// console.log(Object.keys(person));
// Object.keys(person).forEach((key, index) => {
//     console.log(`${index} - ${key} - ${person[key]}`);
// });

// for (let key of Object.keys(person)) {
//     console.log(`${key} - ${person[key]}`);
// }

// 3. Object.values()  // *************
// returns an array of object's property values.
// person.age = 12;
// console.log(Object.values(person));


// 4. Object.entries

// const personEntries = Object.entries(person);
// console.log(personEntries);


// 5. Object.freeze // **************
// prevent to add new values, delete exist value, modify exist value.
// const val = {};
// val.name = "Sanjay";
// val = {}; // won't work, Not allowed
// console.log(val);

// Object.freeze(person);
// person.name = 'Ravi'; // Changed
// person.age = 12; // Doesn't work
// console.log(person);

// 6. Object.seal // ***************
// prevent to add new properties
// BUT, can modify existing

// Object.seal(person);
// person.name = 'Ravi'; // changed
// delete person.email; // Doesn't work
// console.log(person);

// 8. Object.hasOwnProperty
// Check if any specify property exists.

// console.log(Object.hasOwnProperty('name'));
// console.log(Object.hasOwnProperty('age'));
