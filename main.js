const hamBtn = document.querySelector('.hamburger');
const navList = document.querySelector('.header__nav-list');
const media = window.matchMedia('(width <= 43.75rem)');
const body = document.querySelector('body');

media.addEventListener('change', (e) => {
    if (!e.matches) {
        hamBtn.setAttribute('aria-expanded', false);
    }
})

hamBtn.addEventListener('click', () => {
    const btnState = hamBtn.getAttribute('aria-expanded') === 'true'
    hamBtn.setAttribute('aria-expanded', !btnState);
    hamBtn.focus();
})