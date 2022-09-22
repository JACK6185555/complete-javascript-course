alert("Challenge#1");
Mark_mass = 78;
Mark_tall = 1.69;
John_mass = 92;
John_tall = 1.95;
Mark_BMI = Mark_mass / Mark_tall ** 2;
John_BMI = John_mass / (John_tall * John_tall);

Mark_BMI > John_BMI ? console.log(true) : console.log(false);
alert("Challenge#2");
if (Mark_BMI > John_BMI) {
  console.log(`Mark's BMI (${Mark_BMI}) is higher than John's(${John_BMI})!`);
} else {
  console.log(`John's BMI(${John_BMI}) is higher than Mark's(${Mark_BMI})!`);
}

alert("Challenge#3");
Dolphins_score = (96 + 108 + 89) / 3;
Koalas_score = (88 + 91 + 110) / 3;
if (Dolphins_score > Koalas_score && Dolphins_score === 100) {
  console.log(`Dolpins win🏆`);
} else if (Koalas_score > Dolphins_score && Koalas_score === 100) {
  console.log(`Koales win🏆`);
} else {
  console.log(`no team wins`);
}

alert("Challenge#4");
let bill = 430;
const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
console.log(
  `The bill was ${bill}, the tip was ${tip}, and the total was ${bill + tip}`
);
