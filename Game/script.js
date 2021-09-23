const score0 = document.getElementById('score--0');
const score1 = document.getElementById('score--1');
const dice = document.getElementsByClassName('dice');
const buttonnew = document.querySelector('.btn--new');
const buttonroll = document.querySelector('.btn--roll');
const buttonhold = document.querySelector('.btn--hold');

score0.textContent = 0;
score1.textContent = 0;
dice.classList.add('hidden');

// rolling dice function
buttonnew.addEventListener('click', function () {
  // generating a random dice roll
  const dice = Math.trunc(Math.random() * 6) + 1;

  //  display dice
  dice.classList.remove('hidden');
  dice.src = `dice-${dice}.png`;
});
