const nav = document.querySelector('nav');
const trigger = nav.offsetTop;

function stickNav() {
  if (window.scrollY >= trigger) {
    document.body.classList.add('fixed-nav');
    document.body.style.paddingTop = nav.offsetHeight + 'px';
  } else {
    document.body.classList.remove('fixed-nav');
    document.body.style.paddingTop = 0;
  }
}


document.addEventListener('scroll', stickNav);
