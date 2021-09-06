'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////
// Data

// DIFFERENT DATA! Contains movement dates, currency and locale

const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2020-05-27T17:01:17.194Z',
    '2020-07-11T23:36:17.929Z',
    '2020-07-12T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-09-01T14:43:26.374Z',
    '2021-09-04T18:49:59.371Z',
    '2021-09-05T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const accounts = [account1, account2];

/////////////////////////////////////////////////
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

/////////////////////////////////////////////////
// Functions
const formatMovementDate = date => {
  const calcDaysPassed = (date1, date2) =>
    Math.round(Math.abs((date2 - date1) / (24 * 60 * 60 * 1000)));
  const daysPassed = calcDaysPassed(new Date(), date);
  //console.log(daysPassed, Number(date), new Date());
  if (daysPassed == 0) return 'Today';
  if (daysPassed == 1) return 'YesterDay';
  if (daysPassed <= 7) return `${daysPassed} days ago`;

  // const day = `${date.getDate()}`.padStart(2, 0);
  // const month = `${date.getMonth()}`.padStart(2, 0);
  // const year = date.getFullYear();
  // const hour = `${date.getHours()}`.padStart(2, 0);
  // const min = `${date.getMinutes()}`.padStart(2, 0);
  // const displayDate = `${day}/${month}/${year}`;

  const options = {
    hour: 'numeric',
    minute: 'numeric',
    day: 'numeric',
    month: 'numeric',
    year: 'numeric',
    // weekday: 'long',
  };
  // const locale = navigator.language;
  // console.log(locale);
  const displayDate = new Intl.DateTimeFormat(
    currentAccount.locale,
    options
  ).format(date);
  console.log(displayDate);
  return displayDate;
};

const formatCur = (value, locale, currency) =>
  new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency,
  }).format(value);

const startLogoutTimer = () => {
  ///set time to 5 minutes
  let time = 300;
  //call the timer every second
  const tick = () => {
    const min = String(Math.floor(time / 60)).padStart(2, 0);
    const sec = String(time % 60).padStart(2, 0);
    //IN a call print remaing time
    //when time=0 logout user
    labelTimer.textContent = `${min}:${sec}`;

    if (time == 0) {
      clearInterval(timer);
      labelWelcome.textContent = 'Log in to get started';
      containerApp.style.opacity = 0;
    }
    time--;
  };
  tick();
  const timer = setInterval(tick, 1000);
  return timer;
};
const displayMovements = function (acc, sort = false) {
  containerMovements.innerHTML = '';
  // console.log(acc);
  const movements = acc.movements;
  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const date = new Date(acc.movementsDates[i]);
    const displayDate = formatMovementDate(date);
    // console.log(displayDate);
    const formattedMov = formatCur(mov, acc.locale, acc.currency);
    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
    <div class="movements__date">${displayDate}</div>
        <div class="movements__value">${formattedMov}</div>
      </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = formatCur(acc.balance, acc.locale, acc.currency);
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = formatCur(incomes, acc.locale, acc.currency);

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = formatCur(out, acc.locale, acc.currency);

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      // console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = formatCur(interest, acc.locale, acc.currency);
};

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUsernames(accounts);

const updateUI = function (acc) {
  // Display movements
  displayMovements(acc);

  // Display balance
  calcDisplayBalance(acc);

  // Display summary
  calcDisplaySummary(acc);
};

///////////////////////////////////////
// Event handlers
let currentAccount, timer;

btnLogin.addEventListener('click', function (e) {
  // Prevent form from submitting
  e.preventDefault();
  if (timer) clearInterval(timer);
  timer = startLogoutTimer();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  // console.log(currentAccount);

  if (currentAccount?.pin === +inputLoginPin.value) {
    //current date
    // const now = new Date();
    // const day = `${now.getDate()}`.padStart(2, 0);
    // const month = `${now.getMonth()}`.padStart(2, 0);
    // const year = now.getFullYear();
    // const hour = `${now.getHours()}`.padStart(2, 0);
    // const min = `${now.getMinutes()}`.padStart(2, 0);
    // labelDate.textContent = `${day}/${month}/${year}, ${hour}:${min}`;
    const options = {
      hour: 'numeric',
      minute: 'numeric',
      day: 'numeric',
      month: 'numeric',
      year: 'numeric',
      // weekday: 'long',
    };
    // const locale = navigator.language;
    labelDate.textContent = Intl.DateTimeFormat(
      currentAccount.locale,
      options
    ).format(new Date());

    // Display UI and message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;

    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    // Update UI
    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Math.floor(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = '';

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    // Doing the transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    //transfer date
    currentAccount.movementsDates.push(new Date().toISOString());
    receiverAcc.movementsDates.push(new Date().toISOString());

    // Update UI
    updateUI(currentAccount);

    //reset the timer
    clearInterval(timer);
    timer = startLogoutTimer();
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Math.floor(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    setTimeout(() => {
      // Add movement
      currentAccount.movements.push(amount);

      //transfer date
      currentAccount.movementsDates.push(new Date().toISOString());

      // Update UI
      updateUI(currentAccount);

      //reset the timer
      clearInterval(timer);
      timer = startLogoutTimer();
    }, 2500);
  }
  inputLoanAmount.value = '';
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    +inputClosePin.value === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    console.log(index);
    // .indexOf(23)

    // Delete account
    accounts.splice(index, 1);

    // Hide UI
    containerApp.style.opacity = 0;
  }

  inputCloseUsername.value = inputClosePin.value = '';
});

let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount, !sorted);
  sorted = !sorted;
});

