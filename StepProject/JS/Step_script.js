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




//load more

//
//    const  images = [
//     [{
//         data: 'graphic_design',
//         src: 'IMG/Step Project Ham/graphic design/graphic-design1.jpg'
//     },{
//         data: 'graphic_design',
//         src: 'IMG/Step Project Ham/graphic design/graphic-design2.jpg'
//     },{
//         data: 'graphic_design',
//         src: 'IMG/Step Project Ham/graphic design/graphic-design3.jpg'
//     },{
//         data: 'graphic_design',
//         src: 'IMG/Step Project Ham/graphic design/graphic-design4.jpg'
//     },{
//         data: 'graphic_design',
//         src: 'IMG/Step Project Ham/graphic design/graphic-design5.jpg'
//     },{
//         data: 'graphic_design',
//         src: 'IMG/Step Project Ham/graphic design/graphic-design6.jpg'
//     },{
//         data: 'graphic_design',
//         src: 'IMG/Step Project Ham/graphic design/graphic-design7.jpg'
//     },{
//         data: 'graphic_design',
//         src: 'IMG/Step Project Ham/graphic design/graphic-design8.jpg'
//     },{
//         data: 'graphic_design',
//         src: 'IMG/Step Project Ham/graphic design/graphic-design9.jpg'
//     },{
//         data: 'graphic_design',
//         src: 'IMG/Step Project Ham/graphic design/graphic-design10.jpg'
//     },{
//         data: 'graphic_design',
//         src: 'IMG/Step Project Ham/graphic design/graphic-design11.jpg'
//     },{
//         data: 'graphic_design',
//         src: 'IMG/Step Project Ham/graphic design/graphic-design12.jpg'
//     }],
//     [{
//         data: 'web_design',
//         src: 'IMG/Step%20Project%20Ham/web%20design/web-design1.jpg'
//     },{
//         data: 'web_design',
//         src: 'IMG/Step%20Project%20Ham/web%20design/web-design2.jpg'
//     },{
//         data: 'web_design',
//         src: 'IMG/Step%20Project%20Ham/web%20design/web-design3.jpg'
//     },{
//         data: 'web_design',
//         src: 'IMG/Step%20Project%20Ham/web%20design/web-design4.jpg'
//     },{
//         data: 'web_design',
//         src: 'IMG/Step%20Project%20Ham/web%20design/web-design5.jpg'
//     },{
//         data: 'web_design',
//         src: 'IMG/Step%20Project%20Ham/web%20design/web-design6.jpg'
//     },{
//         data: 'web_design',
//         src: 'IMG/Step%20Project%20Ham/web%20design/web-design7.jpg'
//     },{
//         data: 'web_design',
//         src: 'IMG/Step%20Project%20Ham/web%20design/web-design8.jpg'
//     },{
//         data: 'web_design',
//         src: 'IMG/Step%20Project%20Ham/web%20design/web-design9.jpg'
//     },{
//         data: 'web_design',
//         src: 'IMG/Step%20Project%20Ham/web%20design/web-design10.jpg'
//     },{
//         data: 'web_design',
//         src: 'IMG/Step%20Project%20Ham/web%20design/web-design11.jpg'
//     },{
//         data: 'web_design',
//         src: 'IMG/Step%20Project%20Ham/web%20design/web-design12.jpg'
//     }],
//     [{
//         data: 'landing_pages',
//         src: 'IMG/Step Project Ham/landing page/landing-page1.jpg'
//     },{
//         data: 'landing_pages',
//         src: 'IMG/Step Project Ham/landing page/landing-page2.jpg'
//     },{
//         data: 'landing_pages',
//         src: 'IMG/Step Project Ham/landing page/landing-page3.jpg'
//     },{
//         data: 'landing_pages',
//         src: 'IMG/Step Project Ham/landing page/landing-page4.jpg'
//     },{
//         data: 'landing_pages',
//         src: 'IMG/Step Project Ham/landing page/landing-page5.jpg'
//     },{
//         data: 'landing_pages',
//         src: 'IMG/Step Project Ham/landing page/landing-page6.jpg'
//     },{
//         data: 'landing_pages',
//         src: 'IMG/Step Project Ham/landing page/landing-page7.jpg'
//     },{
//         data: 'landing_pages',
//         src: 'IMG/Step Project Ham/landing page/landing-page8.jpg'
//     },{
//         data: 'landing_pages',
//         src: 'IMG/Step Project Ham/landing page/landing-page9.jpg'
//     },{
//         data: 'landing_pages',
//         src: 'IMG/Step Project Ham/landing page/landing-page10.jpg'
//     },{
//         data: 'landing_pages',
//         src: 'IMG/Step Project Ham/landing page/landing-page11.jpg'
//     },{
//         data: 'landing_pages',
//         src: 'IMG/Step Project Ham/landing page/landing-page12.jpg'
//     }],
//     [{
//         data: 'wordpress',
//         src: 'IMG/Step Project Ham/graphic design/graphic-design1.jpg'
//     },{
//         data: 'wordpress',
//         src: 'IMG/Step Project Ham/graphic design/graphic-design2.jpg'
//     },{
//         data: 'wordpress',
//         src: 'IMG/Step Project Ham/graphic design/graphic-design3.jpg'
//     },{
//         data: 'wordpress',
//         src: 'IMG/Step Project Ham/graphic design/graphic-design4.jpg'
//     },{
//         data: 'wordpress',
//         src: 'IMG/Step Project Ham/graphic design/graphic-design5.jpg'
//     },{
//         data: 'wordpress',
//         src: 'IMG/Step Project Ham/graphic design/graphic-design6.jpg'
//     },{
//         data: 'wordpress',
//         src: 'IMG/Step Project Ham/graphic design/graphic-design7.jpg'
//     },{
//         data: 'wordpress',
//         src: 'IMG/Step Project Ham/graphic design/graphic-design8.jpg'
//     },{
//         data: 'wordpress',
//         src: 'IMG/Step Project Ham/graphic design/graphic-design9.jpg'
//     },{
//         data: 'wordpress',
//         src: 'IMG/Step Project Ham/graphic design/graphic-design10.jpg'
//     },{
//         data: 'wordpress',
//         src: 'IMG/Step Project Ham/graphic design/graphic-design11.jpg'
//     },{
//         data: 'wordpress',
//         src: 'IMG/Step Project Ham/graphic design/graphic-design12.jpg'
//     }]
// ];


