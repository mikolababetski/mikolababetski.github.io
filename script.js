document.addEventListener("DOMContentLoaded", () => {
  // ===== BURGER MENU (твій існуючий код) =====
  const burger = document.getElementById("burger") || document.querySelector(".burger");
  const nav = document.getElementById("nav") || document.querySelector(".nav");
  const openIcon = document.getElementById("openIcon");
  const closeIcon = document.getElementById("closeIcon");

  console.log("script.js loaded", { burger, nav });

  if (!burger || !nav) {
    console.warn("Burger або Nav не знайдено в DOM");
    // не робимо return — продовжимо, бо модальне все одно може працювати
  } else {
    // початковий стан іконок
    if (openIcon) openIcon.style.display = openIcon.style.display || "inline-block";
    if (closeIcon) closeIcon.style.display = "none";

    const toggleMenu = () => {
      const opened = nav.classList.toggle("active");
      burger.setAttribute("aria-expanded", opened);
      if (openIcon && closeIcon) {
        openIcon.style.display = opened ? "none" : "inline-block";
        closeIcon.style.display = opened ? "inline-block" : "none";
      }
    };

    burger.addEventListener("click", toggleMenu);

    // доступність: Enter / Space відкривають меню
    burger.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        toggleMenu();
      }
    });

    // клік поза меню — закрити
    document.addEventListener("click", (e) => {
      if (!nav.contains(e.target) && !burger.contains(e.target) && nav.classList.contains("active")) {
        nav.classList.remove("active");
        if (openIcon && closeIcon) {
          openIcon.style.display = "inline-block";
          closeIcon.style.display = "none";
        }
        burger.setAttribute("aria-expanded", "false");
      }
    });
  }

  // ===== MODAL (захищений, працює для декількох тригерів) =====
  const modal = document.getElementById('modal'); // перевір, що id="modal" у HTML
  const closeBtn = modal ? modal.querySelector('.close') : null;

  // Знаходимо всі посилання-кнопки, що відкривають модал (наприклад, десктоп та мобільні)
  const openBtns = Array.from(document.querySelectorAll('.open-modal'));

  if (!modal) {
    console.warn("Modal не знайдено в DOM (element with id='modal'). Переконайся, що HTML вставлено після header.");
    return; // якщо модального немає — завершуємо тільки секцію модального
  }

  // Відкрити модальне
  openBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      modal.style.display = 'flex';
      // блокувати скрол тіла під модальним (опціонально)
      document.body.style.overflow = 'hidden';
    });
  });

  // Закрити по кнопці ×
  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      modal.style.display = 'none';
      document.body.style.overflow = '';
    });
  }

  // Закрити при кліку поза вікном (miss-click)
  window.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.style.display = 'none';
      document.body.style.overflow = '';
    }
  });

  // Опціонально: закрити Esc
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.style.display === 'flex') {
      modal.style.display = 'none';
      document.body.style.overflow = '';
    }
  });

  // Обробник форми (необов'язково)
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      // тут можеш додати AJAX відправку або іншу логіку
      alert('✅ Повідомлення відправлено. Дякуємо!');
      modal.style.display = 'none';
      document.body.style.overflow = '';
      contactForm.reset();
    });
  }
});

window.addEventListener("load", () => {
  const preloader = document.getElementById("preloader");
  preloader.classList.add("fade-out");

  setTimeout(() => {
    preloader.style.display = "none";
  }, 800); // час збігається з transition у CSS
});
