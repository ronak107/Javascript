'use strict';
/*
const restaurant = {
  name: 'classico italiano',
  location: 'surat',
  categories: ['otalian', 'pizza', 'pasta'],
  startermenu: ['focaccia', 'bruschetta', 'garlic'],
  mainmenu: ['browni', 'fryfrency'],
  order: function (starterindex, mainindex) {
    return [this.startermenu[starterindex], this.mainmenu[mainindex]];
  },
};

const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr;
console.log(x, y, x);
console.log(arr);
let [main, second] = restaurant.categories;
console.log(main, second);

// const temp = main;
// main = second;
// second = main;
// console.log(main, second);
[main, second] = [second, main];
console.log(main, second);
console.log(second, main);

const [resto, ord] = restaurant.order(1, 0);
console.log(resto, ord);

const nested = [2, 4, [9, 6]];
// const [i, , j] = nested;
// console.log(i, j);

const [i, , [j, k]] = nested;
console.log(i, j, k);
*/

////////////
//distructuring objects
/*const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const openingHours = {
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

  // ES6 enhanced object literals
  openingHours,

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Here is your declicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },

  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};
*/
// var name = 'Peter';
// function greet() {
//   var greeting = 'Hello';
//   {
//     let lang = 'English';
//     console.log(`${lang} ${greeting} ${name}`);
//   }
// }
// greet();

//////////////////////
// distructuring object
/*const restaurant = {
  name: 'classico italiano',
  location: 'surat',
  categories: ['otalian', 'pizza', 'pasta'],
  startermenu: ['focaccia', 'bruschetta', 'garlicbread', 'Caprese salad'],
  mainmenu: ['browni', 'fryfrency', 'pasta'],
  openinghour: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0,
      close: 24,
    },
  },
  order: function (starterindex, mainindex) {
    return [this.startermenu[starterindex], this.mainmenu[mainindex]];
  },
  orderdelivery: function ({ starterindex, mainindex, time, add }) {
    console.log(
      `order recived! ${this.startermenu[starterindex]} and ${this.mainmenu[mainindex]} will be delivered to ${add} at ${time}`
    );
  },
};
restaurant.orderdelivery({
  time: '22:30',
  add: 'surat',
  mainindex: 2,
  starterindex: 2,
});

const { name, openinghour, categories } = restaurant;
console.log(name, openinghour, categories);

const {
  name: restaurantName,
  openinghour: hour,
  categories: tags,
} = restaurant;
console.log(restaurantName, hour, tags);

//default value
const { menu = [], startermenu: starter = [] } = restaurant;
console.log(menu, starter);

// muating value
let a = 111;
let b = 123;
const obj = { a: 23, b: 7, c: 14 };

({ a, b } = obj);
console.log(a, b);

// nested obj
const {
  sat: { open, close },
} = openinghour;
console.log(open, close);
*/

////////////////////////////
//the spread operator
/*
const arr = [7, 8, 9];
const badnewarr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badnewarr);

const newarray = [1, 2, ...arr];
console.log(newarray);
*/

///////////////////////
//Rest pattern and parameters
/*
//SPREAD, because on RIGHT side of =
const arr = [1, 2, ...[3, 4]];
console.log(arr);

// REST, beacause on LEFT side of =
const [a, b, ...other] = [1, 2, 4, 5, 6, 7];
console.log(a, b, other);
*/
