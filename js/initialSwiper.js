const mainSwiper = new Swiper(".main_slide", {
	autoplay: true,
	autoplaySpeed: 1000,
	speed: 2000,
	direction: "horizontal",
	loop: true,
});

const eventSwiper = new Swiper(".main_promotion", {
	// Optional parameters
	autoplay: true,
	autoplaySpeed: 500,
	speed: 500,
	direction: "horizontal",
	loop: true,
	slidesPerView: 4,
	pagination: {
		el: ".swiper-pagination",
	},
});

const benefitSwiper = new Swiper(".BR_items", {
	autoplay: true,
	autoplaySpeed: 2000,
	speed: 2000,
	direction: "horizontal",
	loop: true,
});
