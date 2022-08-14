//
// function myFunction() {
//     document.getElementById("myDropdown").classList.toggle("show");
// }
// myFunction()
// window.onclick = function(event) {
//     if (!event.target.matches('.header__mobile-menu')) {
//
//         let dropdowns = document.getElementsByClassName("header__navigation");
//         let i;
//         for (i = 0; i < dropdowns.length; i++) {
//             let openDropdown = dropdowns[i];
//             if (openDropdown.classList.contains('show')) {
//                 openDropdown.classList.remove('show');
//             }
//         }
//     }
// }style="display: none


// const menuButton = document.getElementsByClassName(".header__mobile-menu");
// const closeButton = document.querySelector('.header__mobile-menu_close');
// const openButton = document.querySelector(".header__mobile-menu_open");
//
// closeButton.addEventListener('click', () => {
//     openButton.classList.add(".active");
//     closeButton.classList.add("hide");
// })
// const menuButton = document.querySelector(".header__mobile-menu");
// const closeButton = document.querySelector('.header__mobile-menu');
// // const openButton = document.querySelector(".header__mobile-menu_open");
//
// menuButton.addEventListener('click', () => {
//      closeButton.classList.remove('active');
// })
//
//
// const tabs = document.querySelector('.header__mobile-menu');
// tabs.addEventListener("click",(event) =>{
//      if (event.target.classList.contains('.header__mobile-menu')){
//           const dataTab = event.target.dataset.menu;
//           const tabHeader = document.querySelectorAll(".tabs-title");
//           for (let i = 0; i < tabHeader.length; i++){
//                tabHeader[i].classList.remove('active');
//           }
//           event.target.classList.add('active');
//           const tabContent = document.querySelectorAll(".tabs-content li");
//           for (let i = 0; i < tabContent.length; i++) {
//                tabContent[i].classList.remove('active');
//                const tabLi = tabContent[i].dataset.content;
//                if (tabLi === dataTab){
//                     tabContent[i].classList.add('active');
//                } else {tabContent[i].classList.remove('active');
//                }
//           }
//      }
// })
//

// menuButton.addEventListener('click', (e) => {
//     openButton.classList.add(".active");
//     closeButton.classList.add("hide");
