'use strict';
const playereo1 = document.querySelector('.player--0');
const playereo2 = document.querySelector('.player--1');
const score0 = document.getElementById('score--0');
const score1 = document.getElementById('score--1');
const dice = document.querySelector('.dice');

const btnroll = document.querySelector('.btn--roll');
const btnhold = document.querySelector('.btn--hold');
const btnnew = document.querySelector('.btn--new');

const current0El = document.getElementById('current--0');
const current0E2 = document.getElementById('current--1');

score0.textContent = 0;
score1.textContent = 0;
dice.classList.add('hidden');

let score = [0, 0];
let currentscore = 0;
let activeplayer = 0;

const switchPlayer = function () {
  document.getElementById(`current--${activeplayer}`).textContent = 0;
  currentscore = 0;
  activeplayer = activeplayer === 0 ? 1 : 0;
  playereo1.classList.toggle('player--active');
  playereo2.classList.toggle('player--active');
};

btnroll.addEventListener('click', function () {
  let dices = Math.trunc(Math.random() * 6) + 1;
  dice.classList.remove('hidden');
  console.log(dices);
  dice.src = `dice-${dices}.png`;

  if (dices !== 1) {
    currentscore += dices;
    document.getElementById(`current--${activeplayer}`).textContent =
      currentscore;
  } else {
    switchPlayer();
  }
});
btnhold.addEventListener('click', function () {
  console.log('hello world');
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
