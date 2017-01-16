const hero = document.querySelector('.hero');
const text = hero.querySelector('h1');
const walk = 100;

function makeShadow(e) {
  const {offsetWidth: width, offsetHeight: height} = hero;
  let {offsetX: x, offsetY: y} = e;

  if (this !== e.target) {
    x += e.target.offsetLeft;
    y += e.target.offsetTop;
  }

  x_walk = Math.round((x / width * walk) - (walk / 2));
  y_walk = Math.round((y / width * walk) - (walk / 2));

  text.style.textShadow = `
      ${x_walk}px ${y_walk}px 0 rgba(255, 255, 0, .5),
      ${x_walk * -1}px ${y_walk}px 0 rgba(0, 255, 255,.5),
      ${x_walk}px ${y_walk * -1}px 0 rgba(255, 0, 255, .5)
  `;
}

hero.addEventListener('mousemove', makeShadow);
