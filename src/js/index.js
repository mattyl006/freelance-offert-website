import '../scss/main.scss';

console.log('HELLO 🚀');

const button = document.querySelector('.navigation__button--js');
const navContainer = document.querySelector('.navigation__container--js');

button.addEventListener('click', () => {
    navContainer.classList.toggle('open-nav');
    if (navContainer.classList.contains('open-nav')) {
        button.innerHTML = 'zamknij';
    }
    else {
        button.innerHTML = 'menu';
    }
});
