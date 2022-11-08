/*
alert("Challenge #1");

Mark_mass = Number(prompt(`Mark's mass: `));
console.log(`Mark's mass:(${Mark_mass})`);
Mark_height = Number(prompt(`Mark's height: `));
console.log(`Mark's height:(${Mark_height})`);

Mark_BMI = Mark_mass / Mark_height ** 2;
alert(`Mark's BMI ${Mark_BMI}`);
console.log(Mark_BMI, 3);

John_mass = Number(prompt(`John's mass: `));
console.log(`John's mass:(${John_mass})`);
John_height = Number(prompt(`John's height: `));
console.log(`John's height:(${John_height})`);

John_BMI = John_mass / John_height ** 2;
alert(`John's BMI ${John_BMI}`);
console.log(John_BMI, 3);

alert("Challenge #2");
const markHigherBMI = (Mark_BMI, John_BMI) => {
  Mark_BMI > John_BMI && console.log("Marks BMI more than John!");
  John_BMI > Mark_BMI && console.log("Johns BMI more than Mark");
};
markHigherBMI(Mark_BMI, John_BMI);
*/
/*
alert("Challenge#3");

const Dolphins = (a, b, c) => {
  return (a + b + c) / 3;
};
const Koalas = (a, b, c) => {
  return (a + b + c) / 3;
};

const calculater_score = (a, b) => {
  if ((a > b) & (a >= 100)) {
    console.log("Dolphins team win");
  } else if ((b > a) & (b >= 100)) {
    console.log("Koalas team win");
  } else {
    console.log("No team wins");
  }
};

const Dolphins_score = Dolphins(97, 112, 101);
const Koalas_score = Koalas(109, 95, 123);
console.log(`Dolphins_average_score:${Dolphins_score}`);
console.log(`Koalas_average _score:${Koalas_score}`);
const calculater = calculater_score(Dolphins_score, Koalas_score);
*/
/*
alert("Challenge #4");
const bills = [275, 40, 430];
for (const bill of bills) {
  let tip = 0;
  if (bill >= 50 && bill <= 300) {
    tip = bill * 0.15;
  } else {
    tip = bill * 0.2;
  }
  console.log(bill, tip);
  let total = bill + tip;
  console.log(total);
  console.log(
    `The bill was ${bill},the tip was ${tip},and the total value ${total}`
  );
}
*/
