// Javascript DOM (Document objects model)

// const { Children } = require("react");

//created by the browser as the html load into the browser

// browser create object of html called 'document object'.

//In document object there is model of complete html in
//tre like structue

// console.log(document);

// ==> getting HTML elements using querySelector/ querySelectorAll

//querySelector returns 'first element' that match css selector

//to get all matched elements we use queryselectorAll

// let result = document.querySelector('p');

// access element with class
// let rsultedelement = document.querySelector('.para3');
// console.log(rsultedelement)

// access element with the help of id

// let resultedelement = document.querySelector('#para5');
// console.log(resultedelement);

// other way to select element

// let querySelectorAllelement = document.querySelectorAll('p');
// console.log(querySelectorAllelement);

// get element by tagname
// let resultName = document.getElementsByTagName('p');
// console.log(resultName);

// let resultTag= document.getElementById('para5');
// console.log(resultTag);
// let resultClass= document.getElementsByClassName('para3');
// console.log(resultClass);

// ==> updating and changing content

//innerText
//ignore spaces
//retrieve and set content in plain task
// let contentclass = document.querySelector('.para3');
// contentclass.innerText ="great coder";
// console.log(contentclass.innerText);

//innerHTML
//it does not ignore spaces
//retrieve and set content in html format
// contentclass.innerHTML += "<p> mast coders </p>";  // += for add both html  // => for overwriting use "=";
// console.log(contentclass.innerHTML);

// getting and setting attributes
//  get getAttribute
// let coderDOstlink = document.querySelector('a');
// console.log(coderDOstlink.getAttribute("href"));

//set attributes
// coderDOstlink.setAttribute("href", "https://www.flipkart.com/?affid=affveve&affExtParam1=59135&affExtParam2=437ab6871b0469fdb77b61acc2290fb5");
// console.log(coderDOstlink.getAttribute("href"));

// coderDOstlink.innerText= "code with prince";\

// let codewithDost = document.querySelector('.phone');
// console.log(codewithDost.getAttribute("href"));

// codewithDost.setAttribute("href", "https://github.com/princekumar7714/anshu");
// console.log(codewithDost.getAttribute("href"));

// adding style to the element
// let heading = document.querySelector('.content');
// heading.style.color = "blue";
// heading.style.backgroundColor = "red";
// heading.style.border=" 2px solid black";

// add . remove and replace class of element

// let heading = document.querySelector('.para5');
// heading.classList.add('para6');

// remove class
// heading.classList.remove('para6');

// replace  the class
// heading.classList.replace("para5", "main5");

// parents , child and sibling element
// let parentElement = document.querySelector(".content");
// console.log(parentElement.children)
// to convert it from child to array
// console.log(Array.from(parentElement.children))

// child to parent

//  let heading = document.querySelector("h3");
// console.log(heading.parentElement);
// console.log(heading.previousSibling);

// event basics listner
// click event
// let eventElement = document.querySelector(".clickme");
// eventElement.addEventListener('click', function(){
//     let li = document.createElement('li')
//     li.textContent = "some thing new";
//     ul.appand(li);
//     // console.log("btn is clicked");
// })
// / console.log(eventElement);

// creating

// const ul = document.querySelector('ul');
// let button = document.querySelector(".clickme");
// button.addEventListener('click', function(){
//     let li = document.createElement('li');
//     li.textContent = "some thing new";
//     // ul.append(li);
//     ul.prepend(li);

//     // console.log("btn is  clicked");
// })
// console.log(eventElement);

// let elements = document.querySelectorAll('li');
// elements.forEach(function (element) {
// element.addEventListener('click', function(e){
//     console.log(e.target);
//     // e.target.style.textDecoration = 'line-through';
//     //  e.target.remove()
// })

// });

//                                      = ===>    from basket training

// dom ( document object model)

// select elemnet by id
// let ele = document.getElementById('coder');

// select elemnet by class
// let ele1 = document.getElementsByClassName('content');

// let ele2 = document.getElementsByTagName('h1');
// console.log(ele2);
// console.log(ele1);
// console.log(ele);

// select element by query selector

// let item = document.querySelector("#coder");
// let items = document.querySelectorAll('#coder');
// let items2  = document.querySelectorAll('.content');

