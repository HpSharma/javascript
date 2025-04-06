// class

// class Person {
//     constructor(name) {
//         // console.log(this);
//         this.name = name;
//     }
//
//     // get personName() {
//     //     return this.name;
//     // }
//     //
//     // set personName(name) {
//     //     this.name = name;
//     // }
//
//     getName() {
//         return this.name;
//     }
//
//     setName(name) {
//         this.name = name;
//     }
// }


// function Person(personName) {
//     const name = personName;
//     const age= 20;
//     const vote = 18;
//
//     const getDetails = () => {
//         return `${name} can ${age > vote ? 'vote' : 'not vote'} this years!`
//     }
//
//     return {
//         name,
//         age,
//         voteDetail: getDetails()
//     }
// }

// const person = new Person("Sanjay");
// console.log(person.personName); // get name
// person.personName = "Ravi"; // set name
// console.log(person.personName); // get name
// console.log(person);
// console.log(person.voteDetail);

// console.log(person.getName());
// person.setName("Ravi");
// console.log(person.getName());
// person.name = "Harpal";
// console.log(person.getName());

// console.log(person.getAge());


//
// class Person {
//     #voteAge = 18;
//     constructor() {}
//
//     getName() {
//         return this.name;
//     }
//
//     setName(name) {
//         this.name = name;
//     }
//
//     getAge() {
//         return this.age;
//     }
//
//     setAge(age) {
//         this.age = age;
//     }
//
//     getVoteDetails() {
//         return `${this.name} can ${this.age > this.#voteAge ? 'vote' : 'not vote'} this years!`
//     }
// }
//
//
// const person = new Person();
// console.log(person);
// person.setName("Sanjay");
// person.setAge(23);
// console.log(person);
// // console.log(person.name);
// // console.log(person.getName());
// // console.log(person.getAge());
//
// console.log(person.getVoteDetails());



//---------------------- Inheritance

class vehicle {
    constructor(brand, model) {
        this.brand = brand;
        this.model = model;
    }

    getBrand() {
        return this.brand;
    }

    getModel() {
        return this.model;
    }
}

class car extends vehicle {
    constructor(brand, model, name) {
        super(brand, model);
        this.name = name;
    }

    getName() {
        return this.name;
    }
}

const caar = new car("Toyota", 2025, "4 Runner");
console.log(caar.getBrand());
console.log(caar.getModel());
console.log(caar.getName());



