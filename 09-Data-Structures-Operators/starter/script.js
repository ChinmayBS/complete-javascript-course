'use strict';

// Data needed for a later exercise

//destructuring arrays(swap two variables), pick elements from array easily
// const arr = [2, 3, 4];
// let a = arr[0];
// let b = arr[1];
// let c = arr[2];
// const [d, e, f] = arr; //destructuring arrays syntax
// console.log(a, b, c, d, e, f);
// const [first, second] = restaurant.categories;
// console.log(first, second);
// let [third, , fourth] = restaurant.categories;
// console.log(third, fourth);
// [third, fourth] = [fourth, third];
// console.log(third, fourth);
// console.log(restaurant.order(2, 0));
// //to return 2 values from arrays
// const nested = [2, 4, [5, 6]];
// [a, , [b, c]] = nested; //nesting destructuring
// console.log(a, b, c);
// //default values
// [a = 1, b = 1, c = 1] = [8, 9];
// console.log(a, b, c);

// Data needed for first part of the section
const openingHours = {
  /* [weekdays[2]]:*/ wed: {
    //new syntax
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0, // Open 24 hours
    close: 24,
  },
};
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order(starter, mainIndex) {
    return [this.starterMenu[starter], this.mainMenu[mainIndex]];
  },

  orderPasta: function (in1, in2, in3) {
    console.log(`eat pasta ${in1}, ${in2}, ${in3}`);
  },
  // openingHours: openingHours,
  openingHours, //es6 feature,

  orderDelivery({ time = '20', address = '-', mainIndex = 0, startIndex = 0 }) {
    console.log(time, address, mainIndex, startIndex);
  },
  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient, otherIngredients);
  },
};

restaurant.orderDelivery({
  time: '23:30',
  address: 'abc',
  mainIndex: 2,
  startIndex: 0,
});

//destructuring objects(dealing with third party data) API
// const {
//   name: restName,
//   mainMenu: mainMenu,
//   openingHours: openingHours,
//   operatingHours: hours = 2,
// } = restaurant;
// console.log(restName, openingHours, mainMenu, hours);
// //mutuating variables
// let a = 111,
//   b = 909;
// const nums = { a: 23, b: 7, c: 14 };
// ({ a, b } = nums); //predicts like function
// console.log(a, b);
// //nested objects destructuring
// const {
//   fri: { open: o, close: c },
// } = openingHours;
// console.log(o, c);

// The spread operator works on all iterables(returns iterables with commas)
//spread works on arrays and function arguments
//doesn't work on `` string literal
// const arr = [1, 2, 3, 4, 5];
// const newArr = [1, 2, ...arr];
// console.log(newArr);
// console.log(...newArr);
// const newMenu = [...restaurant.mainMenu, 'Gnocci'];
// console.log(newMenu);
// //copy of array(shallow copy)
// const mainMenuCopy = [...restaurant.mainMenu];
// const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
// console.log(...menu);
// console.log(...'chinmay');
// const letters = [...'chinmay'];

// // const ingridents = [
// //   prompt("Let's make pasta!"),
// //   prompt("Let's make pasta!"),
// //   prompt("Let's make pasta!"),
// // ];
// // console.log(ingridents);
// // restaurant.orderPasta(...ingridents);
// //objects
// const newResturant = { ...restaurant, founder: 'Guiseppe', year: 1990 };
// console.log(newResturant);

//Rest pattern and parameters
//opposite of spread operator
//rest-rest of elements(always must be last ) and it is left side of assignment operator
// const arr = [1, 2, 3, ...[4, 5, 6]]; //right of ssignment so spread
// console.log(arr);
// const [a, b, ...other] = arr; //left side of assignment so its rest pattern
// console.log(a, b, other);
// const [d, , c, ...starters] = [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// ];
// console.log(d, c, starters);

// const { sat, ...weekdays } = restaurant.openingHours;
// console.log(sat, weekdays);

// const sum = function (...ele) {
//   let ans = 0;
//   for (let i = 0; i < ele.length; i++) {
//     ans += ele[i];
//   }
//   return ans;
// };
// console.log(sum(2));
// console.log(sum(2, 3, 4, 5, 6, 1, 3));
// console.log(sum(78, 4, 6, 8, 75));
// const x = [1, 2, 3, 4];
// console.log(sum(...x));
// restaurant.orderPizza('mus');