// select parent element

// let ele = document.getElementById('list');
// let parent = ele.parentElement;
// console.log(parent);

// select child element

// let elm = document.getElementsByClassName('list0');
// // let child = elm.firstElemnetChild;
// let child = elm.children;
// console.log(child);

// select sibling element

// let elm = document.getElementById("list1");
// let node1 = elm.previousElementSibling;
// let node1 = elm.nextElementSibling;
// let node1 = elm.previousElementSibling.nextElementSibling;
// let node1 = elm.previousElementSibling.nextElementSibling.nextElementSibling;
// let node1 = elm.previousElementSibling.nextElementSibling.nextElementSibling.nextElementSibling;
// console.log(node1);
// console.log(elm)

// inner html
// let elm = document.getElementById("list1");
// let node = elm.innerHTML;
// elm.innerHTML = " <h2> this is inner html change js </h2>"
// console.log(node);

// create and append list

// let elm = document.getElementById("ul");
// let h1 = document.createElement("h1");
// let text = document.createTextNode("this is append element");
// h1.appendChild(text);
// elm.appendChild(h1);

// let elm = document.getElementById("div1");
// let p = document.createElement("p");
// let text = document.createTextNode("this is para from append method using js");

// p.appendChild(text);
// p.textContent = "this is para from append method using js";
// elm.appendChild(p);

// insert before method
// insert before (new element, postion)

// let node = document.getElementById("ul");
// let text = document.createElement("h1");
// text.textContent = "this one is from insert before mehod";

// let postion = node.firstElementChild;
// let postion = node.firstElementChild.nextElementSibling.nextElementSibling;
// let postion = node.lastElementChild;
// let postion = node.lastChild;
// node.insertBefore(text,postion);

// let body = document.body;
// body.insertBefore(text, node);

//==> remove child element

// let parent = document.getElementById("ul");
// let elm = parent.firstElementChild;
// let elm = parent.firstElementChild.nextElementSibling;

// parent.removeChild(elm);

// = > clone  element method

// let menu = document.getElementById("menu");
// let cloneElm = menu.cloneNode(true);
// cloneElm.id = "mobile-menu";
// cloneElm.classList = "mobile-class";
// document.body.appendChild(cloneElm);

// == > replace elemet method

// let parent = document.getElementById("menu");
// let elm1 = document.createElement("li");
// elm1.textContent = "services";
// // let pos = parent.firstElementChild;
// let pos = parent.firstElementChild.nextElementSibling;

// parent.replaceChild(elm1,pos);

//insert adjacentHTMl
// let parent = document.getElementById("box");
// let parent = document.getElementsByClassName("box");
// let elm = "<h1> this is heading 1 </h1>";
// parent.insertAdjacentHTML("beforebegin", elm);
// parent.insertAdjacentHTML("beforeend", elm);
// parent.insertAdjacentHTML("afterend", elm);

// add attributes

// / let parent = document.getElementById("box");
// box.setAttribute("class", "btn");
//   attribute, value

// get attributes
// let box = document.getElementById("box");
// let value = box.getAttribute("class");
// console.log(value);

// ==> remove attribute
//  let box = document.getElementById("box");
// box.removeAttribute("class");

// checking attributes
//  let box = document.getElementById("box");
// let value = box.hasAttribute("class");  // true
// let value = box.hasAttribute("name"); // false
// console.log(value)

//==> adding css/ style

// let btn = document.getElementById("btn");
// btn.style.cssText = "background-color: red; padding:10px 20px; color:yellow;"

// /==> adding css/ style , set attribute method

// let btn = document.getElementById("btn");
// btn.setAttribute("style", "background-color: red; padding:10px 20px; color:yellow;");

//==> adding css/ style another method

//  let btn = document.getElementById("btn");
//  btn.style.backgroundColor = "yellow";
//  btn.style.color = "brown";
//  btn.style.margin = "30px 50px";
//  btn.style.padding = "30px 50px"

// ==> get css
// let btn = document.getElementById("btn");

// let sty = getComputedStyle(btn);
// console.log(sty.backgroundColor)
// console.log(sty.color);
// create class
// btn.className += "dim";
// btn.classList= " btn";

