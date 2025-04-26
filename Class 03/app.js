// let a = 10;


//     //  10  -   12 +  11 +   11 -  10 +  10 + 10 -   9  -   10     12 = -1
// let b = a++ - ++a + --a + a-- - a + a + a-- - a++ - a++ - ++a 

// console.log(b)


// let a = 11;


// //      11 - 13 - 12  + 12 +  11  - 11 + 11  + 13 - 13 + 12 + 12 =  
// let b = a++ - ++a - --a + a-- + a++ - --a + a++ + ++a - a-- + a + a

// console.log(b)


// if(condition){
//  code block
//}else{
// code block
//}


// let age = 20;

// if(age = 22){
//     console.log("Allowed!")
// }else{
//     console.log("Not Allowed!")
// }

// let temp = 40;

// if(temp > 25){
//     console.log("Garmi bohot hai bhai!");
// }else{
//     console.log("Mausam itna acha hai k dil garden garden ho gaya!"); 
// }

// let isRaining = false;

// if(isRaining){
//     console.log("Enjoy the Sunshine!");
// }else{
//     console.log("Take An Umbrella!")
// }


// let isRaining = true;


// if(true){
//     console.log("take an Umbrella ");
// }else{
//     console.log("Enjoy the Sunshine!");
    
// }

// let examPassed = true;

// if(examPassed){
//     console.log("Congrats")
// }else{
//     console.log("Better luck next time!");
    
// }

// if(condition1){
//     //condition 1 true ye run hoga
// }else if(condition2){
//     // condition 2 true ye run hoga 
// }else if(condition3){
//     // condition 3 true ye run hoga
// }else{
//     // agar sab false huwe tho ye run hoga.
// }

// let score = 45;

// if(score >= 90){
//     console.log("Grade A");
// }else if(score >=75){
//     console.log("Grade B");
// }else if(score >= 60){
//     console.log("Grade C")
// }else{
//     console.log("Grade F"); 
// }

// let hours = 19;

// if(hours < 12){
//     console.log("Good Morning!");
// }else if(hours < 18){
//     console.log("Good Afternoon");
// }else{
//     console.log("Good Evening!");   
// }

// Nested if-else

// if(condition1){
//     if(condition2){

//     }else{

//     }
// }else{

// }

// let username = "admin1";
// let pw = "123456789";


// if(username === "admin"){
//     if(pw === "12345"){
//         console.log("Login Successful!");
//     }else{
//         console.log("Incorrect pw");
//     }
// }else{
//     console.log("User Not Found!");
    
// }

// let age = 10;
// let hasID = false;


// if(age >= 18){
//     if(hasID){
//         console.log("You can enter!");
        
//     }else{
//         console.log("ID Required!");
//     }
// }else{
//     console.log("You are underage!");
    
// }

// AND Operator ( && )


// let age = 20;
// let hasID = false;

// if(age > 18 && hasID){
//     console.log("You can enter");
// }else{
//     console.log("You are underage!");
    
// }

// OR Operator ( || )

// let age = 20;
// let hasID = false;

// if(age > 18 || hasID){
//     console.log("You can enter!");
    
// }

// let salary = 50000;
// let exp = 2;

// if(salary > 40000 && exp > 2){
//     console.log("You are eligible for the loan!");
// }

// let ownCar = true;
// let hasLicense = false;

// if(ownCar || hasLicense){
//     console.log("You can Drive!");
    
// }

// console.log(1)
// console.log(2)
// console.log(3)
// console.log(4)
// console.log(5)
// console.log(6)
// console.log(7)
// console.log(8)
// console.log(9)
// console.log(10)

// for(initialization;condition;increment/decrement){
//     // code to execute / jo code run karna ho.
// }

// for(let i = 1; i <=20;i++){
//     console.log(i);
// }

// for(let i = 1; i <= 5; i++){
//     if(i === 3){
//         break;
//     }
//     console.log("i is" , i)
// }


// for(let i = 1; i <= 5; i++){
//     if(i === 3){
//         continue;
//     }
//     console.log("i is" , i)
// }

// for(let i = 1; i <= 10; i++){
//     if(i % 2 != 0){
//         continue; // skip odd numbers
//     }
//     console.log(i); // only  even numbers
// }


// for(let i = 1; i <= 5; i++){
//     let row = "";
//     for(let j = 1; j <= i; j++){
//         row += "* ";
//     }
//     console.log(row);
// }


// for(let i = 1; i <= 5; i++){
//     let row = "";
//     for(let j = 1; j <= i; j++){
//         row += j + " ";
//     }
//     console.log(row)
// }


// for(let i = 1; i <= 5 ; i++){
//     let row = "";
//     for(let j = 1; j <= i; j++){
//         row += i + " ";
//     }
//     console.log(row)
// }