// amazing work
const list = document.querySelectorAll('.menu-item');
const itemBox = document.querySelectorAll('.flip-card');


for(let i = 0; i < list.length; i++){
    list[i].addEventListener('click', function(){
        for(let j = 0; j < list.length; j++){
            list[j].classList.remove('active');
        }
        this.classList.add('active');
        let dataMenu = this.getAttribute('data-menu');
        for(let k = 0; k < itemBox.length; k++){
            itemBox[k].classList.remove('active');
            itemBox[k].classList.add('hide');


            if(itemBox[k].getAttribute('data-gallery') === dataMenu || dataMenu === "all" && k < 12){

                itemBox[k].classList.remove('hide');
                itemBox[k].classList.add('active');
            }
        }
    })
}

let arr = [];
arr.push()
const SET_TIMEOUT = 1000;

function Gallery() {
    let cout = 0;
    const galleryMenuWrapper = document.querySelector('.gallery-menu');
    const loadMore = document.querySelector('.load_more');
    const galleryContent = document.querySelector('.gallery-content');

    // galleryMenuWrapper.addEventListener('click', (event) => {
    //     let dataMenu = null;
    //     const dataGallery = document.querySelectorAll('.flip-card');
    //
    //     dataGallery.forEach((item) => {
    //         if (dataMenu !== item.getAttribute( 'data-gallery' ) && dataMenu !== 'all'  ){
    //             item.style.display='none'
    //         } else {
    //             item.style.display='block'
    //         }
    //     })
    // })

    loadMore.addEventListener('click',() => {
        loadMore.classList.add('loader');
        // loadMore.setAttribute('disabled', '')
        setTimeout(() => {
            loadMore.classList.remove('loader');
            // loadMore.removeAttribute('disabled')
            itemBox[cout].forEach((item) => {
                galleryContent.insertAdjacentHTML('beforeend', `
			<div class="flip-card" data-gallery="${item}">
				<img class="img${id+13}" src="${image.src}" alt="image">
			</div>`)
            })

            cout++

            if ( cout === images.length ){
                loadMore.remove()
            }
        }, SET_TIMEOUT)

    })

}

document.addEventListener('DOMContentLoaded', () => {
    Gallery();
});
