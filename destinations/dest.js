const burger = document.getElementById('burger');
const openIcon = document.getElementById('openIcon');
const closeIcon = document.getElementById('closeIcon');
const nav = document.getElementById('nav');

burger.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  openIcon.style.display = isOpen ? 'none' : 'inline';
  closeIcon.style.display = isOpen ? 'inline' : 'none';
  burger.setAttribute('aria-expanded', isOpen);
});


  if (typeof Swiper !== "undefined") {
    const travelSwiper = new Swiper(".travelSwiper", {
      slidesPerView: 3,
      spaceBetween: 30,
      loop: true,
      grabCursor: true,
      centeredSlides: false,

      // === головне! Lazy loading + preload ===
      preloadImages: false,
      lazy: {
        loadPrevNext: true, // підвантажує сусідні
        loadPrevNextAmount: 2, // на 2 слайди вперед/назад
      },
      watchSlidesProgress: true,
      observer: true,
      observeParents: true,

      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },

      // адаптивність
      breakpoints: {
        1200: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        992: {
          slidesPerView: 2,
          spaceBetween: 25,
        },
        768: {
          slidesPerView: 1.3,
          spaceBetween: 20,
          centeredSlides: true,
        },
        480: {
          slidesPerView: 1.1,
          spaceBetween: 15,
          centeredSlides: true,
        },
      },
    });

    console.log("✅ Swiper initialized:", travelSwiper);
  } else {
    console.warn("⚠️ Swiper.js не підключений — перевір лінк у HTML");
  }

