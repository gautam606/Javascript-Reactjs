// // // // // // // // console.log("hello world this learning phase  ");

// import { useCallback } from "react"

// // // let nam="alex"
// // // let age=20
// // // let email="alex@gmail.com"
// // // const phone=987654321
// // // const course="mca"
// // // const sem="1st sem"
// // // console.log(nam);
// // // console.log(age);
// // // console.log(email);
// // // console.log(phone);
// // // console.log(course);
// // // console.log(sem);


// // // // // // // // // const num=23
// // // // // // // // // let i=0
// // // // // // // // // console.log();
// // // // // // // // // console.log("let number:",num);

// // // // // // // // // for(i=1;i<10;i++)
// // // // // // // // // {
// // // // // // // // //     console.log("number:",i);
    
// // // // // // // // // }

// // // // // // // // // console.log(typeof num);
// // // // // // // // // console.log(typeof nam);


// // // // // // // // ************************function

// // // // // // // // function greet() {
// // // // // // // //     console.log("hello brother");
// // // // // // // // }

// // // // // // // // function world(){
// // // // // // // //     return "hello sister"
// // // // // // // // }

// // // // // // // // function tellhello(nam)
// // // // // // // // {
// // // // // // // //     // return "hello " + nam
// // // // // // // //     return`hello ${nam}`
// // // // // // // // }

// // // // // // // // function add(a,b)
// // // // // // // // {
// // // // // // // //     console.log(a+b);
    
// // // // // // // // }
// // // // // // // // greet();
// // // // // // // // console.log(world());
// // // // // // // // console.log(tellhello("ganesh"));
// // // // // // // // add(100,324)
// // // // // // // // //is no return value in function no need use console.log....if return value...either assign the func to a variable.
// // // // // // // // //or directly use print statement


// // // // // // // function greetuser(n){
// // // // // // //     console.log(`good morning ${n}`)

// // // // // // // }

// // // // // // // greetuser("alex");

// // // // // // // function calc1(a,b)
// // // // // // // {
// // // // // // //     return a*b;
// // // // // // // }

// // // // // // // const t1=calc1(1312,4534)
// // // // // // // console.log(t1);

// // // // // // // function stuinfo(na,age,sem)
// // // // // // // {
// // // // // // //     console.log(na);
// // // // // // //     console.log(age);
// // // // // // //     console.log(sem);
    
// // // // // // // }

// // // // // // // stuinfo("john",45,"1ST")



// // // // // // const info=()=>{
// // // // // //     console.log("this is javascript learing phase");
    
// // // // // // }
// // // // // // info();

// // // // // // const greet=(n)=>{
// // // // // //     console.log(`hello ${n}`);
// // // // // // }

// // // // // // greet("alex")


// // // // // // const add=(a,b)=>{
// // // // // //     return a+b;
// // // // // // }

// // // // // // console.log(add(23,24));


// // // // // // const multi=(x,y)=>x*y;

// // // // // // console.log(multi(23,56));

// // // // // // const user=age=>{
// // // // // //     console.log(`hello this is brody and his age ${age}`);
// // // // // // }

// // // // // // user(45);


// // // // // const greetuser=n=>{
// // // // //     console.log(`hello ${n}`);
// // // // // }

// // // // // greetuser("alex")

// // // // // const getstudent=(nam,course)=>`name:${nam} 
// // // // // course:${course}`

// // // // // console.log(getstudent("alex","MCA"));


// // // // // const multiply=(a,b)=>{
// // // // //     return a*b;
// // // // // }

// // // // // console.log(multiply(5,10));
// // // // // //note return means console log...else no



// // // // const arr=["apple","banana","grapes","jackfruit"]

// // // // console.log(arr[0]);

// // // // for(let i=1;i<arr.length;i++)
// // // // {
// // // //     console.log(arr[i]);
    
// // // // }

// // // // const nums=[2,3,52,5,2,7,12,787]
// // // // nums.push(45)
// // // // console.log(nums);

// // // // nums.pop()
// // // // console.log(nums);


// // // const product=[
// // //     {
// // //         "name":"pencil",
// // //         "price":450,
// // //         "category":"stationary"
// // //     },
// // //     {
// // //         "name":"laptop",
// // //         "price":45000,
// // //         "category":"electronics"
// // //     },
// // //     {
// // //         "name":"thumbler",
// // //         "price":670,
// // //         "category":"vessels"
// // //     }
// // // ]


// // // // // console.log(product);
// // // // console.log(product[0]);
// // // // console.log(product[0].price);

// // // product.push({"name":"shoes","price":10000,"category":"home equipments"})
// // // console.log(product);



// // *****************************array of objects

