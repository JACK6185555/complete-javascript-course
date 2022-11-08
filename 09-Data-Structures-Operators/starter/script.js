'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const hours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  hours,

  order(startmenuIndex, mainmeniIndex) {
    return [this.starterMenu[startmenuIndex], this.mainMenu[mainmeniIndex]];
  },
  orderMenu(order1, order2, order3) {
    alert(
      `Here is your declicious pasta with ${order1},${order2} and ${order3}! Please enjoy!`
    );
  },
  orderPizza(mainorder, ...otherorder) {
    console.log(mainorder);
    console.log(otherorder);
  },
};
//set
const orderset = new Set([
  'Pasta',
  'Pizza',
  'Pizza',
  'Risotto',
  'Pasta',
  'Pizza',
]);
console.log(orderset);
console.log(new Set('Jack'));
console.log(orderset.size);
console.log(orderset.has('Pizza'));
console.log(orderset.has('Peter'));
orderset.add('Garlic Bread');
orderset.add('Garlic Bread');
console.log(orderset);
/*
//Loop object

const properties = Object.keys(hours);
console.log(properties);

let openStr = `We are open on ${properties.length} days!`;

for (const day of Object.keys(hours)) {
  openStr += ` ${day},`;
}
console.log(openStr);

const values = Object.values(hours); //Object.values()返回一個數組，其元素是在對像上找到的可枚舉屬性值。屬性的順序與通過手動循環對象的屬性值給出的順序相同
console.log(values);

const values_1 = Object.entries(hours);
console.log(values_1);

for (const [key, { open, close }] of values_1) {
  console.log(`On ${key}, we open at ${open} and close at ${close}`);
}
*/
/************************
/*
//Optional Chaining (?.)
console.log(restaurant.hours.mon?.open);
console.log(restaurant.hours.fri?.open);

for (const day of weekdays) {
  const open = restaurant.hours[day]?.open || 'close'; //?.檢查等同於鏈中的空值
  console.log(`On ${day}day, we open at ${open}`);
}

const Newarr = weekdays.map(myFunction);

function myFunction(item) {
  const open =
    restaurant.hours[item]?.open ||
    console.log(`Sorry we have shut down on ${item}day`);
  console.log(`On ${item}day, we open at ${open}`);
}

const newarray = [{ name: 'Jack', age: 18 }];
console.log(newarray[0]?.name ?? 'array empty');
*/
////////////////////////////////////////////////////////////
/*
//.Destructuring Arrays
const arr = [2, 3, 6];
const [x, y, z] = arr;
console.log(x, y, z);

let [First, second] = restaurant.categories;
console.log(First, second);

[First, second] = [second, First];
console.log(First, second);

console.log(restaurant.order(2, 0));

const nested = [3, 4, [5, 6]];
const [a, , b] = nested;
console.log(a, b);

const [i, , [j, k]] = nested;
console.log(i, j, k);
console.log(j, k);

const [q = 1, w = 1, e = 1] = [8, 9];
console.log(q, w, e);
*/

/*
//.Destructuring Objects
const { name, categories } = restaurant;
console.log(name, categories);

const { name: restaurantName, categories: tags } = restaurant;
console.log(restaurantName, hours, tags);

const { mainMenu: main = [], starterMenu: starters = [] } = restaurant;
console.log(main, starters);

const Aarr = [1, 2, 3];
const Barr = [...Aarr, 7, 8, 9];
console.log(Barr);
console.log(...Barr);

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);
console.log(...newMenu);
const name_ = 'Jason';
const letters = [...name_, ''];
console.log(letters);
console.log(...name_);

const orderfood = [
  prompt("Let's make pasta! Ingredient1?"),
  prompt('Ingredient2?'),
  prompt('and ingredient3'),
];
console.log(orderfood);
restaurant.orderMenu(...orderfood);
const newResaaurant = { Foundin: 1987, Founder: 'Tomy K', ...restaurant };
console.log(newResaaurant);

const restaurantcopy = { ...restaurant };
restaurantcopy.name = '07 VTC';
console.log(restaurant.name);
console.log(restaurantcopy.name);

const ar = [1, 2, 3, 4, 5, 6, 7, 8];
const [av, bv, cv, ...other] = [1, 2, 3, 4, 5, 6];
console.log(av, bv, cv, other);

const [pizza, , risotto, ...other_2] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, other_2);

const add = function (...number) {
  let sum = 0;
  for (let i = 0; i < number.length; i++) sum += number[i];
  console.log(sum);
};
add(2, 3);
add(2, 3, 5, 7, 8);
add(7, 8, 9, 10, 11);

const x1 = [1, 2, 5, 6, 7];
add(...x1);

restaurant.orderPizza('apple', 'dick', 'quwehu', 'qwuehkjhsda', 'hgjhdgsajd');
restaurant.orderPizza('pizza');
*/
////////////////////////////////////////////////////
/*
console.log('---OR---');
console.log(3 || 'Jason');
console.log('Jason' || 3);
console.log('0' || 'Jason');
console.log(0 || 'Jack');
console.log(undefined || null);
console.log(undefined || 0 || '' || 'Hello' || 23 || null);

restaurant.guests = 105;

const guests = restaurant.guests ? restaurant.guests : 10;
console.log(guests);

const guests2 = restaurant.guests || 10;
console.log(guests2);
*/
////////////////////////////////////////////////////
/*
console.log('---And---');
console.log(0 && 'Jason');
console.log(7 && 'Jason');
console.log('Hello' && 23 && null && 'jason');
*/
/////////////////////////////////////
/*
// Logical Assignment Operators

const rest1 = {
  name: 'Abc',
  numGuests: 20,
};
const rest2 = {
  name: 'edu',
  onwer: 'Greey Lai',
};
//Or assigment operation
//rest1.numGuests = rest1.numGuests || 10;
//rest2.numGuests = rest2.numGuests || 10;
//rest1.numGuests ||= 10;
//rest2.numGuests ||= 10;

//nulllish assigment operation(null or  undefined)
rest1.numGuests ??= 10;
rest2.numGuests ??= 10;
//And assigment operation
rest1.onwer &&= `Happy`;
rest2.onwer &&= `Happy`;

console.log(rest1);
console.log(rest2);
*/
///////////////////////////////////////

/*

//Loop array
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu[0]);
for (const abc of menu) {
  console.log(abc);
}

for (const abc of menu.entries()) {   <該entries()方法返回一個帶有鍵/值對的 Array Iterator 對象：
  console.log(`${abc[0] + 1}:${abc[1]}`);
}
for (const [a, el] of menu.entries()) {
  console.log(`${a + 1}:${el}`);
}
//console.log([...menu.entries()]);
*/
