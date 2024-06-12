'use strict'

export function hideAnimations(){
    
const createObserver = (selector, rootMargin) => {
    return new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            // entry.target.classList.add(showClass);
            entry.target.classList.remove(selector);
          }
        });
      },
      {
        rootMargin: rootMargin,
      }
    );
  };
  
  const observers = [
    { selector: 'hidden-bottom', rootMargin: '400px' },
    { selector: 'hidden-right', rootMargin: '-400px' },
    { selector: 'hidden-left', rootMargin: '-400px' },
    { selector: 'hidden-scale', rootMargin: '-400px' },
  ];
  
  observers.forEach(({ selector, rootMargin }) => {
    const observer = createObserver(selector, rootMargin);
    const elements = document.querySelectorAll(`.${selector}`);
    elements.forEach(el => observer.observe(el));
  });
}