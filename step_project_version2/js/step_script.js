'use strict';
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
});

//load more

const images = [
    [{
        data: 'graphic_design',
        src: './img/step_project/graphic_design/graphic-design1.jpg',
        alt: 'Graphic design',
    }, {
        data: 'graphic_design',
        src: './img/step_project/graphic_design/graphic-design2.jpg',
        alt: 'Graphic design',
    }, {
        data: 'graphic_design',
        src: './img/step_project/graphic_design/graphic-design3.jpg',
        alt: 'Graphic design',
    }, {
        data: 'graphic_design',
        src: './img/step_project/graphic_design/graphic-design4.jpg',
        alt: 'Graphic design',
    }, {
        data: 'graphic_design',
        src: './img/step_project/graphic_design/graphic-design5.jpg',
        alt: 'Graphic design',
    }, {
        data: 'graphic_design',
        src: './img/step_project/graphic_design/graphic-design6.jpg',
        alt: 'Graphic design',
    }, {
        data: 'graphic_design',
        src: './img/step_project/graphic_design/graphic-design7.jpg',
        alt: 'Graphic design',
    }, {
        data: 'graphic_design',
        src: './img/step_project/graphic_design/graphic-design8.jpg',
        alt: 'Graphic design',
    }, {
        data: 'graphic_design',
        src: './img/step_project/graphic_design/graphic-design9.jpg',
        alt: 'Graphic design',
    }, {
        data: 'graphic_design',
        src: './img/step_project/graphic_design/graphic-design10.jpg',
        alt: 'Graphic design',
    }, {
        data: 'graphic_design',
        src: './img/step_project/graphic_design/graphic-design11.jpg',
        alt: 'Graphic design',
    }, {
        data: 'graphic_design',
        src: './img/step_project/graphic_design/graphic-design12.jpg',
        alt: 'Graphic design',
    }],
    [{
        data: 'web_design',
        src: './img/step_project/web_design/web-design1.jpg',
        alt: 'Web design',
    }, {
        data: 'web_design',
        src: './img/step_project/web_design/web-design2.jpg',
        alt: 'Web design',
    }, {
        data: 'web_design',
        src: './img/step_project/web_design/web-design3.jpg',
        alt: 'Web design',
    }, {
        data: 'web_design',
        src: './img/step_project/web_design/web-design4.jpg',
        alt: 'Web design',
    }, {
        data: 'web_design',
        src: './img/step_project/web_design/web-design5.jpg',
        alt: 'Web design',
    }, {
        data: 'web_design',
        src: './img/step_project/web_design/web-design6.jpg',
        alt: 'Web design',
    }, {
        data: 'web_design',
        src: './img/step_project/web_design/web-design7.jpg',
        alt: 'Web design',
    }, {
        data: 'web_design',
        src: './img/step_project/web_design/web-design8.jpg',
        alt: 'Web design',
    }, {
        data: 'web_design',
        src: './img/step_project/web_design/web-design9.jpg',
        alt: 'Web design',
    }, {
        data: 'web_design',
        src: './img/step_project/web_design/web-design10.jpg',
        alt: 'Web design',
    }, {
        data: 'web_design',
        src: './img/step_project/web_design/web-design11.jpg',
        alt: 'Web design'
    }, {
        data: 'web_design',
        src: './img/step_project/web_design/web-design12.jpg',
        alt: 'Web design',
    }],
    [{
        data: 'landing_pages',
        src: './img/step_project/landing_page/landing-page1.jpg',
        alt: 'Landing pages',
    }, {
        data: 'landing_pages',
        src: './img/step_project/landing_page/landing-page2.jpg',
        alt: 'Landing pages',
    }, {
        data: 'landing_pages',
        src: './img/step_project/landing_page/landing-page3.jpg',
        alt: 'Landing pages',
    }, {
        data: 'landing_pages',
        src: './img/step_project/landing_page/landing-page4.jpg',
        alt: 'Landing pages',
    }, {
        data: 'landing_pages',
        src: './img/step_project/landing_page/landing-page5.jpg',
        alt: 'Landing pages',
    }, {
        data: 'landing_pages',
        src: './img/step_project/landing_page/landing-page6.jpg',
        alt: 'Landing pages',
    }, {
        data: 'landing_pages',
        src: './img/step_project/landing_page/landing-page7.jpg',
        alt: 'Landing pages',
    }, {
        data: 'landing_pages',
        src: './img/step_project/landing_page/landing-page8.jpg',
        alt: 'Landing pages',
    }, {
        data: 'landing_pages',
        src: './img/step_project/landing_page/landing-page9.jpg',
        alt: 'Landing pages',
    }, {
        data: 'landing_pages',
        src: './img/step_project/landing_page/landing-page10.jpg',
        alt: 'Landing pages',
    }, {
        data: 'landing_pages',
        src: './img/step_project/landing_page/landing-page11.jpg',
        alt: 'Landing pages',
    }, {
        data: 'landing_pages',
        src: './img/step_project/landing_page/landing-page12.jpg',
        alt: 'Landing pages',
    }],
    [{
        data: 'wordpress',
        src: './img/step_project/graphic_design/graphic-design1.jpg',
        alt: 'Wordpress',
    }, {
        data: 'wordpress',
        src: './img/step_project/graphic_design/graphic-design2.jpg',
        alt: 'Wordpress',
    }, {
        data: 'wordpress',
        src: './img/step_project/graphic_design/graphic-design3.jpg',
        alt: 'Wordpress',
    }, {
        data: 'wordpress',
        src: './img/step_project/graphic_design/graphic-design4.jpg',
        alt: 'Wordpress',
    }, {
        data: 'wordpress',
        src: './img/step_project/graphic_design/graphic-design5.jpg',
        alt: 'Wordpress',
    }, {
        data: 'wordpress',
        src: './img/step_project/graphic_design/graphic-design6.jpg',
        alt: 'Wordpress',
    }, {
        data: 'wordpress',
        src: './img/step_project/graphic_design/graphic-design7.jpg',
        alt: 'Wordpress',
    }, {
        data: 'wordpress',
        src: './img/step_project/graphic_design/graphic-design8.jpg',
        alt: 'Wordpress',
    }, {
        data: 'wordpress',
        src: './img/step_project/graphic_design/graphic-design9.jpg',
        alt: 'Wordpress',
    }, {
        data: 'wordpress',
        src: './img/step_project/graphic_design/graphic-design10.jpg',
        alt: 'Wordpress',
    }, {
        data: 'wordpress',
        src: './img/step_project/graphic_design/graphic-design11.jpg',
        alt: 'Wordpress',
    }, {
        data: 'wordpress',
        src: './img/step_project/wordpress/wordpress12.jpg',
        alt: 'Wordpress',
    }]
];

