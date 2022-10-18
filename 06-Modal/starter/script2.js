'use string';

const btnshowModal = document.querySelectorAll('.show-modal');
const btncloseModal = document.querySelector('.close-modal');
const Modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');

for (i = 0; i < btnshowModal.length; i++) {
  btnshowModal[i].addEventListener('click', function () {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
  });
}
