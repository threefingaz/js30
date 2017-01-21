const slider = document.querySelector('.items');
let is_down = false;
let start_x;
let scroll_left;

slider.addEventListener('mousedown', (e) => {
  is_down = true;
  slider.classList.add('active');
  start_x = e.pageX - slider.offsetLeft;
  scroll_left = slider.scrollLeft;
});

slider.addEventListener('mouseleave', () => {
  is_down = false;
  slider.classList.remove('active');
});

slider.addEventListener('mouseup', () => {
  is_down = false;
  slider.classList.remove('active');
});

slider.addEventListener('mousemove', (e) => {
  if (!is_down) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const walk = x - start_x;
  slider.scrollLeft = scroll_left - walk;
});