// //object1=>objects of objects
// const student={
//     "101":{
//         name:"ronny",
//         age:18,
//         course:"mca",
//         address:"calfornia"
//     },
//     "102":{
//         name:"brook",
//         age:18,
//         course:"mca",
//         address:"calfornia"
//     }

// }

// console.log(student);


// const user={
//     name:"reymesterio",
//     age:45,
//     place:"new york",
//     pincode:593751
// }

// console.log(user.name);
// console.log(user["age"]);


// // // // student[101].course="mtech"

// // // // user.age=56;


// // // // user.email="remesterio@gmail.com"
// // // // console.log(user);
// // // // console.log(student);



// // // // note:
// // // // 3 types of objects{
// // // // 1.arrays of objects
// // // // 2.objects of objects(can add object id)
// // // // 3.normal  object
// // // // }


// // // // // // const employee={
// // // // // //     name:"john",
// // // // // //     age:45,
// // // // // //     email:"johndoe@gmail.com",
// // // // // //     role:"software tester",
// // // // // //     salary:56000
// // // // // // }

// // // // // // console.log(employee);

// // // // // // console.log(employee.name);
// // // // // // console.log(employee.role);

// // // // // // employee.salary=80000

// // // // // // employee.department="IT dept"
// // // // // // console.log(employee);


// // // // // // const employees=[]

// // // // // // employees.push({
// // // // // //     "101":{
// // // // // //         name:"john",
// // // // // //         age:32,
// // // // // //         email:"john34@gmail.com",
// // // // // //         role:"software trainee",
// // // // // //         salary:50000
// // // // // //     },
// // // // // //     "102":{
// // // // // //         name:"jack",
// // // // // //         age:35,
// // // // // //         email:"jack4@gmail.com",
// // // // // //         role:"software developer",
// // // // // //         salary:80000
// // // // // //     },
// // // // // //     "103":{
// // // // // //         name:"jenny",
// // // // // //         age:40,
// // // // // //         email:"jennyl@gmail.com",
// // // // // //         role:"Manager",
// // // // // //         salary:100000
// // // // // //     }
// // // // // // })

// // // // // // console.log(employees.length);
// // // // // // console.log(employees);


// // // // // // console.log(student.length);

// // // // // // for(let i=0;i<student.length;i++)
// // // // // // {
// // // // // //     console.log(student[i].name);
    
// // // // // // }

// // // // // // const student =[
// // // // // //     {
// // // // // //         name:"Alex",
// // // // // //         age:18,
// // // // // //         course:"Btech"
// // // // // //     },
// // // // // //     {
// // // // // //         name:"Rahul",
// // // // // //         age:20,
// // // // // //         course:"Mtech"
// // // // // //     },
// // // // // //     {
// // // // // //         name:"John",
// // // // // //         age:21,
// // // // // //         course:"BE"
// // // // // //     },
// // // // // // ]

// // // // // // const names=student.map((student)=>{
// // // // // //     return student.name
// // // // // // })

// // // // // // const age=student.map((student)=>{
// // // // // //     return student.age
// // // // // // })
// // // // // // console.log(names);
// // // // // // console.log(age);

// // // // // // const num=[34,23,5,223,45,23,11,12,2,6,9,16,56,23]

// // // // // // const great=num.map((num)=>{
// // // // // //     return num+56;
// // // // // // })

// // // // // // console.log(great);


// // // // // // const products=[
// // // // // //     {
// // // // // //         name:"milk",
// // // // // //         price:40,
// // // // // //         category:"Dairy"
// // // // // //     },
// // // // // //     {
// // // // // //         name:"butter",
// // // // // //         price:80,
// // // // // //         category:"Dairy"
// // // // // //     },
// // // // // //     {
// // // // // //         name:"Ice cream",
// // // // // //         price:100,
// // // // // //         category:"Dessert"
// // // // // //     }
// // // // // // ]

// // // // // // const name=products.map((products)=>{
// // // // // //     return products.name;
// // // // // // })

// // // // // // console.log(name);
// // // // // // const price=products.map((products)=>{
// // // // // //     return products.price;
// // // // // // })

// // // // // // console.log(price);
// // // // // // const category=products.map((products)=>{
// // // // // //     return products.category;
// // // // // // })

// // // // // // console.log(category);



// // // // // //filter() concept

// // // // // const students=[
// // // // //     {
// // // // //         name:"roman",
// // // // //         age:19,
// // // // //         address:"mumbai"
// // // // //     },
// // // // //     {
// // // // //         name:"dean",
// // // // //         age:21,
// // // // //         address:"mumbai"
// // // // //     },
// // // // //     {
// // // // //         name:"seth",
// // // // //         age:22,
// // // // //         address:"kolkota"
// // // // //     },
// // // // //     {
// // // // //         name:"jinder",
// // // // //         age:23,
// // // // //         address:"mumbai"
// // // // //     }
// // // // // ]

