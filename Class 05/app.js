console.log("Js Connected!");

// Function Syntax 

// function functionName(parameter){
//     // block of code
// }


// function foo(){
//     console.log("Function Invoked!");
// }

// foo();

// function greetUser(name){
//     console.log("Hello, " + name); 
// }

// greetUser("Meer")


// function add(a , b){
//     console.log(a + b);
// }

// add(10 , 4)

// function multi(a,b){
//     return a * b
// };

// let result = multi(4 , 9);


// console.log(result)

// Function Expression!

// let sayHi = function(){
//     console.log("Hi there!");
// }


// sayHi();

// arrow function ( ES 6 ) 

// const greet = ()=>{
//     console.log("Arrow Function Triggered!");
// }

// greet();



// const greetUser = (name = "Guest")=>{
//     console.log("Hello, " + name)
// }

// greetUser("Meer");

// Nested Function!

// function outer(){
//     console.log("Outer Function!");

//     function inner(){
//         console.log("Inner Function hoon.")
//     }
//     inner()

// }

// outer()


// function fullName(firstName , lastName){


//     function combine(){
//         return firstName + " " + lastName
//     }

//     return combine()

    
// }

// console.log(fullName("Meer", "Quais"));


// IIFE // Immediately Invoked Function Expression.

// (function(){
//     console.log("This runs Immediately!")
// })();

// This only gets triggered once.

// (function(name){
//     console.log("Welcome, " + name);
    
// })("Ali");

// Callback function


// function greet(name,callback){
//     console.log("Hello, " + name);
//     callback()
// }


// function sayBye(){
//     console.log("Goodbye!");
// }

// greet("Meer", sayBye)



// function greet(name , msg){
//     console.log("Hello, " + name);
//     console.log(msg)
// }

// greet("Ali" , "Goodbye!")



// function greet(name, callback){
//     console.log("Hello, " + name);
//     callback()
// };

// function sayBye(){
//     console.log("GoodBye!");   
// }


// greet("Hafeez" , sayBye)

// console.log("before timeout!");


// setTimeout(function(){
//     console.log("This message was delayed by 5 secs");
// }, 5000);

// console.log("after timeout!");

// let numbers = [1 , 2 ,3 ,4 ,5 ,6,7,8,9];

// numbers.forEach(function(num){
//     console.log(num);
//     console.log(num * 2);
// })

// forEach  - a method of array.


// let arr = [1 , 2 ,3 ,4 ,5 ]
// arr.forEach(function(currentValue, index , array){
//     // block of code
// })

// currentValue = array ka current element;
// index(optional) = current element index
// array(optional) = pura array.



// let fruits = ["apple", "Mango", "Orange", "Banana"];

// fruits.forEach(function(fruit , index){
//     console.log("This Fruit is " + fruit + " at " + index + " index"
//      )
// })

// let num = [10,20,30,40];
// let total = 0;
// console.log(total);


// num.forEach(function(num){
//     total += num;
// })
// console.log(total)


let names = ["Ali" , "Hafeez" , "Minhaj"];

names.forEach((name , i)=>{
    console.log(`Index ${i} = ${name}`);
});














