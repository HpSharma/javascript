// functions ->
// 1. Normal function,
// 2. Arrow function, -- Mostly used!
// 3. IIFE -> (immediately invoked function expression)

// function solve() {
//     console.log("Hello World from Solve!");
// }
// solve();

// function solve(name, age) {
//     console.log(`Name: ${name}, Age: ${age}`);
// }
//
// solve('Sanjay', 25);

// function solve(name, age) {
//     console.log(`Name: ${name}, Age: ${age}`);
// }
//
// solve('Sanjay');

// function with default params value
// function solve(name, age = 25) {
//     console.log(`Name: ${name}, Age: ${age}`);
// }
//
// solve('Sanjay');
// solve('Sanjay', 20);

// function solve(name, age) {
//     console.log(`Name: ${name}, Age: ${age}`);
// }
//
// solve('Sanjay', 12, 24, 45, 67, [1, 2, 3], {name: "hello"});

// rest operator stores values as an array format.
// function solve(name, ...values) {
//     console.log(values);
//     console.log(`Name: ${name}`);
// }
//
// solve('Sanjay', 12, 24, 45, 67, [1, 2, 3], {name: "hello"}, () => {console.log("rest function")});

// function solve(name, ...values) {
//     values.forEach((value, index) => {
//         if (typeof value === 'string' || typeof value === 'number' || typeof value === 'boolean') {
//             console.log(`${index}: ${value}`);
//         } else if (typeof value === 'object') {
//             for(let key in value) {
//                 console.log(`${index}: ${key}- ${value[key]}`);
//             }
//         } else if (typeof value === 'function') {
//             value();
//         }
//     });
// }
//
// solve('Sanjay', 12, "string value", [10, 20, 30], {name: "hello", age: 30}, () => {console.log("rest function")});

// const result = function solve(name) {
//     console.log(`Name: ${name}`);
// }
//
// console.log(typeof result);
//
// result("Sanjay");

// function solve([a, b]) {
//     console.log(a * b);
// }
//
// solve([12, 12, 14, 15, 16]);

// const result = function solve(name) {
//     console.log(`Name: ${name}`);
//     return function callValue() {
//         return "Return from call value";
//     }
// }
//
// console.log(typeof result);
//
// const returnValue = result("Sanjay");
// console.log(returnValue());


// IIFE ===========================================================================================
// Self executing anonymous function

// (function () {console.log("IIFE function")})();


// Arrow Functions
// ===============================================================================================
// () => {}

// const funCall = () => {
//     console.log("fun call");
// };
// funCall();
//
// const funCall = (name) => {
//     console.log("fun call", name);
// };
// funCall("Sanjay");


// const funCall = (num = 0) => {
//     return num * num;
// };
// const result = funCall(4);
// console.log(result);

// const funCall = (num = 0) => num * num;
// console.log(funCall(4));

// console.log(((num = 0) => num * num)(2));

// const result = (name) => {
//     console.log(`Name: ${name}`);
//     return () => {
//         return "Return from call value";
//     }
// }
//
// const returnValue = result("Sanjay");c
// console.log(returnValue());


// const values = (a) => (a > 10 ? 10 : a);
// console.log(values(12));