'use strict';

//default parameters
// const bookings = [];
// const createBooking = function (
//   flightNum,
//   numPassgengers = 2,
//   price = 199 * numPassgengers
// ) {
//   //   numPassgengers = numPassgengers ?? 1;
//   //   price = price || 199;
//   const booking = {
//     flightNum,
//     numPassgengers,
//     price,
//   };
//   console.log(booking);
//   console.log(bookings.push(booking));
// };
// createBooking('LH123');
// createBooking('LH123', undefined, undefined);

//passing arguments: value vs reference
//no passing by reference in javascript(passing a reference )
// const flight = 'LH234';
// const chinmay = {
//   name: 'Chinmay B S',
//   passport: 2345314551,
// };
// const checkIn = (flightNum, passenger) => {
//   flightNum = 'LH999';
//   passenger.name = 'Mr. ' + passenger.name;
//   if (passenger.passport === 2345314551) {
//     alert('Check IN');
//   } else {
//     alert('Wrong Password');
//   }
// };
// console.log(typeof checkIn);
// checkIn(flight, chinmay);
// console.log(flight, chinmay);
// const newPassport = function (person) {
//   person.passport = Math.trunc(Math.random() * 10000000000000);
// };
// newPassport(chinmay);
// checkIn(flight, chinmay);

//first-class and higher-order functions
//first class functions(as normal values)
//functions are also objects(bit crazy)
//values,value of object
//higher order functions(accept or returns a function)

//function accepting callback functions(higher order function)
//callbacks functions are widely used in js
// const oneWord = str => {
//   return str.replaceAll(' ', '').toLowerCase();
// };
// const upperFirstWord = str => {
//   const [first, ...others] = str.split(' ');
//   return [first.toUpperCase(), ...others].join(' ');
// };
// const tranformer = function (str, fn) {
//   console.log(`Function Name ${fn.name}`);
//   console.log(`Original sstring: ${str} Tranformation: ${fn(str)}`);
// };
// tranformer('JavaScript is the best', upperFirstWord);
// tranformer('JavaScript is the best', oneWord);
// const high5 = () => console.log('Hi!!!!');
// document.body.addEventListener('click', high5);
// const arr = [1, 2, 3, 4, 5, 6];
// arr.forEach(high5);

//functions returning functions
//functional programming(function paradigm)
// const greet = greeting => name => console.log(`${greeting} ${name}`);
// const greeterHey = greet('Hey');
// greeterHey('Chinmay');
// greeterHey('Jonas');
// greet('Hello')('Chinmay');

//The call(to change this pointer explicitly) and apply methods
//call is new method and used frequenlt and apply is rarely used
// const lufthansa = {
//   airline: 'Lufthansa',
//   iataCode: 'LH',
//   bookings: [],
//   book(flightNum, name) {
//     console.log(
//       `${name} booked a seat on ${this.airline} flight ${this.iataCode} ${flightNum}`
//     );
//     this.bookings.push({ flight: `${this.iataCode} ${flightNum},name` });
//   },
// };

// lufthansa.book(239, 'Jonas schmedthmann');
// lufthansa.book(635, 'John Smith');
// const eurowings = {
//   sirline: 'Eurowings',
//   iataCode: 'EW',
//   bookings: [],
// };
// const book = lufthansa.book;
// book.call(eurowings, 23, 'Sarah Williams'); //changing this varibale
// book.call(lufthansa, 239, 'Mary cooper');
// const swiss = {
//   airline: 'Swiss Air Lines',
//   iataCode: 'LX',
//   bookings: [],
// };
// book.call(swiss, 583, 'Mary Cooper');
// const flightData = [583, 'George Cooper'];
// book.apply(swiss, flightData);
// book.call(swiss, ...flightData);

