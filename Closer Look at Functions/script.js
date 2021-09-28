'use strict';
// default perameter

/*const bookings = [];
const creatbooking = function (flightnum, numpassengers, price) {
  const booking = {
    flightnum,
    numpassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};
creatbooking('lh123', 2, 60000);
*/

//////////////
//how passing argument work:value vs.refference
/*const flight = 'LH234';
const jonas = {
  name: 'jonas bhai',
  passport: 21456352,
};
const checkin = function (flightnum, passenger) {
  flightnum = 'LH999';
  passenger.name = 'Mr.' + passenger.name;

  if (passenger.passport === 21456352) {
    alert('check in');
  } else {
    alert('wrong password!!');
  }
};
checkin(flight, jonas);
console.log(flight);
console.log(jonas);
*/

////////////////
//frist-class and higher-order function

////////////////////////
//functions accepting callback function

/*const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

// Higher-order function
const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);

  console.log(`Transformed by: ${fn.name}`);
};

transformer('JavaScript is the best!', upperFirstWord);
transformer('JavaScript is the best!', oneWord);

// JS uses callbacks all the time
const high5 = function () {
  console.log('');
};
document.body.addEventListener('click', high5);
['Jonas', 'Martha'].forEach(high5);
*/

///////////////
//functions returning function
/*const greet = function (greting) {
  return function (name) {
    console.log(`${greting} ${name}`);
  };
};
const greeterhey = greet('hey');
greeterhey('jonas');
greet('hello')('jonas');
*/

////////////////////
// The call and apply Methods
/*const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  // book: function() {}
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

// lufthansa.book(239, 'Jonas Schmedtmann');
// lufthansa.book(635, 'John Smith');

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

const book = lufthansa.book;

// Does NOT work
// book(23, 'Sarah Williams');

// Call method
book.call(eurowings, 23, 'Sarah Williams');
console.log(eurowings);

book.call(lufthansa, 239, 'Mary Cooper');
console.log(lufthansa);

const swiss = {
  airline: 'Swiss Air Lines',
  iataCode: 'LX',
  bookings: [],
};

book.call(swiss, 583, 'Mary Cooper');

// Apply method
const flightData = [583, 'George Cooper'];
book.apply(swiss, flightData);
console.log(swiss);

book.call(swiss, ...flightData);

///////////////////////////
// bind method
const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);
bookEW(23, 'steven williams');
bookLH(22, 'ronak');
bookLX(20, 'rushi');

const bookEW23 = book.bind(swiss, 23);
bookEW23('janak');
bookEW23('copper');

// with event listeners
lufthansa.planes = 300;
lufthansa.buyplane = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
};
// lufthansa.buyplane();
document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyplane.bind(lufthansa));

// partial application
const addRax = (rate, value) => value + value * rate;
console.log(addRax(0.1, 200));

const addVAT = addRax.bind(null, 0.23);
console.log(addVAT(100));
console.log(addVAT(23));
*/

/////////////////////////
//immediately invoked function expressions()

// const runonce = function () {
//   console.log('this will never run again');
// };
// runonce();

// //IIFE
// (function () {
//   console.log('this will never run again');
// })();
// () => console.log('this will also never run again');

//////////////////////////
//closures

// const secureBooking = function () {
//   let passengercount = 0;

//   return function () {
//     passengercount++;
//     console.log(`${passengercount} passenger`);
//   };
// };

// const booker = secureBooking();
// booker();
// booker();
// booker();

// let f;
// const g = function () {
//   const a = 23;
//   f = function () {
//     console.log(a + 2);
//   };
// };

// const h = function () {
//   const b = 77;
//   f = function () {
//     console.log(b * 2);
//   };
// };
// g();
// f();
// console.dir(f);

// h();
// f();
// console.dir(f);

///////////////////////////////////////
// Coding Challenge #2

/* 
This is more of a thinking challenge than a coding challenge 

Take the IIFE below and at the end of the function, attach an event listener that changes the color of the selected h1 element ('header') to blue, each time the BODY element is clicked. Do NOT select the h1 element again!

And now explain to YOURSELF (or someone around you) WHY this worked! Take all the time you need. Think about WHEN exactly the callback function is executed, and what that means for the variables involved in this example.

GOOD LUCK 
*/

(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';

  document.querySelector('body').addEventListener('click', function () {
    header.style.color = 'blue';
  });
})();
