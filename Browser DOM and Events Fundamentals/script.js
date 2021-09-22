'use strict';

// selecting  and manipulatation elements
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'correct number..!';
console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

// console.log(document.querySelector('.guess').value);
document.querySelector('.guess').value = 100;
console.log(document.querySelector('.guess').value);
*/

////////////////////////////
//handling click event
/*
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    document.querySelector('.message').textContent = 'no number';
  }
  //   document.querySelector('.message').textContent = 'correct number..!';
});
*/

//////////////////////
//implementing the game logic
const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
document.querySelector('.number').textContent = secretNumber;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    document.querySelector('.message').textContent = 'no number';
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'correct number';
    document.querySelector('body').style.backgroundColor = '#222';
    // document.querySelector('.number').style.width = '15rem';
  } else if (guess > secretNumber) {
    if (score > 0) {
      document.querySelector('.message').textContent = 'To high..!!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'you lost the game...!!';
    }
  } else if (guess < secretNumber) {
    document.querySelector('.message').textContent = 'To Low..!!';
    score--;
    document.querySelector('.score').textContent = score;
  }
});

/////////////////////////////////
//Coding Challenge #1
/*Implement a game rest functionality, so that the player can make a new guess!
Your tasks:
1. Select the element with the 'again' class and attach a click event handler
2. In the handler function, restore initial values of the 'score' and 
'secretNumber' variables
3. Restore the initial conditions of the message, number, score and guess input 
fields
4. Also restore the original background color (#222) and number width (15rem)
GOOD LUCK 
*/
