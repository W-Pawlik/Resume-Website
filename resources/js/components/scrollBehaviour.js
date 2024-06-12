'use stric';

export function scrollBehaviour(){
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
}