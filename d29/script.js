let countdown;
const timer_display = document.querySelector('.display__time-left');
const end_time = document.querySelector('.display__end-time');
const buttons = document.querySelectorAll('[data-time]');

function timer(seconds) {
  clearInterval(countdown);
  seconds = parseInt(seconds);

  const now = Date.now();
  const then = now + seconds * 1000;

  displayTimer(seconds);
  displayEndTime(then);

  countdown = setInterval(() => {
    const seconds_left = Math.round((then - Date.now()) / 1000);
    if (seconds_left < 0) {
      clearInterval(countdown);
      return;
    }
    displayTimer(seconds_left);
  }, 1000);
}

function displayTimer(seconds) {
  const timer_minutes = Math.floor(seconds / 60);
  const timer_seconds = Math.floor(seconds % 60);
  const timer = `${
      timer_minutes
    }:${
      timer_seconds < 10 ? '0' : ''
    }${
      timer_seconds
    }`;

  timer_display.textContent = timer;
}

function displayEndTime(timestamp ) {
  const end = new Date(timestamp);
  const hour = end.getHours();
  const minutes = end.getMinutes();

  end_time.textContent = `Be Back at ${
      hour
    }:${
      minutes < 10 ? '0' : ''
    }${
      minutes
    }`;
}

function startTimer() {
  timer(this.dataset.time);
}

buttons.forEach(button => button.onclick = startTimer);

document.customForm.onsubmit = function(e) {
  e.preventDefault();
  timer(this.minutes.value * 60);
  this.reset();
}
