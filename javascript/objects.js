//  =======>    objects
// properties
// (name , height . mobile Number, age)--> men
// (model, speed, insurence, drift) --> car

// action and method
// (eat , walk , talk , runing , speak ) --> men
// (speed, service , washing) --> car
// let person1 = {
//   firstName : "tony",
//   lastName : "stark",
//   age : 50,
//   address : "noida",

// }
// person1.company = "amazon";
// delete person1.lastName;
// console.log(person1);
// console.log(person1.age)

// let person1 = {
//   firstName : "tony",
//   lastName : "stark",
//   age : 50,
//   address : "noida",
// }

// for(let key in person1){
//   console.log(person1[key]);
// }

// let person1 = {
//   firstName : "tony",
//   lastName : "stark",
//   age : 50,
//   address : "noida",
//   greet : function(){
//     console.log("go with object")
//   }
// }
// console.log(person1.firstName);

// // console.log(person1);
// person1.greet();
// person1.greet();
// person1.greet();

//====> this keyword
// const person = {
//     firstname : "Tony",
//     lastName : "stark",
//     color : "color",
//     sayHello :function(){
//         // console.log("hello, I am a " + person2.firstname + " and i have a " + car1.car + "car");
//         console.log("hello, I am a " + this.firstname + " and i have a " + car1.car +  " " + "car" + "and" + car2.brand);
//     }
// }

// const car1 = {
//     car: "BMW",
//     model : 2018,
// }
// let car2 = {
//     brand : " new launch",
//     model : 2018,
// }

// person.sayHello();

// === > math object
// console.log(Math);
// console.log(Math.PI)

// ====> decimal to integer
// 1 . round
// 2 . floor
// 3.  ceil
// 4 . trunce

// let num = 10.3;
// // let res = Math.round(num);
// // let res = Math.floor(num);
// // let res = Math.ceil(num);
// let res = Math.trunc(num);
// console.log(res);

// math pow
// let num1 = 4;
// let res = Math.pow(num1, 3);
// let res1 = Math.sqrt( 100);
// console.log(res);
// console.log(res1)

// max and min

// let res = Math.max(200, 139, -22, 100);
// let res = Math.min(200, 139, -22, 100);
// console.log(res)

// math random ()
// let res = Math.random();
// let res = Math.floor(Math.random() * 10);
// let res = Math.floor(Math.random() * 11);
// console.log(res);

// let min = 10;
// let max = 20;
// let res = Math.floor(Math.random() * (max - min  + 1) + min);
// console.log(res)

// assign object()
// const obj1 = {
//     a : 1,
//     b : 2,
// }
// const obj2 = {
//     c : 12,
//     d : 33,
// }

// let res = Object.assign({} , obj1, obj2)
// console.log(res);

// object keys
// let person = {
//   firstName : "tony",
//   lastName : "stark",
//   age : 50,
//   address : "noida",
//   greet : function(){
//     console.log("go with object")
//   }
// }
// // let res = Object.keys(person1);
// // let res = Object.values(person1);
// let res = person.hasOwnproperty("car");
// console.log(res);

// let data = [
//   {
//     id: 1,
//     name: "Leanne Graham",
//     username: "Bret",
//     email: "Sincere@april.biz",
//     address: {
//       street: "Kulas Light",
//       suite: "Apt. 556",
//       city: "Gwenborough",
//       zipcode: "92998-3874",
//       geo: {
//         lat: "-37.3159",
//         lng: "81.1496",
//       },
//     },
//     phone: "1-770-736-8031 x56442",
//     website: "hildegard.org",
//     company: {
//       name: "Romaguera-Crona",
//       catchPhrase: "Multi-layered client-server neural-net",
//       bs: "harness real-time e-markets",
//     },
//   },
//   {
//     id: 2,
//     name: "Ervin Howell",
//     username: "Antonette",
//     email: "Shanna@melissa.tv",
//     address: {
//       street: "Victor Plains",
//       suite: "Suite 879",
//       city: "Wisokyburgh",
//       zipcode: "90566-7771",
//       geo: {
//         lat: "-43.9509",
//         lng: "-34.4618",
//       },
//     },
//     phone: "010-692-6593 x09125",
//     website: "anastasia.net",
//     company: {
//       name: "Deckow-Crist",
//       catchPhrase: "Proactive didactic contingency",
//       bs: "synergize scalable supply-chains",
//     },
//   },
// ];

// console.log(data[1].address.zipcode);
// console.log(data[0].company.bs);

// object constrator

// function Employee(name, company , postion, city , address){
//   this.name = name;
//   this.companyname = company;
//   this.postion = postion;
//   this.city = city;
//   this.address = address;
// }

// let Employee1 = new Employee("tony", "tcs1", "HR1", "noida", "sec-62" );
// let Employee2 = new Employee("thor", "tcs2", "HR2", "noida", "sec-63" );
// let Employee3 = new Employee("caption", "tcs3", "HR3", "noida", "sec-64" );
// let Employee4 = new Employee("Hulk", "tcs4", "HR4", "noida", "sec-65" );
// let Employee5 = new Employee("iron-men", "tcs5", "HR5", "noida", "sec-66" );
// console.log(Employee1);
// console.log(Employee2);
// console.log(Employee3);
// console.log(Employee4);
// console.log(Employee5);


// ==> nested object

// let obj = {
//     name : "prince",
//     age : 20,
//     personalInfo : {
//         firstName : "tony",
//         lastname : "stark",
//         address : {
//             pincode  : "250611",
//             city : " barut",
//         }
//     }
// }

// console.log(obj.personalInfo.address.pincode);

// let mydate = new Date(); // == for cureent date
// let mydate = new Date(2024, 2, 23, 19, 40, 29 ); // == for  setting date and time
    //                year, month,date, hour, min , sec

    // let mydate = new Date("2-04-2017");
    // console.log(mydate);

    // javascript hoisting = it is a process in which we can call a function before  function declartion

    // hello();

    // function hello(){
    //     console.log("hello world");
    // }

    // console.log(person);
    // var person = "mike";