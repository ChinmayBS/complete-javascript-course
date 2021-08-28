'use strict';
//reserves some words like private ,interface and also we cannot initilise variable without defining them
console.log("section 3");
// let hasDriversLicense = false;
// const passTest = true;
// if (passTest) hasDriverLicense = true;
// if (hasDriversLicense) console.log("I can drive");

// function logger() {
//     console.log("First js function");
// }

// logger(); //calling,running or invoking function
// logger();


// function fruitProcessor(apples, oranges) {
//     // console.log(apples, oranges);
//     const juice = `Juice with ${apples} apples and ${oranges} oranges. `;
//     return juice;
// }

// console.log(fruitProcessor(5, 0));
// console.log(fruitProcessor(2, 4));

// //function declaration
// console.log(calAge1(2002));

// function calAge1(birthYear) {
//     const age = 2037 - birthYear;
//     return age;
// }

// //function expression
// const calAge2 = function(birthYear) {
//     return 2037 - birthYear;
// }
// console.log(calAge2(1991));

//Arrow functions
// const calAge3 = birthYear => 2037 - birthYear;
// console.log(calAge3(2002));

// const yearsUntilRetirement = (firstName, birthYear) => {
//     const age = 2037 - birthYear;
//     const retirement = 65 - age;
//     return `${firstName} retirs in ${retirement} years`;
// }
// console.log(yearsUntilRetirement('chinmay', 2002));

//functions calling other functions
// function cutFruitPieces(fruit) {
//     return fruit * 4;
// }

// function fruitProcessor(apples, oranges) {
//     // console.log(apples, oranges);
//     const applePieces = cutFruitPieces(apples);
//     const orangePieces = cutFruitPieces(oranges);
//     const juice = `Juice with ${apples} apples cut into ${applePieces} pieces  and ${oranges} oranges cut into ${orangePieces} pieces. `;
//     return juice;
// }
// console.log(fruitProcessor(2, 3));

//reviewing functions
// const calAge = function(birthYear) {
//     return 2037 - birthYear;
// }
// const yearsUntilRetirement = function(firstName, birthYear) {
//     const age = calAge(birthYear);
//     const retirement = 65 - age;
//     if (retirement > 0) {
//         return retirement;
//     }
//     return -1;
//     // return `${firstName} retirs in ${retirement} years`;
// }
// console.log(yearsUntilRetirement('Chinmay', 2002));


//coding challenge #1
// const calcAverage = (score1, score2, score3) => ((score1 + score2 + score3) / 3);

// const checkWinner = function(avgDolphins, avgKolas) {
//     if (avgDolphins > avgKolas && avgDolphins >= 2 * avgKolas) {
//         console.log(`Dolphin won (${avgDolphins} vs. ${avgKolas})`);
//     } else if (avgDolphins < avgKolas && 2 * avgDolphins <= avgKolas) {
//         console.log(`Kolas won (${avgKolas} vs. ${avgDolphins})`);
//     } else {
//         console.log(`Both team lost Dolphins vs. Kolas ${avgDolphins+" "+avgKolas}`);
//     }
// }
// const dolphinsAvg1 = calcAverage(44, 23, 71);
// const kolasAvg1 = calcAverage(65, 54, 49);

// const dolphinsAvg2 = calcAverage(85, 54, 41);
// const kolasAvg2 = calcAverage(23, 34, 27);

// checkWinner(dolphinsAvg1, kolasAvg1);
// checkWinner(dolphinsAvg2, kolasAvg2);


//Introduction to arrays
// const friends = ['Michael', 'Steven', 'Peter', 'Morten'];
// const years = new Array(199, 2000, 2001, 2002, 2003, 2004);
// console.log(friends[0]);
// console.log(friends[2]);
// friends[2] = 'Jay';
// console.log(friends.length);
// const allValues = ['Chinmay', 'B S', 2037 - 2002, friends];
// console.log(allValues);

// const calAge = function(birthYear) {
//     return 2037 - birthYear;
// };
// const birthYears = [1990, 1992, 1990, 1900, 2012, 1002, 1019, 2020];
// const ages = birthYears.map(calAge);
// console.log(birthYears, ages);


//Basic array operations(methods)
// birthYears.push(1999);
// birthYears.unshift(2002);
// birthYears.shift();
// console.log(birthYears);
// console.log(birthYears.indexOf(2012));
// console.log(birthYears.includes(2012));


//Coding challenge #2
// const bills = [125, 555, 44];
// const calcTip = bill => {
//     if (bill >= 50 && bill <= 300) return 0.15 * bill;
//     return 0.2 * bill;
// };
// const calcAmt = bill => {
//     if (bill >= 50 && bill <= 300) return 0.15 * bill + bill;
//     return 0.2 * bill + bill;
// };

// const tips = bills.map(calcTip);
// const totalAmt = bills.map(calcAmt);
// console.log(bills, tips, totalAmt);


