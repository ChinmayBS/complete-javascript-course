// Remember, we're gonna use strict mode in all scripts now!
'use strict';

// const num = '2';
// const x = 23;

// if (x === 23) console.log(23);

// const calAge = bithYear => 2037 - bithYear;
// console.log(calAge(2002));

// const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];
// //temp amplitude=>difference between highest and lowest temp
// //cal highest and lowest in an array
// //what a sensor error look like
// //ignore errors
// //find max min and subtract min from max

// const calTempAmp = function (temps) {
//   let max = Number.MIN_VALUE,
//     min = Number.MAX_VALUE;
//   for (let i = 1; i < temps.length; i++) {
//     const currTemp = temps[i];
//     if (typeof currTemp !== 'number') continue;
//     if (currTemp > max) max = currTemp;
//     if (currTemp < min) min = currTemp;
//   }
//   console.log(max, min);
//   if (max == Number.MIN_VALUE || min == Number.MAX_VALUE) {
//     return -1; //"All the entries are error"
//   }
//   return max - min;
// };
// const amplitute1 = calTempAmp(['error', 1, 2, 3, 45, 67, 89, 12, 100, 123]);
// const amplitute2 = calTempAmp(temperatures);
// console.log(amplitute1, amplitute2);

// const calTempAmpNew = function (t1, t2) {
//   const temps = t1.concat(t2);
//   console.log(temps);
//   let max = Number.MIN_VALUE,
//     min = Number.MAX_VALUE;
//   for (let i = 1; i < temps.length; i++) {
//     const currTemp = temps[i];
//     if (typeof currTemp !== 'number') continue;
//     // debugger;
//     if (currTemp > max) max = currTemp;
//     if (currTemp < min) min = currTemp;
//   }
//   console.log(max, min);
//   if (max == Number.MIN_VALUE || min == Number.MAX_VALUE) {
//     return -1; //"All the entries are error"
//   }
//   return max - min;
// };

// //problem 2
// //function should now take 2 arrays
// //so we shoud merge 2 arrays
// const amplitudeNew = calTempAmpNew([3, 5, 1], [9, 0, 5]);
// console.log(amplitudeNew);

// //debugging with the console and breakpoints
// const measurementKelvin = function () {
//   const measurement = {
//     type: 'temp',
//     unit: 'celsius',
//     value: Number(prompt('Degree celsius:')),
//   };
//   console.table(measurement);
//   const kelvin = measurement.value + 273;
//   return kelvin;
// };
// console.log(measurementKelvin());

//coding challenge #1
// const printForecast = function (temp) {
//   let ansString = '...';
//   for (let i = 0; i < temp.length; i++) {
//     ansString += `${temp[i]}° in ${i + 1} days`;
//     ansString += '...';
//   }
//   return ansString;
// };
// console.log(printForecast([17, 21, 23]));
// console.log(printForecast([12, 5, -5, 0, 4]));
