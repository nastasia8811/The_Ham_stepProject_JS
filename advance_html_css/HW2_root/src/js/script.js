let menuButton = document.querySelector(".header__mobile-menu");
let closeButton = document.querySelector(".header__mobile-menu_close");
let openButton = document.querySelector(".header__mobile-menu_open");
let menuOpen = document.querySelector('.header__navigation');

menuButton.addEventListener('click', () => {
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
})

// Window.onclick = function (event) {
//     if (!event.target.matches('.header__mobile-menu')) {
//         let i;
//         for (i = 0; i < menuOpen.length; i++) {
//             let openDropdown = menuOpen[i];
//             if (openDropdown.classList.contains('active')) {
//                 openDropdown.classList.remove('active');
//             }
//         }
//     }
// }