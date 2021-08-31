'use strict';

//How java script works behind the scenes

//*An High-level Overview of javascript
//js is highlevel->python,javascript(abstact) not optimised
//garbage-collected->clear all unused objects
//interpreted or just-in-time compiled->
//multi-paradigm->paradigm(approach) pop,oop,functional progrmming also imperative or declarative
//prototype-based object-orianted(primitive num,str,boolean etc.,) arrays are objects
//first-class function(functions as variables)
//dynamic (dynamically typed)
//single threaded
//Non-blocking event loop(cuncurrency model:how js engine handles multiple tasks happening at the time)

//*the js engine and runtime
//js engine program that excutes js code (eg:v8 engine in google and node.js)
//js engine contains calllstack and heap
//call stack contains->code and heap contains->objects
//comiplation(modern javascript is Just-in-time (JIT) compilation):every code is converted to machine code at once
//,then executed immedeately(NOT a portable file)
//steps follwed wwhen executing js code:
//step1:parsing(AST some kind of tree),compilation->execution(no portable file) {compilation code optimses on time}
//runtime in the browser->container including all the things that we use js
//web api's(DOM,Timers,Fetch API) not part of js itself

//*execution contexts and the call stack

//scope and the scope chain
//lexical scoping:(function inside a function)
//global scope,function scope and block scope
//block scopes applies only on let and const(ES6)

//Scoping in practice

// function calcAge(birthYear) {
//   //   console.log(lastName);
//   console.log(firstName);
//   const age = 2037 - birthYear;
//   function printAge() {
//     // const firstName = 'jonas';
//     const output = `Hello ${firstName}, You are ${age}, born in ${birthYear}`;
//     if (birthYear >= 1981 && birthYear <= 1996) {
//       var millenial = true;
//       const str = `Oh, and you are a millenial ${firstName}`;
//       console.log(str);

//       function add(a, b) {
//         return a + b;
//       }
//     }
//     // console.log(add(2, 3)); //error in strict mode
//     //console.log(str);  errror
//     console.log(output); //no error
//     return output;
//   }
//   console.log(printAge());
//   return age;
// }

// const firstName = 'Chinmay';
// calcAge(1994);

// console.log(age);
// console.log(printAge());

//variable environment: hoisting and the tdz
//execution content in js
//1)vriable environment 2)scope chain and 3)this keyword
//temporal dead zone(const and let)

//hoisting in practice
// console.log(me);
// // console.log(job);
// // console.log(year);   temporal dead zone
// //accesing variables declared with var are hoisted to undefined

// var me = 'chinmay';
// let job = 'jobless';
// const year = 2001;
// console.log(add(2, 3));
// function add(a, b) {
//   return a + b;
// }
// var add1 = (a, b) => a + b; //this function if we call before declaration add1=undefined so error
// function name(a, b) {
//   return a + b;
// }
//hoisting is not prefered and var for declaring varibales. It may cause serious problems
//Window object is global object in browser
//var varibales will be property in window object
//but const and let are not a property in window object

//this keyword
//arrow function doesn't have this keyword of its own
//so it takes lexical functions this keyword

//this keyword in practice
// console.log(this); //lexical scope or global scope
// const calAge = birthYear => {
//   console.log(this);
// };
// const calAge1 = function (birthYear_) {
//   console.log(this);
// };
// calAge();

// // const chinmay = {
// //   firstName: 'chinmay',
// //   lastName: 'B S',
// //   job: 'jobless',
// //   calAge: function () {
// //     console.log(this);
// //   },
// // };
// const c = calAge;
// const chinmay = {
//   firstName: 'chinmay',
//   lastName: 'B S',
//   job: 'jobless',
//   calAge: () => {
//     console.log(this);
//   },
// };

// //regular functions vs error functions
// function normals(params) {
//   return a * b;
// }
// console.log(this);
//function inside a method(use arrow functions) lexical
//arguments keyword

//primitives vs. objects(primitive vs. reference types)
// let age = 30;
// let oldAge = age;
// age = 31;
// console.log(age, oldAge);

// const me = {
//   name: 'Jonas',
//   age: 30,
// };

// const friend = me;
// friend.age = 27;
// console.log(friend.age, me.age);

//primitives vs. objects in practice
let lastName = 'williams';
let oldLastName = lastName;
lastName = 'Davis';
console.log(oldLastName, lastName);

const chinmay = {
  firstName: 'Chinmay',
  lastName: 'B S',
  age: 27,
  fmaily: [1, 2, 3, 4],
};

const newChinmay = chinmay;
newChinmay.lastName = 'B S C';
console.log(newChinmay.lastName, chinmay.lastName);

//shallow copy
const newObj = Object.assign({}, newChinmay); //object inside object may cause problems
newObj.lastName = 'Derek';
newObj.fmaily.push(4, 5, 6);
console.log(newObj.lastName, newChinmay.lastName, chinmay.lastName);
console.log(newObj.fmaily, newChinmay.fmaily, chinmay.fmaily);
