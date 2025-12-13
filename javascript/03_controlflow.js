// control flow
// for loops
// run this task 20 times
// for(let i=1; i<=20; i++){
// console.log("run this task", i);
// }

// let dishes = ["samosa", "chaat", "chaii" , 'system'];
//console.log(dishes);
// for(let i = 0; i<dishes.length; i++){
// console.log(dishes[i]);
// }

// while loop
// let j = 1;
// while(j<=5){
//     console.log("while loop", j);
//     j++
// }

// if , "else" and "else if"

// let budget = 4500;
// if( budget > 7000 ){
//     console.log("will do dinner in 5 star hotel ");
// }else if( budget > 5000 ){
//     console.log("will do dinner in 5 star hotel");
// }else if( budget > 4000){
//     console.log("will di dinner in 3 star hotel");
// }else{
//     console.log("not funding");
// }

// let num = 50;
// while(num <=60){
//     document.writeln("hello prince " + num);
//     document.writeln("<br>")
//     num++;
// }

// let num = 1;
// let sum = 0;
// let sum2 = 0;
// while (num <= 1000) {
//   // document.writeln(num)
//   if (num % 2 == 0) {
//     sum = sum + num;
//   }else if(num % 2 !==0){
//     sum2 = sum2 + num;
//   }
//   num++;
// }
// document.writeln(sum);
// document.writeln(sum2);

//  practise question of while loop
// Write a program using a while loop that prints numbers from 1 to 50. For multiples of 3, print "Fizz" instead of the number, for multiples of 5, print "Buzz," and for multiples of both 3 and 5, print "FizzBuzz."
 
// let num = 1;
// while(num <=50){
// if(num % 3 ==0 && num % 5 ==0){
//     document.writeln("fizzbuzz" , "</br>")
// }
// else if(num%5==0){
//     document.writeln("buzz","</br>");
// }else if(num%3==0){
//     document.writeln("fizz", "</br>");
// }else{
//     document.writeln(num);
//     document.writeln("</br>");
// }
// num ++;
// }

 //let count =1;
//do{
    // console.log(i);
    // document.writeln("hello world" + count);
    // document.writeln("</br>")
    // count++
    // count += 3;
//}while(count<=10);


// for(let num = 0; num<=50; num++){
//     document.writeln( "<br>", num );
// }

// nested loop

// for(let count = 0; count<=50; count++){
//     document.writeln( "outer loop running" +count + "<br>");
//     document.writeln("<br>");
//     for(count2=1; count2 <=2; count2++){
//         document.writeln( "hello world " + count2 );
//     } document.writeln("<br>")
// }


// let num = 5;
//  for(let i = 0; i<=num; i++){
//     for(let j=1 ; j<=i; j++){
//         document.writeln(j);
//     }document.writeln("<br>")
// }

// loops questions
// let num = 5;
//  for(let i = 5; i>=1; i--){
//     for(let j=1 ; j<=i; j++){
//         document.writeln(j);
//     }document.writeln("<br>");
// }
// let n = 3;
//  for(let i = 1; i<=n; i++){
//     for(let j=1; j<=(i+2); j++){
//         document.writeln("* ");
//     }document.writeln("<br>");
// }



// ==>  count down from 10 to 1

// for(let i = 100; i >=1; i--){
//     document.writeln( "<br>" + i);
// }

// for(let i = 100; i >=1; i--){
//     document.writeln( "<br>" + i);
// }


//pattern questions
//square
// let num = 4;
//  for(let i = 0; i<num; i++){
//     document.writeln("<br>");
//     for(let j = 0; j<num; j++){ 
//         document.writeln("* " )
//     }
//  }


// traingle  

//  let num = 5;
//  for(let i = 1; i<=num; i++){
//     document.writeln("<br>");
//     for(let j = 1; j<=i; j++){
//         document.writeln("* " )
//     }
//  }


// inverted traingle 
//   let num = 5;
//  for(let i = num; i=1; i--){
//     document.writeln("<br>");
//     for(let j = 1; j<=i; j++){  
//         document.writeln(num )
//     }
//  }
 
// num traingle

//   let num = 5;
//  for(let i = 1; i<=num; i++){
//     document.writeln("<br>");
//     for(let j = 1; j<=i; j++){  
//         document.writeln(j)
//     }
//  }

// break statement
// for(let i = 1; i<=10; i++){
//     if(i === 5 ){
//         break;
//     }
//     console.log( "hello world" + " " + i);
// }

// continue statement 
// for(let i = 1; i<=10; i++){
//     if(i === 5 ){
//         continue;
//     }
//     console.log( "hello world" + " " + i);
// }

 

 //alert method
// alert("hello world");

//prompt method 
//  let mess =prompt("what is your name");
// console.log(mess);
// alert(mess);

// confirm method
// let mess = confirm("are you sure");
// alert(mess);


// datatype conversion 
// string to num 
// let txt = "1223";
// console.log(txt);
// console.log( typeof txt);

// let num = Number(txt);
// console.log(num);
// console.log(typeof num);
// //  bool to num 
// let bool = false;
// console.log(bool)
// console.log(typeof bool);

// let num1 = Number(bool);
// console.log(num1);
// console.log(typeof num1);

// let text = "Why scrambled text? That's exactly the point.";

// let res = text.slice(27,35);
// console.log(res);

//  template literals 
// let text1 = "prince";
// let text2 = 23;

// let text3 = `my name is ${text1} and my age is ${text2}`;
// document.writeln(text3);

// escape charater 
//  let text = "Why scrambled text? That\'s\ exactly the point.";
//   document.writeln(text);

// string concat 

// let text1 = "hello";
// let text2 = "mike";
// let text3 = "how are you";

// document.writeln(text1 + " "  + text2 );

// concat method

// let mess = text1.concat( " " + text3);
// document.writeln(mess);

//length 
// let res = text3.length;
// console.log(res)
// // replace method 
// let items = "car, top, bike, remote";
//  let id = items.replace("car", "motor");
// console.log(id);

// trim method 

// let text = "         Why scrambled text? That\'s\ exactly the point.";
// let tim = text.trim();
// // upper case method
// let sim = text.toUpperCase();
// console.log(tim);
// console.log(sim);

