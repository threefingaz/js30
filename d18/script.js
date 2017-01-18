const time_items = Array.from(document.querySelectorAll('[data-time]'));
const target = document.querySelector('.total_time');

const totalSeconds = time_items.reduce((total, next) => {
  const [min, sec] = next.dataset.time.split(':').map(parseFloat);
  const seconds = min * 60 + sec;
  return total + seconds;
}, 0);

function getHours(seconds) {
  return Math.floor(seconds / 3600);
}

function getMinutes(seconds) {
  seconds = seconds % 3600;
  return Math.floor(seconds / 60);
}

function getSeconds(seconds) {
  return (seconds % 3600) % 60;
}

const total = {
  hours  : getHours(totalSeconds),
  minutes: getMinutes(totalSeconds),
  seconds: getSeconds(totalSeconds)
}

target.innerHTML = `${total.hours}:${total.minutes}:${total.seconds}`;
