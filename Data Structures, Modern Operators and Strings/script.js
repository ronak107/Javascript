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

//////////////
//SHORT CIRCUTING(&& and ||)
// use any data type,return any data type,short-circuiting
/*console.log(3 || 'ronak');
console.log('' || 'ronak');
console.log(true || 0);
console.log(undefined || null);
console.log('' || undefined);

console.log(0 && 'ronak');
*/

///////////////////////
//the nullish coalescing operator(??)

////////////////////////////
//Coding Challenge #1
/*We're building a football betting app (soccer for my American friends )!
Suppose we get data from a web service about a certain game ('game' variable on 
next page). In this challenge we're gonna work with that data.
Your tasks:
1. Create one player array for each team (variables 'players1' and 
'players2')
2. The first player in any player array is the goalkeeper and the others are field 
players. For Bayern Munich (team 1) create one variable ('gk') with the 
goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 
field players
3. Create an array 'allPlayers' containing all players of both teams (22 
players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a 
new array ('players1Final') containing all the original team1 players plus 
'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called 
'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player 
names (not an array) and prints each of them to the console, along with the 
number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which 
team is more likely to win, without using an if/else statement or the ternary 
operator.
Test data for 6.: First, use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. 
Then, call the function again with players from game.scored
GOOD LUCK */

/*const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};
//1.
const [players1, players2] = game.players;
console.log(game.players);

// 2.
const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);

// 3.
const allPlayers = [...players1, ...players2];
console.log(allPlayers);

// 4.
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
console.log(players1Final);

// 5.
const {
  odds: { team1, x: draw, team2 },
} = game;
console.log(team1, draw, team2);

// 6.
const printGoals = function (...players) {
  console.log(`${players.length} goals were scored`);
};
// printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
// printGoals('Davies', 'Muller');
printGoals(...game, scored);
*/

////////////////////////////
//looping arrays:the for-of loop

/////////////
//Enhance object literals

//////////////////////
// set
/*const ordersSet = new Set([
  'Pasta',
  'Pizza',
  'Pizza',
  'Risotto',
  'Pasta',
  'Pizza',
]);
console.log(ordersSet);

console.log(new Set('Jonas'));

console.log(ordersSet.size);
console.log(ordersSet.has('Pizza'));
console.log(ordersSet.has('Bread'));
ordersSet.add('Garlic Bread');
ordersSet.add('Garlic Bread');
ordersSet.delete('Risotto');
// ordersSet.clear();
console.log(ordersSet);

for (const order of ordersSet) console.log(order);

// Example
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
const staffUnique = [...new Set(staff)];
console.log(staffUnique);

console.log(
  new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']).size
);

console.log(new Set('jonasschmedtmann').size);
*/

////////////////////////
//maps:fundamental
