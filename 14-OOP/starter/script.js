'use strict';

//
//
//Constructor functions and the new operator
// const Person = function (firstName, birthYear) {
//   //Instance properties
//   //all objects will have these properties
//   this.firstName = firstName;
//   this.birthYear = birthYear;
// };
// const chinmay = new Person('chinmay', 2002);
// console.log(chinmay);
// //when we call function  using new operator
// //1.A new empty {} is created
// //2.function is called and this={}
// //3.{} is linked to prototype
// //4.function automaically retruns {}
// const jessica = new Person('jessica', 2001);
// console.log(jessica);
// const jonas = new Person('jonas', 1992);
// console.log(jonas);
// console.log(jonas instanceof Person);

//
//
//Prototypes
// console.log(Person.prototype);
// Person.prototype.calcAge = function () {
//   //method inside constructor function
//   //not a good practice (performance issues)
//   console.log(2037 - this.birthYear); //use prototypes and prototypic inheritance
// };
// console.log(Person.prototype, chinmay);
// jonas.calcAge();
// jessica.calcAge();
// console.log(jonas.__proto__ === Person.prototype); //OOps in js
// console.log(Person.prototype.isPrototypeOf(chinmay));
// Person.prototype.species = 'Homo Sapiens';
// const f = chinmay.__proto__.calcAge;
// console.log(f);
// console.log(jonas.hasOwnProperty('firstName'), jonas.hasOwnProperty('species'));

//
//
//Prototypal inheritance and the protoype chain

//
//
//Prototypal inheritance on built-in objects
// console.log(jonas.__proto__.__proto__ === Object.prototype);
// console.log(jonas.__proto__.__proto__.__proto__);
// console.dir(Person.prototype.constructor);
// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 9, 9, 0]; //new Array===[]
// console.log(arr.__proto__ === Array.prototype);
// console.log(arr.__proto__.__proto__);

// Array.prototype.unique = function () {
//   return [...new Set(this)];
// };
// console.log(arr.unique());
// const h1 = document.querySelector('h1');
// console.dir(h1);

//
//
//Coding challenge #1
const Car = function (make, speed) {
  this.speed = speed;
  this.make = make;
};
Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(this.speed);
};
Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(this.speed);
};

const bmw = new Car('BMW', 120);
const mercedes = new Car('Mercedes', 95);
bmw.accelerate();
bmw.brake();

mercedes.brake();
mercedes.accelerate();

//
//
//ES6 Classes

//class expression
// const PersonCl = class {};

//class declaration
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  //added to protoype property of the class
  calcAge() {
    console.log(2037 - this.birthYear);
  }

  get age() {
    return 2037 - this.birthYear;
  }

  set fullName(name) {
    console.log(name);
    if (name.includes(' ')) {
      this._fullName = name;
    } else {
      alert('Invalid name');
    }
  }

  get fullName() {
    return this._fullName;
  }

  static hey() {
    console.log('Hey There');
  }
}

PersonCl.prototype.greet = function () {
  console.log(`Hey ${this.firstName}`);
};

// const medila = new PersonCl('medila jonas', 2002);
// console.log(medila);
// medila.calcAge(medila);
// console.log(medila.__proto__ === PersonCl.prototype);
// medila.greet();

//1.classes are not hoisted
//2.classes are first-class citizens(pass as arguments)
//3.Classes are executed in strict mode

//
//
//setters and getters
// const account = {
//   owner: 'jonas',
//   movements: [200, 300, 500, 980],
//   get latest() {
//     return this.movements.slice(-1).pop();
//   },
//   set latest(mov) {
//     this.movements.push(mov);
//   },
// };
// console.log(account, account.latest);
// console.log((account.latest = 50));
// console.log(medila.age);
// const walter = new PersonCl('Walter White', 1995);

//
//
//static methods
// console.log(Array.from(document.querySelectorAll('h1'))); //related to Array only
// //works only on Array constructor
// Number.parseFloat(12);
// Person.hey = function () {
//   // console.log(this);
//   console.log('Hey there');
// };
//chinmay.hey() doesn't work

//
//
//Object.create(prototypic inheritance)
// const PersonProto = {
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   },
//   init(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   },
// };

// const stevan = Object.create(PersonProto);
// stevan.name = 'Stevan';
// stevan.birthYear = 2002;
// stevan.calcAge();
// const sarah = Object.create(PersonProto);
// sarah.init('sarah', 1998);

//
//
//coding challenge #2
// class Car {
//   constructor(make, speed) {
//     this.speed = speed;
//     this.make = make;
//   }
//   accelerate() {
//     this.speed += 10;
//     console.log(`${this.make} is gaoing at a speed of ${this.speed} km/hr`);
//   }
//   brake() {
//     this.speed -= 5;
//     console.log(`${this.make} is gaoing at a speed of ${this.speed} km/hr`);
//   }
//   get speedUS() {
//     return this.speed / 1.6;
//   }
//   set speedUS(speed) {
//     this.speedUs = speed * 1.6;
//   }
// }

// const bmw = new Car('BMW', 120);
// const mercedes = new Car('Mercedes', 95);
// const ford = new Car('Ford', 120);
// bmw.accelerate();
// bmw.brake();

