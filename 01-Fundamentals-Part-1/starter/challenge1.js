bill = Number(prompt(`Enter a bill: `));
tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
console.log(tip);
total = bill + tip;
console.log(total);
console.log(
  `The bill was $${bill}, the tip was $${tip}, and the total value was $${total}`
);
bills = [275, 40, 430];
const Calc = function (bill) {
  tip = 0;
  total = 0;
  for (let i = 0; i < bill.length; i++) {
    tip = bill[i] >= 50 && bill[i] <= 300 ? bill[i] * 0.15 : bill[i] * 0.2;
    total = tip + bill[i];
    console.log(
      `The bill was $${bill[i]}, the tip was $${tip}, and the total value was $${total}`
    );
  }
};
Calc(bills);