//The bind method powerful method
//part of arguments are set
//very important metod in event handler
// const bookEW = book.bind(eurowings);
// const bookLH = book.bind(lufthansa);
// bookEW(23, 'Stevan Willams');
// console.log(eurowings);
// bookLH(234, 'Steven');
// const bookEW23 = book.bind(eurowings, 24312);
// bookEW23('chinmay');
// ///with event listeners
// lufthansa.planes = 300;
// lufthansa.buyPlane = function () {
//   this.planes++;
//   console.log(this);
//   console.log(this.planes);
// };
// document
//   .querySelector('.buy')
//   .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));
// //partial application
// const addTax = (rate, value) => value + value * rate;
// console.log(addTax(0.1, 200));
// const addVAT = addTax.bind(undefined, 0.23);
// console.log(addVAT(2000));
// const addVAT1 = rate => value => value + value * rate;
// const f = addVAT1(0.23);
// console.log(f(2000));

//coding challenge #1
// const poll = {
//   question: 'What is your favourite programming language?',
//   options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
//   // This generates [0, 0, 0, 0]. More in the next section!
//   answers: new Array(4).fill(0),
//   registerNewAnswer: function () {
//     let promptMsg = `${this.question}\n`;
//     promptMsg = promptMsg + this.options.join('\n') + `\n(Write option number)`;
//     const answer = Number(prompt(promptMsg));
//     //console.log(answer);
//     if (answer !== NaN && answer >= 0 && answer <= 4) {
//       this.answers[answer] += 1;
//     }
//     this.displayResults();
//   },
//   displayResults(type = 'array') {
//     if (type === 'array') {
//       console.log(this.answers);
//     } else {
//       console.log(`${this.answers.join(',')}`);
//     }
//   },
// };
// //poll.registerNewAnswer();
// document
//   .querySelector('.poll')
//   .addEventListener('click', poll.registerNewAnswer.bind(poll));
// //
// var arr1 = [5, 2, 3];
// var arr2 = [1, 5, 3, 9, 6, 1];
// poll.displayResults.call({ answers: [5, 2, 3] }, 'string');

//Immediately Invoked function expressins(IIFE)
//only one time function is executed
//data encapulated in IIFE(hide variables) using scope
//invented by developers
//this can be achived using blocks{} and const,var
// const runOnce = () => {
//   console.log('This will never run again');
// };
// runOnce();
// //imdetately invoked function expression
// (function () {
//   console.log('This will never run again');
// })();
// (() => {
//   console.log('This will never run again');
// })();

//closures (mis understood concept in js)
//closures happens in certain situations
//function remembers all the variables in its birth place
//A function has access to the variable env(VE) of the execution context in which it was created
// const secureBooking = function () {
//   let passengerCount = 0;
//   return function () {
//     // let passengerCount = 0;
//     passengerCount++;
//     console.log(`${passengerCount} passengers`);
//   };
// };
// const booker = secureBooking();
// booker();
// booker();
// booker();
// booker();
// booker();
// console.dir(booker);  //new syntax

//more  closure examples
// let f;
// const g = function () {
//   const a = 23;
//   f = function () {
//     console.log(a * 2);
//   };
// };
// const h = function () {
//   const b = 777;
//   f = function () {
//     console.log(b * 2);
//   };
// };
// g();
// f();
// console.dir(f);
// //reassing f function
// h();
// f();
// console.dir(f);
// //eg-2
// const boardPassengers = function (n, wait) {
//   const perGroup = n / 3;
//   setTimeout(function () {
//     console.log(`we are now boadrding all ${n} passengers`);
//     console.log(`There are 3 group,each with ${perGroup} passengers`);
//   }, wait * 1000);
//   console.log(`Will satrt boarding in ${wait} second`);
// };
// const perGroup = 1000; //closures will have high priority than gloabl variables
// boardPassengers(180, 3);

//coding challenge #3
// (function () {
//   const header = document.querySelector('h1');
//   header.style.color = 'red';
//   document.querySelector('body').addEventListener('click', () => {
//     header.style.color = '#12fe32';
//   });
// })();
