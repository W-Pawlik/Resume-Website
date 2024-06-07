'use strict';

// NAVIGATION
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

// SCROLL BEHAVIOUR

const allLinks = document.querySelectorAll('a:link');

allLinks.forEach(function (link) {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const href = link.getAttribute('href');
    console.log(href);

    if (href === '#')
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });

    if (href !== '#' && href.startsWith('#')) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: 'smooth' });
    }

    if (link.classList.contains('nav-link')) {
      headerEl.classList.toggle('nav-open');
      document.getElementsByTagName('body')[0].style.overflowY = 'hidden';
      document.getElementsByTagName('html')[0].style.overflowY = 'scroll';
    }
  });
});

// STICKY NAV

const sectionPrimeEl = document.querySelector('.section-prime');

const observer = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    if (!ent.isIntersecting) document.body.classList.add('sticky');
    if (ent.isIntersecting) document.body.classList.remove('sticky');
  },
  {
    root: null,
    treshold: 0,
    rootMargin: '-100px',
  }
);
observer.observe(sectionPrimeEl);
