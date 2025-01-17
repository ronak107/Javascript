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
/*const jonas = {
  firstName: 'ronak',
  lastName: 'vaghasiya',
  bday: 2000 ,
  job: 'coder',
  friends: ['rushi', 'ravi', 'deep'],
  DeviceOrientationEvent: true,

  // calage: function (bday) {
  //   return 2037 - bday;
  // }


  // calage: function () {
  //   // console.log(this);
  //   return 2030 - this.bday;
  // }

  calage: function () {
    // console.log(this);
  this.age = 2030 - this.bday;
  return this.age
  }
};

console.log(jonas.calage());
// console.log(jonas['calage'](2027));
*/

//////////////////////////
/*Let's go back to Mark and John comparing their BMIs! This time, let's use objects to 
implement the calculations! Remember: BMI = mass / height ** 2 = mass 
/ (height * height) (mass in kg and height in meter)
Your tasks:
1. For each of them, create an object with properties for their full name, mass, and 
height (Mark Miller and John Smith)
2. Create a 'calcBMI' method on each object to calculate the BMI (the same 
method on both objects). Store the BMI value to a property, and also return it 
from the method
3. Log to the console who has the higher BMI, together with the full name and the 
respective BMI. Example: "John's BMI (28.3) is higher than Mark's (23.9)!"
Test data: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m 
tall.
GOOD LUCK 
*/
/*const mark = {
  fullname: 'mark miller',
  mass: 78,
  height: 1.69,
  calcBMI: function(){
   this.bmi = this.mass / this.height **2;
   return this.bmi
  }
};

const John = {
  fullname: 'john smith',
  mass : 92,
  height:1.95,
  calcBMI: function(){
    this.bmi = this.mass / this.height **2;
    return this.bmi
   }
};
mark.calcBMI();
John.calcBMI();
console.log(mark.bmi, John.bmi);

// "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!"

if (mark.bmi > John.bmi) {
  console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${John.fullName}'s BMI (${John.bmi})`);
} else if (John.bmi > mark.bmi) {
  console.log(`${john.fullName}'s BMI (${John.bmi}) is higher than ${mark.fullName}'s BMI (${mark.bmi})`);
}
*/
// for (let rep = 1; rep<=50; rep ++){
//   console.log(`lifting weight repetition ${rep}`);}

/////////////////////////////////
//LOOPING ARRAYS,BREAKING AND CONTINUING
/*const jonas = [
  'Jonas',
  'Schmedtmann',
  2080,
  'teacher',
  ['Michael', 'Peter', 'Steven'],
  true
];
const types = [];

for (let i = 0; i < jonas.length; i++) {
  console.log(jonas[i], typeof jonas[i]);
  // fillng types arry
  // types[i] = typeof jonas [i];
  types.push(typeof jonas[i])
}
console.log(types);

const years = [1191, 2807, 1869, 2020];
const age = [];

for ( let i=0; i <years.length; i++){
  // push method
  age.push(2250 - years[i]);
}
console.log(age);

// continue and break
for (let i = 0; i<jonas.length; i++){
  if(typeof jonas[i] !== 'string') continue;
 
  console.log(jonas[i],typeof jonas[i]);
}

// for (let i = 0; i<jonas.length; i++){
//   if(typeof jonas[i] !== 'Number') break;
 
//   console.log(jonas[i],typeof jonas[i]);
// }
*/

////////////////////////////
//LOOPING BACKWARDS AND LOOPS IN LOOP

/*const jonas = [
  'Jonas',
  'Schmedtmann',
  2080,
  'teacher',
  ['Michael', 'Peter', 'Steven'],
  true
];

for (let i = jonas.length - 1; i >= 0; i--) {
  console.log(i, jonas[i]);
}

for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`---starting exercise ${exercise}`);

  for (let rep = 1; rep < 6; rep++) {
    console.log(`lifting weight repetation ${rep}`);
  }
}
*/

///////////////
//while loop


/*let rep =1;
while(rep<=10){
  console.log(`Exhibyte ${rep}`);
  rep++;
}

let dice = Math.trunc(Math.random()*6) + 1;
console.log(dice);
while(dice !== 6){
  console.log(`you rolled a ${dice}`);
  dice = Math.trunc(Math.random()*6) + 1 ;
  if (dice === 6) console.log('loop is about to end...');
}
*/

////////////////
/*Coding Challenge #4

Let's improve Steven's tip calculator even more, this time using loops!
Your tasks:

1. Create an array 'bills' containing all 10 test bill values
2. Create empty arrays for the tips and the totals ('tips' and 'totals')
3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate 
tips and total values (bill + tip) for every bill value in the bills array. Use a for
loop to perform the 10 calculations!

Test data: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52

Hints: Call ‘calcTip ‘in the loop and use the push method to add values to the 
tips and totals arrays 
Bonus:
4. Bonus: Write a function 'calcAverage' which takes an array called 'arr' as 
an argument. This function calculates the average of all numbers in the given 
array. This is a difficult challenge (we haven't done this before)! Here is how to 
solve it:
4.1. First, you will need to add up all values in the array. To do the addition, 
start by creating a variable 'sum' that starts at 0. Then loop over the 
array using a for loop. In each iteration, add the current value to the 
'sum' variable. This way, by the end of the loop, you have all values 
added together
4.2. To calculate the average, divide the sum you calculated before by the 
length of the array (because that's the number of elements)
4.3. Call the function with the 'totals' array
GOOD LUCK
*/

const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

for (let i = 0; i < bills.length; i++) {
  const tip = calcTip(bills[i]);
  tips.push(tip);
  totals.push(tip + bills[i]);
}
console.log(bills, tips, totals);

const calcAverage = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    // sum = sum + arr[i];
    sum += arr[i];
  }
  return sum / arr.length;
}
console.log(calcAverage([2, 3, 7]));
console.log(calcAverage(totals));
console.log(calcAverage(tips));


