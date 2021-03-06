const hand_h = document.querySelector('.hand-hours');
const hand_m = document.querySelector('.hand-minutes');
const hand_s = document.querySelector('.hand-seconds');

function tick() {
  const now = new Date(Date.now());

  const h = now.getHours();
  const m = now.getMinutes();
  const s = now.getSeconds();

  const h_angle = ((h / 12) * 360) + ((m / 60) * 30) + 90;
  const m_angle = ((m / 60) * 360) + ((s / 60) * 6) + 90;
  const s_angle = (s / 60) * 360 + 90;

  hand_h.style.transform = `rotate(${h_angle}deg)`;
  hand_m.style.transform = `rotate(${m_angle}deg)`;
  hand_s.style.transform = `rotate(${s_angle}deg)`;
}

setInterval(tick, 1000);

tick();
