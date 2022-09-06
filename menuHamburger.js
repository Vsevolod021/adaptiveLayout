const menuOpen = document.querySelector('.header__menu-open');
const menuMobile = document.querySelector('.menu-mobile');
const closeBtn = document.querySelector('.menu-mobile__close-btn');

menuOpen.addEventListener('click', () => {
    menuMobile.style.display = 'block';
    menuOpen.style.display = 'none';
});

closeBtn.addEventListener('click', () => {
    menuOpen.style.display = 'block';
    menuMobile.style.display = 'none';
});

window.addEventListener('resize', () => {
    if (document.body.clientWidth < 767) {
        menuOpen.style.display = 'block';
    } else {
        menuOpen.style.display = 'none';
        menuMobile.style.display = 'none';
    }
});