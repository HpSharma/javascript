// closure  -> lexical scope
//
// A closure is a function having access to the parent scope even after the parent function has closed.
//
// A closure is created when a function is defined inside another function,
// and the inner/child function has access to the variables of the outer/parent function,
// event after the outer/parent function has finished execution.
//

// function parent() {
//     let count = 1;
//     function child() {
//         // count = count + 1;
//         // count++;
//         count += 1;
//         console.log(count);
//     }
//     return child;
// }
//
// var result = parent();
// result();
// result();
// result();
//
//
// let value = 10;
//
// const outerFunction = () => {
//     let num = 20;
//     console.log(value);
//     console.log(num);
//
//     const childFunction = () => {
//         console.log('value => ', value += 5);
//         console.log('num => ',  num += 10);
//     }
//
//     return childFunction;
// }
//
// const result = outerFunction();
// result();
// result();
// result();

// const privateFunction = (() => {
//     let counter = 0;
//     console.log('initial counter value => ',counter);
//     return () => {
//         console.log('counter value => ', ++counter);
//     }
// })();
//
// privateFunction();
// privateFunction();
// privateFunction();

// Callback function
// function getData(callback) {
//     const value = 2*2;
//     return callback(value);
// }
//
// function processData(value) {
//     console.log(value);
// }
//
// getData(processData);

// function a() {
//     let x = 100;
//     function b() {
//         console.log(x);
//     }
//     x = 200;
//     return b;
// }
//
// const c = a();
// c();
// c();
// c();
