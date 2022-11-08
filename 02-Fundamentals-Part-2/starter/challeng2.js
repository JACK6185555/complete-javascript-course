/*
alert("challenge #1");

const calcAverage = function (a, b, c) {
  return (a + b + c) / 3;
};

const checkWinner = (avgDolphins, avgKoalas) => {
  avgDolphins > avgKoalas
    ? console.log("Dolphins win")
    : console.log("Koalas win");
};

const dolphins_score = calcAverage(44, 23, 71);
const koalas_score = calcAverage(65, 54, 49);
checkWinner(dolphins_score, koalas_score);
*/

alert("challenge #2");

const bills = [125, 555, 44];
const tips = [];
const total = [];

const calcTip = (bill) => {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};
for (const a of bills) {
  const tip = calcTip(a);
  tips.push(tip);
  total.push(tip + a);
}
console.log(bills, tips, total);

/*
alert("Challenge #3");

const Mark = {
  name: "Mark Miller",
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    return this.mass / this.height ** 2;
  },
};

const John = {
  name: "John Smoth",
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    return this.mass / this.height ** 2;
  },
};

const Mark_BMI = Mark.calcBMI();
console.log(Mark_BMI);

const John_BMI = John.calcBMI();
console.log(John_BMI);

Mark_BMI > John_BMI
  ? console.log(`Mark's BMI(${Mark_BMI}) is higher than John(${John_BMI})`)
  : console.log(`John's BMI (${John_BMI}) is higher than Mark's (${Mark_BMI})`);
*/