// // // // // // console.log(students);

// // // // // // const age=students.filter((students)=>{
// // // // // //     return students.age>20;
// // // // // // })

// // // // // // console.log(age);


// // // // // // const addr=students.filter((students)=>{
// // // // // //     return students.address==="mumbai"
// // // // // // })

// // // // // // console.log(addr);


// // // // // const addr=students.filter(students=>students.address==="mumbai")
// // // // // console.log(addr);


// // // // // reduce

// // // // // const cart=[
// // // // //     {
// // // // //         name:"water bottle",
// // // // //         price:20
// // // // //     },
// // // // //     {
// // // // //         name:"chips pack",
// // // // //         price:140
// // // // //     },
// // // // //     {
// // // // //         name:"red bull",
// // // // //         price:120
// // // // //     }
// // // // // ]


// // // // // let total=cart.reduce((sum,cart)=>{
// // // // //     return sum=sum+cart.price;
// // // // // },0)

// // // // // console.log(total);



// // // // const cartpro=[
// // // //     {
// // // //         name:"milk packets",
// // // //         price:35,
// // // //         quantity:3
// // // //     },
// // // //     {
// // // //         name:"cadburry silk",
// // // //         price:200,
// // // //         quantity:2
// // // //     },
// // // //     {
// // // //         name:"bread packet",
// // // //         price:70,
// // // //         quantity:1
// // // //     },
// // // //     {
// // // //         name:"agrabathi",
// // // //         price:20,
// // // //         quantity:4
// // // //     }
// // // // ]

// // // // const pro=cartpro.reduce((multi,cartpro)=>{
// // // //     return multi=multi+cartpro.price*cartpro.quantity;
// // // // },0)
// // // // console.log(pro);


// // // //                     ARRAY
// // // //                       │
// // // //           ┌───────────┼───────────┐
// // // //           ↓           ↓           ↓
// // // //         map()      filter()    reduce()
// // // //           │           │           │
// // // //           ↓           ↓           ↓
// // // //      transform     select       combine
// // // //           │           │           │
// // // //           ↓           ↓           ↓
// // // //      new array     new array    one value


// // // //destructing


// // // // const student={
// // // //     id:1,
// // // //     name:"Alex",
// // // //     email:"alex@gmail.com",
// // // //     course:"MCA"
// // // // }

// // // // // console.log(student.name);
// // // // const {name,email,course}=student;
// // // // console.log(name);
// // // // console.log(email);
// // // // console.log(course);


// // // const fruits=['apple','mango','orange']
// // // // const newfruits=[...fruits]
// // // // console.log(newfruits);


// // // let email="gaueda@gamil.com"
// // // const vegetables=['carrot','onion','ladies finger']
// // // const newarr=[...fruits,...vegetables]
// // // // const newar=[...fruits,...vegetables,...email]

// // // console.log(newarr);
// // // // console.log(newar);

// // //note :in real world does the destructing used :



// // Destructuring in real-world projects

// // The main idea:

// // Destructuring = take the values you need from an object or array.

// // You will use this very frequently in React and Node.js.

// // A. Getting data from an API response

// // Suppose your backend sends:

// // const student = {
// //     name: "Alex",
// //     email: "alex@gmail.com",
// //     course: "MCA",
// //     semester: 3
// // };

// // Without destructuring:

// // console.log(student.name);
// // console.log(student.email);
// // console.log(student.course);

// // With destructuring:

// // const { name, email, course } = student;

// // console.log(name);
// // console.log(email);
// // console.log(course);

// // This is much cleaner.

// // Real project example

// // Your Student Management System might receive:

// // const student = {
// //     id: 1,
// //     first_name: "Alex",
// //     last_name: "Ronny",
// //     email: "alex@gmail.com",
// //     course_id: 2,
// //     semester: 3
// // };

// // You might only need:

// // const { first_name, last_name, email } = student;

// // Now you can directly use:

// // console.log(first_name);
// // console.log(email);
// // 2. Destructuring in Express.js

// // This is very important for your backend.

// // You have already used:

// // req.body

// // Suppose your frontend sends:

// // {
// //     "first_name": "Alex",
// //     "last_name": "Ronny",
// //     "email": "alex@gmail.com",
// //     "phone": "9876543210"
// // }

// // Without destructuring:

// // const firstName = req.body.first_name;
// // const lastName = req.body.last_name;
// // const email = req.body.email;
// // const phone = req.body.phone;

