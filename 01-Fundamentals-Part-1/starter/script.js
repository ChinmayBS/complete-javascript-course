//practise 

// let js = 'amazing';
// if (js == 'amazing') {
//     alert("Its fun!");
//     console.log(50 + 78 * 67);
// }
//console.log('Chinmay');
//console.log(45);
// let firstName = "Chinmay";
// console.log(firstName);
// console.log(firstName);
// console.log(firstName);
// console.log(firstName);
// let PI = 3.14;

//datatypes
// console.log(true);
// let javaScriptIsFun = null;
// javaScriptIsFun = true
// console.log(javaScriptIsFun);
// console.log(typeof(true));
// console.log(typeof(123));
// console.log(typeof('manjaro'));
// javaScriptIsFun = 'Yes!'
// console.log(typeof(javaScriptIsFun));
// let year;
// console.log(typeof year);
// console.log(typeof null); //bug in js

//var,const and let
// let age = 30;
// age += 1;
// const birthYear = 2000;
// // birthYear = 2000;
// const job = "programmer";
// var newJob;
// console.log(newJob);

//basic operators
// const currYear = 2037;
// const ageChinmay = currYear - 2002;
// const ageJonas = currYear - 1991;
// console.log(ageChinmay, ageJonas);
// console.log(ageChinmay * 2, ageChinmay / 2);
// console.log(2 ** 3); //2^3=8
// const firstName = 'Chinmay';
// const LastName = 'B S';
// console.log(firstName + ' ' + LastName);
// let x = 10 - 20;
// x += 10; //x=x+10
// x *= 4;
// x++;
// x--;
// --x;
// console.log(x);
// console.log(ageChinmay < ageJonas); //>,<,>=,<=,==

//operator precedence paranthesis higher precedence
// const now = 2037
// const ageJonas = now - 1990;
// const ageChinmay = now - 2002;
// console.log(now - 1991 > now - 2018)
// let x, y;
// x = y = 25 - 15 - 10;

//strings and template literals
// const firstName = 'Chinmay',
//     job = 'jobless',
//     birthYear = 2002,
//     year = 2037;
// const chinmay = "I'm " + firstName + ', a' + (year - birthYear) + '!';
// const chinmayNew = `I'm ${firstName} my age is ${year-birthYear} and ${job} by profession ` //back ticks
// console.log(chinmay);
// console.log(chinmayNew);
// console.log("ehfrh ewfwfh \n ewjifh wefjiwr \n iwejfihwei");
// console.log(`ehfrh ewfwfh
// ewjifh wefjiwr
//  iwejfihwei`);

//taking decisions: if /else statemts
// const age = 15;
// const isOldEnough = age >= 18;
// if (isOldEnough) {
//     console.log("you can start driving 🚗");
// } else {
//     console.log(`Sorry! you should still wait for ${18-age} years`);
// }

// const birthYear = 1991;
// let century;
// if (birthYear <= 2000) {
//     century = 20;
// } else {
//     century = 21;
// }
// console.log(century);

//type conversion and coercion
// const inputYear = '1991';
// console.log(parseInt(inputYear) + 18);
// console.log(Number(inputYear) + 18);
// console.log(Number("chinmay")); //NaN is invalid number and is of type Number
// console.log(String(23));
// console.log('I am ' + String(19) + ' Years old');
// console.log('I am ' + 19 + ' Years old'); //type coercion
// console.log('23' - '10');
// console.log('23' * '6');
// console.log('100' > '20');
// let n = '1' + 1;
// n -= 1;
// console.log(n);
// console.log('10' - '4' - '3' - 2 + 5);

//truthy and falsy values
//0 ,'',undefined,null,NaN,false
//everything other than above are true
// console.log(Boolean(0));
// console.log(Boolean("chinmay"), Boolean({}), Boolean(undefined));
// const money = 100;
// if (money) {
//     console.log("Don't spend too much");
// } else {
//     console.log("You should get a job");
// }

