/*
5) створити тест, будь-які 5 питань, якщо відповідь на питання правильне, то закрашувати фон в зелений колір, якщо ні, то в червоний і відкривати знизу правильну відповідь та пояснення. Питання відображати по 1 штуку.
*/
const bodyTag = document.querySelector('body');
const questionDiv = document.querySelector('.question');
const inputTag = document.querySelector('input');
const answerTag = document.querySelector('.rightAnswer')
const buttonTag = document.querySelector('.btn');
let counter = 0;

buttonTag.addEventListener('click', () => {
  inputTag.value = '';
  counter++;
  removeClass();
  feedQuestion();
  inputTag.focus();
});

inputTag.addEventListener('change', (event) => {
  addClass(event);
});

// Function to add classes
const addClass = (event) => {
  if (event.target.value == rightAnswers[counter]) {
    bodyTag.classList.add('greenBackground');
  } else {
    bodyTag.classList.add('redBackground');
    answerTag.innerHTML = rightAnswers[counter];
  }
};

// Function to remove classes
const removeClass = () => {
  if (bodyTag.classList.contains('greenBackground')) {
    bodyTag.classList.remove('greenBackground');
  } else if (bodyTag.classList.contains('redBackground')) {
    bodyTag.classList.remove('redBackground');
  }
}

// Function to handle questions
const feedQuestion = () => {
  answerTag.innerHTML = '';
  questionDiv.innerHTML = '';
  document.body.classList.remove('redBackground');
  questionDiv.append(questions[counter]);
  
  if (counter >= questions.length) {
    clearDom();  
    document.body.innerText = 'End of Quiz';
  }
};

// Function to clear DOM when the quiz is over
const clearDom = () => {
  questionDiv.remove();
  inputTag.remove();
  buttonTag.remove();
};

// Start the app 
feedQuestion();
