// //method 1 ES Modules (ESM) → import / export
// // method 2 CommonJS (CJS) → require / module.exports

// //method 1 ES Modules

// // import {a,getmember} from './student.js'

// // console.log(a);
// // getmember();

// // import student from "./student.js";

// // console.log(student);



// //method 2





















// const boookingpro=()=>{
//     setTimeout(() => {
//         console.log("I brought my library card,");
//     }, 2000);
// }

// const confirmpro=()=>{
//     setTimeout(() => {
//         console.log("To borrow something new");
//     }, 4000);
// }

// const shippingpro=()=>{
//     setTimeout(() => {
//         console.log("But the only thing I want to check");
//     }, 7000);
// }

// const reachedpro=()=>{
//     setTimeout(() => {
//         console.log("Is a lovely time with you");
//     }, 9000);
// }

// function test()
// {
//     boookingpro();
//     confirmpro();
//     shippingpro();
//     reachedpro();
// }

// test();





// callback function
// function add(a,b) {
//     return a+b;
// }



//example 1
// function operate(a,b,callback)
// {
//     console.log(callback(a,b));
    
// }

// operate(3,5,add)


//example 2
function greet(){
    console.log("hello world");
}

function test(callback) {
    console.log("this is jack");
    callback();
    
}

test(greet)

//note if it a play function without return type and only then use callback example 2 
// or else use return callback function and console log ..like example 1 



//example 3 anynomous function