// //short circuiting(|| and &&)
// //operate on any data type, return any data type
// //short-circuiting(in place of ternary operator)
// console.log(3 || 'Jonas');
// console.log(0 || 'chinmay');
// console.log(true || 0);
// console.log(undefined || null);
// restaurant.numGuets = 1;
// const guests2 = restaurant.numGuets || 10;
// console.log(guests2);

// console.log(0 && 'chinmay');
// console.log(7 && 'Jonas');

// restaurant.orderPizza && restaurant.orderPizza('mush', 'spinach');

//The Nullish coalescing(??)
//nullish values = null and undefined are falsy in nullish coalsing
// restaurant.numGuests = 0;
// const guests = restaurant.numGuests || 10;
// console.log(guests);
// const guestsCorrect = restaurant.numGuests ?? 10;
// console.log(guestsCorrect);

//coding challenge #1
// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//     [
//       'Neuer',
//       'Pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lewandowski',
//     ],
//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze',
//     ],
//   ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
//   printGoals: function (...players) {
//     for (let i = 0; i < players.length; i++) {
//       console.log(`player Name:${players[i]}`);
//     }
//     console.log(`Total goals ${players.length}`);
//   },
// };
// const [players1, players2] = game.players;
// const [gk1, ...fieldPlayers1] = players1;
// const [gk2, ...fieldPlayers2] = players2;
// const allPlayers = [...players1, players2];
// const players1Final = [...players1, 'Thiago', 'Coutinho', 'Peristic'];
// const {
//   odds: { team1, X: draw, team2 },
// } = game;

// game.printGoals('Davis', 'Muller', 'Lewandownski', 'Kimmich');
// game.printGoals(...game.scored);

// team1 < team2 && console.log('Team1 is likely to win');
// team2 < team1 && console.log('Team2 is likey to win');

// const a = console.log('gkrngkt');
// console.log(a);

//for of loop
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// for (let item of menu) {
//   console.log(item);
// }
// for (const [item1, item2] of menu.entries()) {
//   console.log(item1 + 1, item2);
// }

//enahanced object literals

//optional chaining es 2020 syntax
// if (restaurant.openingHours && restaurant.openingHours.mon) {
//   console.log(restaurant.openingHours.mon.open);
// }
// console.log(restaurant.openingHours, restaurant.openingHours.mon);
// console.log(restaurant.openingHours.mon?.open); //optional chaining syntax
// // console.log(restaurant.openingHours.mon.open); //optional chaining syntax
// //error
// console.log(restaurant?.openingHours?.mon);

// const weekdays = ['sun', 'mon', 'tue', 'wed', 'thr', 'fri', 'sat'];

// for (const day of weekdays) {
//   const open = restaurant.openingHours[day]?.open ?? 'closed';

//   console.log(open, day);
// }
// console.log(restaurant.order?.(0, 1) ?? 'no method'); //new syntax

//looping objects:objectkes,values,entries
//Object.keys(),Object.values(),Object.entries()
// for (const day of Object.keys(restaurant)) {
//   console.log(day);
// }
// for (const day of Object.entries(restaurant)) {
//   console.log(day);
// }
// console.log(Object.keys(restaurant));
// console.log(Object.entries(restaurant.openingHours));

//coding challenge #2

// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//     [
//       'Neuer',
//       'Pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lewandowski',
//     ],
//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze',
//     ],
//   ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };
// for (const [index, player] of game.scored.entries()) {
//   console.log(`Goal ${index + 1}: ${player}`);
// }
// let avg = 0;
// let number = 0;
// for (const val of Object.values(game.odds)) {
//   avg += val;
//   number += 1;
// }
// console.log(avg / number);

// for (const [key, val] of Object.entries(game.odds)) {
//   console.log(`Odd of ${game[key] || 'draw'}:${val}`);
// }
// console.log(Object.entries(game.odds));
// console.log(game.scored);
// const scores = {};
// for (const player of game.scored) {
//   console.log(scores[player]);
//   if (!scores[player]) {
//     scores[player] = 1;
//   } else {
//     scores[player] += 1;
//   }
// }

// console.log(scores);
// if (NaN || 1) {
//   console.log('Nan');
// }

