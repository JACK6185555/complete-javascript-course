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
    : console.log(`Koalas win (${Koalas_avg} vs ${Dolphins_avg})`);
}
checkWinner(Dolphins_avg, Koalas_avg);

//challenge 2
alert(`challenge #2`);
const calcTip = (bill_input) => {
  return bill_input >= 50 && bill_input <= 300
    ? bill_input * 0.15
    : bill_input * 0.2;
};
bill_input = Number(prompt("How much about your  bill:"));
tip = calcTip(bill_input);
total = bill_input + tip;
console.log(
  `The bill is ${bill_input}, and the tip is ${tip}, also total is ${total}`
);

//challenge #3
alert("challenge #3");
Mark = {
  full_name: "Mark Miller",
  mass: 78,
  height: 1.69,
  Mark_BMI: function () {
    return this.mass / (this.height * this.height);
  },
};

John = {
  full_name: "John Smith",
  mass: 92,
  height: 1.95,
  John_BMI: function () {
    return this.mass / this.height ** 2;
  },
};

console.log(Mark.Mark_BMI(), John.John_BMI());
Mark.Mark_BMI() > John.John_BMI()
  ? console.log(
      `Mark Miller's BMI (${Mark.Mark_BMI()} )is higher than John Smith's(${John.John_BMI()}))`
    )
  : console.log(
      `John Smith's BMI (${john.John_BMI()}) is higher than Mark Miller's(${Mark.Mark_BMI()})`
    );

//challenge #4
alert("challenge #4");
