'use strict';
const btn_check = document.querySelector('.check');
const random = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
console.log(random);

const printMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const printScore = function (score) {
  document.querySelector('.score').textContent = score;
};

btn_check.addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  if (!guess) {
    printMessage('⛔️ No number!');
  } else if (guess === random) {
    printMessage('Correct Number ✨');
    document.querySelector('body').style.background = '#60b347';
    document.querySelector('.number').textContent = random;

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess !== random) {
    if (score > 1) {
      printMessage(guess > random ? '📈 Too high!' : '📉 Too low!');
      score--;
      printScore(score);
    } else {
      printMessage('Game over 😥');
      printScore(0);
    }
  }
});

const btn_again = document.querySelector('.again');
btn_again.addEventListener('click', function () {
  let score = 20;
  console.log(Math.trunc(Math.random() * 20) + 1);
  printScore(score);
  document.querySelector('.guess').value = '';
  printMessage('Start guessing...');
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.background = '#222';
});
