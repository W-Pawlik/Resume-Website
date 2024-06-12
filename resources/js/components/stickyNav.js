'use strict';

export const navObserver = new IntersectionObserver(
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
