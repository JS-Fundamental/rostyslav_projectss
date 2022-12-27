/*
3) Зробити гру МАТЕМАТИК. Є масив питань(3-4 штуки), відображати їх по черзі, і давати можливість користувачеві вибирати 1 варіант відповіді, якщо користувач відповість на всі питання вірно, то очистити вікно сайту і поставити бекграунд фото(будь-яке)
*/
const card = document.querySelector('.card');
const question = document.querySelector('.question');
const aAnswer = document.querySelector('.a-ans');
const bAnswer = document.querySelector('.b-ans');
const cAnswer = document.querySelector('.c-ans');
const dAnswer = document.querySelector('.d-ans');
const radioInput = document.querySelectorAll('input');
const button = document.querySelector('.btn');
const imgTag = document.createElement('img');
const h1Tag = document.createElement('h1');

let questionCounter = 0;
let score = 0;

// Function to render questions
const showQuestion = () => {
  if (questionCounter >= questionsArr.length) {
    finishQuiz();
  } else {
    radioInput.forEach(answer => {
      answer.checked = false;
    });

    question.textContent = questionsArr[questionCounter].question;
    aAnswer.textContent = questionsArr[questionCounter].a;
    bAnswer.textContent = questionsArr[questionCounter].b;
    cAnswer.textContent = questionsArr[questionCounter].c;
    dAnswer.textContent = questionsArr[questionCounter].d;
  }
};

// Function to check if the answer is correct
function checkQuestion() {
  radioInput.forEach(answer => {
    if (answer.checked) {
      let chosenAnswer = answer.className;
      if (chosenAnswer[chosenAnswer.length - 1] ==
        questionsArr[questionCounter].correct) {
        score++;
      }
    }
  });
}

// Function to render image if all answers are correct
const renderImage = () => {
  card.innerHTML = '';
  card.classList.remove('card');
  imgTag.setAttribute('src', './My_code.jpg');
  imgTag.setAttribute('alt', '100% correct');
  card.append(imgTag);
}

// Function to render screen if some answers are incorrect
renderScreen = () => {
  card.innerHTML = '';
  h1Tag.innerText = 
  `The number of right answers is ${score}. 
  Go back to school!`;
  card.append(h1Tag);
}

button.addEventListener('click', () => {
  checkQuestion();
  questionCounter++;
  showQuestion();
});

// Start app
showQuestion();

// Function to end app
finishQuiz = () => {
  if (score == questionsArr.length) {
    renderImage();
  } else {
    renderScreen();
  }
}