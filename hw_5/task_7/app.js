/* 
  7) Створити просту фото галерею, зробити блок де буде відображатись велика картинка, і декілька малих блоків із прев'ю інших картинок, при кліку на якусь із них вона буде відображатись у блоці із великою картинкою(замість попередньої). Також зробити кнопки щоб переключати картинки в перед та назад.
*/
const divBig = document.querySelector('.big-image');
const divSmall = document.querySelectorAll('.small-images');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

// Adding event listeners to the images
const images = document.querySelectorAll('.small');
images.forEach(item => item.addEventListener('click', (e) => {
  toggleImage(e);
}));

// Convert big img to small and append to DOM
const bigToSmall = (e) => {
  let bigImage = divBig.children[0];
  bigImage.addEventListener('click', (e) => toggleImage(e));
  bigImage.classList.remove('big');
  bigImage.classList.add('small');
  document.querySelector('.small-images').append(bigImage);
};

// Convert small img to big and append to DOM
const smallToBig = (e) => {
  e.target.classList.remove('small');
  e.target.classList.add('big');
  divBig.append(e.target);
};

// Toggling images
const toggleImage = (e) => {
  bigToSmall(e);
  smallToBig(e);
};

// Buttons with event listeners
nextBtn.addEventListener('click', () => {
  nextImg();
});

prevBtn.addEventListener('click', (e) => {
  previousImg();
});

// Function to see next image
const nextImg = () => {
  let bigImage = divBig.children[0];
  bigImage.classList.remove('big');
  bigImage.classList.add('small');
  document.querySelector('.small-images').append(bigImage);

  let smallImg = document.querySelector('.small-images').firstElementChild;
  smallImg.classList.remove('small');
  smallImg.classList.add('big');
  divBig.prepend(smallImg);
}

// Function to see previous image
const previousImg = () => {
  let bigImage = divBig.children[0];
  bigImage.classList.remove('big');
  bigImage.classList.add('small');
  document.querySelector('.small-images').prepend(bigImage);

  let smallImg = document.querySelector('.small-images').lastElementChild;
  smallImg.classList.remove('small');
  smallImg.classList.add('big');
  divBig.append(smallImg);
} 