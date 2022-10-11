date_1 = [17, 21, 23];
date_2 = [12, 5, 15, 0, 4];
console.log(`....${date_1[0]}ºC....${date_1[1]}ºC....${date_1[2]}ºC`);
const printForecast = function (arr) {
  for (i = 0; i < arr.length; i++) {
    console.log(`...${arr[i]}ºC in ${i + 1} days`);
  }
};
printForecast(date_1);

for (i = 0; i < date_2.length; i++) {
  console.log(`...${date_2[i]}`);
}

printForecast(date_2);
