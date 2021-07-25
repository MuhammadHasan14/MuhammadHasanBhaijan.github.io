
// answer 1-------------------------------------
// add = function(price) {
//     return price.reduce((a, b) => a + b, 0);
// };

// var name = ['sfdsfs', 'sdfsfs', 'sdfsf', 'sdfsf', 'sfddfs'];
// var quantity = [3, 6, 1, 5, 8];
// var price = [300, 600, 100, 500, 800];
// var totalprice = [3*300, 6*600, 1*100, 5*500, 8*800];

 
// var sum = add(price);
// var totalsum = add(totalprice);
// console.log(sum)
// console.log(totalsum)




// answer 2-------------------------------------
// const person = {
//     name: 'fsdfsf',
//     age: 56,
//     email: 'sfsdfsfs',
//     password: 'sdfdssd5555',
//     city: 'dsfsfds',
//     country: 'fsdfsfs',
//     gender: 'fsdfs',
// };

// let result1 = person.hasOwnProperty('lastName');
// console.log(result1);

// let result2 = person.hasOwnProperty('country');
// console.log(result2);

// let result3 = person.hasOwnProperty('age');
// console.log(result3);

// let result4 = person.hasOwnProperty('firstName');
// console.log(result4);

// const message = `Hi, I'm ${person.name}. I live in ${person.city}.`;
// console.log(message);

//answer 3---------------------------------------
// constructor function
// function Person() {
//     this.name = 'Hasan',
//         this.age = 23,

//         this.greet = function () {
//             console.log('hello');
//         }
// }

// // create objects
// const person1 = new Person();
// const person2 = new Person();

// // access properties
// console.log(person1.name);  // Hasan
// console.log(person2.name);  // Hasan
// console.log(person1.age);  // 23
// console.log(person2.age);  // 23

//answer 4 -------------------------------------------

// function Record(name, gender, address, education, profession) {
//     this.name = name;
//     this.gender = gender;
//     this.address = address;
//     this.education = education;
//     this.profession = profession;
// };
// var arr = [];

// function getInputValue() {
//     var nameO = document.getElementById("name").value;
//     var genderO = document.getElementById("gender").value;
//     var addressO = document.getElementById("address").value;
//     var educationO = document.getElementById("education").value;
//     var professionO = document.getElementById("profession").value;

//     var rec1 = new Record(nameO, genderO, addressO, educationO, professionO);
//     arr.push(rec1);
//     localStorage.setItem("rec1", JSON.stringify(rec1));


// }




