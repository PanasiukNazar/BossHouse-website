"use strict";

document.addEventListener('DOMContentLoaded', function () {
  'use strict'; // Initialize datepicker

  if (typeof flatpickr !== 'undefined') {
    flatpickr('#datepicker', {});
  } // Menu fixed on scroll


  window.addEventListener('scroll', function () {
    var windowTop = window.scrollY + 1;
    var mainMenu = document.querySelector('.navbar');

    if (mainMenu) {
      if (windowTop > 50) {
        mainMenu.classList.add('navbar--fixed', 'navbar--dark', 'fadeInDown');
      } else {
        mainMenu.classList.remove('navbar--fixed', 'navbar--dark', 'fadeInDown');
      }
    }
  });
});