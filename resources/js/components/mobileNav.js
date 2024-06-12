'use strict';
export function mobileNav(){
    const menuBtnEl = document.querySelector('.btn-mobile-nav');
const headerEl = document.querySelector('.header');

menuBtnEl.addEventListener('click', e => {
  if (headerEl.classList.contains('nav-open')) {
    headerEl.classList.remove('nav-open');
    document.getElementsByTagName('body')[0].style.overflowY = 'hidden';
    document.getElementsByTagName('html')[0].style.overflowY = 'scroll';
  } else {
    headerEl.classList.add('nav-open');
    document.getElementsByTagName('body')[0].style.overflowY = 'hidden';
    document.getElementsByTagName('html')[0].style.overflowY = 'hidden';
  }
});

}