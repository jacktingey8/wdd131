let menuButton = document.getElementsByClassName('menu-btn')[0];


menuButton.addEventListener('click', handleMenuButtonClick);

function handleMenuButtonClick(event) 
{
console.log(event);
let nav = document.getElementsByTagName('nav')[0];
nav.classList.toggle('hide');
menuButton.classList.toggle('change');

}