// login account1 initially
// day/month/year
// currentAccount = account1;
// updateUI(currentAccount);
// containerApp.style.opacity = 1;
// const now = new Date();
// console.log(now);

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

//Numbers and time
//internationalization and timer

//converting and checking numbers
//all numbers are floating point in js
// console.log(23 == 23.0);
// // (64)  base 2 format
// console.log(0.1 + 0.2);
// console.log(0.1 + 0.2 == 0.3);
// console.log(Number('23'));
// console.log(+'23');
// // console.log('1' + '23');
// //Parsing
// console.log(Number.parseInt('20px', 10));
// console.log(Number.parseFloat('  2.5rem ', 10));
// console.log(parseFloat(' 23 '));
// console.log(Number.isNaN(+'20px'));
// console.log(Number.isNaN(1 / 0));
// console.log(Number.isFinite(1 / 0));
// console.log(Number.isFinite(+'20')); //mostly used method
// console.log(Number.isInteger(20));

// //Math and rounding
// console.log(Math.sqrt(200));
// console.log(200 ** (1 / 2));
// console.log(200 ** (1 / 3));
// console.log(Math.max(1, 2, 3, 4, 5, '67')); //does coercision but not parsing
// console.log(Math.min(1, 89, -0, 23, -4));
// console.log(Math.PI);
// console.log(Math.random());
// console.log(Math.floor(Math.random() * 6) + 1);
// const randomInt = (min, max) =>
//   Math.trunc(Math.random() * (max - min + 1)) + min;
// console.log(randomInt(10, 11));
// //rounding intergers with type coercion
// console.log(Math.round(23.3));
// console.log(Math.round(23.5));
// console.log(Math.floor(23.3));
// console.log(Math.floor(23.5));
// console.log(Math.ceil(23.3));
// console.log(Math.ceil(23.5));
// console.log((2.7).toFixed(3)); //returns string
// console.log((2.345).toFixed(2)); //boxing on primitive

// //The remainder operator
// console.log(5 % 2);
// console.log(8 % 3);
// console.log(8 / 3);

// const isEven = n => n % 2 == 0;
// labelBalance.addEventListener('click', event => {
//   event.preventDefault();
//   //console.log('clciked label');
//   console.log(document.querySelectorAll('.movements__row').length);
//   [...document.querySelectorAll('.movements__row')].forEach((row, i) => {
//     if (i % 2 == 0) {
//       row.style.backgroundColor = 'red';
//     }
//   });
// });

//Working with big int(ES 2020)
//53+decimal+sign
// console.log(2 ** 53 - 1);
// console.log(11232456743928103049543n); //big int primitive type
// console.log(BigInt(12345654323453333));
// console.log(100n + 100n);
// console.log(999999999999999999n * 99999999999999999n);
// console.log(20n > 9);
// console.log(20 === 20n);
// console.log(10n + '23');
// console.log(Math.sqrt(100n));

//creating dates
// const now = new Date();
// console.log(now);
// console.log(new Date('Mon Sep 6 2021 02:47:67'));
// console.log(new Date('December 25 2015'));
// console.log(new Date(account1.movementsDates[0]));
// console.log(new Date(2031, 10, 33, 15, 23, 5));
// console.log(new Date(0));
// console.log(new Date(3 * 24 * 60 * 60 * 1000));
//All methods return numbers
// console.log(now.getFullYear());
// console.log(now.getFullYear()); getyear don't use
// console.log(now.getDay());
// console.log(now.toISOString());
// console.log(now.getTime());
// console.log(Date.now());

//Adding dates to 'Bankist App'

//operation with dates
// const future = new Date(2037, 10, 19, 15, 23);
// console.log(+future);

// console.log(days1);
// console.log(days1 / (1000 * 60 * 60 * 24));

//Internationaliing dates(Intl)
// const now = new Date();
// const options = {
//   hour: 'numeric',
//   minute: 'numeric',
//   day: 'numeric',
//   month: 'long',
//   year: 'numeric',
//   weekday: 'long',
// };
// const locale = navigator.language;
// console.log(locale);
// labelDate.textContent = new Intl.DateTimeFormat('en-US').format(now);
// console.log(new Intl.DateTimeFormat(locale, options).format(now));

//Internationalisation of numbers(Intl)
// const num = 3884764.23;
// const options = {
//   style: 'currency',
//   // unit: 'celsius',
//   currency: 'EUR',
//   useGrouping: false,
// };
// console.log(new Intl.NumberFormat('en-IN', options).format(num));
// console.log(new Intl.NumberFormat('en-IN', options).format(num));
// console.log(new Intl.NumberFormat('de-DE', options).format(num));
// console.log(new Intl.NumberFormat(navigator.language, options).format(num));

//Timers : setTimeOut and setInterval
// const ing = ['Cheese', 'Chicken'];
// const pizzaTimer = setTimeout(
//   (ing1, ing2) => {
//     console.log(`Here is ur pizza: with ingredients ${ing1} and ${ing2}`);
//   },
//   3000,
//   ...ing
// );
// console.log('after set time out');
// if (ing.includes('veg')) clearInterval(pizzaTimer);
// setInterval(() => {
//   const now = new Date();
//   console.log(now);
// }, 1000);

//Implementing a countdown timer
