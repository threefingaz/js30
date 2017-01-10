const inputs = document.querySelectorAll('input');

function update(e) {
  const unit = this.dataset.units || '';
  document.documentElement.style.setProperty(`--${this.name}`, this.value + unit);
}

inputs.forEach(input => input.addEventListener('change', update));
inputs.forEach(input => input.addEventListener('mousemove', update));
