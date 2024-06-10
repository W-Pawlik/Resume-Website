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


// MY STACK POP UPS

const popUpEl = document.querySelector('.pop-up');
const popUpOpenerEl = document.querySelectorAll('.pop-up-opener');
const overlayEl = document.querySelector('.overlay')
const closeBtnPopUpEl = document.querySelector('.close-btn')


popUpOpenerEl.forEach(function(popup){
  popup.addEventListener("click", (e) => {
    popUpEl.classList.add("open");
    overlayEl.classList.add('active')
    console.log(popup)

    const popupId = e.target.id;
    console.log(popupId)

    fetch('./resources/data/myStack.json').then(function(response){
      return response.json();
    }).then(function(listOfStack){
      console.log(listOfStack)
      const placeholder = document.querySelector('.pop-up');
    
      let out = "";
      for(let stack of listOfStack){
        console.log(stack.id)
        if (popupId === stack.id.toString()){
          console.log(`hej ${stack.id} ${stack.title}`)
          out += `
          <div class="pop-up-top">
          <h2 class="heading-primary pop-up-title">${stack.title}</h2>
          <i class="fa-solid fa-xmark close-btn"></i>
        </div>
       
        <p class="pop-up-description">${stack.description}</p>
          `
          placeholder.innerHTML = out;
          break;
        } 
      
        }

        // console.log(stack.title)
        // console.log(stack.description)
      //   out += `
      //   <div class="pop-up-top">
      //   <h2 class="heading-primary pop-up-title">${stack.title}</h2>
      //   <i class="fa-solid fa-xmark close-btn"></i>
      // </div>
     
      // <p class="pop-up-description">${stack.description}</p>
      //   `
      // }
    
      // placeholder.innerHTML = out;
    })
  })
})


const closePopUp = () =>{
  popUpEl.classList.remove("open")
  overlayEl.classList.remove('active')
}

overlayEl.addEventListener('click', closePopUp)
closeBtnPopUpEl.addEventListener('click',closePopUp)

// MY STACK DATA


