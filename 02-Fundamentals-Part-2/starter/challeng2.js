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
alert("Challenge#2"); //ask momo wong
function calcTip(bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.2 : bill * 0.15;
}

bill = [125, 555, 44];
tip = [calcTip(bill[0]), calcTip(bill[1], calcTip(bill[2]))];
total = bill + tip;
console.log(bill, tip, total);
alert("Challeng#3"); //ask momo wong
const mark = {
  full_name: "Mark Miller",
  mass: 78,
  heigth: 1.69,
  mark_bmi: function () {
    this.bmi = this.mass / this.heigth ** 2;
  },
};
const john = {
  full_name: "John Smith",
  mass: 92,
  heigth: 1.95,
  john_bmi: function () {
    this.bmi = this.mass / this.heigth ** 2;
  },
};
mark.mark_bmi();
john.john_bmi();
console.log(mark.bmi, john.bmi);

if (mark.bmi > john.bmi) {
  console.log(`Mark's BMI(${mark.bmi})is higher than John's(${john.bmi})`);
} else {
  console.log(`John's BMI(${john.bmi})is higher than Mark's(${mark.bmi})`);
}
alert("Challeng#4");