//sets(introduced in ES6),size property and has(),add(),delete()
// const nums = [1, 2, 3, 4, 5, 6, 7, 7, 8, 8, 9];
// const numsSet = new Set(nums); //iterables should be passed
// console.log(nums, numsSet);
// console.log(numsSet.has('3'), numsSet.size);
// numsSet.add(12);
// numsSet.delete(1);
// for (const num of numsSet) {
//   console.log(num);
// }
// const arr = [...numsSet];
// console.log(arr);
// numsSet.clear();
// console.log(numsSet);

// Maps:Fundamentals
//in maps key can be of any type,but in objects onlt strings
//Methods in map are set,get,
// const rest = new Map();
// rest.set('Name', 'ClassicoItlaliano');
// rest.set(1, 'Firenze,Italy');
// rest
//   .set(2, 'Lisbon', 'Portugak')
//   .set('Open', 11)
//   .set(true, 'We are open')
//   .set(false, 'We are closed')
//   .set('Close', 23);
// console.log(rest);
// const time = 21;
// console.log(rest.get(time > rest.get('Open') && time < rest.get('Close')));
// console.log(rest.has('Close'));
// console.log(rest.delete(2));
// console.log(rest.size);
// console.log(rest.clear);
// const arr = [1, 2];
// rest.set(arr, 'Test');
// console.log(rest.get(arr));
// rest.set(document.querySelector('h1'), 'Heading');
// console.log(rest);

//Maps:Iteration
// const question = new Map([
//   ['Question', 'What is the best progmmin glang in the world'],
//   [1, 'c'],
//   [2, 'Java'],
//   [3, 'javascript'],
//   ['correct', 3],
//   [true, 'Correct'],
//   [false, 'Try again'],
// ]);
// console.log(question);
// //convert object to map
// //Object.entries(objName);
// console.log(question['Question']);
// for (const [key, val] of question) {
//   if (typeof key == 'number') console.log(key, val);
// }
// const ans = Number(prompt('Your answer'));
// console.log(ans);
// console.log(question.get(question.get('correct') === ans));
// console.log([...question]);

//Summary: Which data strcture to use?
//data may come from
//from the program itself:status message
//from the UI
//from web API

//coding  challenge #3
// const gameEvents = new Map([
//   [17, '⚽ GOAL'],
//   [36, '🔁 Substitution'],
//   [47, '⚽ GOAL'],
//   [61, '🔁 Substitution'],
//   [64, '🔶 Yellow card'],
//   [69, '🔴 Red card'],
//   [70, '🔁 Substitution'],
//   [72, '🔁 Substitution'],
//   [76, '⚽ GOAL'],
//   [80, '⚽ GOAL'],
//   [92, '🔶 Yellow card'],
// ]);
// const events = [...new Set(gameEvents.values())];
// console.log(events);
// gameEvents.delete(64);
// console.log(`An event happended, on averge, every ${90 / gameEvents.size}`);
// console.log(gameEvents);
// for (const [key, val] of gameEvents) {
//   const half = key <= 45 ? 'first' : 'second';
//   console.log(`${half} [HALF] ${key}:${val}`);
// }

//working with strings part-1,2,3
//even though string is primitive methods work for string
//Reason concept called boxing. this converts string into object
//return type also primitive
// const airline = 'TAP Air Portugal';
// const plane = 'A320';
// console.log(plane[0], plane[1], plane[2]);
// console.log('B707'[0]);
// console.log('B707'.length);
// console.log(airline.indexOf('i'));
// console.log(airline.lastIndexOf('a'));
// console.log(airline.indexOf('Air'));
// console.log(airline.indexOf('air'));
// console.log(airline.slice(4, 7));
// console.log(airline.slice(4));

// console.log(airline.slice(0, airline.indexOf(' ')));
// console.log(airline.slice(airline.lastIndexOf(' ') + 1));
// console.log(airline.slice(-2));
// console.log(airline.slice(1, -2));
// console.log(airline.slice(1, -1));

// const checkMiddleSeat = seat => {
//   //B and E are middle seats
//   const alpha = seat.slice(-1);
//   // console.log(alpha);
//   console.log(
//     `${
//       alpha === 'B' || alpha == 'E'
//         ? 'You got middle seat'
//         : 'You got side seat'
//     }`
//   );
// };

