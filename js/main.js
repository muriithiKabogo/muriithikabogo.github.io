
const flagSlider = new Swiper('.flag-slider', {
  slidesPerView: 3,
  spaceBetween: 40,
  autoplay: {
    delay: 1000,
    disableOnInteraction: false,
  },
  loop: true,
  breakpoints: {
    640: {
      slidesPerView: 4,
    },
    768: {
      slidesPerView: 5,
    },
    1024: {
      slidesPerView: 6,
    },
    1440: {
      slidesPerView: 7,
    },
  }
});

