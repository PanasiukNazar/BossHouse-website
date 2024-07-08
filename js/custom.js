document.addEventListener('DOMContentLoaded', function () {
    'use strict';

    // Initialize datepicker
    if (typeof flatpickr !== 'undefined') {
        flatpickr('#datepicker', {});
    }

    // Menu fixed on scroll
    window.addEventListener('scroll', function () {
        let windowTop = window.scrollY + 1;
        let mainMenu = document.querySelector('.navbar');
        if (mainMenu) {
            if (windowTop > 50) {
                mainMenu.classList.add(
                    'navbar--fixed',
                    'navbar--dark',
                    'fadeInDown',
                );
            } else {
                mainMenu.classList.remove(
                    'navbar--fixed',
                    'navbar--dark',
                    'fadeInDown',
                );
            }
        }
    });
});