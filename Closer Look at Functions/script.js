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

const oneWord = function (str) {
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
