/* 
1)створити формочку на html із полями ПІБ, номер телефону, email, селектом(drop  down) із вибором мови програмування і кнопкою Надіслати. Після натиснення кнопки вивести повідомлення замість форми що із інформацією яка зібрана із тих полів і кнопкою підтвердити.
*/
const inputData = [];
const formTag = document.querySelector('form');
const container = document.querySelector('.container');
const inputTags = document.querySelectorAll('input');
const selectTag = document.querySelector('select');
const buttonTag = document.querySelector('.btn');

buttonTag.addEventListener('click', (e) => {
  e.preventDefault();
  inputTags.forEach(elem => inputData.push(elem.value));
  inputData.push(selectTag.value);
  
  formTag.remove();

  // Rendering info about user  
  const ul = document.createElement('ul');
  document.querySelector('.container').appendChild(ul);
  
  for (let i = 0; i < inputData.length; i++) {
    ul.innerHTML += (`<li>${inputData[i]}</li>`);
  }
});




