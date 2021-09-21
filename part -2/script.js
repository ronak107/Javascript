/*'use strict';
let hasDriver = false;
const passTest = true;

if(passTest) hasDriver =true;
if(hasDriver)console.log("i can drive");

const private = 534;
const interface = 'audio'
*/

// function logger() {
//     console.log("my name ronak");
// }
// // calling / runing / invoking function
// logger();
// logger();

/*function fruitprocessor(apples, orange) {
 console.log(apples ,orange);
 const juice = `juice with ${apples} apples and ${orange} orange`;
 return juice;
 
}
const applejuice = fruitprocessor(5, 8);
console.log(applejuice);
console.log(fruitprocessor(5, 8));

const appleorangejuice = fruitprocessor(10, 3);
console.log(appleorangejuice);

const num = Number('23');
*/

///////////////////////////////////
// function Declaration vs expression

/*function calcAge1(brithday){
  return 2037 - brithday;
}
 const age = calcAge1(1992);
 console.log(age);

 const age2 =  function (brithday){
     return 2037 - brithday;
 }
 const age2 = calcAge2(1191);
 console.log( age, age2);


//  ARROW FUNCTION
const calcAge2 = function (brithday) {
  return 2037 - brithday;
}
// arrow function 
const calAge3 = brithyear => 2037 - brithyear;
const age3 = calAge3(200)
console.log(age3);

const yearUntilRelirement = (brithyear, fristname) => {
  const age = 2037 - brithyear;
  const relirement = 65 - age
  // return year1;
  return `${fristname} retires in ${relirement} year`;
}
console.log(yearUntilRelirement(1995, 'ronak'));
console.log(yearUntilRelirement(2000, 'vaghasiya'));

/////////////////////////
// function calling other function
function cutfruitpices(fruit) {
  return fruit * 4
}

function fruitprocessor(apples, orange) {
  const applepices = cutfruitpices(apples);
  const orangepices = cutfruitpices(orange);
  // console.log(apples, orange);
  const juice = `juice with ${applepices} apples and ${orangepices} orange`;
  return juice;
}

console.log(fruitprocessor(3, 4));


/////////////////
// reviewing function

const calage = function (brithyear) {
  return 2237 - brithyear;
}

const yearUntilRelirement = function (brithyear, fristname) {
  const age = calage(brithyear);
  const relirement = 65 - age;
  if (relirement > 0) {
    console.log(`${fristname} retires in ${relirement} year`);
    return relirement;
  } else {
    console.log(`${fristname} retires in ${relirement} year`);
    return -1;
  }
  //  return relirement;
  // return `${fristname} retires in ${relirement} year`;
}
console.log(yearUntilRelirement(2220, 'ronak'));
console.log(yearUntilRelirement(2230, 'rushi'));
*/

///////////////////////////////
/* 
Coding Challenge #1
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new 
gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so 
one average score per team).
A team only wins if it has at least double the average score of the other team. 
Otherwise, no team wins!
Your tasks:
1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team 
as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner 
to the console, together with the victory points, according to the rule above. 
Example: "Koalas win (30 vs. 13)"
4. Use the 'checkWinner' function to determine the winner for both Data 1 and 
Data 2
5. Ignore draws this time
Test data:
§ Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
§ Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27
Hints:
§ To calculate average of 3 values, add them all together and divide by 3
§ To check if number A is at least double number B, check for A >= 2 * B. 
Apply this to the team's average scores 
*/

/*const calcAverage = (a, b, c) => (a + b + c) / 3;
// console.log(calcAverage(44, 23, 71));

// test-1
// const scoreDolphins = calcAverage(44, 23, 71);
// const scoreKoalas = calcAverage(65, 54, 49);
//  console.log(scoreDolphins, scoreKoalas);

 // rest - 2
const scoreDolphins = calcAverage(85, 54, 41);
const scoreKoalas = calcAverage(23, 34, 27);
 console.log(scoreDolphins, scoreKoalas);


const checkWinner = function (avgDolphins, avgKoalas) {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
  } else if (avgKoalas >= 2 * avgDolphins) {
    console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
  }else{
    console.log('no team wins...!!');
  }
}
checkWinner(scoreDolphins, scoreKoalas);
checkWinner (576,111);
*/

