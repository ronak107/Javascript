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
 */

//  ARROW FUNCTION
const calcAge2 = function (brithday){
  return 2037- brithday;
}
// arrow function 
const calAge3 = brithyear => 2037 - brithyear;
const age3 = calAge3(200)
console.log(age3);

const yearUntilRelirement = (brithyear, fristname) =>{
  const age = 2037 - brithyear;
  const relirement = 65 - age 
  // return year1;
  return `${fristname} retires in ${relirement} year`;
}
console.log(yearUntilRelirement(1995 , 'ronak'));
console.log(yearUntilRelirement(2000, 'vaghasiya'));