// // With destructuring:

// // const {
// //     first_name,
// //     last_name,
// //     email,
// //     phone
// // } = req.body;

// // Then:

// // console.log(first_name);
// // console.log(email);

// // This is something you will commonly see in your controllers.

// // For example:

// // const createStudent = (req, res) => {

// //     const {
// //         first_name,
// //         last_name,
// //         email,
// //         phone
// //     } = req.body;

// //     // database query...
// // };

// // So when you continue your Student Management System, you'll see this pattern often


// //rest operator


// // const fruits = ["Apple", "Banana", "Mango", "Orange","blueberry","coconut"];

// // const[first,second,third,fourth,fifth,...rest]=fruits;
// // console.log(first);
// // console.log(second);
// // console.log(third);
// // console.log(fourth);
// // console.log(fifth);
// // console.log(rest);


// // // Spread: ... → spreads/copies values
// // // Rest: ... → collects remaining values

// //spread operator

// // const fruits = ["Apple", "Banana"];

// // const newFruits = [...fruits, "Mango"];

// // console.log(newFruits);


// //template literals


// // const name = "Alex";
// // const age = 22;

// // console.log(`My name is ${name} and I am ${age} years old.`);


// // ES6 Modules (import / export).


// // there are 2 methods to import and export 
// // 1.ES Modules (ESM) → import / export
// // 2.CommonJS (CJS) → require / module.exports

// // 1. and 2. refer student.js and app.js



// // 1. ES Modules — modern JavaScript

// // This is the modern standard and is heavily used in React/Vite frontend projects and also in modern Node.js backends.

// // Let's start with the easiest example.

// // student.js
// // export const name = "Alex";
// // export const course = "MCA";
// // app.js
// // import { name, course } from "./student.js";

// // console.log(name);
// // console.log(course);

// // Output:

// // Alex
// // MCA

// // Here we're using named exports.

// // 2. Named Export

// // You can export several things from one file.

// // student.js
// // export const name = "Alex";

// // export const age = 22;

// // export function getStudent() {
// //     return "Alex";
// // }

// // Then:

// // app.js
// // import { name, age, getStudent } from "./student.js";

// // console.log(name);
// // console.log(age);
// // console.log(getStudent());

// // The { } means:

// // "Give me these specific exported things."

// // 3. You can export at the bottom

// // Instead of:

// // export const name = "Alex";
// // export const age = 22;

// // You can do:

// // const name = "Alex";
// // const age = 22;

// // export { name, age };

// // Both are valid.

// // Personally, for learning, I recommend the first style because it's easy to see immediately that something is being exported.

// // 4. Default Export

// // Now another important method.

// // student.js
// // const student = {
// //     name: "Alex",
// //     age: 22
// // };

// // export default student;

// // Import:

// // import student from "./student.js";

// // console.log(student.name);

// // Notice:

// // Named export
// // export const name = "Alex";

// // Import:

// // import { name } from "./student.js";
// // Default export
// // export default student;

// // Import:

// // import student from "./student.js";

// // Named → { }

// // Default → no { }

// // 5. Default export can have any import name

// // This is something beginners often find confusing.

// // If you have:

// // export default student;

// // You can technically do:

// // import student from "./student.js";

// // or:

// // import data from "./student.js";

// // or:

// // import xyz from "./student.js";

// // They all work because it's the default export.

// // But in real projects, don't randomly rename things. Use a meaningful name:

// // import student from "./student.js";
// // 6. Can we use Named + Default together?

// // Yes.

// // student.js
// // const student = {
// //     name: "Alex",
// //     age: 22
// // };

// // export default student;

// // export const course = "MCA";
// // export const semester = 3;

// // Then:

// // import student, { course, semester } from "./student.js";

// // console.log(student);
// // console.log(course);
// // console.log(semester);

// // This is valid.

// // 7. Import everything

// // Suppose:

// // // student.js

// // export const name = "Alex";
// // export const age = 22;
// // export const course = "MCA";

// // You can import everything:

// // import * as student from "./student.js";

// // Now:

// // console.log(student.name);
// // console.log(student.age);
// // console.log(student.course);

// // Output:

// // Alex
// // 22
// // MCA

// // * as student means:

// // Import all the named exports and put them inside student.

// // You'll see this sometimes, but don't use it everywhere. Usually importing only what you need is cleaner.

// // 8. Now CommonJS

// // This is the other module system.

// // You will see it frequently in Node.js projects, especially older Node.js projects and projects configured to use CommonJS.

// // student.js
// // const name = "Alex";
// // const age = 22;

// // module.exports = {
// //     name,
// //     age
// // };

// // Then:

// // app.js
// // const { name, age } = require("./student");

// // console.log(name);
// // console.log(age);

// // Here:

// // module.exports

// // is used for exporting.

// // And:

// // require()

// // is used for importing.

// // 9. CommonJS can export a function

// // For example:

// // studentController.js
// // function getStudents() {
// //     console.log("Getting students");
// // }

// // module.exports = {
// //     getStudents
// // };

// // Then:

// // studentRoutes.js
// // const { getStudents } = require("../controllers/studentController");

// // This is actually very similar to what you've been doing in your Student Management System.

// // Your current backend uses:

// // require()

// // and:

// // module.exports

// // So your backend is using CommonJS.

// // 10. Why are there two systems?

// // Historically, Node.js used CommonJS:

// // const express = require("express");

// // Modern JavaScript introduced the standardized ES Modules system:

// // import express from "express";

// // Node.js now supports ES Modules too.

// // So both exist.

// // 11. Which one is latest / preferred?

// // Here's the important part.

// // Modern frontend — React/Vite

// // You will normally use:

// // import
// // export

// // For example:

// // import Navbar from "./components/Navbar";

// // and:

// // export default Navbar;

// // ES Modules are the normal choice.

// // Modern Node.js backend

// // You can also use:

// // import
// // export

// // For example:

// // import express from "express";

// // and:

// // export default router;

// // ES Modules are a modern standard for Node.js too.

// // But CommonJS is NOT outdated or wrong

// // You'll still encounter:

// // const express = require("express");

// // and:

// // module.exports = router;

// // especially in existing Node/Express applications.

// // So as a developer, you should understand both, but for new projects, ES Modules are generally the modern standardized choice when your project is configured for ESM.

// // 12. Frontend vs Backend

// // This is probably the most useful way to remember it.

// // 	Frontend	Backend
// // React/Vite	import/export	—
// // Modern Node.js	—	import/export
// // Existing/CommonJS Node project	—	require/module.exports

// // So:

// // React
// // import StudentCard from "./StudentCard";
// // export default StudentCard;
// // Modern Node
// // import express from "express";
// // CommonJS Node
// // const express = require("express");
// // 13. What should YOU use?

// // For your learning, I would recommend:

// // React projects

// // Learn and use:

// // import
// // export

// // Example:

// // import Navbar from "./components/Navbar";

// // export default App;
// // New Node.js projects

// // Learn both, but when starting a new project, you can use:

// // import
// // export

// // if the project is configured for ES Modules.

// // Your current Student Management System

// // Don't change it.

// // Your current project already uses:

// // const express = require("express");

// // and:

// // module.exports = {
// //     getAllStudents,
// //     getStudentById,
// //     createStudent,
// //     updateStudent
// // };

// // That's CommonJS, and it is perfectly fine for that project.

// // 14. One final comparison

// // Imagine you have a function:

// // function getStudents() {
// //     return ["Alex", "Rahul"];
// // }
// // ES Modules

// // Export:

// // export { getStudents };

// // Import:

// // import { getStudents } from "./student.js";
// // CommonJS

// // Export:

// // module.exports = { getStudents };

// // Import:

// // const { getStudents } = require("./student");

// // Same basic idea:

// // Export → make something available

// // Import → use it in another file


// // // so remmeber that default export and import from is es module and then module.export and require is common js 
// // ES Modules (ESM) → import / export
// // CommonJS (CJS) → require / module.exports

// // const arr=[2,4,6,8,10]

// // const filt=arr.filter((arr)=>{
// //     return arr>5
// // })

// // console.log(filt);
// // const map1=arr.map((arr)=>{
// //     return arr>5
// // })

// // console.log(map1);


// //Hoisting in js
// // getName();
// // console.log(x);

// // var x=7;
// // function getName()
// // {
// //     console.log("javascript learing");
    
// // }
// //hoisting is phenomeon is javascript by which we can acess this variable and functions without intailzing 


// //sync example

// // function add(a ,b)
// // {
// //     console.log("add");
// // }

// // add();
// // function multi(a ,b)
// // {
// //     console.log("multi");
// // }
// // multi();

// // function sub(a ,b)
// // {
// //     console.log("sub");
// // }
// // sub();

// //async example 



// // setTimeout(orderpizza,2000)
// //else

// // setTimeout(() => {
// //     console.log("hello bad boy");
    
// // }, 4000);


// //example

// // const ordering=()=>console.log("order placed");
// // ordering()
// // const preparing=()=>{
// //     console.log("food preapring");
    
// // }
// // setTimeout(preparing,1000);
// // setTimeout(() => {
// //     console.log("food ready");
    
