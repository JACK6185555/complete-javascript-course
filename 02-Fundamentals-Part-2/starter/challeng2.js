alert(`Challeng#1`);
function calcAverage(a, b, c) {
  return (a + b + c) / 3;
}
const avgDolhins = calcAverage(44, 23, 71);
const avgKoalas = calcAverage(65, 54, 49);

console.log(avgDolhins, avgKoalas);

const checkWinner = function (avgDolhins, avgKoalas) {
  if (avgDolhins > avgKoalas) {
    console.log(`Dolhins was win ${avgDolhins}(${avgDolhins}vs ${avgKoalas})`);
  } else {
    console.log(`Koalas was win ${avgKoalas}(${avgKoalas} vs ${avgDolhins})`);
  }
};
checkWinner(avgDolhins, avgKoalas);
