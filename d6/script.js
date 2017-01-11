const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const cities = [];
const input = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');

fetch(endpoint)
  .then(result => result.json())
  .then(data => cities.push(...data));

function numberFormat(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
}

function matchCities(search, dataset) {
  const regex = new RegExp(search, 'gi');
  return dataset.filter(item => {
    return item.city.match(regex) || item.state.match(regex);
  });
}

function displaySuggestions() {
  const search = this.value || '<li></li>';
  const matches = matchCities(search, cities);

  const list = matches.map(item => {
    const regex = new RegExp(search, 'gi');
    const city = item.city.replace(regex, `
      <span class="hl">${search}</span>`);
    const state = item.state.replace(regex, `
      <span class="hl">${search}</span>`);

    return `
      <li>
        <span class="name">${city}, ${state}</span>
        <span class="population">
          ${numberFormat(item.population)}
        </span>
      </li>
      `;
  }).join('');

  suggestions.innerHTML = list;
}

input.addEventListener('keyup', displaySuggestions);
