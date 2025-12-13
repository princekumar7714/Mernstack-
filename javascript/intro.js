//  [1] = what is javascript?
//    => javascript improve user experience of the web page by converting it from static page to the interactive page.
// javascript is used to update and change both html and css .  it adds behaviour to the web.

//  [2] = javascript variables ?
//  variables are the container which is used to store data .
//  there are three types of variables = let , var, const .

// let num = 9;
// var name = "chirag";
// const num1 = 0.99;
// console.log(name);
// console.log(num);
// console.log(num1);

//  [3] = what is datatypes in js ?
//   ==> In JavaScript, data types categorize the different kinds of values that can be stored and manipulated. Understanding data types is fundamental for writing correct and efficient code. JavaScript data types are broadly categorized into two groups: Primitive and Non-Primitive (or Reference) data types.
// Primitive Data Types: These represent single, simple values and are immutable (their values cannot be changed after creation).
// Number: Represents both integer and floating-point numbers (e.g., 10, 3.14).
// String: Represents textual data, enclosed in single or double quotes (e.g., "hello", 'JavaScript').
// Boolean: Represents logical values, either true or false.
// Undefined: Represents a variable that has been declared but not yet assigned a value.
// Null: Represents the intentional absence of any object value.
// Symbol: (Introduced in ES6) Represents a unique identifier, often used for object property keys to avoid naming conflicts.
// BigInt: (Introduced later) Represents arbitrary-precision integers, capable of storing numbers larger than the standard Number type can handle.
// Non-Primitive (Reference) Data Types: These represent complex data structures and are mutable (their properties can be changed). When assigned or passed, they are referenced by memory location rather than by value.
// Object: The most fundamental non-primitive type. It is a collection of key-value pairs (properties and their values). Arrays and Functions are specialized types of Objects.
// Array: An ordered list of values, accessed by numerical index.
// Function: A block of reusable code, which can also be treated as an object in JavaScript.

// primitive datatypes
// let num3 = null;
// let num4 = 128;
// let name2 = "javascript";
// let Symbol = @;
// let boolean1 = true;
// let num5 ;
// console.log(num3, num4 , name2, boolean1, num5);

// string

// console.log("prince kumar");

// let name1= "mik";
// let result = (name1 =="mike") ? "you are right" : "you are wrong";
// console.log(result);

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

// let budget = 4500;
// if( budget > 3000 ){
//     console.log("will do dinner in 5 star hotel ");
//  }else{
//      console.log("not funding");
//  }

//  let number = 9;
//   if(number > 0){
//     console.log("your number is postive");

//   } else if (number < 0){
//     console.log("your number is negative");
//   } else{
//     console.log("equal to zero");
//   }

//switch case
let num = "fire";

switch (num) {
  case 1:
    document.writeln("Team iron-Men");
    break;

  case 2:
    document.writeln("Team super-man");
    break;

  case 3:
    document.writeln("team iron-men");
    break;

  case 4:
    document.writeln("team super-men");
    break;

  case "super":
    document.writeln("team super-men");
    break;

  case "fire":
    document.writeln("team iron-men");
    
    break;
    default :
    document.writeln("wrong input");

}
