//our services
const tabs = document.querySelector('.tabs');
tabs.addEventListener("click", (event) => {
    if (event.target.classList.contains('tabs-title')) {
        const dataTab = event.target.dataset.menu;
        const tabHeader = document.querySelectorAll(".tabs-title");
        for (let i = 0; i < tabHeader.length; i++) {
            tabHeader[i].classList.remove('active');
        }
        event.target.classList.add('active');
        const tabContent = document.querySelectorAll(".tabs-content li");
        for (let i = 0; i < tabContent.length; i++) {
            tabContent[i].classList.remove('active');
            const tabLi = tabContent[i].dataset.content;
            if (tabLi === dataTab) {
                tabContent[i].classList.add('active');
            } else {
                tabContent[i].classList.remove('active');
            }
        }
    }
})

//amazing work
let list = document.querySelectorAll('.menu-item');
let itemBox = document.querySelectorAll('.flip-card');
for(let i = 0; i<list.length; i++){
    list[i].addEventListener('click', function(){
        for(let j = 0; j<list.length; j++){
            list[j].classList.remove('active');
        }
        this.classList.add('active');
        let dataMenu = this.getAttribute('data-menu');
        for(let k = 0; k<itemBox.length; k++){
            itemBox[k].classList.remove('active');
            itemBox[k].classList.add('hide');

            if(itemBox[k].getAttribute('data-gallery') === dataMenu || dataMenu === "all"){
                itemBox[k].classList.remove('hide');
                itemBox[k].classList.add('active');
            }
        }
    })
}

//load more
// const images = [
//     ['/graphic-design1.jpg','/graphic-design2.jpg','/graphic-design3.jpg','/graphic-design4.jpg','/graphic-design5.jpg','/graphic-design6.jpg','/graphic-design7.jpg','/graphic-design8.jpg','/graphic-design9.jpg','/graphic-design10.jpg','/graphic-design11.jpg','/graphic-design12.jpg',],
//     ['/web-design1.jpg','/web-design2.jpg','/web-design3.jpg','/web-design4.jpg','/web-design5.jpg','/web-design6.jpg','/web-design7.jpg','/web-design8.jpg','/web-design9.jpg','/web-design10.jpg','/web-design11.jpg','/web-design12.jpg',],
//     ['/landing-page1.jpg','/landing-page2.jpg','/landing-page3.jpg','/landing-page4.jpg','/landing-page5.jpg','/landing-page6.jpg','/landing-page7.jpg','/landing-page8.jpg','/landing-page9.jpg','/landing-page10.jpg','/landing-page11.jpg','/landing-page12.jpg',],
//     ['/wordpress1.jpg','/wordpress2.jpg','/wordpress3.jpg','/wordpress4.jpg','/wordpress5.jpg','/wordpress6.jpg','/wordpress7.jpg','/wordpress8.jpg','/wordpress9.jpg','/wordpress10.jpg','/wordpress11.jpg','/wordpress12.jpg',]
// ]

// let arr = [];
// arr.push()
// const SET_TIMEOUT = 2000;
// function Gallery() {
//
//     let cout = 0;
//     const galleryMenuWrapper = document.querySelector('.gallery-menu');
//     const loadMore = document.querySelector('.load_more');
//     const galleryContent = document.querySelector('.gallery-content');
//
//     galleryMenuWrapper.addEventListener('click', (event) => {
//         let dataMenu = null;
//         const dataGallery = document.querySelectorAll('.flip-card');
//
//         dataGallery.forEach((item) => {
//             if (dataMenu !== item.getAttribute( 'data-gallery' ) && dataMenu !== 'all' ){
//                 item.style.display='none'
//             } else {
//                 item.style.display='block'
//             }
//         })
//     })
//
//     loadMore.addEventListener('click',() => {
//
//         loadMore.classList.add('loader');
//         // loadMore.setAttribute('disabled', '')
//
//
//         setTimeout(() => {
//             loadMore.classList.remove('loader');
//             // loadMore.removeAttribute('disabled')
//
//             images[cout].forEach((image, id) => {
//                 galleryContent.insertAdjacentHTML('beforeend', `
// 			<div class="image-item" data-gallery="${image.data}">
// 				<img class="img${id+13}" src="${image.src}" alt="image">
// 			</div>`)
//             })
//
//             cout++
//
//             if ( cout === images.length ){
//                 loadMore.remove()
//             }
//         }, SET_TIMEOUT)
//
//     })
//
// }
//
// document.addEventListener('DOMContentLoaded', () => {
//     Gallery();
// });
