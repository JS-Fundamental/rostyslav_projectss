'use strict';
let age = prompt('Enter your age.', '');
alert(
  (function response (age) {
    if (age < 18) {
      return 'You are too young';
    } else if(age >= 18 && age <= 60) {
      return 'You are eligible for the training.';
    } else {
      return 'You are too old for our app.'
    }
  })(age)
);
