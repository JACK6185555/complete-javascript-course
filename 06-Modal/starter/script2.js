'use string';

const showModal = document.querySelector('.show-modal');
const btnclose = document.querySelector('.close-modal');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');

for (let i = 0; i < showModal.length; i++)
  showModal[i].addEventListener('click', function () {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
  });
