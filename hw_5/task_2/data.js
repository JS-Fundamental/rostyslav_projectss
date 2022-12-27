const angularLink = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2antWgh5t9Xj75FVm_I1Igux5JeaR6QgbTg&usqp=CAU";

const laravelLink = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJXdsv6HQ3ywjh54cACRgub34oSJCY2ooNRQ&usqp=CAU";

const djangoLink = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8fupy-PMaau0nCY-zhuJSvB6v8EobwCMQeQ&usqp=CAU";

// Creating tag <img> with Angular attributes 
const imgAng = document.createElement('img');
imgAng.setAttribute('src', angularLink);
imgAng.setAttribute('alt', 'Angular');

// Creating tag <img> with Laravel attributes
const imgLar = document.createElement('img');
imgLar.setAttribute('src', laravelLink);
imgLar.setAttribute('alt', 'Laravel');

// Creating tag <img> with Django attributes
const imgDja = document.createElement('img');
imgDja.setAttribute('src', djangoLink);
imgDja.setAttribute('alt', 'Django');
