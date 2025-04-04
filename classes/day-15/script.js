const promise1 = new Promise((fulfilled, refused) => {
    setTimeout(() => {
        console.log("promise1");
        fulfilled(1);
    }, 3000);
});

const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("promise2");
        resolve(2);
    }, 1000);
});

const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("promise3");
        resolve(3);
    }, 1500);
});

console.log("Starting...");

promise1
    .then((result1) => {
        console.log(`Promise ${result1} operation done! => ${new Date().getTime()}ms`);
        // Return the next promise (promise2)
        return promise2;
    })
    .then((result2) => {
        console.log(`Promise ${result2} operation done! => ${new Date().getTime()}ms`);
        // Return the next promise (promise3)
        return promise3;
    })
    .then((result3) => {
        console.log(`Promise ${result3} operation done! => ${new Date().getTime()}ms`);
    })
    .catch((error) => {
        console.log(error);
    });


// --------- resolve, reject, all(), allSettled(), any(), race()
// --------- resolve()
// Promise.resolve(1312).then(data => console.log(data));

// --------- reject()
// Promise.reject("Error occurred.").catch(error => console.log(error));

// --------- all()
// if all resolve then return result in array
// As soon as any promise reject. failed with first reject reason.

// Promise.all([promise1, promise2, promise3, Promise.reject("Error occurred.")])
//     .then((data) => {
//         console.log(data);
//         data.forEach((item) => {
//             console.log(item);
//         })
//     })
//     .catch((err) => console.log(err));


// --------- allSettled()
// if all resolved then return array of object with status and value/reason.

// Promise.allSettled([Promise.reject("Error occurred")])
//     .then((data) => {
//         console.log(data);
//         data.forEach((item) => {
//             console.log(item);
//         })
//     });

// ----------- any()
// Resolve: As soon as the first promise resolve
// Reject: if all promises are rejected

// Promise.any([promise1, promise2, promise3])
//     .then((data) => console.log(data))
//     .catch((err) => console.log(err));

// Promise.any([Promise.reject("Error occurred!"), promise2, promise3])
//     .then((data) => console.log(data))
//     .catch((err) => console.log(err));

// Promise.any([Promise.reject("Error occurred in 1!"), Promise.reject("Error occurred in 2!")])
//     .then((data) => console.log(data))
//     .catch((err) => console.log(err));

// ---------- race()
// Reject/Resolve: As soon as first reject/resolve
// Promise.race([promise1, promise2, promise3])
//     .then((data) => console.log(data))
//     .catch((err) => console.log(err));
//
// Promise.race([Promise.reject("Error occurred!"), promise2, promise3])
//     .then((data) => console.log(data))
//     .catch((err) => console.log(err));