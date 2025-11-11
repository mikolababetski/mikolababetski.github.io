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


  