/* 4) Зробити опитування користувача, кожна відповідь затерає наявне DOM дерево і відрисовує нове (із наступним питанням), всі відповіді зберігати в масиві, і в кінці на основі цих відповідей вивести інформацію про користувача на основі відповідей.
*/
const answers = [];
let i = 0;

const createHtmlframe = () => {
  // Creating <div> with class "container", & adding it to the DOM 
  const container = document.createElement('div');
  container.classList.add('container');
  document.body.prepend(container);

  // Creating <div class="card">, & inserting it into 'container'
  const card = document.createElement('div');
  card.classList.add('card');
  document.querySelector('.container').append(card);

  // Creating <p class="question">, & injecting it into 'card'
  const pTag = document.createElement('p');
  pTag.classList.add('question');
  document.querySelector('.card').append(pTag);

  // Creating <input type="text" id="input">
  const input = document.createElement('input');
  input.setAttribute('type', 'text');
  input.setAttribute('id', 'input');
  document.querySelector('.card').append(input);

  // Creating <button class="btn">
  const button = document.createElement('button');
  button.classList.add('btn');
  const textForButton = document.createTextNode('Next');
  button.appendChild(textForButton);
  document.querySelector('.card').append(button);

  const question = document.querySelector('.question');
  let text = document.createTextNode(questions[i]);
  question.appendChild(text);

  // User enters answers by pressing the button
  document.querySelector('.btn').addEventListener('click', (e) => {
    let answer = document.querySelector('#input').value;
    answers.push(answer);
    i++;
    document.querySelector('.container').remove();
    createHtmlframe();

    // Rendering info about user  
    if (answers.length == questions.length) {
      document.querySelector('.card').remove();
      const ul = document.createElement('ul');
      ul.classList.add('resultCard');
      document.querySelector('.container').appendChild(ul);

      for (let i = 0; i < answers.length; i++) {
        ul.innerHTML += (`<li>${questions[i]} &ensp; ${answers[i]}</li>`);
      }
    }
  });
}

// Starting the program
createHtmlframe();

