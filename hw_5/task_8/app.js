/* 
8) Створити текстове поле, в текстове поле вводимо текст який хочемо відформатувати, (жирним то вводимо символ # перед словом, якщо курсивом то вводимо символ $ перед словом), зробити заміну тих спецсимволів та 1 слова після них на слово обгорнуте у відповідний html тег, і вивести повідомлення відформатоване на екран.
*/
const inputWord = document.querySelector('#word');
const resultField = document.querySelector('.result');

inputWord.addEventListener('change', (event) => {
  domInjector(event.target.value);
  inputWord.blur();
});

// Function to inject tags with word into DOM
const domInjector = (word) => {
  resultField.insertAdjacentHTML('beforebegin', formatWord(word));
}

// Function to format word
const formatWord = word => {
  if (word.startsWith('#')) {
    return `<b>${word.slice(1)}</b>`;
  } else if (word.startsWith('$')) {
    return `<i>${word.slice(1)}</i>`;
  } else {
    return word;
  }
};

