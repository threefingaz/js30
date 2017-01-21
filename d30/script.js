const holes = document.querySelectorAll('.hole');
const score_board = document.querySelector('.score');
const moles = document.querySelectorAll('.mole');

let last_element;
let time_up = false;
let score = 0;

function randomTime(min, max) {
  return Math.floor(Math.random() * (max - min) +min);
}

function randomElement(elements) {
  const i = Math.floor(Math.random() *  elements.length);

  if (i === last_element) {
    return randomElement(elements);
  }

  last_element = i;

  return elements[i];
}

function peep() {
  const time = randomTime(200, 1000);
  const hole = randomElement(holes);

  hole.classList.add('up');
  setTimeout(() => {
    hole.classList.remove('up');
    if (!time_up) peep();
  }, time);
}

function startGame() {
  score_board.textContent = 0;
  score = 0;
  time_up = false;
  setTimeout(() => time_up = true, 10000);
  peep();
}

function bonk(e) {
  if (!e.isTrusted) return;
  score++;
  this.classList.remove('up');
  score_board.textContent = score;
}

moles.forEach(mole => mole.onclick = bonk);
