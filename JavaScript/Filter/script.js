/**
 * Задание 3.
 *
 * Реализовать фильтр галереи
 * */

const images = [
	[{
		data: 'graphic_design',
		src: '.IMG/Step Project Ham/graphic design/graphic-design1.jpg'
	},{
		data: 'graphic_design',
		src: '.IMG/Step Project Ham/graphic design/graphic-design1.jpg'
	},{
		data: 'graphic_design',
		src: '.IMG/Step Project Ham/graphic design/graphic-design1.jpg'
	},{
		data: 'graphic_design',
		src: '.IMG/Step Project Ham/graphic design/graphic-design1.jpg'
	},{
		data: 'graphic_design',
		src: '.IMG/Step Project Ham/graphic design/graphic-design1.jpg'
	},{
		data: 'graphic_design',
		src: '.IMG/Step Project Ham/graphic design/graphic-design1.jpg'
	},{
		data: 'graphic_design',
		src: '.IMG/Step Project Ham/graphic design/graphic-design1.jpg'
	},{
		data: 'graphic_design',
		src: '.IMG/Step Project Ham/graphic design/graphic-design1.jpg'
	},{
		data: 'graphic_design',
		src: '.IMG/Step Project Ham/graphic design/graphic-design1.jpg'
	},{
		data: 'graphic_design',
		src: '.IMG/Step Project Ham/graphic design/graphic-design1.jpg'
	},{
		data: 'graphic_design',
		src: '.IMG/Step Project Ham/graphic design/graphic-design1.jpg'
	},{
		data: 'graphic_design',
		src: '.IMG/Step Project Ham/graphic design/graphic-design1.jpg'
	}],
	[{
		data: 'web_design',
		src: 'IMG/Step%20Project%20Ham/web%20design/web-design1.jpg'
	},{
		data: 'web_design',
		src: 'IMG/Step%20Project%20Ham/web%20design/web-design1.jpg'
	},{
		data: 'web_design',
		src: 'IMG/Step%20Project%20Ham/web%20design/web-design1.jpg'
	},{
		data: 'web_design',
		src: 'IMG/Step%20Project%20Ham/web%20design/web-design1.jpg'
	},{
		data: 'web_design',
		src: 'IMG/Step%20Project%20Ham/web%20design/web-design1.jpg'
	},{
		data: 'web_design',
		src: 'IMG/Step%20Project%20Ham/web%20design/web-design1.jpg'
	},{
		data: 'web_design',
		src: 'IMG/Step%20Project%20Ham/web%20design/web-design1.jpg'
	},{
		data: 'web_design',
		src: 'IMG/Step%20Project%20Ham/web%20design/web-design1.jpg'
	},{
		data: 'web_design',
		src: 'IMG/Step%20Project%20Ham/web%20design/web-design1.jpg'
	},{
		data: 'web_design',
		src: 'IMG/Step%20Project%20Ham/web%20design/web-design1.jpg'
	},{
		data: 'web_design',
		src: 'IMG/Step%20Project%20Ham/web%20design/web-design1.jpg'
	},{
		data: 'web_design',
		src: 'IMG/Step%20Project%20Ham/web%20design/web-design1.jpg'
	}],
	[{
		data: 'landing_pages',
		src: 'IMG/Step Project Ham/landing page/landing-page1.jpg'
	},{
		data: 'landing_pages',
		src: 'IMG/Step Project Ham/landing page/landing-page1.jpg'
	},{
		data: 'landing_pages',
		src: 'IMG/Step Project Ham/landing page/landing-page1.jpg'
	},{
		data: 'landing_pages',
		src: 'IMG/Step Project Ham/landing page/landing-page1.jpg'
	},{
		data: 'landing_pages',
		src: 'IMG/Step Project Ham/landing page/landing-page1.jpg'
	},{
		data: 'landing_pages',
		src: 'IMG/Step Project Ham/landing page/landing-page1.jpg'
	},{
		data: 'landing_pages',
		src: 'IMG/Step Project Ham/landing page/landing-page1.jpg'
	},{
		data: 'landing_pages',
		src: 'IMG/Step Project Ham/landing page/landing-page1.jpg'
	},{
		data: 'landing_pages',
		src: 'IMG/Step Project Ham/landing page/landing-page1.jpg'
	},{
		data: 'landing_pages',
		src: 'IMG/Step Project Ham/landing page/landing-page1.jpg'
	},{
		data: 'landing_pages',
		src: 'IMG/Step Project Ham/landing page/landing-page1.jpg'
	},{
		data: 'landing_pages',
		src: 'IMG/Step Project Ham/landing page/landing-page1.jpg'
	}],
	[{
		data: 'wordpress',
		src: '.IMG/Step Project Ham/graphic design/graphic-design1.jpg'
	},{
		data: 'wordpress',
		src: '.IMG/Step Project Ham/graphic design/graphic-design1.jpg'
	},{
		data: 'wordpress',
		src: '.IMG/Step Project Ham/graphic design/graphic-design1.jpg'
	},{
		data: 'wordpress',
		src: '.IMG/Step Project Ham/graphic design/graphic-design1.jpg'
	},{
		data: 'wordpress',
		src: '.IMG/Step Project Ham/graphic design/graphic-design1.jpg'
	},{
		data: 'wordpress',
		src: '.IMG/Step Project Ham/graphic design/graphic-design1.jpg'
	},{
		data: 'wordpress',
		src: '.IMG/Step Project Ham/graphic design/graphic-design1.jpg'
	},{
		data: 'wordpress',
		src: '.IMG/Step Project Ham/graphic design/graphic-design1.jpg'
	},{
		data: 'wordpress',
		src: '.IMG/Step Project Ham/graphic design/graphic-design1.jpg'
	},{
		data: 'wordpress',
		src: '.IMG/Step Project Ham/graphic design/graphic-design1.jpg'
	},{
		data: 'wordpress',
		src: '.IMG/Step Project Ham/graphic design/graphic-design1.jpg'
	},{
		data: 'wordpress',
		src: '.IMG/Step Project Ham/graphic design/graphic-design1.jpg'
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


amazing work

