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

//////////////////
// introduction to arrays
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

////////////////////////////



