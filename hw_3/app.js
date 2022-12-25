'use strict';
/////////////////// 1 //////////////////////
// const printNumbers = () => {
//   for (let i = 1; i <= 100; i++) {
//     console.log(i)
//   }
//   return 'End of task 1';
// }

// console.log(printNumbers());


/////////////////// 2 //////////////////////
// const printEven = () => {
//   for (let i = 1; i <= 100; i++) {
//     if (i % 2 === 0) {
//       console.log(i)
//     }
//   }
//   return 'End of task 2';
// }

// console.log(printEven());


/////////////////// 3 //////////////////////
// const printOdd = () => {
//   for (let i = 1; i <= 100; i++) {
//     if (i % 2 !== 0) {
//       console.log(i)
//     }
//   }
//   return 'End of task 3';
// }

// console.log(printOdd());


/////////////////// 4 //////////////////////
// const numbersFromArray = (arr) => {
//   arr.forEach(elem => console.log(elem));
//   return 'End of task 4';
// }

// // Create an array with numbers from 1 to 100
// let myArray = (function createArray(param) {
//   let result = [];
//   for (let i = 1; i <= param; i++) {
//     result.push(i);
//   }
//   return result;

// })(100);

// console.log(numbersFromArray(myArray));


/////////////////// 5 //////////////////////
//@@@@@@@ Varaint 1 @@@@@@@//
// const deleteAll = arr => {
//   arr.length = 0;

//   return arr;
// }

// const numArr = [20, 1, 7, 4, 33];
// console.log(deleteAll(numArr));
// console.log(numArr);

//@@@@@@@ Varaint 2 @@@@@@@//
// const deleteAll = arr => {
//   arr.splice(0);

//   return arr;
// }

// const numArr = [20, 1, 7, 4, 33];
// console.log(deleteAll(numArr));
// console.log(numArr);

//@@@@@@@ Varaint 3 @@@@@@@//
// const deleteAll = arr => {
//     while (arr.length) {
//       arr.pop();
//     }

//   return arr;
// }

// const numArr = [20, 1, 7, 4, 33];
// console.log(deleteAll(numArr));
// console.log(numArr);


/////////////////// 6 //////////////////////
// const calcPower = (base, power) => {
//   for(let i = base; i < power; i++) {
//     base *= base;
//   }

//   return base;
// }

// console.log(calcPower(2, 4));


///////////////// Additional /////////////////////
///////////// Default parameters ////////////////

//@@@@@@@ Varaint 1 @@@@@@@//
// const multiply = (param1, param2 = 10) => 
//   param1 * param2;

// console.log(multiply(3));
// console.log(multiply(3, 100));


//@@@@@@@ Varaint 2 @@@@@@@//
// const multiply = (param1, param2) => {
//   param2 = param2 || 10;
//   return param1 * param2;
// }

// console.log(multiply(3));
// console.log(multiply(3, 100));


