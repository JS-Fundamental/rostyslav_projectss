/* 
  10) зробити список, після останього елементу списку має бути поле(інпут) та кнопка щоб додати новий елемент списку. Біля кожного елементу списку має бути знак - який видаляє даний елемент списку. Список зберігати в масиві.
*/
const ulTag = document.querySelector('ul');
const spanTags = [...document.querySelectorAll('span')];
const buttonTag = document.querySelector('.btn');

// Adding items to the list
buttonTag.addEventListener('click', () => {
  ulTag.insertAdjacentHTML('beforeend', `<li>${toDoList[1]}<span>x</span></li>`);
});


// Removing items from the list
spanTags.forEach(tag => 
  tag.addEventListener('click', (e) => {
    e.target.parentElement.remove();
}));


