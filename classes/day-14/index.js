// Promise
// Asynchronous programming able.

// Need of promises
// Callback Hell, Error Handling
// --------- Callback Hell

// function firstOperation(callback) {
//     setTimeout(() => {
//         console.log("First operation done!");
//         callback();
//     }, 1000);
// }
//
// function secondOperation(callback) {
//     setTimeout(() => {
//         console.log("Second operation done!");
//         callback();
//     }, 2000);
// }
//
// function thirdOperation(callback) {
//     setTimeout(() => {
//         console.log("Third operation done!");
//         callback();
//     }, 5000);
// }
//
// firstOperation(() => {
//     try {
//         secondOperation(() => {
//             try {
//                 thirdOperation(() => {
//                     console.log("All operations done!");
//                 });
//             } catch(error) {
//                 console.log(error);
//             }
//         });
//     } catch (error) {
//         console.log(error);
//     }
// });

// ---------------------------------- Promise
// state -> Pending, fulfilled, rejected
const promise = new Promise((resolve, reject) => {
    let success = true;
    if (!success) {
        setTimeout(() => {
            resolve(123);
        }, 5000);
    } else {
        reject("Operation failed!");
    }
});

console.log(promise);
promise
    .then((data) => console.log("Operation complete", data))
    .catch((err) => console.log(err));

console.log("......Other operations......");