/**
 * Задание 3.
 *
 * Реализовать фильтр галереи
 * */

const images = [
	[{
		data: 'graphic_design',
		src: '.img/step_project/graphic_design/graphic-design1.jpg'
	},{
		data: 'graphic_design',
		src: '.img/step_project/graphic_design/graphic-design1.jpg'
	},{
		data: 'graphic_design',
		src: '.img/step_project/graphic_design/graphic-design1.jpg'
	},{
		data: 'graphic_design',
		src: '.img/step_project/graphic_design/graphic-design1.jpg'
	},{
		data: 'graphic_design',
		src: '.img/step_project/graphic_design/graphic-design1.jpg'
	},{
		data: 'graphic_design',
		src: '.img/step_project/graphic_design/graphic-design1.jpg'
	},{
		data: 'graphic_design',
		src: '.img/step_project/graphic_design/graphic-design1.jpg'
	},{
		data: 'graphic_design',
		src: '.img/step_project/graphic_design/graphic-design1.jpg'
	},{
		data: 'graphic_design',
		src: '.img/step_project/graphic_design/graphic-design1.jpg'
	},{
		data: 'graphic_design',
		src: '.img/step_project/graphic_design/graphic-design1.jpg'
	},{
		data: 'graphic_design',
		src: '.img/step_project/graphic_design/graphic-design1.jpg'
	},{
		data: 'graphic_design',
		src: '.img/step_project/graphic_design/graphic-design1.jpg'
	}],
	[{
		data: 'web_design',
		src: 'img/Step%20Project%20Ham/web%20design/web-design1.jpg'
	},{
		data: 'web_design',
		src: 'img/Step%20Project%20Ham/web%20design/web-design1.jpg'
	},{
		data: 'web_design',
		src: 'img/Step%20Project%20Ham/web%20design/web-design1.jpg'
	},{
		data: 'web_design',
		src: 'img/Step%20Project%20Ham/web%20design/web-design1.jpg'
	},{
		data: 'web_design',
		src: 'img/Step%20Project%20Ham/web%20design/web-design1.jpg'
	},{
		data: 'web_design',
		src: 'img/Step%20Project%20Ham/web%20design/web-design1.jpg'
	},{
		data: 'web_design',
		src: 'img/Step%20Project%20Ham/web%20design/web-design1.jpg'
	},{
		data: 'web_design',
		src: 'img/Step%20Project%20Ham/web%20design/web-design1.jpg'
	},{
		data: 'web_design',
		src: 'img/Step%20Project%20Ham/web%20design/web-design1.jpg'
	},{
		data: 'web_design',
		src: 'img/Step%20Project%20Ham/web%20design/web-design1.jpg'
	},{
		data: 'web_design',
		src: 'img/Step%20Project%20Ham/web%20design/web-design1.jpg'
	},{
		data: 'web_design',
		src: 'img/Step%20Project%20Ham/web%20design/web-design1.jpg'
	}],
	[{
		data: 'landing_pages',
		src: 'img/step_project/landing_page/landing-page1.jpg'
	},{
		data: 'landing_pages',
		src: 'img/step_project/landing_page/landing-page1.jpg'
	},{
		data: 'landing_pages',
		src: 'img/step_project/landing_page/landing-page1.jpg'
	},{
		data: 'landing_pages',
		src: 'img/step_project/landing_page/landing-page1.jpg'
	},{
		data: 'landing_pages',
		src: 'img/step_project/landing_page/landing-page1.jpg'
	},{
		data: 'landing_pages',
		src: 'img/step_project/landing_page/landing-page1.jpg'
	},{
		data: 'landing_pages',
		src: 'img/step_project/landing_page/landing-page1.jpg'
	},{
		data: 'landing_pages',
		src: 'img/step_project/landing_page/landing-page1.jpg'
	},{
		data: 'landing_pages',
		src: 'img/step_project/landing_page/landing-page1.jpg'
	},{
		data: 'landing_pages',
		src: 'img/step_project/landing_page/landing-page1.jpg'
	},{
		data: 'landing_pages',
		src: 'img/step_project/landing_page/landing-page1.jpg'
	},{
		data: 'landing_pages',
		src: 'img/step_project/landing_page/landing-page1.jpg'
	}],
	[{
		data: 'wordpress',
		src: '.img/step_project/graphic_design/graphic-design1.jpg'
	},{
		data: 'wordpress',
		src: '.img/step_project/graphic_design/graphic-design1.jpg'
	},{
		data: 'wordpress',
		src: '.img/step_project/graphic_design/graphic-design1.jpg'
	},{
		data: 'wordpress',
		src: '.img/step_project/graphic_design/graphic-design1.jpg'
	},{
		data: 'wordpress',
		src: '.img/step_project/graphic_design/graphic-design1.jpg'
	},{
		data: 'wordpress',
		src: '.img/step_project/graphic_design/graphic-design1.jpg'
	},{
		data: 'wordpress',
		src: '.img/step_project/graphic_design/graphic-design1.jpg'
	},{
		data: 'wordpress',
		src: '.img/step_project/graphic_design/graphic-design1.jpg'
	},{
		data: 'wordpress',
		src: '.img/step_project/graphic_design/graphic-design1.jpg'
	},{
		data: 'wordpress',
		src: '.img/step_project/graphic_design/graphic-design1.jpg'
	},{
		data: 'wordpress',
		src: '.img/step_project/graphic_design/graphic-design1.jpg'
	},{
		data: 'wordpress',
		src: '.img/step_project/graphic_design/graphic-design1.jpg'
	}],
]
const SET_TIMEOUT = 2000; //2сек
function Gallery() {

// 1 находим враппер gallery-menu
// 2 Добавляем евентлиснер gallery-menu
// 3 Собираем колекцию data-gallery
// 4 Получаем значение data-memu у нажитой кнокбки
// 5 Отсортировать data-gallery по критерию из 4 пункта
// 6 все что не подходит дать элементам display: none;
// 7 Добавить условие для data-memu: all, нужно показать все картинки.

	let cout = 0;
	const galleryMenuWrapper = document.querySelector('.gallery-menu');// 1 находим враппер gallery-menu
	const loadMore = document.querySelector('.load_more');
	const galleryContent = document.querySelector('.gallery-content');

	galleryMenuWrapper.addEventListener('click', (event) => { // 2 Добавляем евентлиснер gallery-menu
		let dataMenu = null;
		const dataGallery = document.querySelectorAll('.flip-card');

		if (event.target.nodeName === "BUTTON") {
			dataMenu = event.target.getAttribute('data-menu');
		}

		let menuItems = document.querySelectorAll('[data-menu]');

		menuItems.forEach(item => {
			if (item.classList.contains('active')) {
				item.classList.remove('active');
			}
		});
//
		if ( !event.target.classList.contains( 'active')) {
			event.target.classList.add( 'active' );
		}

		dataGallery.forEach((item) => {
			if (dataMenu !== item.getAttribute( 'data-gallery' ) && dataMenu !== 'all' ){
				item.style.display='none'
			} else {
				item.style.display='block'
			}
		})
	})

	loadMore.addEventListener('click',() => {

		loadMore.classList.add('loader');
		// loadMore.setAttribute('disabled', '')


		setTimeout(() => {
			loadMore.classList.remove('loader');
			// loadMore.removeAttribute('disabled')

			// Если нам нужно что бы подгружалось по 12 тогда мы можем создать себе массив данных нужного формата которысый состоит из 2 массивов по 12 обьектов
			// и что бы за каждым кликом обращатся к нужному куску мы можем делать каунт клика кторый будет являтся индексом в главном массиве и будем обращяться вот так images[cout]
			images[cout].forEach((image, id) => {
				galleryContent.insertAdjacentHTML('beforeend', `
			<div class="image-item" data-gallery="${image.data}">
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


// amazing work
//
const amazingWorkList = [{
	img: "./img/section_work/landing_pages/landing-page5.jpg",
	cat: "landing pages",
}, {
	img: "./img/section_work/web_design/web-design10.png",
	cat: "web_design",
}, {
	img: "./img/section_work/graphic_design/graphic-design3.jpg",
	cat: "graphic_design",
}, {
	img: "./img/section_work/landing_pages/landing-page10.png",
	cat: "landing pages",
}, {
	img: "./img/section_work/wordpress/wordpress1.jpg",
	cat: "wordpress",
}, {
	img: "./img/section_work/landing_pages/landing-page1.jpg",
	cat: "landing pages",
}, {
	img: "./img/section_work/web_design/web-design1.jpg",
	cat: "web_design",
}, {
	img: "./img/section_work/landing_pages/landing-page11.png",
	cat: "landing pages",
}, {
	img: "./img/section_work/landing_pages/landing-page3.jpg",
	cat: "landing pages",
}, {
	img: "./img/section_work/wordpress/wordpress2.jpg",
	cat: "wordpress",
}, {
	img: "./img/section_work/web_design/web-design3.jpg",
	cat: "web_design",
}, {
	img: "./img/section_work/landing_pages/landing-page2.jpg",
	cat: "landing pages",
}, {
	img: "./img/section_work/web_design/web-design2.jpg",
	cat: "web_design",
}, {
	img: "./img/section_work/graphic_design/graphic-design2.jpg",
	cat: "graphic_design",
}, {
	img: "./img/section_work/wordpress/wordpress3.jpg",
	cat: "wordpress",
}, {
	img: "./img/section_work/wordpress/wordpress4.jpg",
	cat: "wordpress",
}, {
	img: "./img/section_work/landing_pages/landing-page4.jpg",
	cat: "landing pages",
}, {
	img: "./img/section_work/web_design/web-design4.jpg",
	cat: "web_design",
}, {
	img: "./img/section_work/graphic_design/graphic-design4.jpg",
	cat: "graphic_design",
}, {
	img: "./img/section_work/wordpress/wordpress5.jpg",
	cat: "wordpress",
}, {
	img: "./img/section_work/web_design/web-design5.jpg",
	cat: "web_design",
}, {
	img: "./img/section_work/graphic_design/graphic-design5.jpg",
	cat: "graphic_design",
}, {
	img: "./img/section_work/wordpress/wordpress6.jpg",
	cat: "wordpress",
}, {
	img: "./img/section_work/landing_pages/landing-page6.jpg",
	cat: "landing pages",
}, {
	img: "./img/section_work/web_design/web-design6.jpg",
	cat: "web_design",
}, {
	img: "./img/section_work/graphic_design/graphic-design6.jpg",
	cat: "graphic_design",
}, {
	img: "./img/section_work/wordpress/wordpress7.jpg",
	cat: "wordpress",
}, {
	img: "./img/section_work/graphic_design/graphic-design1.jpg",
	cat: "graphic_design",
}, {
	img: "./img/section_work/landing_pages/landing-page7.jpg",
	cat: "landing pages",
}, {
	img: "./img/section_work/web_design/web-design7.jpg",
	cat: "web_design",
}, {
	img: "./img/section_work/graphic_design/graphic-design7.jpg",
	cat: "graphic_design",
}, {
	img: "./img/section_work/wordpress/wordpress8.jpg",
	cat: "wordpress",
}, {
	img: "./img/section_work/landing_pages/landing-page8.jpg",
	cat: "landing pages",
}, {
	img: "./img/section_work/web_design/web-design8.png",
	cat: "web_design",
}, {
	img: "./img/section_work/graphic_design/graphic-design8.jpg",
	cat: "graphic_design",
}, {
	img: "./img/section_work/wordpress/wordpress9.jpg",
	cat: "wordpress",
}, {
	img: "./img/section_work/landing_pages/landing-page9.png",
	cat: "landing pages",
}, {
	img: "./img/section_work/web_design/web-design9.png",
	cat: "web_design",
}, {
	img: "./img/section_work/graphic_design/graphic-design9.jpg",
	cat: "graphic_design",
}, {
	img: "./img/section_work/wordpress/wordpress10.jpg",
	cat: "wordpress",
}, {
	img: "./img/section_work/graphic_design/graphic-design10.jpg",
	cat: "graphic_design",
}, {
	img: "./img/section_work/wordpress/wordpress11.png",
	cat: "wordpress",
}, {
	img: "./img/section_work/web_design/web-design11.png",
	cat: "web_design",
}, {
	img: "./img/section_work/graphic_design/graphic-design11.jpg",
	cat: "graphic_design",
}, {
	img: "./img/section_work/wordpress/wordpress12.png",
	cat: "wordpress",
}, {
	img: "./img/section_work/landing_pages/landing-page12.png",
	cat: "landing pages",
}, {
	img: "./img/section_work/web_design/web-design12.png",
	cat: "web_design",
}, {
	img: "./img/section_work/graphic_design/graphic-design12.jpg",
	cat: "graphic_design",
}, ];

let count = 12;
const workContent = document.querySelector('.work-content-list');
const workList = document.querySelector('.work-list');
const btnLoad = document.querySelector('.show-more');
const preloadList = document.querySelector('.preload-list');

const render = (arr) => {
	arr.map(item => {
		workContent.insertAdjacentHTML('beforeend', `<li>
        <div class="js-work-card">
            <div class="js-work-card-front">
                <img src="${item.img}" alt="amazing work" class="js-work-photo" width="285" height="211">
            </div>
            <div class="js-work-card-back">
                <a href="#void">
                    <span class="fas fa-link js-card-back-more"></span>
                </a>
                <a href="#void">
                    <span class="fas fa-search js-card-back-search"></span>
                </a>
                <p class="js-card-back-title">creative design<span class="js-card-back-subtitle">${item.cat}</span></p>
            </div>
        </div>
    </li>`)
	})
};

const workFilter = (arr, length) => {
	const renderArr = [...arr];
	if (count === 36) {
		btnLoad.classList.add('js-btn-hide');
	}
	const actualArr = renderArr.slice(count, count + 12);
	render(actualArr);
	count += 12;
}

function showCategories(event) {
	const className = 'js-green-item';
	const elem = event.target.closest('.work-item');
	document.querySelector('.js-green-item').classList.remove('js-green-item');
	elem.classList.add('js-green-item');
	workContent.innerHTML = '';
	if (event.target.innerHTML === 'all') {
		if (document.querySelector('.js-btn-hide')) {
			if (count === 48) {
				btnLoad.classList.add('js-btn-hide');
			} else {
				document.querySelector(".js-btn-hide").classList.remove("js-btn-hide");
			}
		}
		const arrToRender = [...amazingWorkList];
		arrToRender.length = count;
		render(arrToRender);
	} else {
		btnLoad.classList.add("js-btn-hide");
		const category = amazingWorkList.filter((item) => item.cat === event.target.innerHTML);
		render(category);
	}
}

document.addEventListener("DOMContentLoaded", () => {
	const arrToRender = [...amazingWorkList];
	arrToRender.length = count;
	render(arrToRender);
})

for (const item of workList.children) {
	item.addEventListener('click', showCategories)
}

btnLoad.addEventListener('click', () => {
	preloadList.classList.add('preload-active');
	setTimeout(() => {
		preloadList.classList.remove('preload-active');
		workFilter(amazingWorkList, count);
	}, 2000);
});

// const images = [
// 	[{
// 		data: 'graphic_design',
// 		img: 'img/step_project/graphic_design/graphic-design1.jpg',
// 		alt: 'Graphic design',
// 	},{
// 		data: 'graphic_design',
// 		img: 'img/step_project/graphic_design/graphic-design2.jpg',
// 		alt: 'Graphic design',
// 	},{
// 		data: 'graphic_design',
// 		img: 'img/step_project/graphic_design/graphic-design3.jpg',
// 		alt: 'Graphic design',
// 	},{
// 		data: 'graphic_design',
// 		img: 'img/step_project/graphic_design/graphic-design4.jpg',
// 		alt: 'Graphic design',
// 	},{
// 		data: 'graphic_design',
// 		img: 'img/step_project/graphic_design/graphic-design5.jpg',
// 		alt: 'Graphic design',
// 	},{
// 		data: 'graphic_design',
// 		img: 'img/step_project/graphic_design/graphic-design6.jpg',
// 		alt: 'Graphic design',
// 	},{
// 		data: 'graphic_design',
// 		img: 'img/step_project/graphic_design/graphic-design7.jpg',
// 		alt: 'Graphic design',
// 	},{
// 		data: 'graphic_design',
// 		img: 'img/step_project/graphic_design/graphic-design8.jpg',
// 		alt: 'Graphic design',
// 	},{
// 		data: 'graphic_design',
// 		img: 'img/step_project/graphic_design/graphic-design9.jpg',
// 		alt: 'Graphic design',
// 	},{
// 		data: 'graphic_design',
// 		img: 'img/step_project/graphic_design/graphic-design10.jpg',
// 		alt: 'Graphic design',
// 	},{
// 		data: 'graphic_design',
// 		img: 'img/step_project/graphic_design/graphic-design11.jpg',
// 		alt: 'Graphic design',
// 	},{
// 		data: 'graphic_design',
// 		img: 'img/step_project/graphic_design/graphic-design12.jpg',
// 		alt: 'Graphic design',
// 	}],
// 	[{
// 		data: 'web_design',
// 		img: 'img/Step%20Project%20Ham/web%20design/web-design1.jpg',
// 		alt: 'Web design',
// 	},{
// 		data: 'web_design',
// 		img: 'img/Step%20Project%20Ham/web%20design/web-design2.jpg',
// 		alt: 'Web design',
// 	},{
// 		data: 'web_design',
// 		img: 'img/Step%20Project%20Ham/web%20design/web-design3.jpg',
// 		alt: 'Web design',
// 	},{
// 		data: 'web_design',
// 		img: 'img/Step%20Project%20Ham/web%20design/web-design4.jpg',
// 		alt: 'Web design',
// 	},{
// 		data: 'web_design',
// 		img: 'img/Step%20Project%20Ham/web%20design/web-design5.jpg',
// 		alt: 'Web design',
// 	},{
// 		data: 'web_design',
// 		img: 'img/Step%20Project%20Ham/web%20design/web-design6.jpg',
// 		alt: 'Web design',
// 	},{
// 		data: 'web_design',
// 		img: 'img/Step%20Project%20Ham/web%20design/web-design7.jpg',
// 		alt: 'Web design',
// 	},{
// 		data: 'web_design',
// 		img: 'img/Step%20Project%20Ham/web%20design/web-design8.jpg',
// 		alt: 'Web design',
// 	},{
// 		data: 'web_design',
// 		img: 'img/Step%20Project%20Ham/web%20design/web-design9.jpg',
// 		alt: 'Web design',
// 	},{
// 		data: 'web_design',
// 		img: 'img/Step%20Project%20Ham/web%20design/web-design10.jpg',
// 		alt: 'Web design',
// 	},{
// 		data: 'web_design',
// 		img: 'img/Step%20Project%20Ham/web%20design/web-design11.jpg',
// 		alt: 'Web design'
// 	},{
// 		data: 'web_design',
// 		img: 'img/Step%20Project%20Ham/web%20design/web-design12.jpg',
// 		alt: 'Web design',
// 	}],
// 	[{
// 		data: 'landing_pages',
// 		img: 'img/step_project/landing_page/landing-page1.jpg',
// 		alt: 'Landing pages',
// 	},{
// 		data: 'landing_pages',
// 		img: 'img/step_project/landing_page/landing-page2.jpg',
// 		alt: 'Landing pages',
// 	},{
// 		data: 'landing_pages',
// 		img: 'img/step_project/landing_page/landing-page3.jpg',
// 		alt: 'Landing pages',
// 	},{
// 		data: 'landing_pages',
// 		img: 'img/step_project/landing_page/landing-page4.jpg',
// 		alt: 'Landing pages',
// 	},{
// 		data: 'landing_pages',
// 		img: 'img/step_project/landing_page/landing-page5.jpg',
// 		alt: 'Landing pages',
// 	},{
// 		data: 'landing_pages',
// 		img: 'img/step_project/landing_page/landing-page6.jpg',
// 		alt: 'Landing pages',
// 	},{
// 		data: 'landing_pages',
// 		img: 'img/step_project/landing_page/landing-page7.jpg',
// 		alt: 'Landing pages',
// 	},{
// 		data: 'landing_pages',
// 		img: 'img/step_project/landing_page/landing-page8.jpg',
// 		alt: 'Landing pages',
// 	},{
// 		data: 'landing_pages',
// 		img: 'img/step_project/landing_page/landing-page9.jpg',
// 		alt: 'Landing pages',
// 	},{
// 		data: 'landing_pages',
// 		img: 'img/step_project/landing_page/landing-page10.jpg',
// 		alt: 'Landing pages',
// 	},{
// 		data: 'landing_pages',
// 		img: 'img/step_project/landing_page/landing-page11.jpg',
// 		alt: 'Landing pages',
// 	},{
// 		data: 'landing_pages',
// 		img: 'img/step_project/landing_page/landing-page12.jpg',
// 		alt: 'Landing pages',
// 	}],
// 	[{
// 		data: 'wordpress',
// 		img: 'img/step_project/graphic_design/graphic-design1.jpg',
// 		alt: 'Wordpress',
// 	},{
// 		data: 'wordpress',
// 		img: 'img/step_project/graphic_design/graphic-design2.jpg',
// 		alt: 'Wordpress',
// 	},{
// 		data: 'wordpress',
// 		img: 'img/step_project/graphic_design/graphic-design3.jpg',
// 		alt: 'Wordpress',
// 	},{
// 		data: 'wordpress',
// 		img: 'img/step_project/graphic_design/graphic-design4.jpg',
// 		alt: 'Wordpress',
// 	},{
// 		data: 'wordpress',
// 		img: 'img/step_project/graphic_design/graphic-design5.jpg',
// 		alt: 'Wordpress',
// 	},{
// 		data: 'wordpress',
// 		img: 'img/step_project/graphic_design/graphic-design6.jpg',
// 		alt: 'Wordpress',
// 	},{
// 		data: 'wordpress',
// 		img: 'img/step_project/graphic_design/graphic-design7.jpg',
// 		alt: 'Wordpress',
// 	},{
// 		data: 'wordpress',
// 		img: 'img/step_project/graphic_design/graphic-design8.jpg',
// 		alt: 'Wordpress',
// 	},{
// 		data: 'wordpress',
// 		img: 'img/step_project/graphic_design/graphic-design9.jpg',
// 		alt: 'Wordpress',
// 	},{
// 		data: 'wordpress',
// 		img: 'img/step_project/graphic_design/graphic-design10.jpg',
// 		alt: 'Wordpress',
// 	},{
// 		data: 'wordpress',
// 		img: 'img/step_project/graphic_design/graphic-design11.jpg',
// 		alt: 'Wordpress',
// 	},{
// 		data: 'wordpress',
// 		img: 'img/step_project/graphic_design/graphic-design12.jpg',
// 		alt: 'Wordpress',
// 	}]
// ];