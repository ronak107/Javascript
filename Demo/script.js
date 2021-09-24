'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnclosemodal = document.querySelector('.close-modal');
const btnopenmodel = document.querySelectorAll('.show-modal');
console.log(btnopenmodel);

const openmodal = function () {
  console.log('button clicked');
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closemodal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnopenmodel.length; i++)
  btnopenmodel[i].addEventListener('click', openmodal);

btnclosemodal.addEventListener('click', closemodal);
overlay.addEventListener('click', closemodal);

document.addEventListener('keydown', function (e) {
  //   console.log(' a key is press');
  console.log(e);
});
