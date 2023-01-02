/* 
6) Реалізувати гру в міліонера, є 5 питань і 3 життя, якщо людина 3 рази не правильно відповіла то вона програла, якщо менше 3-х помилок, то людина виграла.
*/
let questionCounter = 0;
let correctAnswers = 0;
const totalQuestions = questions.length;


// Function to render DOM first time
const renderDom = () => {
  document.body.prepend(divCard);
  divMoney.append(`$${money[questionCounter]}`);
  divCard.append(divMoney);
  divCard.append(divQuestion);
  divQuestion.append(questions[questionCounter]);
  divCard.append(divAnswers);
  
  divAnswers.append(ulTag);
  ulTag.append(createList(questionCounter));
  divCard.append(divCounter);
}

// Clear money, question, answers
const clearData = () => {
  divCard.innerHTML = '';
  divMoney.innerHTML = '';
  divQuestion.innerHTML = '';
  ulTag.innerHTML = '';
}

// Feed the next question
// const nextQuestion = () => {
//   clearData();
//   renderDom();
// };

// function for the next question
const nextQuestion = (e) => {
  correctAnswers++;
  divCounter.innerHTML = '';
  divCounter.append(`${correctAnswers}/${totalQuestions}`);
  e.target.classList.add('correct-answer');
  setTimeout(() => e.target.classList.remove('correct-answer'), 1000);
  setTimeout(() => {
    clearData();
    renderDom();
  }, 1000);
  questionCounter++;
}


// Question - answer logic
const quesAnsHandler = () => {
  const items = [...document.querySelectorAll('li')];
  items.forEach(item => {
    item.addEventListener('click', (e) => {
      if (e.target.lastChild.data == correctAns[questionCounter]) {
        nextQuestion(e);
      } else if (e.target.lastChild.data !== correctAns[questionCounter]) {
        divCounter.innerHTML = '';
        divCounter.append(`${correctAnswers}/${totalQuestions}`);
        e.target.classList.add('wrong-answer');
        // nextQuestion();
        // e.target.classList.remove('wrong-answer');
      }
    })
  })
}

// Start the game
renderDom();
quesAnsHandler();


