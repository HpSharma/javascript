// web storage
// 1. local Storage 2. session Storage 3. cookies 4. indexDB

// -------------- Local Storage --------------

// localStorage.setItem('theme', 'dark');
// const theme = localStorage.getItem('theme');
// // console.log(theme);
// console.log(localStorage.length);
// // console.log(localStorage.key(0))
// // console.log(localStorage.getItem(localStorage.key(0)));
//
// localStorage.setItem('username', 'sanjay');
// // console.log(localStorage.key(1));
//
// localStorage.setItem('mail-domain', 'gmail.com');
// // console.log(localStorage.key(2));
//
// // localStorage.removeItem('username');
//
// const username = {
//     name: 'Sanjay',
//     age: 23,
//     gender: 'male'
// }
// // console.log(username.toString());
// localStorage.setItem('user', JSON.stringify(username));
//
// let sanjay = localStorage.getItem('user');
// console.log(sanjay);
// sanjay = JSON.parse(sanjay);
// console.log(sanjay);
// console.log(sanjay.age);

// ---------- Session Storage ------------

// sessionStorage.setItem('username', 'sanjay');
// sessionStorage.setItem('password', '23423423');
//
// const username = sessionStorage.getItem('username');
// console.log(username);


// ------------ cookies ---------------
// console.log(new Date().toString());

// expires -> Expiry date GMT format -- expires=2025-12-12T00:00:00.000Z
// max-age -> Lifetime in seconds -- 3600
// path -> URL path the cookie is valid for
// domain -> website name/ Domain the cookie is valid for -- https://google.com
// Secure -> Cookie only set over HTTPS
// SameSite -> Strict

// prefixes -> __Secure, __Host


// document.cookie = `username=Sanjay; expires=${new Date('12-12-2025').toString()}; path=/; secure; Path=/;`;
// document.cookie = `password=123123; expires=${new Date('12-12-2025').toString()}; path=/; secure; Path=/;`;
// document.cookie = `token=asfEER~!#@!; expires=${new Date('12-12-2025').toString()}; path=/; secure; Path=/;`;
//
// console.log(document.cookie);
// console.log(document.cookie.split("; "));
//
// const userCookie = document.cookie
//     .split("; ")
//     .find(cookie => cookie.includes('token'));
//
// console.log(userCookie);
//
// const username = userCookie.substring(userCookie.indexOf("=") + 1, userCookie.length);
// console.log(username);


// -------------- IndexDB --------------
//
// const request = window.indexedDB.open("person_db", 1);
//
// // request.addEventListener("upgradeneeded", event => {});
// request.onupgradeneeded = function(event) {
//    const database = event.target.result;
//    const store = database.createObjectStore("user_details", {keyPath: 'id'});
//    store.createIndex("email", "email");
//
//    store.add({
//            id: 1111,
//            name: "James",
//            email: "james@gmail.com",
//            age: 25,
//    });
//    store.add({
//        id: 2222,
//        name: "Johnson",
//        email: "johnson@gmail.com",
//        age: 35,
//    });
// }
//
// request.onsuccess = function(event) {
//     const database = event.target.result;
//     const table = database
//         .transaction(['user_details'], 'readwrite')
//         .objectStore('user_details');
//     const addUser = table.add({
//         id: 3333,
//         name: 'Sanjay',
//         email: 'sanjay@gmail.com',
//         age: 23,
//         phone: '0123456789'
//     });
//
//     addUser.onsuccess = function(event) {
//         console.log(event.target.result);
//     }
//
//     // table.delete(1111);
//
//     const userResult = table.get(1111);
//
//     userResult.onsuccess = (event) => {
//         const user = event.target.result;
//         console.log({user});
//         console.log(user.name);
//     }
// }