// // }, 4000);
// // function calculator(a,b,callback)
// // {   
// //     return a-b;
// //     return callback(a,b);

// // }

// // function add(a,b)
// // {
// //     return a+b;
// // }

// // //high order function...function that accepts as argument it is called as high order function
// this is synchronous function
// const boookingpro=()=>{
//     console.log("the products is booked");
// }

// const confirmpro=()=>{
//     console.log("the product is confirmed");
// }

// const shippingpro=()=>{
//     console.log("the product is shipped");
// }

// const reachedpro=()=>{
//     console.log("the product reached to the owner");
// }

// function test()
// {
//     boookingpro();
//     confirmpro();
//     shippingpro();
//     reachedpro();
// }

// // test();

// const boookingpro=(callback)=>{
//     setTimeout(() => {
//         console.log("the products is booked");
//         callback()
//     }, 1000);
// }

// const confirmpro=(callback)=>{
//     setTimeout(() => {
//         console.log("the product is confirmed");
//         callback()
//     }, 2000);
// }

// const shippingpro=(callback)=>{
//     setTimeout(() => {
//         console.log("the product is shipped");
//         callback()      
//     }, 3000);
// }
// const reachedpro=(callback)=>{
//     setTimeout(() => {
//         console.log("the product reached to the owner");
//         callback()
//     }, 4000);
    
// }
// function test()
// {
//     boookingpro(()=>{
//         confirmpro(()=>{
//             shippingpro(()=>{
//                 reachedpro(()=>{
//                     console.log("process ended");
                    
//                 })
//             })
//         })
//     });
//     // confirmpro();
//     // shippingpro(shippingprocessing);
//     // reachedpro();
// }

// test();
// //this is a nested callback function....(callback hell)



//callbacks learn


// console.log("study");
// console.log("learn");


// setTimeout(() => {
//     console.log("finish");
    
// }, 2000);

// console.log("work");



// function greet(){
//     console.log("good morning");
// }

// function wish(callback) {
//     console.log("happy birthday");
//     callback();
// }

// wish(greet)


// function sayhello(){
//     console.log("hello macha");
// }

// function test(callback){
//     console.log("test case");
//     callback()
// }

// test(sayhello)

//callback parameter

// function add(a,b){
//     return a+b;
// }

// function test(a,b,callback)
// {
//     console.log("solve");
//     let val=callback(a,b);
//     console.log(val);
    
// }

// test(5,4,add)

// console.log();


// function multiply(a, b) {
//     return a * b;
// }

// function calculator(a, b, callback) {
//     console.log("solved");
//     return callback(a,b)
// }

// console.log(calculator(5, 4, multiply));


// function greet(callback)
// {
//     setTimeout(() => {
//         console.log("hello brother");
//         callback()
//     }, 2000);
// }

// const greet2=()=>{
//     console.log("how are you");
    
// }

// greet(greet2)

// function bookproduct(callback){
//     setTimeout(() => {
//         console.log("booking a product");
//         callback();
//     }, 1000);
// }

// function orderprocess(callback){
//     setTimeout(()=>{
//         console.log("oder processing");
//         callback()
//     },2000)
// }

// function delivery() {
//     setTimeout(() => {
//         console.log("process end");
//     }, 3000);
//     console.log("product delivered");
    
// }

// bookproduct(()=>{
//     orderprocess(()=>{
//         delivery()
//     })
// })

// const order=new Promise((resolve,reject)=>{
//     resolve("product delivered")
// })



// const bookproduct=()=>{
//     return new Promise((resolve,reject)=>{
//         resolve();
//     })
// }


// test(greet)

//note if it a play function without return type and only then use callback example 2 
// or else use return callback function and console log ..like example 1 



//example 3 anynomous function

// function greet(callback){
//     setTimeout(() => {
//         console.log("you logged in at time 2sec");
//         callback();
//     }, 2000);
// }


// greet(()=>{
//     setTimeout(() => {
//         console.log("logged in succesfully");
//     }, 3000);
// })


//callback hell

// function bookProduct(callback) {
//     setTimeout(() => {
//         console.log("Product booked");
//         callback();
//     }, 1000);
// }

// function confirmProduct(callback) {
//     setTimeout(() => {
//         console.log("Product confirmed");
//         callback();
//     }, 1000);
// }

// function shipProduct(callback) {
//     setTimeout(() => {
//         console.log("Product shipped");
//         callback();
//     }, 1000);
// }

// function deliverProduct(callback) {
//     setTimeout(() => {
//         console.log("Product delivered");
//         callback();
//     }, 1000);
// }

// bookProduct(()=>{
//     confirmProduct(()=>{
//         shipProduct(()=>{
//             deliverProduct(()=>{
//                 console.log("customer satisfied!");
                
