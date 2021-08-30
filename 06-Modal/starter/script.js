'use strict';

//use classes when adding and removing styles
//avoid using induvidual styles
//key press events belong to document itself and parameter is passed ction event
// console.log(document.contentType);
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

const closeModal = () => {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

const openModal = () => {
  console.log('button clicked');
  modal.classList.remove('hidden'); //dont use dot
  overlay.classList.remove('hidden');
};
// console.log(btnCloseModal, btnsOpenModal);

for (let i = 0; i < btnsOpenModal.length; i++) {
  //console.log(btnsOpenModal[i].textContent);
  btnsOpenModal[i].addEventListener('click', openModal);
}

btnCloseModal.addEventListener('click', closeModal);

overlay.addEventListener('click', closeModal);

// console.log(document);
document.addEventListener('keydown', function (event) {
  //console.log(event);
  if (event.key === 'Escape' && !modal.classList.contains('hidden'))
    closeModal();
});
