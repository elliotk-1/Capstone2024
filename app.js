const menu = document.querySelector('#mobile-menu'),
      menuLink = document.querySelector('.navbar__menu'),

menu.addEventListener('click', function () {
    menu.classList.toggle('is-active');
    menuLink.classList.toggle('active');
});
