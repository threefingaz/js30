const links = document.querySelectorAll('a');
const highlight = document.createElement('span');

highlight.classList.add('highlight');
document.querySelector('body').appendChild(highlight);

function highlightOn() {
  const link_coords = this.getBoundingClientRect();
  const highlight_coords = {
    width: link_coords.width,
    height: link_coords.height,
    top: link_coords.top + window.scrollY,
    left: link_coords.left + window.scrollX
  }

  highlight.style.width = `${highlight_coords.width}px`;
  highlight.style.height = `${highlight_coords.height}px`;
  highlight.style.transform = `
    translate(${highlight_coords.left}px,
    ${highlight_coords.top}px)
  `;
}

function highlightOff() {
  highlight.style.width = `0px`;
  highlight.style.height = `0px`;
}

links.forEach(link => link.addEventListener('mouseenter', highlightOn));
links.forEach(link => link.addEventListener('mouseleave', highlightOff));
