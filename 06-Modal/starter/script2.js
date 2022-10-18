'use string';

const btnshowModal = document.querySelectorAll('.show-modal');
const btncloseModal = document.querySelector('.close-modal');
const Modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');

const openModal = function () {
  Modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  Modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (i = 0; i < btnshowModal.length; i++) {
  btnshowModal[i].addEventListener('click', openModal);
}

btncloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (a) {
  console.log(a.key);
  if (a.key === 'Tab' && !Modal.classList.contains('hidden')) {
    closeModal();
  }
});
