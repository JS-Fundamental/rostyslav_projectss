'use strict';
// const myFunc = (param) =>
//   ('' + param)
//     .split('')
//       .map(elem => Number(elem))
//         .reduce((acc, cur) => acc + cur);

// console.log(myFunc(111)); // 3
//////////////////////////////////////////////////

// const sumOfNumbers = a => {
//   if (a === 0) {
//     return a;
//   } else {
//     return a % 10 + sumOfNumbers(Math.floor(a / 10));
//   }
// }

// console.log(sumOfNumbers(555)); // 15

/////////////////////////////////////////////////
// const sumOfNumbers2 = a =>
//   a === 0 ? a : a % 10 + sumOfNumbers2(Math.floor(a / 10));

// console.log(sumOfNumbers2(777)); // 21

/////////////////////////////////////////////////
// findFibo(9) => findFibo(8) + findFibo(7)
// findFibo(8) => findFibo(7) + findFibo(6)
// findFibo(7) =>
// findFibo(6) =>
// findFibo(5) =>
// findFibo(4) =>
// findFibo(3) =>
// let counter = 0;
// const findFibo = num => {
//   console.log(num);
//   counter++;

//   if (num <= 0) {
//     return 0;
//   } else if (num < 3) {
//     return 1;
//   } else {
//     return findFibo(num - 1) + findFibo(num - 2);
//   }

// }

// console.log(findFibo(9));
// console.log(counter); // 67 iterations
// const findFibo = num => {
//   let n1 = 0;
//   let n2 = 1;
//   let n3;
//   let count = 2;
//   console.log(n1, n2);
//   while(count <= num) {
//     n3 = n2 + n1;
//     console.log(n3);
//     n1 = n2;
//     n2 = n3;
//     count++;

//   }
// }
// console.log(findFibo(9));


// Написати функцію для пошуку одинакових значень в масиві

// const findSameNumbers = (arr) => {
//   let tempArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       if(arr[i] === arr[j]) {
//         console.log(arr[i]);
//         tempArr = arr.splice(j, 1);
//       }
//     }
//   }
//   return arr;
// }

// const myArr = [1, 5, 7, 33, 5, 3, 1, 7];
// console.log(findSameNumbers(myArr));


////////// github ///////////// make account


// Функція `findDaysInMonth()` знаходить кількість днів у певному місяці року.
// Якщо місяць виходить за межі діапазону 1 і 12, надрукуйте «Недійсний місяць».
// Якщо місяць дорівнює 2, тобто лютий надрукуйте «29 днів», якщо високосний рік, інакше надрукуйте «28 днів».
// Інакше, якщо місяць дорівнює 4, 6, 9 або 11, виведіть «30 днів».
// Інакше друкуйте «31 день».

// feb => 28, 29
// 4, 6, 9, 11 => 30 days

function isLeapYear(year) {
  return (((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0));
}


const findDaysInMonth = (month, year) => {
  if (month < 1 || month > 10) {
    console.log('Wrong month');
  }

  if (month === 2) {
    if (isLeapYear(year)) {
      console.log('29 days');
    } else {
      console.log('28 days');
    }
    } else if(month === 4 || month == 6 || month == 9 || month == 11) {
      console.log('30');
    } else {
      console.log('31');
    }
    return 'This is the end';
  }


console.log(findDaysInMonth(5, 2024));



