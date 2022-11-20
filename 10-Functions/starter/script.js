'use strict';
/*
const bookings = [];

const createBooking = (
  flightNum,
  numPassengers = 12,
  price = 199 * numPassengers
) => {
  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
};
createBooking('LM123');
createBooking('LM123', 2);
createBooking('LM123', 5);
createBooking('LM123', undefined);
*/
//Default Parameters
const flight = 'LH234';
const jonas = {
  name: 'Jonas Schmedtmann',
  passport: 24739479284,
};

const checkin = (flightNum, passenger) => {
  flightNum = 'LH234';
  passenger.name = 'Mr. ' + passenger.name;

  if (passenger.passport === 24739479284) {
    alert('Checked in');
  } else {
    alert('Wrong passport');
  }
};
checkin(flight, jonas);
console.log(flight);
console.log(jonas);
//How Passing Arguments Works: Value vs. Reference
const oneWord = str => {
  return str.replace(/ /g, ' ').toLowerCase();
};
const upperFirstword = function (str) {
  const [first, ...othersword] = str.split(' ');
  return [first.toUpperCase(), ...othersword].join(' ');
};

const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string:${fn(str)}`);
  console.log(`Transformed by:${fn.name}`);
};

transformer(`Javcscript is the best `, upperFirstword);
console.log('xxxxxxxxx');
transformer(`Javcscript is the best `, oneWord);

const high5 = () => {
  console.log('👋');
};

document.body.addEventListener('click', high5);
['Jonas', 'Martha', 'Adam'].forEach(high5);
//Functions Returning Functions
const great = greating => {
  return name => {
    console.log(`${greating} ${name}`);
  };
};

const greaterHey = great('Hey!');
greaterHey('Jason');
greaterHey('Steven');

great('Hello!')('Jack');

const greatArr = greeting => name => {
  console.log(`${greeting} ${name}`);
};
greatArr('Hi!')('Jason');

//The call and apply Methods
const lufthansa = {
  airLine: 'Lufthansa',
  iataCode: 'LH',
  booking: [],
  book(filigtNum, name) {
    console.log(
      `${name} booked a seat on ${this.airLine} flight ${this.iataCode}${filigtNum}`
    );
    this.booking.push({ flight: `${this.iataCode}${filigtNum}`, name });
  },
};

lufthansa.book(234, 'Jason Wong');
lufthansa.book(731, 'Kevin Ching');
console.log(lufthansa);

const eurowings = {
  airLine: 'Eurowings',
  iataCode: 'EW',
  booking: [],
};

const book = lufthansa.book;
book.call(eurowings, 24, 'Sarah Williams');
console.log(eurowings);

const swiss = {
  airLine: 'Swiss Air Lines',
  iataCode: 'LX',
  booking: [],
};
book.call(swiss, 23, 'Mary Cooper');
console.log(swiss);

const fligData = [583, 'George Cooper'];
book.apply(swiss, fligData);
console.log(swiss);

const bookEW = book.bind(eurowings);
const bookLX = book.bind(swiss);
const bookLH = book.bind(lufthansa);
bookEW(23, 'Steven Williams');

const bookEW23 = book.bind(eurowings, 125);
bookEW23('Jason Wong');

lufthansa.planes = 300;
lufthansa.buynewPlace = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
};
document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buynewPlace.bind(lufthansa));

const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addTve = addTax.bind(null, 0.23);
console.log(addTve(50));

const runOnce = function () {
  console.log('This will never run again');
};
runOnce();

(function () {
  console.log('This is will never run again');
})();

(() => console.log('This will Also never run again'))();
{
  var notPrivate = 46;
}
console.log(notPrivate);

const secureBooking = function () {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};
const booker = secureBooking();
booker();
booker();
booker();
booker();

let f;

const g = function () {
  const a = 23;
  f = function () {
    console.log(a + 2);
  };
};

const h = function () {
  const b = 777;
  f = function () {
    console.log(b * 2);
  };
};

g();
f();
h();
console.dir(f);

const boarPassengers = function (n, wait) {
  const perGroup = n / 3;

  setTimeout(function () {
    console.log(`We are now boarding in all ${n} passengers`);
    console.log(`There are 3 groups, each with ${perGroup}`);
  });
  console.log(`Will start boarding in ${wait} seconds`);
};
boarPassengers(180, 3);
