'use strict';

///////////////////////////////////////
// Scoping in Practice
/*
function calcAge(birthYear) {
  const age = 2037 - birthYear;

  function printAge() {
    let output = `${firstName}, you are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;
      // Creating NEW variable with same name as outer scope's variable
      const firstName = 'Steven';

      // Reasssigning outer scope's variable
      output = 'NEW OUTPUT!';

      const str = `Oh, and you're a millenial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
    }
    // console.log(str);
    console.log(millenial);
    // console.log(add(2, 3));
    console.log(output);
  }
  printAge();

  return age;
}

const firstName = 'Jonas';
calcAge(1991);
// console.log(age);
// printAge();
*/

///////////////////////
//Hosting and TDZ in practice
/*
// console.log(year);
// console.log(me);
// console.log(job);

var me = 'ronak';
let job = 'teacher';
const year = 1991;

// console.log(year);
// console.log(me);
// console.log(job);


// function
// console.log(add(2, 3));
// console.log(addexpr(2, 3));
// console.log(arrow(2, 3));

function add(a, b) {
  return a + b;
}

const addexpr = function (a, b) {
  return a + b;
};

const arrow = (a, b) => a + b;
*/

//////////////////
//THIS keyword
/*
// console.log(this);
const calcAge = function (birthYear) {
  console.log(2037 - birthYear);
  // console.log(this);
};
calcAge(2000);

const calcAgearrow = birthYear => {
  console.log(2037 - birthYear);
  // console.log(this);
};
calcAgearrow(2000);

const Jonas = {
  year: 2200,
  age: function () {
    // console.log(this);
    console.log(2030 - this.year);
  },
};
Jonas.age();

const ronak = {
  year: 2000,
};
ronak.age = Jonas.age;
ronak.age();
*/

////////////////
//REGULAR FUNCTION AND ARROW FUNCTION
/*const Jonas = {
  fristname = 'ronak',
  year: 2200,
  age: function () {
    console.log(this);
    console.log(2030 - this.year);
    
  },
  greet: () => console.log(`hey... ${fristname}`),
};
Jonas.greet();
console.log(this);
*/

//////////////////
//primitive vs object(primitive vs reference type)

let age = 30;
let oldage = age;
age = 21;
console.log(age);
console.log(oldage);

const me = {
  name: 'ronak',
  age: 30,
};
const frd = me;
frd.age = 21;
console.log('frd', frd);
console.log('me', me);
