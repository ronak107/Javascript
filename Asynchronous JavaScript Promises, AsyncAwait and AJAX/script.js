///////////////////////////////////////
//our frist AJAX call XMLHTTPREQUEST

/*const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

const getCountryData = function (country) {
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
  request.send();

  request.addEventListener('load', function () {
    const [data] = JSON.parse(this.responseText);
    console.log(data);

    const html = `
    <article class="country">
      <img class="country__img" src="${data.flags.png}" />
      <div class="country__data">
        <h3 class="country__name">${data.name}</h3>
        <h4 class="country__region">${data.region}</h4>
        <p class="country__row"><span>👫</span>${(
          +data.population / 1000000
        ).toFixed(1)} people</p>
      </div>
    </article>
    `;
    countriesContainer.insertAdjacentHTML('beforeend', html);
    countriesContainer.style.opacity = 1;
  });
};

getCountryData('portugal');
getCountryData('usa');
getCountryData('germany');
*/

///////////////////////////////////////////////
//welcome to callbackhell

/*const getCountryAndNeighbour = function (country) {
  // AJAX call country 1
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
  request.send();

  request.addEventListener('load', function () {
    const [data] = JSON.parse(this.responseText);
    console.log(data);
    const renderCountry = function (data, className = '') {
      debugger;
      const html = `
      <article class="country ${className}">
      
        <img class="country__img" src="${data.flags.png}" />
        <div class="country__data">
          <h3 class="country__name">${data.name}</h3>
          <h4 class="country__region">${data.region}</h4>
          <p class="country__row"><span>👫</span>${(
            +data.population / 1000000
          ).toFixed(1)} people</p>
        </div>
      </article>
      `;
      countriesContainer.insertAdjacentHTML('beforeend', html);
      countriesContainer.style.opacity = 1;
    };

    // Render country 1
    renderCountry(data);

    // Get neighbour country (2)
    const [capital] = data.borders;

    if (!capital) return;

    // AJAX call country 2
    const request2 = new XMLHttpRequest();
    request2.open('GET', `https://restcountries.com/v3.1/capital/${capital}`);
    request2.send();

    request2.addEventListener('load', function () {
      const data2 = JSON.parse(this.responseText);
      console.log(data2);

      renderCountry(data2[0], 'capital');
      renderCountry(data2[1], 'capital');
    });
  });
};

// getCountryAndNeighbour('portugal');
getCountryAndNeighbour('usa');

setTimeout(() => {
  console.log('1 second passed');
  setTimeout(() => {
    console.log('2 seconds passed');
    setTimeout(() => {
      console.log('3 second passed');
      setTimeout(() => {
        console.log('4 second passed');
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);
*/

/////////////////////////////
//callback Hell
// API

// 1: 2s student roll Not
// 2: 2s 2nd name and Age
// 3: 2s gender

/*
const getrollno = () => {
  setTimeout(() => {
    console.log('api');
    let roll_no = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    console.log(roll_no);

    setTimeout(
      roll_no => {
        const biodata = {
          name: 'ronak',
          age: 21,
        };
        console.log(
          `my roll number is ${roll_no}.my name is ${biodata.name} and I am ${biodata.age} years old`
        );

        setTimeout(
          name => {
            biodata.gender = 'male';
            console.log(`my name is ${name}. i am ${biodata.gender}`);
          },
          2000,
          biodata.name
        );
      },
      2000,
      roll_no[2]
    );
  }, 2000);
};
getrollno();
*/

/////////////////////////////
//consuming promise

// const request = fetch('https://restcountries.com/v2/name/portugal');
// console.log(request);
const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

const renderCountry = function (data, className = '') {
  const html = `
  <article class="country ${className}">
    <img class="country__img" src="${data.flag}" />
    <div class="country__data">
      <h3 class="country__name">${data.name}</h3>
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row"><span>👫</span>${(
        +data.population / 1000000
      ).toFixed(1)} people</p>
      <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
      <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
    </div>
  </article>
  `;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};

const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
  countriesContainer.style.opacity = 1;
};

const getJSON = function (url, errorMsg = 'Something went wrong') {
  return fetch(url).then(response => {
    if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);

    return response.json();
  });
};

////consuming promise
// const getContrydata = function (country) {
//   fetch(`https://restcountries.com/v2/name/${country}`)
//     .then(function (response) {
//       console.log(response);
//       return response.json();
//     })
//     .then(function (data) {
//       console.log(data);
//       renderCountry(data[0]);
//     });
// };
// getContrydata('portugal');

///////////////////////////////////////////
//CHAINING PROMISE
/*const getContrydata = function (country) {
  // country 1
  fetch(`https://restcountries.com/v2/name/${country}`)
    .then(response => response.json())
    .then(data => {
      renderCountry(data[0]);
      const neighbour = data[0].borders[0];
      if (!neighbour) return;

      // country2

      fetch(`https://restcountries.com/v2/capital/${neighbour}`);
      // return 23;
    })
    .then(response => response.json())
    .then(data => renderCountry(data, 'neighbour'));
};
getContrydata('Austria');
*/

///////////////////////
//promise
// function prom() {
//   return new Promise(function (resolve, reject) {
//     console.log('feching data,please wait');
//     setTimeout(() => {
//       $.get('https://jsonplaceholder.typicode.com/posts', function (data) {
//         console.log(data);
//       });
//     }, 3000);
//   });
// }
// prom()
//   .then(result => {
//     console.log(result);
//   })
//   .catch(error => {
//     console.log(error);
//   });

///////////////////////////////////////////////////////////////////////////////////
//// *fetch(file/url,{                                                           //
////   methog : "POST",------------->"PUT","DELETE","GET"                        //
////   body: data, ----------------->Form Data/ JSON Data/ Text                  //
////   header:{                                                                  //
////      'content-type' : 'application/json', -------------->json formate       //
////      'content-type' : 'application/x-www-form-urlencoded'                   //
////    })                                                                       //
///////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////
// Fetch Api
/*fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(data => {
    console.log(data);

    for (var r in data) {
      const a = `${data[r].name}--${data[r].username}--${data[r].company.catchPhrase}`;
      console.log(a);
    }
  })
  .catch(error => console.log('can`t fetch data'));
  */

///////////////////////////////////////
//Fetch api using insert method
/*document.getElementById('btn').addEventListener('click', function (event) {
  event.preventDefault(); //page not refresh
  var obj = {
    title: document.getElementById('email').value,
    body: document.getElementById('pwd').value,
    userId: 1,
  };
  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify(obj),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then(response => response.json())
    .then(json => console.log(json));
});
*/

///////////////////////
// fetch api using insert form
/*document.getElementById('btn').addEventListener('click', function (event) {
  event.preventDefault(); //page not refresh
  // var obj = {
  //   title: document.getElementById('email').value,
  //   body: document.getElementById('pwd').value,
  //   userId: 1,
  // };
  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: new FormData(document.getElementById('form')),
    headers: {
      'Content-type': 'application/x-www-form-urlencoded',
    },
  })
    .then(response => response.json())
    .then(json => console.log(json));
});
*/

////////////////////////////////////
//Asynce & await
// async function test() {
//   return 'Hello';
// }
// test().then(result => {
//   console.log(result);
// });

let test = async () => 'Hellow';
test().then(result => {
  console.log(result);
});