// amazing work
const list = document.querySelectorAll('.menu-item');
const itemBox = document.querySelectorAll('.flip-card');

for (let i = 0; i < list.length; i++) {
    list[i].addEventListener('click', function () {
        for (let j = 0; j < list.length; j++) {
            list[j].classList.remove('active');
        }
        this.classList.add('active');
        let dataMenu = this.getAttribute('data-menu');
        for (let k = 0; k < itemBox.length; k++) {
            itemBox[k].classList.remove('active');
            itemBox[k].classList.add('hide');
            if (itemBox[k].getAttribute('data-gallery') === dataMenu || dataMenu === "all" && k < 12) {
                itemBox[k].classList.remove('hide');
                itemBox[k].classList.add('active');
            }
        }
    })
}


const SET_TIMEOUT = 1000;
function Gallery() {
    const galleryContent = document.querySelector('.gallery-content');
    const loadMore = document.querySelector('.load_more');
    let counter = 0;
    loadMore.addEventListener('click', () => {
        loadMore.classList.add('loader');
        setTimeout(() => {
            loadMore.classList.remove('loader');
            if (images.length <= 4) {
                images[counter].forEach(image => {
                    galleryContent.insertAdjacentHTML('beforeend', `<div class="flip-card" data-gallery="${image.data}">
                    <div class="flip-card-inner">
                        <div class="flip-card-front">
                            <img class="${image.id}" src="${image.src}" alt="${image.alt}">
                        </div>
                        <div class="flip-card-back">
                            <svg width="88" height="43" viewBox="0 0 88 43" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <rect x="1" y="2" width="41" height="40" rx="20" stroke="#18CFAB"/>
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                      d="M26.9131 17.7282L25.0948 15.8913C24.2902 15.0809 22.983 15.0759 22.1768 15.8826L20.1592 17.8926C19.3516 18.6989 19.3482 20.0103 20.1505 20.8207L21.3035 19.689C21.1868 19.3284 21.3304 18.9153 21.6159 18.6295L22.8995 17.3519C23.3061 16.9462 23.9584 16.9491 24.3595 17.3543L25.4513 18.458C25.8528 18.8628 25.8511 19.5171 25.447 19.9232L24.1634 21.2024C23.8918 21.473 23.4461 21.6217 23.1002 21.5263L21.9709 22.6589C22.7745 23.4718 24.0803 23.4747 24.8889 22.6684L26.9039 20.6592C27.7141 19.8525 27.7167 18.5398 26.9131 17.7282ZM19.5261 25.0918C19.6219 25.4441 19.4686 25.8997 19.1909 26.1777L17.9923 27.3752C17.5807 27.7845 16.916 27.7833 16.5067 27.369L15.393 26.2475C14.9847 25.8349 14.9873 25.1633 15.3982 24.7547L16.598 23.5577C16.8903 23.2661 17.3104 23.1202 17.6771 23.2438L18.8335 22.0715C18.0149 21.2462 16.6825 21.2421 15.8606 22.0632L13.9152 24.0042C13.0923 24.8266 13.0884 26.1629 13.9065 26.9886L15.7582 28.8618C16.576 29.6846 17.9072 29.6912 18.7311 28.8701L20.6765 26.9287C21.4985 26.1054 21.5024 24.7717 20.6855 23.9443L19.5261 25.0918ZM19.2579 24.5631C18.9801 24.8419 18.5343 24.8411 18.2618 24.5581C17.9879 24.2743 17.9901 23.8204 18.2661 23.5399L21.5907 20.1611C21.8668 19.8823 22.3117 19.8831 22.5851 20.164C22.8605 20.4457 22.8588 20.9009 22.5817 21.183L19.2579 24.5631Z"
                                      fill="#1FDAB5"/>
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                      d="M66.5973 1.99795C77.8653 1.99795 86.9999 10.9523 86.9999 21.9979C86.9999 33.0432 77.8653 41.9979 66.5973 41.9979C55.3292 41.9979 46.1946 33.0432 46.1946 21.9979C46.1946 10.9523 55.3292 1.99795 66.5973 1.99795Z"
                                      fill="#18CFAB"/>
                                <rect x="60" y="17" width="12" height="11" fill="white"/>
                            </svg>
                            <span class="theme_card_back">creative design</span>
                            <span class="chapter_card_back">Web Design</span>
                        </div>
                    </div>
                </div>`)
                });
            }
        }, 1000);

        counter++
        if (counter === 2) {
            setTimeout(() => {
            loadMore.remove()}, 1000);
        }


    }, SET_TIMEOUT);
}

document.addEventListener('DOMContentLoaded', () => {
    Gallery();
});