// let height;
// if (height) {
//     console.log("Yay! height is defined");
// } else {
//     console.log("Height is undefined");
// }


//Equality Operators: ==(loose equality) vs ===(strict equality) use strict equality to avoid errors
// const age = 18;
// if (age == 18) {
//     console.log("You just became an adult!");
// }
// const favourite = prompt("What's your favorite number");
// console.log(favourite);


//boolean logic AND ,OR , NOT
// let age = 16;
// if (!(age > 20) && age < 30) {
//     console.log("and operator");
// }


//logical operators
// const hasDriverLicense = true; //A
// const hasGoodVision = false;
// console.log(hasDriverLicense || hasGoodVision);

//The switch statement
// const day = 'monday';
// switch (day) {
//     case 'monday':
//         console.log('Plan course structure');
//         console.log("Go to coding meetup");
//         break;
//     case 'tuesday':
//         console.log('This is tuesday ');
//         break;
//     case 'wednesday':
//     case 'thursday':
//         console.log('Write code examples');
//         break;
//     case 'friday':
//         console.log('record videos');
//         break;
//     case 'saturday':
//     case 'sunday':
//         console.log("Weekend");
//         break;
//     default:
//         console.log("not a valid day");
//         break;
// }


//statements and expressions


//The conditional(Ternary) operator
// const age = 18;
// console.log(`${age < 18 ? "You are kid" : "You are an adult"}`);


//coding challenge #1, #2
// let BMIMark, BMIJohn, markMass, johnMass, markHeight, johnHeight;

// markMass = 78, markHeight = 1.69;
// johnMass = 95, johnHeight = 1.95;


// BMIMark = markMass / (markHeight ** 2);
// BMIJohn = johnMass / (johnHeight ** 2);
// console.log(BMIJohn, BMIMark);
//let markHigherBMI = BMIMark > BMIJohn;
//console.log(markHigherBMI);
// if (BMIMark > BMIJohn) {
//     console.log(`Mark's BMI(${BMIMark}) is higher than John's (${BMIJohn})`);
// } else {
//     console.log(`John's BMI(${BMIJohn}) is higher than Mark's (${BMIMark})`);
// }



// markMass = 95, markHeight = 1.88;
// johnMass = 85, johnHeight = 1.76;


// BMIMark = markMass / (markHeight ** 2);
// BMIJohn = johnMass / (johnHeight ** 2);
// console.log(BMIJohn, BMIMark);
// markHigherBMI = BMIMark > BMIJohn;
// console.log(markHigherBMI);

// if (BMIMark > BMIJohn) {
//     console.log(`Mark's BMI(${BMIMark}) is higher than John's (${BMIJohn})`);
// } else {
//     console.log(`John's BMI(${BMIJohn}) is higher than Mark's (${BMIMark})`);
// }

//assignments
// let county = "India",
//     continent = "Asia",
//     population = "1400";
// console.log(county, continent, population);


//datatype
// let isIsland, language;
// isIsland = false;
// console.log(isIsland, language)

//coding challenge #3

// const scoreD = (96 + 108 + 89) / 3,
//     scoreK = (88 + 91 + 100) / 3;

// if (scoreD > scoreK) {
//     console.log('D won the trophy')
// } else if (scoreK === scoreD) {
//     console.log("both won");
// } else {
//     console.log("K won the match");
// }

// const scoreD = (97 + 112 + 101) / 3,
//     scoreK = (109 + 95 + 123) / 3;

// if (scoreD > scoreK && scoreD >= 100) {
//     console.log('D won the trophy')
// } else if (scoreK === scoreD && scoreK >= 100 && scoreD >= 100) {
//     console.log("both won");
// } else if (scoreD < scoreK && scoreK >= 100) {
//     console.log("K won the match");
// } else {
//     console.log("Both lost the trophy");
// }

//coding challenge #4
let value = 430;
const tip = (value >= 50 && value <= 300) ? 0.15 : 0.20;
console.log(`Bill is ${value+value*tip} and tip is ${tip*value}`);