//challenge #1
const calcAverage = function (a) {
  return a / 3;
};
Dolphins_score = 85 + 54 + 41;
Koalas_score = 23 + 34 + 27;

avgDolp = calcAverage(Dolphins_score);
avgkoal = calcAverage(Koalas_score);

const checkWinner = function (a, b) {
  if (a > b) {
    console.log(`Dolphins win (${avgDolp} vs ${avgkoal})`);
  } else {
    console.log(`Koalas win (${avgkoal} vs ${avgDolp})`);
  }
};
checkWinner(avgDolp, avgkoal);

//challenge #2

const calcTip = (bill) => {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};
bill = [125, 555, 44];
for (let i = 0; i < bill.length; i++) {
  tips = calcTip(bill[i]);
  total = bill[i] + tips;
  console.log(bill[i], tips, total);
}

//challenge #3
Mark = {
  full_name: "Mark Miller",
  mass: 78,
  height: 1.69,
  Mark_BMI: function () {
    this.mass / this.height ** 2;
  },
};
John = {
  full_name: "John Smith",
  mass: 92,
  height: 1.95,
  John_BMI: function () {
    this.mass / this.height ** 2;
  },
};

Mark.Mark_BMI() > John.John_BMI()
  ? console.log(
      `Mark's BMI (${Mark.Mark_BMI()}) is higher than John's (${John.John_BMI()})!`
    )
  : console.log("John's BMI (28.3) is higher than Mark's (23.9)!");
