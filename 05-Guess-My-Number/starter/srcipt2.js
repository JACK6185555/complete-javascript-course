'use strict';
let random = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
console.log(random);

const Inputmessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  if (!guess) {
    Inputmessage('No number❌');
  } else if (guess === random) {
    Inputmessage('Correct Number✨');
    document.querySelector('body').style.background = '#60b347';
    document.querySelector('.number').textContent = random;

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (score > 0) {
    guess > random ? Inputmessage('Too high📈') : Inputmessage('Too low📉');
    score--;
    document.querySelector('.score').textContent = score;
  } else {
    Inputmessage('Lose the game GG~😥');
    document.querySelector('.score').textContent = 0;
  }
});
document.querySelector('.again').addEventListener('click', function () {
  let random = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  console.log(random);
  Inputmessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.background = '#222';
});