//==> remove class
// let btn = document.getElementById("btn");
// btn.classList.remove("dim");

//===> replace class
// let btn = document.getElementById("btn");
// btn.classList.replace("btn","dim");

// ==> checking class
// let btn = document.getElementById("btn");
// let res = btn.classList.contains("btn"); // true
// let res = btn.classList.contains("b"); false
// console.log(res);

// ==  toggle method
//  let btn = document.getElementById("btn");
//  btn.classList.toggle("node");

// width and height of element calculate with border width

//  let elm = document.querySelector(".box");   //// ===> dought here for classname selector
//  let width1 = elm.offsetHeight;
//  let height = elm.offsetWidth;
//  console.log(width1);
//  console.log(height);
//  // calculate actual height and width
//  let widthOne = elm.clientHeight;
//  let heightOne = elm.clientWidth;
//  console.log(widthOne);
//  console.log(heightOne);

// js events

// let btn1 = document.getElementById('btn');
// btn1.addEventListener("click", clickbtn);
// function clickbtn(){
//     alert("btn was clicked!");
// }
// let btn2 = document.getElementById('btn1');
// btn1.addEventListener("dblclick", dbclick);
// function dbclick(){
//     alert("btn was clicked!");
// }

// multiple events
// let btn1 = document.getElementById('btn1');

//  btn1.addEventListener("click", clickbtn);
//  btn1.addEventListener("mouseover", mouseover);
// function clickbtn(){
//     alert("btn was clicked!");
// }

// function mouseover(){
//     console.log("mouseover"); 
// }

// anoymous function event
// let btn1 = document.getElementById('btn1');

//  btn1.addEventListener("click", function(){
//     alert("btn was clicked")
//  });
//  btn1.addEventListener("mouseover", function(){
//     console.log("mouseover was triggered");
//  });

// let btn2 = document.getElementById('btn2');
// btn2.addEventListener('mouseover', function(){
//     console.log("mouse over2 triggered")
// } )

// btn2.addEventListener('mouseout', function(){
//     console.log("mouseout was trigger")
// })
// remove events
// btn1.removeEventListener("mouseover",mouseover);

// let elm = document.getElementById('inp');
// elm.addEventListener('input',focus1);
// elm.addEventListener('change', blur1);

// function focus1(){
//     console.log("focus was trigger");
//     elm.style.backgroundColor = "yellow";
// }

// function blur1(){
//     console.log("blur was truggered");
//     elm.style.backgroundColor = "white";
// }

// event-bubbling and event capturing

// let parent = document.getElementById("parent");
// let child = document.getElementById("child");
// parent.addEventListener("click", parent1,false);
// function parent1() {
//     console.log("parent element was triggred");
// }

// child.addEventListener("click", child1 , false)

// function child1(){
//     console.log("child element was triggred");
// }
// document.body.addEventListener("click", body1,false);

// function body1(){
//     console.log("body element was triggred");
// };

// event capturing
// let parent = document.getElementById("parent");
// let child = document.getElementById("child");
// parent.addEventListener("click", parent1,true);
// function parent1() {
//     console.log("parent element was triggred");
// }

// child.addEventListener("click", child1 , true)

// function child1(){
//     console.log("child element was triggred");
// }
// document.body.addEventListener("click", body1,true);

// function body1(){
//     console.log("body element was triggred");
// };

// BOM (browser object model)
// console.log("Hello world");
// window.console.log("Hello world1");

// history object
// console.log(history);

// screen object
// console.log(screen.width);
// console.log(screen.availWidth);
// console.log(screen.height);
// console.log(screen.availHeight);

// navigator oject
// console.log(navigator.cookieEnabled);
// console.log(navigator.appCodeName);

// console.log(navigator.platform);

//location object
// console.log(location);
// console.log(location.href);
// console.log(location.protocol);
// console.log(location.hostname);
// console.log(location.port);

// console.log(location.assign("https://it.trainingbasket.in/Store/Batch/listBatchRecordings?batchId=187"));

//==> prevent default method()
// let link = document.getElementById("link");
// link.addEventListener("click",link1);
// function link1(e){
//     console.log("link was triggereed");
//     e.preventDefault();

