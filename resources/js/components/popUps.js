'use strict';

export function popUps(){
    
const popUpEl = document.querySelector('.pop-up');
const popUpOpenerEl = document.querySelectorAll('.pop-up-opener');
const overlayEl = document.querySelector('.overlay');
const closeBtnPopUpEl = document.querySelector('.close-btn');

popUpOpenerEl.forEach(function (popup) {
  popup.addEventListener('click', e => {
    popUpEl.classList.add('open');
    overlayEl.classList.add('active');
    console.log(popup);

    const popupId = e.target.id;
    console.log(popupId);

    fetch('./resources/data/myStack.json')
      .then(function (response) {
        return response.json();
      })
      .then(function (listOfStack) {
        console.log(listOfStack);
        const placeholder = document.querySelector('.pop-up');

        let out = '';
        for (let stack of listOfStack) {
          console.log(stack.id);
          if (popupId === stack.id.toString()) {
            console.log(`hej ${stack.id} ${stack.title}`);
            out += `
          <div class="pop-up-top">
          <h2 class="heading-primary pop-up-title">${stack.title}</h2>
          <i class="fa-solid fa-xmark close-btn"></i>
        </div>
       
        <p class="pop-up-description">${stack.description}</p>
          `;
            placeholder.innerHTML = out;
            break;
          }
        }
      });
  });
});

const closePopUp = () => {
  popUpEl.classList.remove('open');
  overlayEl.classList.remove('active');
};

overlayEl.addEventListener('click', closePopUp);
closeBtnPopUpEl.addEventListener('click', closePopUp);

}