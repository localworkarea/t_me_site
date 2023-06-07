/*
Документація по роботі у шаблоні: 
Документація слайдера: https://swiperjs.com/
Сніппет(HTML): swiper
*/

// Підключаємо слайдер Swiper з node_modules
// При необхідності підключаємо додаткові модулі слайдера, вказуючи їх у {} через кому
// Приклад: { Navigation, Autoplay }
import Swiper, { Navigation, Autoplay, Pagination, Manipulation, EffectFade } from 'swiper';
/*
Основні модулі слайдера:
Navigation, Pagination, Autoplay, 
EffectFade, Lazy, Manipulation
Детальніше дивись https://swiperjs.com/
*/

// Стилі Swiper
// Базові стилі
import "../../scss/base/swiper.scss";
// Повний набір стилів з scss/libs/swiper.scss
// import "../../scss/libs/swiper.scss";
// Повний набір стилів з node_modules
// import 'swiper/css';

// Ініціалізація слайдерів
function initSliders() {
	if (document.querySelector('.menu__slider')) { 
		new Swiper('.menu__slider', { 
			// Підключаємо модулі слайдера
			// для конкретного випадку
			modules: [Navigation, Autoplay],
			observer: true,
			observeParents: true,
			slidesPerView: 1,
			spaceBetween: 0,
			autoHeight: true,
			speed: 800,

			//touchRatio: 0,
			//simulateTouch: false,
			loop: true,
			//preloadImages: false,
			//lazy: true,

			// Ефекти
			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},

			// Пагінація
			/*
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
			},
			*/

			// Скроллбар
			/*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

			// Кнопки "вліво/вправо"
			navigation: {
				prevEl: '.menu__slider .swiper-button-prev',
				nextEl: '.menu__slider .swiper-button-next',
			},
			/*
			// Брейкпоінти
			breakpoints: {
				640: {
					slidesPerView: 1,
					spaceBetween: 0,
					autoHeight: true,
				},
				768: {
					slidesPerView: 2,
					spaceBetween: 20,
				},
				992: {
					slidesPerView: 3,
					spaceBetween: 20,
				},
				1268: {
					slidesPerView: 4,
					spaceBetween: 30,
				},
			},
			*/
			// Події
			on: {

			}
		});
	}
	if (document.querySelector('.slider-promo__slider')) { 
		new Swiper('.slider-promo__slider', { 
			// Підключаємо модулі слайдера
			// для конкретного випадку
			modules: [Navigation, Pagination],
			observer: true,
			observeParents: true,
			slidesPerView: 1,
			spaceBetween: 50,
			autoHeight: true,
			speed: 800,
			grabCursor: true,
			//touchRatio: 0,
			//simulateTouch: false,
			// loop: true,
			//preloadImages: false,
			//lazy: true,

			// Ефекти
			effect: 'fade',
			// autoplay: {
			// 	delay: 3000,
			// 	disableOnInteraction: false,
			// },

			// Пагінація
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
				type: "progressbar",
			},
			

			// Скроллбар
			// scrollbar: {
			// 	el: '.swiper-scrollbar',
			// 	draggable: true,
			// },
			

			// Кнопки "вліво/вправо"
			navigation: {
				prevEl: '.slider-promo__slider .swiper-button-prev',
				nextEl: '.slider-promo__slider .swiper-button-next',
			},
			/*
			// Брейкпоінти
			breakpoints: {
				640: {
					slidesPerView: 1,
					spaceBetween: 0,
					autoHeight: true,
				},
				768: {
					slidesPerView: 2,
					spaceBetween: 20,
				},
				992: {
					slidesPerView: 3,
					spaceBetween: 20,
				},
				1268: {
					slidesPerView: 4,
					spaceBetween: 30,
				},
			},
			*/
			// Події
			on: {

			}
		});
	}
	if (document.querySelector('.team__slider')) { 
		new Swiper('.team__slider', { 
			// Підключаємо модулі слайдера
			// для конкретного випадку
			// modules: [Manipulation, ],
			observer: true,
			observeParents: true,
			slidesPerView: "auto",
			spaceBetween: 40,
			// autoHeight: true,
			speed: 800,
			grabCursor: true,
			//touchRatio: 0,
			//simulateTouch: false,
			// loop: true,
			//preloadImages: false,
			//lazy: true,

			simulateTouch: true,
			touchRatio: 3,
			touchAngle: 60,
			grabCursor: true,
			freeMode: true,

			// Ефекти
			// effect: 'fade',
			// autoplay: {
			// 	delay: 3000,
			// 	disableOnInteraction: false,
			// },

			// Пагінація
			// pagination: {
			// 	el: '.swiper-pagination',
			// 	clickable: true,
			// 	type: "progressbar",
			// },
			

			// Скроллбар
			// scrollbar: {
			// 	el: '.swiper-scrollbar',
			// 	draggable: true,
			// },
			

			// Кнопки "вліво/вправо"
			// navigation: {
			// 	prevEl: '.slider-promo__slider .swiper-button-prev',
			// 	nextEl: '.slider-promo__slider .swiper-button-next',
			// },
			/*
			// Брейкпоінти
			breakpoints: {
				640: {
					slidesPerView: 1,
					spaceBetween: 0,
					autoHeight: true,
				},
				768: {
					slidesPerView: 2,
					spaceBetween: 20,
				},
				992: {
					slidesPerView: 3,
					spaceBetween: 20,
				},
				1268: {
					slidesPerView: 4,
					spaceBetween: 30,
				},
			},
			*/
			// Події
			on: {

			}
		});
	}
}


window.addEventListener("load", function (e) {
	// Запуск ініціалізації слайдерів
	initSliders();
});