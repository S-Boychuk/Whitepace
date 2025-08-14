(function () {
	let pricingSwiper = null;

	function enableSwiper() {
		if (pricingSwiper) return;
		pricingSwiper = new Swiper(".pricing__slider", {
			slidesPerView: "auto",
			centeredSlides: true,

			loop: false,

			pagination: {
				el: ".pricing__pagination",
				clickable: true,
			},
			simulateTouch: true,
			touchRatio: 1,
			grabCursor: true,
		});
	}

	function disableSwiper() {
		if (!pricingSwiper) return;
		pricingSwiper.destroy(true, true);
		pricingSwiper = null;

		const wrapper = document.querySelector(".pricing__plans");
		if (wrapper) wrapper.removeAttribute("style");
		document.querySelectorAll(".pricing__plan").forEach((slide) => {
			slide.removeAttribute("style");
		});
	}

	function handleResize() {
		if (window.matchMedia("(min-width: 1440px)").matches) {
			disableSwiper();
		} else {
			enableSwiper();
		}
	}

	window.addEventListener("load", handleResize);
	window.addEventListener("resize", handleResize);
})();
