'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayMovements = (movements, sort = false) => {
  containerMovements.innerHTML = ''; //similar to .textContent

  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;
  //console.log(movs, movements);
  movs.forEach((ele, id) => {
    const type = ele > 0 ? `deposit` : 'withdrawal';
    const html = `<div class="movements__row">
     <div class="movements__type movements__type--${type}">${id} ${type}</div>
     <div class="movements__value">${ele}€</div>
      </div>`;

    containerMovements.insertAdjacentHTML('afterbegin', html); //beforebegin
  });
};
displayMovements(account1.movements);

const calcDisplayPrintBalance = acc => {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${acc.balance}€`;
};
// calcDisplayPrintBalance(account1.movements);

const calcDisplaySummary = account => {
  const income = account.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${income}€`;

  const out = account.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(out)}€`;

  const interest = account.movements
    .filter(mov => mov > 0)
    .map(dep => (dep * account.interestRate) / 100)
    .filter((int, i, arr) => int >= 1)
    .reduce((acc, curr) => acc + curr, 0);
  labelSumInterest.textContent = `${interest}€`;
};
// calcDisplaySummary(account1.movements);

const user = 'Steven Thomas Williams';
const createUserNames = function (accounts) {
  accounts.forEach(function (account) {
    account.userName = account.owner
      .toLowerCase()
      .split(' ')
      .map(word => word[0])
      .join('');
  });
};
console.log(createUserNames(accounts));

const updateUI = acc => {
  //display movements
  displayMovements(acc.movements);
  //display balance
  calcDisplayPrintBalance(acc);
  //display summary
  calcDisplaySummary(acc);
};

//event listeners
let currentAccount;
btnLogin.addEventListener('click', function (event) {
  event.preventDefault(); //prevent form from submitting
  currentAccount = accounts.find(
    acc => acc.userName === inputLoginUsername.value
  );
  console.log(currentAccount);
  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    //display UI and mesage
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 1;
    //clear input fiels
    inputLoginPin.value = inputLoginUsername.value = ' ';
    //clear cursor focus on pin
    inputLoginPin.blur();
    updateUI(currentAccount);
  }
  // console.log(
  //   currentAccount,
  //   inputLoginUsername.textContent,
  //   inputLoginUsername.value
  // );
});

btnTransfer.addEventListener('click', event => {
  event.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    acc => acc.userName === inputTransferTo.value
  );
  inputTransferTo.value = inputTransferAmount.value = '';
  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.userName !== currentAccount.userName
  ) {
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);
    updateUI(currentAccount);
  }
});

btnClose.addEventListener('click', event => {
  event.preventDefault();
  // console.log(event);
  if (
    currentAccount.userName === inputCloseUsername.value &&
    currentAccount.pin === Number(inputClosePin.value)
  ) {
    const id = accounts.findIndex(
      acc => acc.userName === currentAccount.userName
    );
    // console.log(id);

    accounts.splice(id, 1);
    containerApp.style.opacity = 0;
  }
  inputClosePin.value = inputCloseUsername.value = '';
});

btnLoan.addEventListener('click', event => {
  event.preventDefault();
  const amount = Number(inputLoanAmount.value);
  if (amount > 0 && currentAccount.movements.some(amt => amt >= amount * 0.1)) {
    //add movement
    currentAccount.movements.push(amount);
    updateUI(currentAccount);
  }
  inputLoanAmount.value = '';
});

let sorted = false;
btnSort.addEventListener('click', event => {
  event.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});
// console.log(containerMovements.innerHTML);

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

/////////////////////////////////////////////////

//simple array methods//
// //slice
// let arr = ['a', 'b', 'c', 'd', 'e'];
// console.log(arr.slice(1));
// console.log(arr.slice(-2, -1));
// console.log(arr.slice(-6));
// console.log(arr.slice());
// console.log([...arr]);
// //splice
// arr.splice(1, 2);
// console.log(arr);
// arr.splice(-1);
// console.log(arr);
// console.log(arr.splice(2));
// console.log(arr);
// const arr2 = ['f', 'g', 'h', 'i', 'j'];
// //reverse
// console.log(arr2.reverse());
// console.log(arr2);
// //concat
// const letters = arr.concat(arr2);
// console.log(letters);
// console.log([...arr, ...arr2]);
// //join
// console.log(letters.join('-'));

// //looping arrays forEach loop//
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// for (const [index, movement] of movements.entries())
//   movement > 0
//     ? console.log(`Movement ${index + 1} You deposited ${movement}`)
//     : console.log(`Movement ${index + 1} You withdrawn ${Math.abs(movement)}`);
// //no break or continue in forEach loop
// movements.forEach((movement, index) =>
//   movement > 0
//     ? console.log(`Movement ${index + 1} You deposited ${movement}`)
//     : console.log(`Movement ${index + 1} You withdrawn ${Math.abs(movement)}`)
// );

// //for Each method in maps and set//
// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);
// currencies.forEach((val, key, map) => {
//   console.log(`${key}:${val} `);
// });
// const currenciesUnique = new Set(['USD', 'RUP', 'USD', 'GBP', 'EUR', 'EUR']);
// currenciesUnique.forEach((val, _, map) => {
//   console.log(`${val} `);
// });

//coding challenge #1//
// const julia1 = [3, 5, 2, 12, 7],
//   kate1 = [4, 1, 15, 8, 3];
// const julia2 = [9, 16, 6, 8, 3],
//   kate2 = [10, 5, 6, 1, 4];
// const checkDogs = (dogsJulia, dogsKate) => {
//   const [catFirst, ...dogsJuliaCorrect] = dogsJulia;
//   dogsJuliaCorrect.pop();
//   dogsJuliaCorrect.pop();
//   const allDogs = [...dogsJuliaCorrect, ...dogsKate];
//   allDogs.forEach((dog, index) => {
//     const dogType = dog >= 3 ? 'adult' : 'puppy';
//     console.log(`Dog number ${index + 1} is an ${dogType}`);
//   });
// };
// checkDogs(julia1, kate1);
// checkDogs(julia2, kate2);

//data transformations: map,filter, and reduce
//these are most commonly used data transformation methods

//The map method
// const eurToUsd = 1.1;
// const movementsUsd = account1.movements.map(ele => ele * eurToUsd);
// console.log(account1.movements, movementsUsd);
// const movementsUsd1 = [];
// for (const mov of account1.movements) {
//   movementsUsd1.push(mov * eurToUsd);
// }
// console.log(movementsUsd1);
// const stringOutput = account1.movements.map((movement, index, arr) =>
//   movement > 0
//     ? `Movement ${index + 1} You deposited ${movement}`
//     : `Movement ${index + 1} You withdrawn ${Math.abs(movement)}`
// );
// console.log(stringOutput);

//the filter method
// console.log(account1.movements);
// const deposits = account1.movements.filter(mov => mov > 0);
// console.log(deposits);
// const withdrawals = account1.movements.filter(mov => mov < 0);
// console.log(withdrawals);

//the reduce method
//accumuator is like snow ball
// const balance = account1.movements.reduce((acc, curr, i, arr) => {
//   console.log(`Iteration: ${i} and value: ${acc} and currentValue ${curr}`);
//   return acc + curr;
// }, 0);
// console.log(balance);
// let balance2 = 0;
// for (const mov of account1.movements) {
//   balance2 += mov;
// }
// console.log(balance2);
// const maxAmount = account1.movements.reduce(
//   (acc, curr) => (acc > curr ? acc : curr),
//   Number.MIN_SAFE_INTEGER
// );
// console.log(maxAmount, account1.movements);

//coding challenge #2 #3
// const julia1 = [5, 2, 4, 1, 15, 8, 3],
//   kate1 = [4, 1, 15, 8, 3];
// const julia2 = [16, 6, 10, 5, 6, 1, 4],
//   kate2 = [10, 5, 6, 1, 4];
// const calcAverageHumanAge = function (ages) {
//   const average = ages
//     .map(age => (age <= 2 ? age * 2 : 16 + age * 4))
//     .filter(age => age >= 18)
//     .reduce((acc, curr, index, arr) => acc + curr / arr.length, 0);
//   return average;
// };
// console.log(calcAverageHumanAge(julia1));
// console.log(calcAverageHumanAge(julia2));

//The magic of chaining methods
//pipeline
// const euroToUsd = 1.1;
// const totalDepositsUSD = account1.movements
//   .filter(mov => mov > 0)
//   .map(mov => mov * euroToUsd)
//   .reduce((acc, curr) => acc + curr, 0);
// console.log(totalDepositsUSD);

//The find method
// const firstWithdrawal = account1.movements.find(mov => mov < 0);
// console.log(firstWithdrawal);
// console.log(accounts);
// const account = accounts.find(acc => acc.owner === 'Jessica Davis');
// console.log(account);

//The findIndex Method

//some and every
// console.log(account1.movements);
// console.log(account1.movements.includes(-130)); //only equality
// console.log(account1.movements.some(val => val > 2000)); //any condition
// console.log(account4.movements.every(val => val > 0));

//flat and flatMap methodds
// const arr = [[1, [1, 2, 3], 2, 3], [4, 5, 6], 7, 8];
// console.log(arr.flat(2));
// const accountMovements = accounts.map(acc => acc.movements);
// console.log(accountMovements);
// console.log(accountMovements.flat(1).reduce((acc, val) => acc + val, 0));
// // console.log();
// //flat and flatMap
// //flat+map=flat map method
// console.log(
//   accounts.flatMap(acc => acc.movements).reduce((acc, val) => acc + val, 0)
// );

//sorting in js
// const owners = ['Jonas', 'Zach', 'Adam', 'Martha'];
// console.log(owners.sort());
// console.log(owners);
// const movements = account1.movements;
//console.log(movements, movements.sort());
//return<0 a,b(keep order)
//return>0 b,a(switch order)
// console.log(...movements.sort((a, b) => -(a - b)));

//More ways of filling arrays
// console.log([1, 2, 3, 4, 5]);
// console.log(new Array(1, 2, 3, 4, 5, 6));
// const x = new Array(7);
// console.log(x);
// console.log(x.map(ele => 5));
// // x.fill(1);
// x.fill(1, 3);
// x.fill(2);
// console.log(x);
// //Array.from()
// const y = Array.from({ length: 7 }, (_, index) => index + 1);
// console.log(y);
// const dieRolls = Array.from(
//   { length: 100 },
//   () => Math.floor(Math.random() * 6) + 1
// );
// console.log(dieRolls);
// const movementsUI = Array.from(
//   document.querySelectorAll('.movements__value'),
//   ele => Number(ele.textContent.replace('€', ''))
// );
// // console.log(movementsUI.map(ele => Number(ele.textContent.replace('€', ''))));
// console.log(movementsUI);

//Array Methods Practice
// const bankDepositSum = accounts
//   .flatMap(acc => acc.movements)
//   .filter(mov => mov > 0)
//   .reduce((sum, cur) => sum + cur);
// console.log(bankDepositSum);
// const numDeposits1000 = accounts
//   .flatMap(acc => acc.movements)
//   .reduce((acc, cur) => (cur >= 1000 ? ++acc : acc), 0);
// console.log(numDeposits1000);
// console.log(accounts.flatMap(acc => acc.movements));
// const sums = accounts
//   .flatMap(acc => acc.movements)
//   .reduce(
//     (sum, cur) => {
//       // cur > 0 ? (sum.deposits += cur) : (sum.withdrawal += Math.abs(cur));
//       sum[cur > 0 ? 'deposits' : 'withdrawal'] += cur;
//       return sum;
//     },
//     { deposits: 0, withdrawal: 0 }
//   );
// //this is a nice title=>This Is a Nice Title
// const convertTtitleCase = title => {
//   const capitalize = str => str[0].toUpperCase() + str.slice(1);
//   const exceptions = ['a', 'an', 'the', 'but', 'or', 'on', 'in', 'with', 'and'];
//   const titleCase = title
//     .toLowerCase()
//     .split(' ')
//     .map(word => (exceptions.includes(word) ? word : capitalize(word)))
//     .join(' ');
//   // return titleCase;
//   return capitalize(titleCase);
// };
// console.log(convertTtitleCase('this is a nice title'));
// console.log(convertTtitleCase('this is a LONG title but nOt Too LoNg'));
// console.log(convertTtitleCase('and here is another title with an EXAMPLE'));

//coding challenge #4
const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];

dogs.forEach(
  val => (val.recommendedFood = Math.trunc(val.weight ** 0.75 * 28))
);
console.log(dogs);

const sarahsDog = dogs.find(dog => dog.owners.includes('Sarah'));
console.log(sarahsDog);

const eating =
  sarahsDog.curFood > sarahsDog.recommendedFood ? 'Eating Over' : 'Eating Less';
console.log(sarahsDog, eating);
console.log(eating);

const owners = dogs.reduce(
  (acc, cur) => {
    // console.log(acc);
    cur.curFood > cur.recommendedFood
      ? acc.eatMoreOwners.push(...cur.owners)
      : acc.eatLittleOwners.push(...cur.owners);
    return acc;
  },
  { eatLittleOwners: [], eatMoreOwners: [] }
);

console.log(`Dogs eating less: ${owners.eatLittleOwners}`);
console.log(`Dogs eating more: ${owners.eatMoreOwners}`);

const dogOkInRange = dogs.some(
  dog =>
    dog.curFood > dog.recommendedFood * 0.9 &&
    dog.curFood < dog.recommendedFood * 1.1
);
console.log(dogOkInRange);
const dogsOkInRangeArray = dogs.filter(
  dog =>
    dog.curFood > dog.recommendedFood * 0.9 &&
    dog.curFood < dog.recommendedFood * 1.1
);
console.log(dogsOkInRangeArray);

console.log(dogs.slice().sort((a, b) => a.recommendedFood - b.recommendedFood));
