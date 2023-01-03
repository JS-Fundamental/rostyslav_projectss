/* 
6) Реалізувати гру в міліонера, є 5 питань і 3 життя, якщо людина 3 рази не правильно відповіла то вона програла, якщо менше 3-х помилок, то людина виграла.
*/
let questionCounter = 0;
let correctAnswers = 0;
let wrongAnswers = 0;
const totalQuestions = questions.length;

// Function to render DOM
const renderDom = () => {
  if (questionCounter > 4) {
    return finalScreen();
  }

  document.body.prepend(divCard);
  divMoney.append(`$${money[questionCounter]}`);
  divCard.append(divMoney);
  divCard.append(divQuestion);
  divQuestion.append(questions[questionCounter]);
  divCard.append(divAnswers);
  
  divAnswers.append(ulTag);


  ulTag.append(createList(questionCounter));
  divCard.append(divCounter);
   
  // Adding event listeners + correct/wrong answers logic
  const items = [...document.querySelectorAll('li')];
  items.forEach(item => {
    item.addEventListener('click', (e) => {
      if (e.target.lastChild.data == correctAns[questionCounter]) {
        e.target.classList.add('correct-answer');
        setTimeout(() => nextQuestion(e), 1000);
        correctAnswers++;
      } else {
        wrongAnswers++;
        e.target.classList.add('wrong-answer');
        setTimeout(() => nextQuestion(e), 1000);
      }
    })
  })
}

// Function for the next question
const nextQuestion = (e) => {
   
  clearData();
  divCounter.innerHTML = '';
  divCounter.append(`${correctAnswers}/${totalQuestions}`);
  questionCounter++;
  renderDom();
}

// Function to clear previous question's DOM
const clearData = () => {
  divCard.innerHTML = '';
  divMoney.innerHTML = '';
  divQuestion.innerHTML = '';
  ulTag.innerHTML = '';
}

// Function to render final screen
const finalScreen = () => {
  divCard.innerHTML = '';
  divCard.classList.add('final-screen');
  if (wrongAnswers >= 3) {
    divCard.innerText = 
      `You gave ${wrongAnswers} wrong answers out of ${totalQuestions} questions.
      You've lost the game.`;
  }

  if (wrongAnswers < 3) {
    divCard.innerText =
    `You gave ${correctAnswers} correct answers out of ${totalQuestions} questions.
    You are the winner!`;
  }
}

// Start the game
renderDom();


