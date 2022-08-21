
// const menuButton = document.querySelector(".header__mobile-menu");

document.querySelector(".header__mobile-menu").addEventListener('click', (event) => {

    const closeButton = document.querySelector(".header__mobile-menu_close");
    const openButton = document.querySelector(".header__mobile-menu_open");
    const menuOpen = document.querySelector('.header__navigation');
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