// mercedes.brake();
// mercedes.accelerate();

// console.log(ford.speedUS);
// ford.accelerate();
// ford.accelerate();
// ford.accelerate();
// ford.speedUS = 50;
// console.log(ford);

//
//
//inheritance between classes:Constructor functions
// const Person = function (firstName, birthYear) {
//   //Instance properties
//   //all objects will have these properties
//   this.firstName = firstName;
//   this.birthYear = birthYear;
// };
// Person.prototype.calcAge = function () {
//   console.log(-this.birthYear + 2037);
// };
// const Student = function (firstName, birthYear, course) {
//   // console.log(this);
//   Person.call(this, firstName, birthYear);
//   this.course = course;
// };

// Student.prototype = Object.create(Person.prototype);
// Student.prototype.introduce = function () {
//   console.log(`${this.firstName} ${this.birthYear} ${this.course}`);
// };

// const mike = new Student('Mike', 2020, 'Computer Science');
// mike.introduce();
// mike.calcAge();
// // Student.prototype.constructor = Student;
// console.dir(Student.prototype.constructor);

//
//
//coding challenge #3
// const EV = function (make, speed, charge) {
//   Car.call(this, make, speed);
//   this.charge = charge;
// };

// EV.prototype = Object.create(Car.prototype);
// EV.prototype.chargeBattery = function (chargeTo) {
//   this.charge = chargeTo;
// };
// EV.prototype.accelerate = function () {
//   this.speed += 20;
//   this.charge -= 1;
//   console.log(
//     `${this.make} is gsoing at a speed of ${this.speed}, with a charge of ${this.charge}`
//   );
// };

// const tesla = new EV('Tesla', 120, 23);
// tesla.accelerate();
// tesla.chargeBattery();
// tesla.brake();

//
//
//inhritance using ES6 classes
// class StudentCl extends PersonCl {
//   constructor(fullName, birthYear, course) {
//     //Always needs to happen first
//     super(fullName, birthYear);
//     this.course = course;
//   }
//   introduce() {
//     console.log(
//       `${this.make} is gsoing at a speed of ${this.speed}, with a charge of ${this.charge}`
//     );
//   }
// }
// const chinmayCl = new StudentCl('Chinmay B S', 2012, 'COmputerScience');

//
//
//Inheitance between classes Object.create
// const PersonProto = {
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   },
//   init(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   },
// };

// const stevan = Object.create(PersonProto);
// const StudentProto = Object.create(PersonProto);

// StudentProto.init = function (firstName, birthYear, course) {
//   PersonProto.init.call(firstName, birthYear);
//   this.birthYear = birthYear;
// };
// const jay = Object.create(StudentProto);

//
//
//another class example

class Account {
  //public fields(instances)
  locale = navigator.language;
  //private fields
  #movemets = [];
  #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.#pin = pin;
    //protected property
    this._movemets = [];
    this.locale = navigator.language;
    console.log(' Thanks for opening account');
  }

  //private fields

  deposit(val) {
    this.#movemets.push(val);
    return this;
  }
  withdraw(val) {
    this.deposit(-val);
    return this;
  }
  #approveLoan(val) {
    return true;
  }
  requestLoan(val) {
    if (this.#approveLoan(val)) {
      this.deposit(val);
      console.log('Loan Approved');
    }
    return this;
  }
  getMovements() {
    return this._movemets;
  }
}

const acc1 = new Account('Jonas', 'EUR', 1111);
acc1.deposit(100);
acc1.withdraw(1244);

//
//
//encapsulation:Protected properties and methods
//class fields(at stage -03)  not a part of js officially
//public and private fields
//public and private fields
//(static private and public are also availbale)

// acc1.#movemets.push(10);
// acc1.#approveLoan(val);

//
//
//Chaining
acc1.deposit(300).deposit(500).withdraw(35).requestLoan(2500).withdraw(4000);

//
//
//ES6 Class Summary

//
//
//coding challenge #4

class CarCl {
  constructor(make, speed) {
    this.speed = speed;
    this.make = make;
  }
  accelerate() {
    this.speed += 10;
    console.log(`${this.make} is gaoing at a speed of ${this.speed} km/hr`);
    return this;
  }
  brake() {
    this.speed -= 5;
    console.log(`${this.make} is gaoing at a speed of ${this.speed} km/hr`);
    return this;
  }
  get speedUS() {
    return this.speed / 1.6;
  }
  set speedUS(speed) {
    this.speedUs = speed * 1.6;
  }
}

class EVCl extends CarCl {
  #charge;
  constructor(make, speed, charge) {
    super(make, speed);
    this.#charge = charge;
    console.log(make, speed, this.#charge, this);
  }
  chargeBattery(chargeTo) {
    this.#charge = chargeTo;
    return this;
  }
  accelerate() {
    this.speed += 20;
    this.#charge -= 1;
    console.log(
      `${this.make} is gsoing at a speed of ${this.speed}, with a charge of ${this.charge}`
    );
    return this;
  }
}

// bmw = new EVCl('BMW', 120, 25);
// mercedes = new EVCl('Mercedes', 95, 80);
const ford = new EVCl('ford', 120, 78);

ford.accelerate().accelerate().brake().chargeBattery(45);
console.log(ford.speedUS);
