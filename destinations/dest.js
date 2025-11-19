document.addEventListener("DOMContentLoaded", () => {

  const burger = document.getElementById('burger');
  const openIcon = document.getElementById('openIcon');
  const closeIcon = document.getElementById('closeIcon');
  const nav = document.getElementById('nav');


  const modal = document.getElementById('modal'); 
  const openBtns = Array.from(document.querySelectorAll('.open-modal'));

  const closeBtn = modal ? modal.querySelector('.close') : null;
  const contactForm = document.getElementById('contactForm');



  const toggleMenu = (isOpen) => {

    if (!nav || !burger) return;

    const shouldOpen = (isOpen !== undefined) ? isOpen : !nav.classList.contains('open');

    nav.classList.toggle('open', shouldOpen);
    

    openIcon.style.display = shouldOpen ? 'none' : 'inline';
    closeIcon.style.display = shouldOpen ? 'inline' : 'none';
    

    burger.setAttribute('aria-expanded', shouldOpen);
  };

  if (burger) {
    burger.addEventListener('click', () => {
        toggleMenu(); 
    });
  }


  document.addEventListener('click', (event) => {
    if (!nav) return;
    
    const isMenuOpen = nav.classList.contains('open');
    
    if (isMenuOpen) {
      const isClickInsideNav = nav.contains(event.target);
      const isClickOnBurger = burger.contains(event.target);

      if (!isClickInsideNav && !isClickOnBurger) {

        toggleMenu(false); 
      }
    }
  });




  if (modal) {

    openBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
      });
    });


    if (closeBtn) {
      closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
        document.body.style.overflow = '';
      });
    }


    window.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.style.display = 'none';
        document.body.style.overflow = '';
      }
    });


    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modal.style.display === 'flex') {
        modal.style.display = 'none';
        document.body.style.overflow = '';
      }
    });


    if (contactForm) {
      contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        alert('✅ Повідомлення відправлено. Дякуємо!');
        modal.style.display = 'none';
        document.body.style.overflow = '';
        contactForm.reset();
      });
    }

  } else {
    console.warn("Елемент з id='modal' не знайдено.");
  }

});


window.addEventListener("load", () => {
  const preloader = document.getElementById("preloader");
  if (preloader) {
    preloader.classList.add("fade-out");

    setTimeout(() => {
      preloader.style.display = "none";
    }, 800); 
  }
});


let mybutton = document.getElementById("scrollToTopBtn");

function scrollFunction() {

  if (!mybutton) return; 

  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}


window.onscroll = scrollFunction;


if (mybutton) {
  mybutton.addEventListener('click', function() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
} else {
  console.warn("Елемент з id='scrollToTopBtn' не знайдено.");
}

// =========================================================
// 1. ДАНІ ДЛЯ SWIPER
// =========================================================

const travelDestinationsData = [
    {
        name: "Греція",
        description: "Відкрийте для себе стародавню цивілізацію та райський куточок.",
        image: "images3/greeece.jpg",
        badge: { text: "УСІ ТУРИ", class: "orange" }
    },
    {
        name: "Єгипет",
        description: "Відкрийте для себе країну фараонів і пірамід.",
        image: "images3/eegypt.jpg",
        badge: { text: "УСІ ТУРИ", class: "blue" }
    },
    {
        name: "Африка",
        description: "Відкрийте для себе колиску життя та багаті традиції.",
        image: "images3/afrrica.jpg",
        badge: { text: "УСІ ТУРИ", class: "blue" }
    },
    {
        name: "Франція",
        description: "Відчуйте романтику мистецтва та чудового вина.",
        image: "images3/fraance.jpg",
        badge: { text: "УСІ ТУРИ", class: "blue" }
    },
    {
        name: "Європа",
        description: "Відкрийте для себе чарівність старовинного світу та вічну історію",
        image: "images3/europe.jpg",
        badge: { text: "УСІ ТУРИ", class: "blue" }
    },
    {
        name: "Агарта",
        description: "Шукайте внутрішнє світло і приховане знання",
        image: "images3/thaailand.jpg",
        badge: { text: "УСІ ТУРИ", class: "blue" }
    },
    {
        name: "Азія",
        description: "Прийміть древню мудрість і яскраві спеції.",
        image: "images3/aasia.jpg",
        badge: { text: "УСІ ТУРИ", class: "blue" }
    },
    {
        name: "Італія",
        description: "Насолоджуйтесь величною історією та вишуканими смаками.",
        image: "images3/iitaly.jpg",
        badge: { text: "УСІ ТУРИ", class: "blue" }
    },
    {
        name: "Каліфорнія",
        description: "У пошуках золотого узбережжя і безмежних мрій.",
        image: "images3/california.jpg",
        badge: { text: "УСІ ТУРИ", class: "blue" }
    },
    {
        name: "Японія",
        description: "Станьте свідком блискучого майбутнього та спокійного минулого.",
        image: "images3/japan.jpg",
        badge: { text: "УСІ ТУРИ", class: "blue" }
    }
];


// =========================================================
// 2. ФУНКЦІЯ РЕНДЕРИНГУ СЛАЙДІВ
// =========================================================

function renderTravelSwiperSlides() {
    const swiperWrapper = document.getElementById('travel-swiper-wrapper');
    if (!swiperWrapper) return;

    let slidesHTML = '';

    travelDestinationsData.forEach(item => {
        const slideHTML = `
            <div class="swiper-slide travel-card">
                <div class="card-image">
                    <img src="${item.image}" alt="${item.name}" />
                    <span class="badge ${item.badge.class}">${item.badge.text}</span>
                    <div class="card-text">
                        <h3>${item.name}</h3>
                        <p>${item.description}</p>
                    </div>
                </div>
            </div>
        `;
        slidesHTML += slideHTML;
    });

    swiperWrapper.innerHTML = slidesHTML;
}

// =========================================================
// 3. ФУНКЦІЯ ІНІЦІАЛІЗАЦІЇ SWIPER
// =========================================================

function initTravelSwiper() {
    // Спочатку рендеримо контент
    renderTravelSwiperSlides();

    // Перевіряємо, чи існує контейнер Swiper
    if (document.querySelector('.travelSwiper')) {
        try {
            // Ініціалізація Swiper.js
            const travelSwiper = new Swiper(".travelSwiper", {
                // Налаштування Swiper для карток
                direction: 'horizontal',
                loop: true,
                speed: 600,
                
                // Параметри для адаптивності та відображення кількох карток
                slidesPerView: 1,
                spaceBetween: 30, // Відстань між картками (можна змінити у CSS)

                breakpoints: {
                    // Коли ширина екрана >= 640px
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20
                    },
                    // Коли ширина екрана >= 1024px
                    1024: {
                        slidesPerView: 4,
                        spaceBetween: 30
                    }
                },

                // Пагінація (крапки)
                pagination: {
                    el: ".swiper-pagination",
                    clickable: true,
                },

                // Навігація (стрілки)
                navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                },
                
                // Автопрокрутка
                autoplay: {
                    delay: 5000,
                    disableOnInteraction: false,
                },
            });
        } catch (error) {
            console.error("Помилка ініціалізації Swiper. Переконайтеся, що бібліотека підключена.", error);
        }
    }
}


// =========================================================
// 4. ЗАПУСК
// =========================================================

// Запускаємо ініціалізацію Swiper (яка включає рендеринг)
document.addEventListener('DOMContentLoaded', initTravelSwiper);


// ❗️ Примітка: Ваш існуючий код (бургер, модалка, тощо) має бути тут 
// (перед або після цього блоку коду, але всередині <script>).