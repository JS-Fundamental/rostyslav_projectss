/* 3) Створити гру для перевірки знання таблиці множення. 
Користувач має 3 спроби пройти тест (який складається із 5 прикладів).
По завершенню виводити найкращий результат.
*/
//////////////// const, variables
const container = document.querySelector('.container');
const button = document.querySelector('.btn');
let userAnswers = [];
let results = [];

// Creates div for appendint set of 5 questions
(createDiv = () => {
  const div = document.createElement('div');
  div.classList.add('oneSet');
  container.appendChild(div)
})();

// Creates set of 5 questions
const setOfQuestions = () => {
  const multiplicand = Math.ceil(Math.random() * 10);
  const multiplier = Math.ceil(Math.random() * 10);
  let product = multiplicand * multiplier;
  results.push(product);
  
  const span = document.createElement('span');
  span.innerHTML =
    `<span>${multiplicand}</span>
    <span>*</span>
    <span>${multiplier}</span>
    <span>=</span>
    <input type="text" id=product>${''}</input>
    <br>
    `;
    document.querySelector('.oneSet').appendChild(span);
    
    if (results.length > 5) {
      // Clear dom & start again
      container.removeChild(document.querySelector('.oneSet'));
      results = [];
      createDiv();
      setOfQuestions();
    }

  };
  // This function starts the game
  setOfQuestions();

  // button.addEventListener('click', (e) => {
    // setOfQuestions();
    // console.log(results);
  // });

  let input = document.getElementById('product');
  input.addEventListener('keyup', (e) => {
    if (e.key == 'Enter') {
      setOfQuestions();
      // document.querySelectorAll('input').focus();
    }
    console.log(results);

    userAnswers.push(input.value);
    console.log(userAnswers);
    
  })