// checkMiddleSeat('11B');
// checkMiddleSeat('11C');
// checkMiddleSeat('11E');
// console.log(airline.toUpperCase(), airline.toLowerCase());
// const passenger = 'jOnas'; //Jonas
// const passengerCorrect =
//   passenger.slice(0, 1).toUpperCase() + passenger.slice(1).toLowerCase();
// console.log(passenger, passengerCorrect);
// const email = '   hello@Jonas.Io \n';
// const emailCorrect = 'hello@jonas.io';
// console.log(email.toLowerCase().trim());
// if (email.toLowerCase().trim() === emailCorrect) {
//   console.log('Corrct email! Check In');
// }
// const priceGB = '288,97$';
// const priceIN = priceGB.replace('$', 'ru').replace(',', '.');
// console.log(priceIN);
// const announcement =
//   'All passengers come to boarding door 23. Borading door 23!';
// console.log(announcement.replaceAll('door', 'gate'));
// console.log(announcement.replace(/gate/g, 'door'));

// const plane1 = 'A320neo';
// console.log(
//   plane.startsWith('A'),
//   plane.startsWith('a'),
//   plane.includes('A320'),
//   plane.includes('oeing')
// );
// const checkBaggage = item => {
//   item = item.toLowerCase();
//   if (item.includes('knife') || item.includes('gun')) {
//     return 'you are not allowed';
//   }
//   return 'Welcome to boarding';
// };
// console.log(checkBaggage('I have a laptop, some Food, and a pocket knife'));
// console.log(checkBaggage('Socks and camera'));
// console.log(checkBaggage('gun for protection'));
// //part 3
// console.log('this+is+very+nice+string'.split('+'));
// console.log('Chinmay B S'.split(' '));
// console.log(['Mr', 'Chinmay', 'B S'].join(' ? '));
// const passenger1 = 'jessica ann smith davis';

// const capitalizeName = userName => {
//   const names = userName.split(' ');
//   const ans = [];
//   //console.log(userName);
//   for (const word of names) {
//     ans.push(word[0].toUpperCase() + word.slice(1));
//   }
//   console.log(ans.join(' '));
// };
// capitalizeName(passenger1);
// capitalizeName('jonas schmedthmann');
// const msg = 'Go to gate 23';
// console.log(msg.padStart(25, '+').padEnd(35, '+'));

// const maskCreditCard = number => {
//   const str = number + '';
//   const last = str.slice(-4);
//   // console.log(last.padStart(number.length, '*'), str);
//   console.log(last.padStart(str.length, '*'));
//   // console.log(last.padStart(str.length, '*'), last);
// };
// maskCreditCard(1256878);
// maskCreditCard('1249858786785838');
// maskCreditCard('12475298108324735879204275892790');
// console.log('cold! '.repeat(4));
// const planesInLine = n => {
//   console.log(`There are ${n} planes in line ${'^'.repeat(n)}`);
// };
// planesInLine(4);

//coding challenge #4

// console.log(
//   caseConverer(
//     'underscore_case \n first_name \n some_variable \n calculate_AGE \n delayed_departure'
//   )
// );

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));
const text = document.querySelector('textarea').value;

const caseConverer = () => {
  const inputText = document.querySelector('textarea').value;
  console.log(inputText);
  const lines = inputText.split('\n');
  const trimLines = [];
  const camelCaseLines = [];
  for (const line of lines) {
    trimLines.push(line.trim());
    const pos = line.trim().indexOf('_');
    camelCaseLines.push(
      line.trim().slice(0, pos).toLowerCase() +
        line.trim()[pos + 1].toUpperCase() +
        line
          .trim()
          .slice(pos + 2)
          .toLowerCase()
    );
  }
  // console.log(camelCaseLines);
  for (const [index, word] of camelCaseLines.entries()) {
    console.log(
      `${word.padEnd('departTemperature'.length + 4, ' ')}${'%'.repeat(
        index + 1
      )}`
    );
  }
};
document.querySelector('button').addEventListener('click', caseConverer);

const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const flightsArray = flights.split('+');
console.log(flightsArray);
for (const flight of flightsArray) {
  const arr = flight.slice(1).split(';');
  const ans = `${
    arr[0].startsWith('Delayed') == true ? '@' : ''
  } ${arr[0].replace('_', ' ')} from ${arr[1]
    .slice(0, 3)
    .toUpperCase()} to ${arr[2].slice(0, 3).toUpperCase()} (${arr[3].replace(
    ':',
    'h'
  )})`;
  console.log(ans.padStart(43, ' '));
}
