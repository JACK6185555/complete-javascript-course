'use strict';

const poll = {
  question: 'What is your favourite programming language ?',
  Option: ['0: Javascript', '1: Python', '2:Rust', '3:C++'],
  answers: new Array(4).fill(0),
  registerNewAnswer() {
    const answer = Number(
      prompt(
        `${this.question}\n${this.Option.join('\n')}\n(Write option number)`
      )
    );
    typeof answer === 'number' &&
      answer < this.answers.length &&
      this.answers[answer]++;
    this.displayResults();
    this.displayResults('string');
  },
  displayResults(type = 'array') {
    if (type === 'array') {
      console.log(this.answers);
    } else if (type === 'string') {
      console.log(`Poll results are ${this.answers}`);
    }
  },
};
poll.registerNewAnswer();

document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll));

(function () {
  const hearder = document.querySelector('h1');
  hearder.style.color = 'red';
  hearder.addEventListener('click', function () {
    hearder.style.color = 'blue';
  });
})();
