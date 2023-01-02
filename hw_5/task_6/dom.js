// Create <div> tag with class "card"
const divCard = document.createElement('div');
divCard.classList.add('card');

// Create <div> tag with class "money-part"
const divMoney = document.createElement('div');
divMoney.classList.add('money-part');

// Create <div> tag with class "question-part"
const divQuestion = document.createElement('div');
divQuestion.classList.add('question-part');

// Create <div> tag with class "answers-part"
const divAnswers = document.createElement('div');
divAnswers.classList.add('answers-part');

// Create <ul> tag
const ulTag = document.createElement('ul');

// Function to create a document fragment with <li> elements
const createList = (questionCounter) => {
  const dFragment = document.createDocumentFragment();
  for (let i = 0; i < answers.length - 1; i++) {
    const liTag = document.createElement('li');
    const spanTag = document.createElement('span');
    liTag.append(spanTag);
    spanTag.append(letters[i]);
    liTag.append(answers[questionCounter][i]);
    dFragment.appendChild(liTag);
  }
  return dFragment;
}

// Create <div> tag with class "counter-part"
const divCounter = document.createElement('div');
divCounter.classList.add('counter-part');