///////////////////////////////////////
// Introduction to Arrays
/*const friend1 = 'Michael';
const friend2 = 'Steven';
const friend3 = 'Peter';

const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends);

const y = new Array(1991, 1984, 2008, 2020);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = 'Jay';
console.log(friends);
// friends = ['Bob', 'Alice']

const firstName = 'Jonas';
const jonas = [firstName, 'Schmedtmann', 2037 - 1991, 'teacher', friends];
console.log(jonas);
console.log(jonas.length);

// Exercise
const calcAge = function (birthYeah) {
  return 2037 - birthYeah;
}
const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
console.log(ages);
*/


///////////////////////////////////////
// Basic Array Operations (Methods)
/*const friends = ['Michael', 'Steven', 'Peter'];

// Add elements
const newLength = friends.push('Jay');
console.log(friends);
console.log(newLength);

friends.unshift('John');
console.log(friends);

// Remove elements
friends.pop(); // Last
const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift(); // First
console.log(friends);

console.log(friends.indexOf('Steven'));
console.log(friends.indexOf('Bob'));

friends.push(23);
console.log(friends.includes('Steven'));
console.log(friends.includes('Bob'));
console.log(friends.includes(23));

if (friends.includes('Steven')) {
  console.log('You have a friend called Steven');
}
*/

///////////////////////////////////////
// Coding Challenge #2

/*
Steven is still building his tip calculator, using the same rules as before: Tip 15% of 
the bill if the bill value is between 50 and 300, and if the value is different, the tip is 
20%.

Your tasks:

1. Write a function 'calcTip' that takes any bill value as an input and returns 
the corresponding tip, calculated based on the rules above (you can check out 
the code from first tip calculator challenge if you need to). Use the function 
type you like the most. Test the function using a bill value of 100
2. And now let's use arrays! So create an array 'bills' containing the test data 
below
3. Create an array 'tips' containing the tip value for each bill, calculated from 
the function you created before
4. Bonus: Create an array 'total' containing the total values, so the bill + tip

Test data: 125, 555 and 44

Hint: Remember that an array needs a value in each position, and that value can 
actually be the returned value of a function! So you can just call a function as array 
values (so don't store the tip values in separate variables first, but right in the new 
array) 
GOOD LUCK 
*/


/*const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}
// const calcTip = bill => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log(bills, tips, totals);
*/

///////////////////////////////////////
// Introduction to Objects
/*const jonasArray = [
  'Jonas',
  'Schmedtmann',
  2037 - 1991,
  'teacher',
  ['Michael', 'Peter', 'Steven']
];

const jonas = {
  firstName: 'Jonas',
  lastName: 'Schmedtmann',
  age: 2037 - 1991,
  job: 'teacher',
  friends: ['Michael', 'Peter', 'Steven']
};
*/

////////////////////////////////
// Dot vs. Bracket Notation
/*const jonas = {
  firstName: 'ronak',
  lastName: 'vaghasiya',
  age: 2037 - 1991,
  job: 'coder',
  friends: ['rushi', 'ravi', 'deep']
};
console.log(jonas);

console.log(jonas.friends);
console.log(jonas.job);

const namekey = 'Name';
console.log(jonas['first' + namekey]);
console.log(jonas['last' + namekey]);

const interested = prompt('what do you want to know about jonas? choose between fristname,lastname,age');
// console.log(jonas[interested]);
if(jonas[interested]){
  console.log(jonas[interested]);
}else{
  console.log('wrong rewuest! chose between fristname,lastname,age,job,and friend');
}

jonas.location = 'portugal';
jonas['twitter'] = 'ronak'
console.log(jonas);
*/

////////////////////////////
//object method
