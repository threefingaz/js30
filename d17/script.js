const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];
const list = document.querySelector('#bands');

function replace(name) {
  return name.replace(/^(a |an |the )/i, '').trim();
}

const sorted = bands.sort((a, b) => replace(a) > replace(b) ? 1 : -1);

list.innerHTML = sorted.map(band => `<li>${band}</li>`).join('');
