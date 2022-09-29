//challenge 1
alert(`challenge #1`);
function calcAverage(a, b, c) {
  return (a + b + c) / 3;
}
Dolphins_avg = calcAverage(44, 23, 71);
Koalas_avg = calcAverage(65, 54, 49);

function checkWinner(Dolphins_avg, Koalas_avg) {
  Dolphins_avg > Koalas_avg
    ? console.log(`Dolphins win (${Dolphins_avg} vs ${Koalas_avg})`)
    : console.log(`Koalas win (${Koalas_avg} vs ${Dolphins_avg}`);
}
checkWinner(Dolphins_avg, Koalas_avg);

//challenge 2
alert(`challenge #2`);
