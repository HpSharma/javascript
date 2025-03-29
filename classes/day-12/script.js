// console.log(this);

// capture this from invoke position
// function solve() {
//     console.log(this);
// }

// capture this from defined position (parent's this)
// const result = () => {
//     console.log(this);
// }

// solve();
// result();

// const person = {
//     name: 'John',
//     getName: function() {
//         console.log(this);
//         console.log(this.name);
//         // if (Object.hasOwnProperty(location)) {
//         //     console.log(this.location.pathname);
//         // }
//
//         // if ("location" in person) {
//         //     console.log(this.location.pathname);
//         // }
//
//         console.log(this.location?.pathname);
//     }
// }
//
// person.getName();
//
// const getName = person.getName;
// getName();

// const person = {
//     name: 'John',
//     getName: () => {
//         console.log(this);
//         console.log(this.name);
//     }
// }
//
// person.getName();

// function Person(name) {
//     // this = {}  this is empty object.
//     this.name = name;
// }
//
// const sanjay = new Person('Ravi');
// console.log(sanjay);
// console.log(sanjay.name);

// -------------- call
// const person = {name: 'sanjay'};

// function solve() {
//     console.log(this);
// }

// solve();
// 1st param is always object which we want to set as this.
// solve.call({});
// solve.call(person);

// function solve(age = 20) {
//     console.log(this.name + ' => ' + age);
// }

// solve();
// solve(12);
// solve.call(person);
// solve.call(person, 22);

// --------------- apply
// function solve(num1 = 0, num2 = 0) {
//     console.log(this.name + ' => ' + (num1 + num2));
// }

// solve.apply(person, [12, 10]);
// solve.apply(person, [12], 10); // 10 will be ignored

// ----------------- bind
// function solve() {
//     console.log(this);
// }
// solve.bind(person);
// console.log(solve.bind(person)); // return function
// const result = solve.bind(person);
// result();

// ---------------- class
// class Person {
//     constructor(name) {
//         console.log(this);
//         this.name = name;
//     }
//
//     getName() {
//         console.log(this.name);
//     }
// }
//
// const person = new Person('John');
// person.getName();

// ----------------- setTimeout/setInterval
// setTimeout(function() {
//     console.log(this);
// }, 1000);
//
// setTimeout(() => {
//     console.log(this);
// }, 1000);

// function solve() {
//     setTimeout(function () {
//         console.log(this);
//     }, 1000);
// }
// solve();

// function solve() {
//     setTimeout( () => {
//         console.log(this);
//     }, 1000);
// }
// solve();


// -------------- event handling
// const button = document.querySelector('button');
// button.addEventListener('click', function() {
//     console.log(this);
// })

// button.addEventListener('click', () => {
//     console.log(this);
// })