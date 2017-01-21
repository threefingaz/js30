const speed = document.querySelector('.speed');
const bar = document.querySelector('.speed-bar');
const video = document.querySelector('.flex');

speed.onmousemove = function(e) {
  const y = e.pageY - this.offsetTop;
  const percent = y / this.offsetHeight;
  const min = 0.4;
  const max = 4;
  const height = Math.round(percent * 100) + '%';
  const play_rate = percent * (max - min) + min;

  bar.style.height = height;
  bar.textContent = play_rate.toFixed(1) + '×';

  video.playbackRate = play_rate;
}
