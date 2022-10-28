'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  order: function (startmenuIndex, mainmeniIndex) {
    return [this.starterMenu[startmenuIndex], this.mainMenu[mainmeniIndex]];
  },
  orderMenu: function (order1, order2, order3) {
    alert(
      `Here is your declicious pasta with ${order1},${order2} and ${order3}! Please enjoy!`
    );
  },
  orderPizza: function (mainorder, ...otherorder) {
    console.log(mainorder);
    console.log(otherorder);
  },

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};
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

const [q = 1, w = 1, e = 1] = [8, 9];
console.log(q, w, e);
//.Destructuring Objects
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
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

const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

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

console.log('---And---');
console.log(0 && 'Jason');
console.log(7 && 'Jason');
console.log('Hello' && 23 && null && 'jason');
