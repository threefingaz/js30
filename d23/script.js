const msg = new SpeechSynthesisUtterance();
let voiceList = [];
const dropdown_voices = document.querySelector('[name="voice"]');
const options = document.querySelectorAll('[type="range"], [name="text"]');
const button_speak = document.querySelector('#speak');
const button_stop = document.querySelector('#stop');

msg.text = document.querySelector('[name="text"]').value;

function populateVoices() {
    voiceList = speechSynthesis.getVoices();
    dropdown_voices.innerHTML = voiceList
        .filter(voice => {
            return voice.lang.includes('ru') || voice.lang.includes('en')
        })
        .map(voice => {
        return `
            <option value="${voice.name}">
                ${voice.name} (${voice.lang})
            </option>
        `;
    }).join('');
}

function toggleSpeech(restart = true) {
    speechSynthesis.cancel();
    if (restart) speechSynthesis.speak(msg);
}

function setVoice() {
    msg.voice = voiceList.find(voice => voice.name === dropdown_voices.value);
    toggleSpeech();
}

function setOption() {
    msg[this.name] = this.value;
    toggleSpeech();
}

populateVoices();
dropdown_voices.addEventListener('change', setVoice);
options.forEach(option => option.addEventListener('change', setOption));
button_stop.addEventListener('click', () => toggleSpeech(false));
button_speak.addEventListener('click', toggleSpeech);
speechSynthesis.addEventListener('voiceschanged', populateVoices);
