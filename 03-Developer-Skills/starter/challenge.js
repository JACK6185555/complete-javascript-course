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
