const hamBtn = document.querySelector('.hamburger');
const media = window.matchMedia('(width <= 43.75rem)');
const body = document.querySelector('body');
const main = document.querySelector('main');
const footer = document.querySelector('footer');

media.addEventListener('change', (e) => {
    if (!e.matches) {
        hamBtn.setAttribute('aria-expanded', false);
        body.classList.remove('overflow-hidden');
        main.removeAttribute('inert');
        footer.removeAttribute('inert');
    }
})

hamBtn.addEventListener('click', () => {
    const btnState = hamBtn.getAttribute('aria-expanded') === 'true'
    hamBtn.setAttribute('aria-expanded', !btnState);
    hamBtn.focus();

    if (!btnState) {
        body.classList.add('overflow-hidden');
        main.setAttribute('inert', '');
        footer.setAttribute('inert', '');
    } else {
        body.classList.remove('overflow-hidden');
        main.removeAttribute('inert');
        footer.removeAttribute('inert');
    }
})