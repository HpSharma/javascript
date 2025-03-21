// Object -> A collection of properties and methods.
// {key: value}
// Key: string | symbol
// value: any valid javascript type. (string, number, array, function, boolean, object....)

// const person = {
//     name: 'John',
//     email: 'john@gmail.com',
//     phone: Number('0123456789') // type conversion
// };
// console.log(typeof person);
// console.log(typeof person.phone);

// const person = new Object();
// person.name = "John";
// person.email = "john@gmail.com";
// person.gender = "Male";

// const person = {
//     name: 'John',
//     email: 'john@gmail.com',
// };
// ============== adding new key - value;
// person.gender = 'male';
// person["gender"] = 'male';

// ============== modify existing value
// person.email = 'john123@gmail.com';
// person["email"] = 'john123@gmail.com';
// let val = "email";
// person[val] = 'john123@gmail.com';

// let val = "age"; // make a new entry if key doesn't exist.
// person[val] = 25;

// ============== Deleting a value
// delete person[val];
// delete person.name;

// console.log(person);


// ============== Methods/functions inside object

// person.vote = function () {
//     console.log("He can vote!");
// }
//
// person.vote()

// this keyword -> refers to the context where it defined, such as a function's body is supposed to run.
// const person = {
//     name: 'John',
//     email: 'john@gmail.com',
//     age: 20,
//     isVotable: function () {
//         return this.age >= 18;
//     }
// };
//
//
// console.log(person.isVotable());

// =============== Object constructor

// function Person(name, email, phoneNumber) {
//     this.name = name;
//     this.email = email;
//     this.phoneNumber = phoneNumber;
// }
//
// const sanjay = new Person("Sanjay", "sanjay@gmail.com", 123123123);
// console.log(sanjay);
// console.log(sanjay.phoneNumber);
//
// const ravi = new Person("Ravi", "ravi@gmail.com", 12312312);


// ============== Object Destructuring
// const person = {
//     name: 'John',
//     email: 'john@gmail.com',
//     age: 20
// };

// const name = person.name;
// const email = person.email;

// const {name, age} = person;
// // console.log(name, age);
//
// const car = {
//     name: 'alto',
//     brand: 'suzuki',
// }
//
// const {name: carName} = car;  // **************
// console.log(carName);

// ---------------- Object Reference ----------------------

// const person = {
//     name: 'John',
//     email: 'john@gmail.com',
//     age: 20
// };

// Shallow copy
// const person2 = person; // share same reference, this is not a copy.
// person2.name = 'Sanjay';
//
// console.log({person2});
// console.log({person});

// ------------------- Pass by Reference -------------------

// function updateAge(ref) {
//     ref.age = 35; // Modifies the original value because it's a pass by ref.
// }
// console.log(person);
// updateAge(person);
// console.log(person);

// Doesn't work in arrow function
//const value = (ref) => { //
    // ref.age = 45;
//}


// ================= Deep Copy ========================
//

// console.log(person);
// console.log(JSON.stringify(person));
// console.log(JSON.parse(JSON.stringify(person)));
// const person2 = JSON.parse(JSON.stringify(person));
// person2.name = 'Sanjay';
// console.log(person);
// console.log(person2);

