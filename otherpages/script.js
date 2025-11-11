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

const priceRange = document.querySelector(".price-range");
const priceValue = document.getElementById("priceValue");

if (priceRange) {
  priceRange.addEventListener("input", () => {
    priceValue.textContent = priceRange.value;
  });
}

  const range = document.querySelector('.price-range');

  function updateRangeColor(e) {
    const min = e.target.min ? e.target.min : 0;
    const max = e.target.max ? e.target.max : 100;
    const val = ((e.target.value - min) / (max - min)) * 100;

    e.target.style.background = `linear-gradient(to right, #1D1D54 ${val}%, #fff ${val}%)`;
  }

  range.addEventListener('input', updateRangeColor);

  // виклик при завантаженні сторінки, щоб фон одразу був правильний
  updateRangeColor({ target: range });

  const pages = document.querySelectorAll('.tour-page');
  const buttons = document.querySelectorAll('.page-btn');

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      // Змінюємо активну кнопку
      buttons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      // Перемикаємо сторінки
      const page = btn.getAttribute('data-page');
      pages.forEach(p => p.classList.remove('active'));
      document.querySelector(`.tour-page:nth-child(${page})`).classList.add('active');
    });
  });

   // Отримуємо всі сторінки турів і кнопки
  const tourPages = document.querySelectorAll('.tour-page');
  const pageButtons = document.querySelectorAll('.page-btn');

  // Функція перемикання сторінок
  function showPage(pageNumber) {
    // Ховаємо всі сторінки
    tourPages.forEach((page) => page.classList.remove('active'));
    // Знімаємо активність з усіх кнопок
    pageButtons.forEach((btn) => btn.classList.remove('active'));

    // Знаходимо потрібну сторінку і кнопку
    const targetPage = document.querySelector(`.tour-page:nth-of-type(${pageNumber})`);
    const targetButton = document.querySelector(`.page-btn[data-page="${pageNumber}"]`);

    // Показуємо потрібну сторінку і активуємо кнопку
    if (targetPage) targetPage.classList.add('active');
    if (targetButton) targetButton.classList.add('active');
  }

  // Додаємо слухачі кліків до кнопок
  pageButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const pageNum = btn.getAttribute('data-page');
      showPage(pageNum);
    });
  });

  // Показуємо першу сторінку при завантаженні
  showPage(1);

  

