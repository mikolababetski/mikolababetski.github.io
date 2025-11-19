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
