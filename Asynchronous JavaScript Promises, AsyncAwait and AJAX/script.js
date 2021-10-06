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
