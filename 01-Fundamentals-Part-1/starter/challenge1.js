//challenge #1
Mark_mass = Number(prompt("Mark'mass: "));
Mark_height = Number(prompt("Mark's height: "));

John_mass = Number(prompt("John's mass: "));
John_height = Number(prompt("John's height: "));

Mark_BMI = Mark_mass / Mark_height ** 2;
John_BMI = John_mass / (Mark_height * Mark_height);

markHigherBMI = Mark_BMI > John_BMI;
console.log(markHigherBMI);

//challenge #2
if (markHigherBMI === true) {
  console.log("Mark's BMI is higher than John's!");
} else {
  console.log("John's BMI is higher than Mark's!");
}

//challenge #3
Dolphins_score = Number(prompt("Dolphins's score: "));
Koalas_score = Number(prompt("Koalas's score: "));

avgDolp = Dolphins_score / 3;
avgkoal = Koalas_score / 3;

if (avgDolp > avgkoal && avgDolp >= 100) {
  console.log("Dolphins wins");
} else if (avgkoal > avgDolp && avgkoal >= 100) {
  console.log("Koalas wins");
} else {
  console.log("No team wins!");
}
//challenge #4
value = Number(prompt("How much bill ? "));
tips = value > 50 && value <= 300 ? value * 0.2 : value * 0.15;
total = value + tips;
console.log(
  `The bill was ${value}, the tips was ${tips}, and the total value ${total}.`
);