//Introduction to Objects(most fundamental concept)
//object literal syntax. Order doesn't matter
// const chinmay = {
//     'firstName': "chinmay",
//     lastName: "B S",
//     job: 'jobless',
//     age: 18,
//     friends: ['abc', 'def', 'ghi'],
// };


//Dot vs. Bracket notation
// console.log(chinmay);
// console.log(chinmay.lastName, chinmay.age, chinmay.job);
// console.log(chinmay['firstName']); //any expression evaluates
// const nameKey = 'Name';
// console.log(chinmay['first' + nameKey]);
// const key = prompt("What info you need firstName,lastName,age,job");
// if (!chinmay[key]) {
//     alert("WTF!!!");
// } else {
//     alert(chinmay[key]);
// }
// chinmay.location = "India;"
// console.log(chinmay);
// const challenge = `${chinmay.firstName} has ${chinmay.friends.length} friends and his best friend is ${chinmay.friends[0]}`;
// console.log(challenge);


//Object methods
// const chinmay = {
//     'firstName': "chinmay",
//     lastName: "B S",
//     job: 'jobless',
//     age: 18,
//     birthYear: 2002,
//     friends: ['abc', 'def', 'ghi'],
//     hasDriversLiecense: true,
//     calAge: function() { //we need function declaration    not the function expression
//         console.log(this);
//         this.age = 2037 - this.birthYear;
//         return this.age;
//     },
//     getSummary: function() {
//         return `${this.firstName } is ${this.age} years old and he has ${this.hasDriversLiecense==true?'a':'no'} driving licesnce`;
//     },
// };

// // console.log(chinmay.calAge(1991));
// // console.log(chinmay['calAge'](1991));
// console.log(chinmay.calAge());
// console.log(chinmay.getSummary());


//coding challenge #3
// const mark = {
//     fullName: 'Mark Miller',
//     mass: 78,
//     height: 1.69,
//     calcBMI: function() {
//         this.bmi = this.mass / (this.height * this.height);
//         return this.bmi;
//     }
// };

// const john = {
//     fullName: 'John Smith',
//     mass: 92,
//     height: 1.95,
//     calcBMI: function() {
//         this.bmi = this.mass / (this.height * this.height);
//         return this.bmi;
//     }
// };

// if (mark.calcBMI() > john.calcBMI()) {
//     console.log(`${mark.fullName}'s BMI (${mark.calcBMI()}) is higher than ${john.fullName}'s (${john.calcBMI()})`)
// } else {
//     console.log(`${john.fullName}'s BMI (${john.calcBMIB()}) is higher than ${mark.fullName}'s (${mark.calcBMI()})`)
// }


//Iteration: The for Loop
// for (let rep = 1; rep <= 10; rep++) {
//     console.log(`Lifting weights repetation ${rep}`);
// }

//Looping arrays,breaking and continuing
// const chinmay = [
//     'chinmay',
//     'b s',
//     18,
//     'jobless',
//     ['abc', 'cde', 'efg'],
//     true,
// ];
// const types = [];
// for (let i = 0; i < chinmay.length; i++) {
//     console.log(chinmay[i], typeof chinmay[i]);
//     types[i] = typeof(chinmay[i]);
// }
// console.log(types);
// const years = [1990, 1992, 1994, 1998, 2002, 2006, 2013, 2018];
// const ages = [];
// for (let i = 0; i < years.length; i++) {
//     ages.push(2037 - years[i]);
// }
// console.log(years, ages);
//continue and break


//looping backwards and loops in loops
// const chinmay = [
//     'chinmay',
//     'b s',
//     18,
//     'jobless',
//     ['abc', 'cde', 'efg'],
//     true,
// ];
// for (let i = chinmay.length - 1; i >= 0; i--) {
//     console.log(i, chinmay[i]);
// }

// for (let exercise = 1; exercise <= 3; exercise++) {
//     console.log(`---------starting exercise ${exercise}`);
//     for (let rep = 1; rep < 6; rep++) {
//         console.log(`Lifiting weight repetation ${rep}`);
//     }
// }

//The While loop
// for (let rep = 1; rep <= 10; rep++) {
//     console.log(`Lifting weights repetation ${rep}`);
// }

// let rep = 1;
// while (rep <= 10) {
//     console.log(`While: Lifting weights repetation ${rep}`);
//     rep += 1;
// }

// let dice = Math.trunc(Math.random() * 6) + 1;
// while (dice !== 6) {
//     console.log(dice);
//     dice = Math.trunc(Math.random() * 6) + 1;
// }


//coding challenge #4
const calcTip = bill => ((bill >= 50 && bill <= 300) ? 0.15 * bill : 0.2 * bill);
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const finalBills = [];
for (let i = 0; i < bills.length; i++) {
    const tip = calcTip(bills[i]);
    tips.push(tip);
    finalBills.push(tip + bills[i]);
}
console.log(bills, tips, finalBills);

const calcAverage = function(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    // console.log(sum, arr.length);
    return (sum / arr.length);
}
console.log(calcAverage(bills), calcAverage(tips), calcAverage(finalBills));