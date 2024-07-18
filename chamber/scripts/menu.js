document.addEventListener("DOMContentLoaded", function() {
  const hamburger = document.querySelector('#mobile-menu');
  const menu = document.querySelector('.navbar__menu');

  hamburger.addEventListener('click', function() {
      menu.classList.toggle('active');
      hamburger.classList.toggle('is-active');
  });
});