// }

// arrow function and settimeout and setInterval
// {()=> } // arrow function syntex
  // setTimeout(()=>{
  //   console.log("settimeout");
  // },2000);
  //  setInterval(()=>{
  //   console.log("setinterval");
  // },2000);

// => map mthod

// let num = [1,2,3,4,5,6,7,8,9];
// let res = num.map((val)=>val+10).map((val)=> val * 2);
// console.log(res);

// const obj = new Map();
// obj.set("In", "India");
// obj.set("fr", "france");
// obj.set("am", "usa");
// obj.set("sa", "southafrica");
// obj.set("In", "India");
// console.log(obj);
// for of loop
// for(value of obj){
//     console.log(value)
// } == for array elements

// for(const [properties,value] of obj){
//      console.log(properties, " :-" , value);
// } //       ==>  string

// foreach loop
// const cars = ["audi", "bmw", "ferari", "maruti"];
// cars.forEach((val)=>{
//     console.log(val);
// })
// const arry = [
//     {
//         id:1,
//         email:" mike@gmail.com",
//     },

//     {
//         id:2,
//         email:" alen@gmail.com",
//     },

//     {
//         id:3,
//         email: "tony@gmail.com",
//     },
// ];

// arry.forEach((value)=>{
//     console.log(value.id);
// })

// filter method
// let  num = [1, 2, 3, 4, 5, 6, 7, 8, 9,];
// let res = num.filter((val) => val > 5);
// console.log(res) ;

// let books = [
//     {title : "Book1", genre : "friction1", publish:1900, ediition :2000},
//     {title : "Book2", genre : "friction2", publish:1991, ediition :2001},
//     {title : "Book3", genre : "friction3", publish:1992, ediition :2002},
//     {title : "Book4", genre : "friction3", publish:1993, ediition :2003},
//     {title : "Book5", genre : "friction5", publish:1994, ediition :2004},
//     {title : "Book6", genre : "friction6", publish:1995, ediition :2005},
//     {title : "Book7", genre : "friction7", publish:1996, ediition :2006},
// ]

// let res = books.filter((val)=> val.genre == "friction3");
// console.log(res);

// reduce method
// let num = [200,222, 555, 666, 44, 33];
// let sum =  num.reduce((total, currentvalue)=>{
//     return total + currentvalue;
// }, 0);
// console.log(sum);

// let cart = [
//     {
//     itemName : "iphone 16",
//     price : 3000,
//     },
//     {
//     itemName : "iphone 14",
//     price : 9000,
//     },
//     {
//     itemName : "iphone 13",
//     price : 5000,
//     },
//     {
//     itemName : "iphone 12",
//     price : 4000,
//     }
// ]

// let res = cart.reduce((total, currentvalue)=>{
//     console.log(`total :${total} and currentvalue is ${currentvalue.price}`);
//     return total + currentvalue.price;
// },0);
// console.log(res);

// let num = [1, 2, 3, 4, 5, 6, 7, 8, ,9];
// let res = num.map((val)=> val +10).map((val)=> val*2).filter((val)=> val>=30);
// console.log(res);


// 23 sept lecture  start from here

//find method
// let student = [
//   {
//     name : "Tony",
//     Email : "Tonystrak@gmail.com",
//   },
//   {
//     name : "steve-roger",
//     Email : "steve@gmail.com",
//   },
// ]

// let res = student.find((val)=>{
//   return val.name = "Tony";          ==>   dought for case sensitive find method not working roperly 
// })
// console.log(res);

// / ==> find indexof 
// let arry = [10,23,40,50,60,70,80,90,100];

// let res = arry.findIndex((val)=>{
//   return val > 40;
// })

// console.log(res);


// spread operator (...)

// let num1 = [1,2,3,4];
// let num2 = [5,6,7,8,9];
// let num3 = [10,11,12, 13];
// let num4 = [14,15,16];
// let res = [...num1,...num2,...num3,...num4];
// console.log(res);

//rest operator (...)

// let num = [1,2,4,5,6,7,8,9];
//  let[a,b,...num1] =  num ;
//  console.log(a);

