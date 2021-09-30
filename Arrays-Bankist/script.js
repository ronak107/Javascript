/*let arr = ['a', 'b', 'c', 'd', 'f'];

// SLICE
// console.log(arr.slice(2));
// console.log(arr.slice(2, 4));
// console.log(arr.slice(-1));
// console.log(arr.slice(1, -2));

// SPLICE
console.log(arr.splice(2));
console.log(arr.splice(1));

// REVERSE
arr = ['a', 'b', 'c', 'd', 'f'];
const arr2 = ['j', 'k', 'l', 'm'];
console.log(arr2.reverse());
console.log(arr2);

// concat
const letters = arr.concat(arr2);
console.log(letters);
console.log(...arr, ...arr2);

// join
console.log(letters.join('-'));
*/

///////////////////////////
//LOOPING ARRAY FOREACH

/*const movements = [200, -45, -500, 3000, 500, -600];
for (const movement of movements) {
  if (movement > 0) {
    console.log(`you deposited ${movement}`);
  } else {
    console.log(`you withdrew ${Math.abs(movement)}`);
  }
}
console.log('--------------foreach----------');
movements.forEach(function (movement) {
  if (movement > 0) {
    console.log(`you deposited ${movement}`);
  } else {
    console.log(`you withdrew ${Math.abs(movement)}`);
  }
});
*/

/////////////////
// FOREACH WITH MAPS AND SETS
// const currencies = new Map([
//   ['USD', 'united states dollar'],
//   ['EUR', 'Eurd'],
//   ['GBP', 'pound sterling'],
// ]);
// currencies.forEach(function (value, key, Map) {
//   console.log(`${key}:${value}`);
// });

// // set
// const currenciesunique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
// console.log(currenciesunique);

// currenciesunique.forEach(function (value, Map) {
//   console.log(`${value}:${value}`);
// });

// The filter Method
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const deposits = movements.filter(function (mov, i, arr) {
  return mov > 0;
});
console.log(movements);
console.log(deposits);

const depositsFor = [];
for (const mov of movements) if (mov > 0) depositsFor.push(mov);
console.log(depositsFor);

const withdrawals = movements.filter(mov => mov < 0);
console.log(withdrawals);

///////////////////////////////////////
// The reduce Method
// console.log(movements);

// accumulator -> SNOWBALL
// const balance = movements.reduce(function (acc, cur, i, arr) {
//   console.log(`Iteration ${i}: ${acc}`);
//   return acc + cur;
// }, 0);

// const balance = movements.reduce((acc, cur) => acc + cur, 0);
// console.log(balance);

// let balance2 = 0;
// for (const mov of movements) balance2 += mov;
// console.log(balance2);

// // Maximum value
// const max = movements.reduce((acc, mov) => {
//   if (acc > mov) return acc;
//   else return mov;
// }, movements[0]);
// console.log(max);