//             })
//         })
//     })
// })

//for the same problem i will use promises

// function bookproduct(callback)
// {
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             console.log("product booked");
//             resolve();
//         }, 2000);
//     })
// }
// function confirmproduct()
// {
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             console.log("booking confirmed");
//             resolve();
//         }, 3000);
//     })
// }
// function shippingproduct()
// {
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             console.log("product shipping");
//             resolve();
//         }, 4000);
//     })
// }
// function deliveredproduct()
// {
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             console.log("product deliverd");
//             resolve();
//         }, 4000);
//     })
// }

// // bookproduct()
// //     .then(()=>{
// //         return confirmproduct();
// //     })
// //     .then(()=>{
// //         return shippingproduct()
// //     })
// //     .then(()=>{
// //         return deliveredproduct()
// //     })
// //     .then(()=>{
// //         console.log("customer satisfied");
        
// //     })



//     //await and async

//     async function orderProcess() {

//     await bookproduct()

//     await confirmproduct()

//     await shippingproduct()

//     await deliveredproduct()

//     console.log("Customer satisfied!");
// }
// orderProcess()
//     bookProduct()
//      ↓
//    resolve()
//      ↓
//    .then()
//      ↓
// confirmProduct()
//      ↓
//    resolve()
//      ↓
//    .then()
//      ↓
// shipProduct()
//      ↓
//    resolve()
//      ↓
//    .then()
//      ↓
// deliverProduct()
//      ↓
//    resolve()
//      ↓
// Customer satisfied!


//note :return inside the then is conpulsory


// function prepare()
// {
//     return new Promise((resolve)=>{
//         setTimeout(() => {
//             console.log("tea is ready");
//             resolve();
//         }, 3000);
//     })
// }

// function preparet()
// {
//     console.log("preparing tea");
    
// }


// async function order(params) {
//     await prepare();
//     console.log("work going on");
    
//     await preparet();    
// }

// const go=order();
// console.log(go);


// async function getusers(params) {
//     const response=await fetch("https://jsonplaceholder.typicode.com/users")
//     const data=await response.json();
//     console.log(data);
    
// }


// getusers();


// async function createsuer(params) {
//     const response=await fetch("http://localhost:5000/api/students",{
//         method:"post",
//         headers:{
//             "content-Type":"application/json"
//         },

//         body:JSON.stringify({
//             name:"Alex",
//             age:22
//         })
//     });
//     const data=await response.json();
//     console.log(data);
//     console.log("data inserted");
    
// }

//dom operations:

// const id=document.getElementById("h1");
// const btn = document.getElementById("btn");

// btn.addEventListener("click",()=>{
//     id.textContent="Hello access granted"
// })


// 1.selecting items

// // Remember these 3
// document.getElementById("title");

// → Select one element by ID

// document.querySelector(".item");

// → Select the first matching element

// document.querySelectorAll(".item");

// → Select all matching elements


// DOM Concept 2: Changing Content

// The main property you need is:

// element.textContent
// 1. Change text

// HTML:

// <h1 id="title">Hello World</h1>

// JavaScript:

// const title = document.getElementById("title");

// title.textContent = "Hello Alex";


// 2 types :innerhtml and textcontent

// innerHTML renders the tags and applies the CSS

// textContent prints the raw code out as plain text

// An event is something that happens on the webpage.

// Examples:

// User clicks a button → click
// User types in an input → input
// Form is submitted → submit
// Mouse moves → mousemove
// Keyboard key pressed → keydown

// JavaScript can listen for these events and run a function.

// concept 3:refer test.html

// concept 4:
// . Basic example

// HTML:

// <input id="name" type="text">

// JavaScript:

// const input = document.getElementById("name");

// console.log(input.value);

// Concept 6: Change Styles

// HTML:

// <h1 id="title">Hello</h1>

// JavaScript:

// const title = document.getElementById("title");

// title.style.color = "red";
// title.style.fontSize = "40px";
// title.style.backgroundColor = "yellow";
// Concept 7: Classes

// HTML:

// <h1 id="title">Hello</h1>

// JavaScript:

// Add class:

// title.classList.add("active");

// Remove class:

// title.classList.remove("active");

// Toggle class:

// title.classList.toggle("dark");

// Example:

// btn.addEventListener("click", () => {
//     title.classList.toggle("red");
// });

// CSS:

// .red {
//     color: red;
// }

// This is useful for:

// Dark mode
// Show/Hide menu
// Active buttons
// Sidebar open/close
// Concept 8: Create and Remove Elements

// This is useful for:

// Todo apps
// Chat apps
// Comments
// Product lists

// HTML:

