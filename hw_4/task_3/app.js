/* 3) Створити гру для перевірки знання таблиці множення. 
Користувач має 3 спроби пройти тест (який складається із 5 прикладів).
По завершенню виводити найкращий результат.
*/
const bodyTag = document.querySelector('body');
const questionDiv = document.querySelector('.question');
const inputTag = document.querySelector('input');
const buttonTag = document.querySelector('.btn');
let counter = 0;
let correctAnswersCounter = 0;
let quizSetsCounter = 1;

buttonTag.addEventListener('click', () => {
  inputTag.focus();
  inputTag.value = '';
  counter++;
  feedQuestion();
});

inputTag.addEventListener('change', (event) => {
  addClass(event);
});

// Function to count correct answers
const addClass = (event) => {
  if (event.target.value == correctAnswers[counter]) {
    correctAnswersCounter++;
  }
  return correctAnswersCounter; 
};

// Create button for sets
const buttonForSets = document.createElement('button');
buttonForSets.classList.add('btn-sets');
buttonForSets.append('Next set');

// Function to handle questions
const feedQuestion = () => {
  questionDiv.innerHTML = '';
  questionDiv.append(questions[counter]);

  if (counter >= questions.length) {
    clearDom();
    document.body.innerText = 
      `Your score for set ${quizSetsCounter} is ${correctAnswersCounter}.`;
      let bestScore = 0;
      if (correctAnswersCounter > bestScore) {
        bestScore = correctAnswersCounter;
      }
      counter = 0;
      correctAnswersCounter = 0;
      quizSetsCounter++;
      bodyTag.append(buttonForSets);
      
      if (quizSetsCounter > 3) {
        bodyTag.innerHTML = '';
        const divBest = document.createElement('div');
        divBest.classList.add('best-result');
        divBest.append(`Your best score is: ${bestScore}`);
        bodyTag.append(divBest);
      }
  };
};

buttonForSets.addEventListener('click', (e) => {
  bodyTag.innerHTML = '';
  bodyTag.append(questionDiv);
  bodyTag.append(inputTag);
  bodyTag.append(buttonTag);
  feedQuestion();
});

// Function to clear DOM when the quiz is over
const clearDom = () => {
  questionDiv.remove();
  inputTag.remove();
  buttonTag.remove();
};

// Start the app 
feedQuestion();
