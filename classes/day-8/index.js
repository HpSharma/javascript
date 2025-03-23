// Array

// let arr = [
//     1,
//     true,
//     "Hello World",
//     {name: 'Sanjay'},
//     () => {console.log("function called!")}
// ];
// console.log(arr[0]);
// arr[arr.length -1]();

let value = [10, 20, 30, 40, 50];

// let [a, b] = value;
// console.log(a, b);

// function getResult([a, b]) {
//     console.log(`${a} is ${b}`);
// }
//
// getResult(value);

// function getResult([a, b, ...c]) {
//     console.log(`${a} - ${b} - ${c}`);
// }
//
// getResult(value);

// let result = [...[10, 20, 30, 40, 50], ...[60, 70, 80]];
// console.log(result);

// forEach
// value.forEach((val, index) =>  {
//     console.log(`${val} - ${index}`);
//     // if (index === 5) {
//     //     break;  // Not allowed
//     // }
// });

// Map
// const result = value.map(val => val * val);
// console.log(result);

// for... of
// for (let val of value) {
//     if (val === 5) {
//         break;  // Not allowed
//     }
// }


// push
// will push element at the end of array
// value.push(60);
// console.log(value);

// pop()
// will remove last element of array
// const removedVal = value.pop();  // 60
// console.log(removedVal);
// console.log(value);

// shift
// remove first element of array
// const firstVal = value.shift();
// console.log(firstVal);
// console.log(value);

// unshift
// add at the beginning of array
// value.unshift(5);
// console.log(value);

// splice // ************
// add/remove elements from array

// value.splice(2, 0, 15);
// console.log(value);
// value.splice(4, 1, 25);
// console.log(value);
// value.splice(0, 0, 5);
// console.log(value);
// value.splice(1, 3, 122);
// console.log(value);

// slice
// console.log(value);
// let newArray = value.slice(2, value.length);
// console.log(newArray);
// console.log(value);

// includes
// console.log(value.includes(30));
// console.log(value.includes(3));

// indexOf
// const index = value.indexOf(30);
// console.log(index);
// value.splice(index, 1);
// console.log(value);

// find
// const result = value.find(num => num > 30);
// console.log(result);

// concat
// let result = value.concat([60, 70, 80]);
// console.log(result);

// filter
// const filterData = value.filter(val => val === 30);
// console.log(filterData);