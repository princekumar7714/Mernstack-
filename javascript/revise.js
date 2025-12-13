// variables in js  

// const { jsx } = require("react/jsx-runtime");

// let score =12;
// var score1 = 13;
// const score3 = 33;
// console.log(score);

// datatypes

// let name = "prince"; //string
// let num = null; // null 
// let number = 123; // number
// let bool = true ; // boolean
// let num3 ; // undefined 

// console.log(name);
// console.log(num);
// console.log(number);
// console.log(bool);
// console.log(num3);


// string

// console.log("javascript");
// let a = 33;
// let b = 33;
// let c = 5;
// let d = 5;
// let e = 55;
// let f = 55;
//  console.log(a==b && c==d && e==f);

//  logical operator (||)
// let a = 33;
// let b = 33;
// let c = 5;
// let d = 5;
// let e = 55;
// let f = 55;
// console.log(a==b || c==d || e==f);
 
// string concat 


// let firstName = "        web developer    ";
// let lastName = "prince";
// method using + operator 
// let fullNmae = firstName +  " " + lastName;
// console.log(fullNmae);
// console.log(firstName +  " " +lastName);


// using template literals 

// let fullName1 = ` i want to become a ${firstName} and my name is ${lastName}`;
// console.log(fullName1);

// getting string charcter 

// console.log(firstName[0]);

// ==> string method 

// console.log(firstName.toUpperCase());
// console.log(lastName.toLowerCase());
// let res = firstName.trim();
// console.log(res);

// console.log(lastName.lastIndexOf("prince"));

// console.log(res.includes("web"));

// let fullName2 = " wow programmer";
// console.log(fullName2.slice(0,10));

// we can change string into array by using split method  

// let favPlayer = " hardik , virat, rohit , dhoni";
// let arrPlayer = favPlayer.split(',');
// console.log(arrPlayer);



// type conversion
// let name = "55";
// let str = Number(name);
// console.log(str);
// console.log(typeof str);



/////=====> DOm revision

// select element by class 

// let class1 = document.getElementsByClassName('item');
// console.log(class1);

// // select element by id 
// let id1 = document.getElementById('para');
// console.log(id1);
// // select element by tagname
// let tagname1 = document.getElementsByTagName('h4');
// console.log(tagname1)
// select element by queryselector

// let query1 = document.querySelector('.item');
// console.log(query1);

//  select element by queryselectorall

// let query2 = document.querySelectorAll('#para');
// console.log(query2);


///====> select parent element

// let list = document.getElementById('li2');
// let parent = list.parentElement;
// console.log(parent);

///====> select child  element

// let list = document.getElementById('ul1');
// let parent = list.firstElementChild;
// let parent = list.children;
// let parent = list.lastElementChild;
// console.log(parent);

// select sibling element
// let list = document.getElementById('li2');
// let node1 = list.nextElementSibling;
// let node1 = list.previousElementSibling.nextElementSibling.nextElementSibling;
// console.log(node1);


// inner html 
// let elm = document.querySelector('#js');
// let node = elm.innerHTML;
// elm.innerHTML = " <h2> this is inner html change js </h2>";
// console.log(node);

////=====> create and append child

// let elm = document.getElementById('list');
// let node1 = document.createElement('h1');
// let text = document.createTextNode("this is append element");
// node1.appendChild(text);
// elm.appendChild(node1);
// // console.log(elm);

// let elm = document.getElementById('list');
// let node1 = document.createElement('h1');
// // let text = document.createTextNode("this is another append methodf");

// node1.textContent="this is another method append child";
// elm.appendChild(node1);


// insert before method 

// let elm = document.getElementById('list');
// let node = document.createElement("h1");
// node.textContent = "javascript add behaviour to the web page";

// let postion = node.firstElementChild;
// let postion2 = node.nextElementSibling;
// let pos1 = node.lastElementChild;
// elm.insertBefore(node, postion2);  /// ===> dought here for element not set in first child element

// let body = document.body;
// body.insertBefore(node,pos1);


// remove child element

// let elm = document.getElementById('list');
// let node2 = elm.firstElementChild;
// elm.removeChild(node2);

// clone element

// let elm = document.querySelector('.menu');
// let elmclone = elm.cloneNode(true);
// elmclone.id = "menu3";
// document.body.appendChild(elmclone);


// parent element

// let elm = document.querySelector(".ul1");
// let parent = elm.firstElementChild;
// parent.children;
// console.log(parent);
// let elm = document.querySelector("#list1");
// let parent = elm.nextElementSibling;
// // parent.children;
// console.log(parent);


// let elm = document.querySelector(".ul1");
// let node2 = elm.innerHTML;
// elm.innerHTML = " <h2> this is inner html change js </h2>";
// console.log(elm);


// let elm = document.querySelector(".ul1");
// let node1 = document.createElement("h1");
// node1.textContent = " this from inner html"
// console.log(node1)

// hoisting in js
// sayhello();
// function sayhello(){
//     console.log("hello world1")
// }


// let firstName = "                         prince       ";
// let lastName = "kuma4r";
// let fullName = firstName + " "  + lastName;
// console.log(fullName);
// let fullName = `i name is ${firstName} ${lastName}`;
// console.log(fullName)

// console.log(firstName.toUpperCase());
// console.log(lastName.toLocaleLowerCase())
// let names = firstName.trim();
// console.log(names);

// let score = 50;
// console.log(score, typeof score);

//arrray

// let Dishes = ["dosa", "idly", "samosa"];
// console.log(Dishes[0]);

// Dishes[0] = "pizza";
// console.log(Dishes);

// console.log(Dishes.join(' " " chapp'));

// let newDishes = [" rice", "rajma"];

// console.log(Dishes.concat(newDishes));

//control floow

// for loop

for(let i = 0; i<=100; i++){
    console.log("run this task",i);
}