document.addEventListener("DOMContentLoaded", () => {
  // === Змінні для БУРГЕР-МЕНЮ ===
  const burger = document.getElementById('burger');
  const openIcon = document.getElementById('openIcon');
  const closeIcon = document.getElementById('closeIcon');
  const nav = document.getElementById('nav');

  // === Змінні для МОДАЛЬНОГО ВІКНА ===
  const modal = document.getElementById('modal'); 
  const openBtns = Array.from(document.querySelectorAll('.open-modal'));
  // Якщо modal існує, шукаємо closeBtn, інакше null
  const closeBtn = modal ? modal.querySelector('.close') : null;
  const contactForm = document.getElementById('contactForm');


  // 1. ЛОГІКА БУРГЕР-МЕНЮ (Об'єднана в одну функцію)
  // ----------------------------------------------------------------

  // Функція для відкриття/закриття меню
  const toggleMenu = (isOpen) => {
    // Перевірка на існування елементів, щоб уникнути помилок
    if (!nav || !burger) return;
    
    // Якщо isOpen не передано, використовуємо поточний стан (для кліку по бургеру)
    const shouldOpen = (isOpen !== undefined) ? isOpen : !nav.classList.contains('open');

    nav.classList.toggle('open', shouldOpen);
    
    // Встановлюємо стан іконок
    openIcon.style.display = shouldOpen ? 'none' : 'inline';
    closeIcon.style.display = shouldOpen ? 'inline' : 'none';
    
    // Оновлюємо атрибут доступності
    burger.setAttribute('aria-expanded', shouldOpen);
  };

  // 1.1. Клік на бургері: перемикає меню
  if (burger) {
    burger.addEventListener('click', () => {
        toggleMenu(); 
    });
  }

  // 1.2. Клік поза меню (Місклік): закриває меню
  document.addEventListener('click', (event) => {
    if (!nav) return;
    
    const isMenuOpen = nav.classList.contains('open');
    
    if (isMenuOpen) {
      const isClickInsideNav = nav.contains(event.target);
      const isClickOnBurger = burger.contains(event.target);

      if (!isClickInsideNav && !isClickOnBurger) {
        // Якщо клік відбувся поза межами обох елементів (nav та burger), закриваємо меню
        toggleMenu(false); 
      }
    }
  });


  // 2. ЛОГІКА МОДАЛЬНОГО ВІКНА
  // ----------------------------------------------------------------

  if (modal) {
    // 2.1. Відкриття модального вікна
    openBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
      });
    });

    // 2.2. Закриття на кнопку X
    if (closeBtn) {
      closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
        document.body.style.overflow = '';
      });
    }

    // 2.3. Закриття при кліку поза модальним вікном (на затемнений фон)
    window.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.style.display = 'none';
        document.body.style.overflow = '';
      }
    });

    // 2.4. Закриття на клавішу Escape
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modal.style.display === 'flex') {
        modal.style.display = 'none';
        document.body.style.overflow = '';
      }
    });

    // 2.5. Відправка форми (зброс)
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

// 3. ЛОГІКА ПРЕЛОАДЕРА
// ----------------------------------------------------------------
// Цей код повинен бути поза DOMContentLoaded, оскільки він має виконуватися 
// після завантаження ВСІХ ресурсів (зображень, стилів).
window.addEventListener("load", () => {
  const preloader = document.getElementById("preloader");
  if (preloader) {
    preloader.classList.add("fade-out");

    setTimeout(() => {
      preloader.style.display = "none";
    }, 800); 
  }
});


// 4. ЛОГІКА КНОПКИ "НАГОРУ" (Scroll To Top)
// ----------------------------------------------------------------
let mybutton = document.getElementById("scrollToTopBtn");

function scrollFunction() {
  // Перевірка, чи кнопка існує
  if (!mybutton) return; 

  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// Виклик функції при прокрутці
window.onscroll = scrollFunction;

// Додавання обробника кліку
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

// 1. Масив об'єктів з даними про туристичні напрямки
const destinationsData = [
    {
        name: "Греція",
        description: "Відкрийте для себе стародавню історію та пляжі",
        image: "images/Greece.jpg"
    },
    {
        name: "Єгипет",
        description: "Відкрийте для себе країну фараонів і пірамід",
        image: "images/Egypt.jpg"
    },
    {
        name: "Африка",
        description: "Відправляйтеся в подорож на все життя",
        image: "images/Africa.jpg"
    },
    {
        name: "Франція",
        description: "Насолоджуйтесь мистецтвом, культурою та кухнею",
        image: "images/France.jpg"
    },

];


function renderDestinations() {
    const container = document.getElementById('destinations-container');

    if (!container) {
        console.error("Контейнер #destinations-container не знайдено.");
        return;
    }

    let htmlContent = '';


    destinationsData.forEach(destination => {
        const cardHTML = `
            <div class="dest-card" style="background-image: url('${destination.image}');">
                <div class="overlay">
                    <h3>${destination.name}</h3>
                    <p>${destination.description}</p>
                </div>
            </div>
        `;

        htmlContent += cardHTML;
    });


    container.innerHTML = htmlContent;
}


document.addEventListener('DOMContentLoaded', renderDestinations);
