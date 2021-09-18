
/*let js = "wow!";
if (js === "wow!") alert("javascript is fun!");

 //10+20+90-60
//  console.log(10+20+90-60)

let fristname ="Exhibyte";
console.log(fristname);
console.log(fristname);


let fun = true;
console.log(fun);

// console.log(typeof true);
// console.log(typeof 23);
// console.log(typeof 'Exhibyte');
// console.log(typeof fun);

javascript = 'YES!'
console.log(typeof javascript)

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);
console.log(typeof null)


// var and let and const
let age = 30
age = 31;
console.log(age)

const bdayyear = 2000;
// bdayyear = 2001;
// const job;

var job  = "programmer"
job = "teacher"
console.log(job);



// operator
const now = 3000;
const age = now - 2000;
const secondage = now - 2007
console.log(age, secondage);

console.log(age * 2, secondage / 10, 2 ** 3);

const fname = "Exhibyte";
const lname = "soluation";
console.log(fname + ' ' + lname);

// assignment operator
let x = 10 * 6 + 10;
x += 10;
x -= 20;
x *= 2;
x /= 3;
console.log(x);

// comparison operator
console.log(age > secondage); // <,>,>=,<=
console.log(age < secondage);
console.log(age >= secondage);
console.log(age <= secondage);


// TASK-1
/*Coding Challenge #1

Mark and John are trying to compare their BMI (Body Mass Index), which is
calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg
and height in meter).
Your tasks:
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both
versions)
3. Create a Boolean variable 'markHigherBMI' containing information about
whether Mark has a higher BMI than John.
Test data:
§ Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
m tall.
§ Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
m tall.
GOOD LUCK */
/*const massmark = 78;
const hightmark = 1.69;
const massjohn = 92;
const hightjohn = 1.95;

const BMImark = massmark / hightmark **2;
const BMIjohn = massjohn / (hightjohn * hightjohn);
const markhigherBMI = BMImark > BMIjohn;

console.log(BMIjohn, BMImark, markhigherBMI);


// STRING AND TEMPLATE LITERALS

 const name = 'rahu';
 const job = 'developer';
 const bdayyear = 2000;
 const year = 2099;

 const jon = " i am " + name +', a'+ (year - bdayyear) + 'years old'+ job + '!';
console.log(jon);

const jonnew = `i am ${name}, a ${year - bdayyear} year old ${job}`;
console.log(jonnew);

console.log('start with \n\
maultiple \n\
line');


// IF / Else condision
const age = 18;
const isoldEnough = age >= 19;

if (isoldEnough) {
    console.log("driving");
}
else {
    console.log("not aligebale");
}
*/

// Coding Challenge #2
/*Use the BMI example from Challenge #1, and the code you already wrote, and
improve it.
Your tasks:
1. Print a nice output to the console, saying who has the higher BMI. The message
is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
BMI (28.3) is higher than John's (23.9)!"
Hint: Use an if/else statement
GOOD LUCK */

// const massmark = 78;
// const hightmark = 1.69;
// const massjohn = 92;
// const hightjohn = 1.95;

// const BMImark = massmark / hightmark ** 2;
// const BMIjohn = massjohn / (hightjohn * hightjohn);

// console.log(BMIjohn, BMImark);

// if (BMImark > BMIjohn) {
//     console.log("mark BMI is highe than john")
// }
// else {
//     console.log("john BMI is highe than mark")
// }



// Type Conversion and Coercion

/*const inputyear = '1991';
console.log(Number(inputyear),inputyear);
console.log(Number(inputyear) +19);

console.log(Number('ronak'))
console.log(typeof NaN);
console.log(String(23), 23);

// type coerction
console.log(' i am'+ 23 + 'year old');
console.log(' i am'+ '23'+ 'year old');
console.log('23'-'10'-3);

let n = '1' + 1;
n = n -1;
console.log(n);*/

// Truthy and Falsy Values
// 5 falsy value : 0, ' ', undefined, null , nan

/*console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('exhibyte'));
console.log(Boolean({}));
console.log(Boolean(''));

const money = 0;
if (money) {
    console.log("don`t spend it all");
}
else {
    console.log("yous hould get a job");
}

let hight =  '';
if (hight) {
    console.log("hight define!!");
}
else {
    console.log("hight is undefined");
}*/

// EQUALITY OPERATORS == VS ==

