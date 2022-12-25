'use strict';
const generateRandom = () => 
  Math.ceil(Math.random() * 10);

let winningNumber = (generateRandom());
// console.log(winningNumber);
let arrOfInputs = [];

function conditions() {
  for (let i = 0; i < 5; i++) {
    let inputNumber = +prompt('Enter a number from 1 to 10', '');
    arrOfInputs.push(inputNumber);
   
    if (inputNumber === winningNumber) {
      alert("You've guessed it right.");
      break;
    } else if (inputNumber > winningNumber) {
      alert('Your number is too big.');
    } else {
      alert('Your number is too small.')
    } 

    if (i == 4) {
      alert("You've lost the game.");
    }
  }
}

conditions();

alert(`Here is your sorted array: 
      [${arrOfInputs.sort((a, b) => a - b)}]
      `);
