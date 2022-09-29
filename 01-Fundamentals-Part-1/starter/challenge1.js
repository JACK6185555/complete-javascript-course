//challenge 1
alert("challenge #1");
Mark_mass = Number(prompt("What's Mark mass?"));
Mark_height = Number(prompt("What's Mark's height?"));

John_mass = Number(prompt("What's John mass?"));
John_height = Number(prompt("What's John height?"));

Mark_BMI = Mark_mass / Mark_height ** 2;
John_BMI = John_mass / (John_height * John_height);

Number(Mark_BMI) > Number(John_BMI) ? console.log(true) : console.log(false);

//challenge 2
alert("challenge #2");
if (Mark_BMI > John_BMI) {
  console.log(`Mark's BMI(${Mark_BMI}) is higher than John's(${John_BMI})! `);
} else {
  console.log(`John's BMI(${John_BMI}) is higher than Mark's(${Mark_BMI})! `);
}

//challenge 3
alert(`challenge #3`);
const calcaverage = function (a, b, c) {
  return (a + b + c) / 3;
};
Dolphins_score = calcaverage(96, 108, 89);
Koalas_score = calcaverage(88, 91, 110);

if (Dolphins_score > Koalas_score && Dolphins_score >= 100)
  [console.log(`Doplhins wins`)];
else if (Koalas_score > Dolphins_score && Koalas_score >= 100) {
  console.log(`Koalas wins`);
} else {
  console.log(`No one wins`);
}
//challenge4
alert(`challenge #4`);

const bill_input = Number(prompt(`How much on the bill value?`));
const tip =
  bill_input >= 50 && bill_input <= 300 ? bill_input * 0.15 : bill_input * 0.2;
console.log(
  `The bill was ${bill_input},the tip was ${tip},and the total value ${
    bill_input + tip
  }`
);
