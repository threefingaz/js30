const keys = document.querySelectorAll('.key');

keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', play);

function removeTransition(e) {
    if (e.propertyName !== 'transform')
        return;
    e
        .target
        .classList
        .remove('playing');
}

function play(e) {
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    if (!key)
        return;

    key
        .classList
        .add('playing');
    audio.currentTime = 0;
    audio.play();
}