// js(synchoronous)
// console.log("hello world1");
// console.log("hello world2");
// console.log("hello world3");
// console.log("hello world4");
// console.log("hello world5");
// console.log("hello world6");

//  js(Asynchoronous)
//  console.log("hello world1");
// console.log("hello world2");
// console.log("hello world3");
// setTimeout(()=>{console.log("hello world4");},2000)

// console.log("hello world5");
// setTimeout(()=>{console.log("hello world6");},1000)
// console.log("hello world7");
// setTimeout(()=>{console.log("hello world7");},0)

// promises
// const mypromies = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log("the task is completed");
//     resolve();
//   },2000)
// })
// mypromies.then(()=>{
//   console.log("task is consumed");
// })

// const mypromies = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     let err = false;
//     if (!err) {
//       resolve({ username: "mike", email: "mike@gmail.com" });
//     } else {
//       reject("error : something went wrong!");
//     }
//   }, 1000);
// })
  // .then((val) => {
  //   console.log(val);
  // })
  // .catch((err) => {
  //   console.log(err);
  // })
  // .finally(() => {
  //   console.log("the promise is either resolve or reject");
  // });

// async ---> return a promise 
// await--> is wait for promise 

// const mypromies = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     let err = false;
//     if (!err) {
//       resolve({ username: "mike", email: "mike@gmail.com" });
//     } else {
//       reject("error : something went wrong!");
//     }
//   }, 1000);
// })

// async function consumepromise() {
//   try{
//     const response = mypromies;
//     console.log(response);
//   }
//   catch(err){
//     console.log(err);

//   }
// }
// consumepromise();

//==> fetch data from api(application programing interface)
//  fetch("https://jsonplaceholder.typicode.com/users").then((res)=>{
//   return res.json();
//  }).then((data)=>{
//   console.log(data);
//  }).catch((err)=>{
//   console.log(err);
//  })

// fetch("https://jsonplaceholder.typicode.com/comments").then((res)=>{
//   return res.json();
// }).then((data)=>{
//   console.log(data);
// }).catch((err)=>{
//   console.log(err);
// })

// fetch("https://jsonplaceholder.typicode.com/comments").then((res)=>{
//   return res.json();
// }).then((data)=>{
//   console.log(data);
// }).catch((err)=>{
//   console.log(err);
// })


// 25th sept lecture 


// oops (object oriented programing style)
// 1. Encapsulation 
  // 2. Inhertiance 
  // 3. polymorphisam 
    //  4. Abstraction
    
// constructor function
// function students(name, age, address, course){
//  this.name = name;
//  this.age = age;
//   this.address = address;
//   this.course = course;
// }
// let student1 = new students("tony",12, "noida", "js");
// let student2 = new students("tony1",122, "noida22", "jsx");
// console.log(student1);
// console.log(student2);

// class
// 1. Encapsulation 
// class user {
//   constructor(fullName, address, Pincode, age){
//     this.fullName = fullName;
//     this.address = address;
//     this.Pincode = Pincode;
//     this.age = age;
//   }
//   updateFullName(){
//     return `${this.fullName.toupperCase()}`;

//   }
//   updateaddress(){
//     return `${this.address.toupperCase()}`;
//   }
// }

// let user1 = new user("tony stark", "baraut", 250611,23);
// console.log(user1);

// inhertance ex 
//  class user {
//   constructor(Name){
//     this.Name = Name;
//   }
//   login(){
//     console.log(`log in username is ${this.name}`);
//   }
//  }
// class student extends user(){
//   constructor(Name, Email, address){
//     super(Name);
//     this.Email = Email;
//     this.address = address;
//   }

// studentLogin(){
//   console.log(`student name is ${this.Name}`);
// }
// }
// let student1 = new student("elon", "elon@gmail.com","usa");
// console.log(student1);
// console.log(student1.login);
// console.log(student1.studentLogin);

// lexical scope 

// function outer(){
//   let a = 10;
//   function inner(){
//     console.log(a);

//   }
//   inner();
// }
// outer();

//clousore 
// function outer(){
//   let count = 0;
//   function inner(){
//     count ++;
//     console.log(count);
//   }
//   return inner;
// }
// const fn = outer();
// fn();
// fn();
// fn();
// fn();
// fn();