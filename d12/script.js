const pressed = [];
const password = 'password';

document.addEventListener('keydown', (e) => {
  pressed.push(e.key);
  pressed.splice(-password.length-1,
    pressed.length - password.length);
  pressed.join('').includes(password) ?
    cornify_add() : null;
});
