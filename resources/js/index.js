'use strict';

const menu_btn = document.querySelector('.btn-mobile-nav');
const header = document.querySelector('.header');

menu_btn.addEventListener('click', e => {
  if (header.classList.contains('nav-open')) {
    header.classList.remove('nav-open');
    document.getElementsByTagName('body')[0].style.overflowY = 'hidden';
    document.getElementsByTagName('html')[0].style.overflowY = 'scroll';
  } else {
    header.classList.add('nav-open');
    document.getElementsByTagName('body')[0].style.overflowY = 'hidden';
    document.getElementsByTagName('html')[0].style.overflowY = 'hidden';
  }
});