// <ul id="list"></ul>

// JavaScript:

// Create:

// const li = document.createElement("li");

// li.textContent = "Milk";

// document.getElementById("list").appendChild(li);

// Result:

// <ul>
//     <li>Milk</li>
// </ul>

// Remove:

// li.remove();
// Final DOM Cheat Sheet
// document.getElementById()

// Select by ID

// document.querySelector()

// Select first element

// document.querySelectorAll()

// Select multiple elements

// element.textContent

// Change text

// input.value

// Get input value

// addEventListener()

// Handle events

// form.addEventListener("submit")

// Handle forms

// element.style

// Change styles

// classList.add()
// classList.remove()
// classList.toggle()

// Manage classes

// createElement()
// appendChild()
// remove()


// Concept 8: Creating Elements

// JavaScript can create a new HTML element.

// HTML:

// <div id="container"></div>

// JavaScript:

// const container = document.getElementById("container");

// const heading = document.createElement("h1");

// heading.textContent = "Hello Alex";

// container.appendChild(heading);

// The browser now has:

// <div id="container">
//     <h1>Hello Alex</h1>
// </div>
// Real-world example

// Adding a todo:

// const todo = document.createElement("li");

// todo.textContent = "Learn React";

// document.getElementById("list").appendChild(todo);
// Concept 9: Adding Elements

// The two common methods are:

// appendChild()
// const li = document.createElement("li");

// li.textContent = "Learn JavaScript";

// list.appendChild(li);

// Adds the element at the end.

// append()
// list.append(li);

// Also adds it.

// append() is more flexible because you can also append text:

// list.append("Hello");

// For now, remember:

// createElement()
//       ↓
// create the element
//       ↓
// appendChild() / append()
//       ↓
// put it into the page
// Concept 10: Removing Elements

// Suppose:

// <ul id="list">
//     <li id="item">Learn React</li>
// </ul>

// JavaScript:

// const item = document.getElementById("item");

// item.remove();

// The <li> disappears.

// Example with a button
// <li id="item">
//     Learn React
//     <button id="deleteBtn">Delete</button>
// </li>
// const item = document.getElementById("item");
// const deleteBtn = document.getElementById("deleteBtn");

// deleteBtn.addEventListener("click", () => {
//     item.remove();
// });

// Flow:

// Click Delete
//      ↓
// Event occurs
//      ↓
// Callback runs
//      ↓
// item.remove()
//      ↓
// Element disappears

// This is the basic idea behind deleting items in a Todo application.

// Concept 11: DOM Traversal

// This means moving from one HTML element to another related element.

// Consider:

// <div id="parent">
//     <h1>Title</h1>
//     <p>Hello</p>
// </div>
// 1. parentElement

// If you select the <p>:

// const paragraph = document.querySelector("p");

// console.log(paragraph.parentElement);

// You get:

// <div id="parent">

// So:

// <p>
//  ↓
// parentElement
//  ↓
// <div>
// 2. children

// You can get the children of an element:

// const parent = document.getElementById("parent");

// console.log(parent.children);

// The result contains:
// {Happy Independence Day}
// <h1>
// <p>

// So:

// <div>
//  ↓
// children
//  ↓
// <h1>
// <p>

// You can access one:

// parent.children[0]

// → <h1>

// parent.children[1]

// → <p>

// 3. nextElementSibling

// HTML:

// <p id="first">First</p>
// <p id="second">Second</p>

// JavaScript:

// const first = document.getElementById("first");

// console.log(first.nextElementSibling);

// This gives:

// <p id="second">Second</p>

// Meaning:

// First
//  ↓
// nextElementSibling
//  ↓
// Second
// 4. previousElementSibling
// const second = document.getElementById("second");

// console.log(second.previousElementSibling);

// This gives the first <p>.

// Second
//  ↓
// previousElementSibling
//  ↓
// First


// main difference why to use react more :

// This is another major real-world benefit.

// Traditional website:

// Home
//  ↓
// New page loads

// Products
//  ↓
// New page loads

// Cart
//  ↓
// New page loads

// A React SPA can behave more like an application:

// React Application
//        ↓
// Home
// Products
// Cart
// Checkout
// Profile


// why do companies use React so much?

// Not simply because:

// "React is faster."

// That's an oversimplification.

// The bigger reasons are:

// React
//  │
//  ├── Component-based architecture
//  │
//  ├── Reusable UI
//  │
//  ├── State-driven UI
//  │
//  ├── Easier management of complex interfaces
//  │
//  ├── Good API integration
//  │
//  ├── Large ecosystem
//  │
//  ├── Easier team collaboration
//  │
//  └── Maintainability as applications grow

