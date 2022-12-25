/* 1) Створити додаток (html сайт) який буде переводити температуру із 
   Цельсія в Фаренгейт та навпаки. 
   Функція перетворення має працювати на подію input. Якщо вводяться 
   значення в поле Цельсій то відбувається перетворення в Фаренгейт, 
   якщщо вводимо дані в поле Фаренгейт, то запускається функція 
   перетворення в Цельсій.
*/
let celInput = document.getElementById('inputCel');
let fahInput = document.getElementById('inputFah');

///////// celToFah and fahToCel func
const celToFah = celsiusDeg => (celsiusDeg * 9 / 5) + 32;
const fahToCel = fahrenheitDeg => (fahrenheitDeg - 32) * 5 / 9;

////////////////// generalConverter function ///////////////
const generalConverter = (value, convertFunc) => {
  const strToFloat = parseFloat(value);
  if (isNaN(strToFloat)) {
    return "It's not a number";
  }
  const output = Math.round(convertFunc(strToFloat) * 1000) / 1000;
  return output;
}

////////////////////// DOM ////////////////////////// 
// optimize
celInput.addEventListener('keyup', () => {
  if (celInput.value == '') {
    return fahInput.value = '';
  }
  fahInput.value = celInput.value;
  fahInput.value = generalConverter(fahInput.value, celToFah);
}); 

fahInput.addEventListener('keyup', () => {
  if (fahInput.value == '') {
    return celInput.value = '';
  }
  celInput.value = fahInput.value;
  celInput.value = generalConverter(celInput.value, fahToCel);
});
  

// console.log(generalConverter(2, celToFah)); // 35.6
// console.log(generalConverter(7, fahToCel)); // -13.889
// console.log(generalConverter(3, fahToCel)); // -16.111
// console.log(generalConverter('d', fahToCel)); // error