// const age = 18;
// if(age === 18) console.log("you just became an adult :D");
/*
const age = '18';
if (age === 18) console.log('you just became an adult:D (strick)'); //type and value check
if (age == 18) console.log('you just became an adult:D (loos)'); //only value check

 const favourite = Number(prompt ("what is your favourite number?"));
 console.log(favourite);
 console.log(typeof favourite);

 if (favourite === 23) {
     console.log('cool! 23 is an amazing number...!!')
 }
 
//  LOGICAL operator

const hasDriverskinces = true;
const hasGudVision = true;

console.log(hasDriverskinces && hasGudVision);
console.log(hasDriverskinces || hasGudVision);
console.log(!hasGudVision);
console.log(hasDriverskinces);

const shoulddriver = hasDriverskinces && hasGudVision;
if (shoulddriver) {
    console.log('able to drive');
}
else {
    console.log('other wise not able');
}

*/

/*Coding Challenge #3
There are two gymnastics teams, Dolphins and Koalas. They compete against each 
other 3 times. The winner with the highest average score wins a trophy!
Your tasks:
1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition, 
and print it to the console. Don't forget that there can be a draw, so test for that 
as well (draw means they have the same average score)
3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a 
team only wins if it has a higher score than the other team, and the same time a 
score of at least 100 points. Hint: Use a logical operator to test for minimum 
score, as well as multiple else-if blocks �
4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when 
both teams have the same score and both have a score greater or equal 100 
points. Otherwise, no team wins the trophy
Test data:
§ Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
§ Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
§ Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106
GOOD LUCK 

const scoreDolphins = (97 + 112 + 101) / 3;
const scorekoalas = (109 + 95 + 103) / 3;
console.log(scoreDolphins, scorekoalas);

if (scoreDolphins > scorekoalas && scoreDolphins >= 100) {
    console.log("Dhophins win trophy!");
}
else if (scorekoalas > scoreDolphins && scorekoalas >= 100) {
    console.log("kilas win trophy!");
}
else if (scoreDolphins === scorekoalas && scoreDolphins >= 100 && scorekoalas >= 100) {
    console.log("both win trophy!");
}
else{
    console.log("no win the trophy")
}

// SWITCH CASE
const day = 'saturday';

switch (day) {
    case 'monday':
        console.log('plan course structure');
        console.log('go to coding meet up..!');
        break;
    case 'tuesday':
        console.log('watch video');
        break;
    case 'wednesday':
    case 'thurday':
        console.log('bug');
        break;
    case 'friday':
        console.log("record video");
        break;
    case 'saturday':
    case 'sunday':
        console.log("off");
        break;
    default:
        console.log("not valid day");
}

if (day === 'monday') {
    console.log('plan course structure');
    console.log('go to coding meet up..!');
} else if (day === 'tuesday') {
    console.log('watch video');
} else if (day === 'wednesday' || day === 'thurday') {
    console.log('bug');
} else if (day === 'friday') {
    console.log('record video');
} else if (day === 'saturday' || day === "sunday") {
    console.log("off");
}else {
    console.log("not valid day");
}
*/

//////////////////////////////////////////
//STATEMENTS AND EXPRESSIONS
//  3 + 4
//  2000
//  true && false && !false

//  if (23 >10){
//      const str = '23 is bigger';
//  

// THE CONDITIONAL (TERNARY) ORERATOR

// const age =23;
// age <=22 ? console.log("drink wine") : console.log("drink water");
// const age = 23;
// const drink = age <=24 ? 'wine' : 'water';
// console.log(drink)

/*Coding Challenge #4
Steven wants to build a very simple tip calculator for whenever he goes eating in a 
restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and 
300. If the value is different, the tip is 20%.
Your tasks:
1. Calculate the tip, depending on the bill value. Create a variable called 'tip' for 
this. It's not allowed to use an if/else statement (If it's easier for you, you can 
start with an if/else statement, and then try to convert it to a ternary 
operator!)
2. Print a string to the console containing the bill value, the tip, and the final value 
(bill + tip). Example: “The bill was 275, the tip was 41.25, and the total value 
316.25”
Test data:
§ Data 1: Test for bill values 275, 40 and 430
Hints:
§ To calculate 20% of a value, simply multiply it by 20/100 = 0.2
§ Value X is between 50 and 300, if it's >= 50 && <= 300 
GOOD LUCK */

// const bill = 430;
// const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.20;
// console.log(`the bill was ${bill}, the tip was ${tip},and the total value ${bill + tip}`);