const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progress_bar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const full_screen = player.querySelector('.full');
const skip_buttons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');

let mousedown = false;

function togglePlay() {
  video.paused ? video.play() : video.pause();
}

function spacePlay(e) {
  if (e.keyCode !== 32) return;
  togglePlay();
}

function toggleButton() {
  let icon = video.paused ? '❚ ❚' : '►';
  toggle.innerText = icon;
}

function handleRanges() {
  video[this.name] = this.value;
}

function handleProgress(e) {
  const percent = (video.currentTime / video.duration) * 100;
  progress_bar.style.flexBasis = `${percent}%`;
}

function scrub(e) {
  const time = (e.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = time;
}

function skip() {
  const time = parseFloat(this.dataset.skip);
  video.currentTime += time;
}

function fullScreen() {
  video.webkitEnterFullScreen();
}

document.addEventListener('keydown', spacePlay);
toggle.addEventListener('click', togglePlay);
full_screen.addEventListener('click', fullScreen);
video.addEventListener('click', togglePlay);
video.addEventListener('play', toggleButton);
video.addEventListener('pause', toggleButton);
video.addEventListener('timeupdate', handleProgress);

ranges.forEach(range => range.addEventListener('change', handleRanges));
ranges.forEach(range => range.addEventListener('mousemove', handleRanges));

progress.addEventListener('click', scrub);
progress.addEventListener('mousemove', (e) => mousedown && scrub(e));
progress.addEventListener('mousedown', () => mousedown = true);
progress.addEventListener('mouseup', () => mousedown = false);

skip_buttons.forEach(button => button.addEventListener('click', skip));
