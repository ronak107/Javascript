// selecting,creating and deleting element
// selecting elements
console.log(document.documentElement);
console.log(document.head);
console.log(document.bodys);

document.querySelector('.header');
const allsections = document.querySelector('.section');
console.log(allsections);

document.getElementById('section--1');
const allButtons = document.getElementsByTagName('button');
console.log(allButtons);

console.log(document.getElementsByClassName('btn'));

//creating and inserting element

const message = document.createElement('div');
message.classList.add('cookie-message');
message.textContent = 'we use cookied for improved functionlity and analysis.';
