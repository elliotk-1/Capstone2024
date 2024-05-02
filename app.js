const menu = document.querySelector('#mobile-menu'),
      menuLink = document.querySelector('.navbar__menu'),

menu.addEventListener('click', function () {
    menu.classList.toggle('is-active');
    menuLink.classList.toggle('active');
});

// to close dropdown menu if you click outside of it (year selection)

// for searching table on the playerStat page
// have to search specific words/numbers for this to wrk
// want to make it a filter feature in future