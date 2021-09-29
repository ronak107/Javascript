// convert checking number
/*console.log(23 === 23.0);

// base 10 -0 to 9
// binary base 2 - 0 1
console.log(0.1 + 0.2);
console.log(9 / 10);
*/

/////////////////
//MATH AND ROUNDING
// console.log(Math.sqrt(25));
// console.log(25 ** (1 / 2));
// console.log(8 ** (1 / 3));

// console.log(Math.max(2, 12, 45, 63, 22, 1));

// console.log(Math.PI);
// console.log(Math.random());
// console.log(Math.trunc(Math.random() * 6) + 1);

// const randomint = (min, max) =>
//   Math.trunc(Math.random() * (max - min) + 1) + min;
// console.log(randomint(10, 20));

// console.log(Math.round(23.3));
// console.log(Math.round(23.4));
// console.log(Math.round(23.5));

// console.log(Math.ceil(25.6));
// console.log(Math.ceil(25.2));

// console.log(Math.floor(20.3));
// console.log(Math.floor(20.9));

///////////////////////////
//The remainder operator

// console.log(5 % 2);
// console.log(5 / 2);

// console.log(8 % 3);
// console.log(8 / 3);

///////////////////
//WORKING WITH BIGINT
// console.log(455653535353536365632214524n);
// console.log(BigInt(421512));

/////////////
// CREATING A DATE
// const now = new Date();
// console.log(now);

// console.log(new Date(2037, 17, 19, 15, 23, 5));

// const future = new Date(2037, 18, 19, 15, 23);
// console.log(future);
// console.log(future.getDate());
// console.log(future.getFullYear());
// console.log(future.getMonth());

///////////////////
//timer setTimeout setinterval

setTimeout(
  (arg1, arg2) => console.log(`here your pizza ${arg1} and ${arg2}`),
  3000,
  'ronak',
  'vaghasiya'
);
console.log('waiting..........');

// setinterval
setInterval(function () {
  const now = new Date();
  console.log(now);
}, 5);
