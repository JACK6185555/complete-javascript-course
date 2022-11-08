/*
date1 = [17, 21, 23];
date2 = [12, 5, -5, 0, 4];

const printForcast = function (a) {
  let text = "";
  for (let i = 0; i < a.length; i++) {
    text = `...${a[i]}ºC in ${i + 1} days`;
    console.log(text);
  }
};
k = printForcast(date1);
q = printForcast(date2);
*/

const data_1 = [17, 21, 23];
const data_2 = [12, 5, -5, 0, 4];

const printForecast = (a) => {
  for (let i = 0; i < a.length; i++) {
    text = `...${a[i]}ºC in ${i + 1} days`;
    console.log(text);
  }
};

printForecast(data_1);
console.log(`xxxxxxxxxx`);
printForecast(data_2);
