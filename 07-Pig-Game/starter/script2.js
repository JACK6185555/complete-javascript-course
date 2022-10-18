'use strict';
const playereo1 = document.getElementById('score--0');
const playereo2 = document.getElementById('score--1');
const dice = document.querySelector('.dice');
const btnroll = document.querySelector('.btn--roll');
const btnhold = document.querySelector('.btn--hold');
const btnnew = document.querySelector('.btn--new');
const player1 = document.querySelector('.player--0');
const player2 = document.querySelector('.player--1');

let score = [0, 0];
let currentscore = 0;
let activeplayer = 0;

const switchPlayer = function () {
  currentscore = 0;
  document.getElementById(`current--${activeplayer}`).textContent =
    currentscore;
  activeplayer = activeplayer === 0 ? 1 : 0;
  player1.classList.toggle('player--active');
  player2.classList.toggle('player--active');
};

playereo1.textContent = 0;
playereo2.textContent = 0;

dice.classList.add('hidden');

btnroll.addEventListener('click', function () {
  let number = Math.trunc(Math.random() * 6) + 1;
  dice.src = `dice-${number}.png`;
  dice.classList.remove('hidden');

  if (number !== 1) {
    currentscore += number;
    document.getElementById(`current--${activeplayer}`).textContent =
      currentscore;
  } else {
    switchPlayer();
  }
});

btnhold.addEventListener('click', function () {
  score[activeplayer] += currentscore;
  document.getElementById(`score--${activeplayer}`).textContent =
    score[activeplayer];

  if (score[activeplayer] >= 20) {
    document
      .querySelector(`.player--${activeplayer}`)
      .classList.add('player--winner');
    document
      .querySelector(`.player--${activeplayer}`)
      .classList.remove('player--active');
  } else {
    switchPlayer();
  }
});
btnnew.addEventListener('click', function () {
  playereo1.textContent = 0;
  playereo2.textContent = 0;
  dice.classList.add('hidden');
  score = [0, 0];
  currentscore = 0;
  activeplayer = 0;
  document
    .querySelector(`.player--${activeplayer}`)
    .classList.remove('player--winner');
  document
    .querySelector(`.player--${activeplayer}`)
    .classList.add('player--active');
});
