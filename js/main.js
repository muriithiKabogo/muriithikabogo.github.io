
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

const heroImages = document.querySelectorAll(".company-wrapper");

let currentImage = 1;
let lastImage = 0;
setInterval(() => {
  heroImages[lastImage].classList.remove("active");
  heroImages[currentImage].classList.add("active");
  lastImage = currentImage;
  currentImage = ((currentImage + 1) >= heroImages.length)? 0 : (currentImage + 1);
}, 4000);