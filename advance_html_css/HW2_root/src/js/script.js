let menuButton = document.querySelector(".header__mobile-menu");
let closeButton = document.querySelector(".header__mobile-menu_close");
let openButton = document.querySelector(".header__mobile-menu_open");
let menuOpen = document.querySelector('.header__navigation');


menuButton.addEventListener('click', (event) => {
    if (closeButton.classList.contains('active')) {
        closeButton.classList.remove('active');
        menuOpen.classList.remove('hide');
        openButton.classList.add('active');
        menuOpen.classList.add('active');
    } else {
        openButton.classList.remove('active');
        menuOpen.classList.remove('active');
        closeButton.classList.add('active');
        menuOpen.classList.add('hide');
    }
});

