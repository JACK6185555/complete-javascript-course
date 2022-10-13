'use strict';
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct Number ✨';
document.querySelector('.number').textContent = '13';
document.querySelector('.score').textContent = '10';
document.querySelector('.guess').value = 23;
*/
let number = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
console.log(number);
//
const printmessage = function (message) {
  document.querySelector('.message').textContent = message;
};
const displayscore = function (score) {
  document.querySelector('.score').textContent = score;
};
//

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  if (!guess) {
    printmessage('⛔️ No number!');
  } else if (guess === number) {
    printmessage('Correct Number ✨');
    document.querySelector('body').style.background = '#60b347';
    document.querySelector('.number').textContent = number;
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess !== number) {
    if (score > 1) {
      printmessage(guess > number ? '📈 Too high!' : '📉 Too low!');
      score--;
      displayscore(score);
    } else {
      printmessage('Game over 😥');
      displayscore(0);
    }
  }
});
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  Math.trunc(Math.random() * 20) + 1;
  printmessage('start guessing...');
  displayscore(score);
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.background = '#222';
});
