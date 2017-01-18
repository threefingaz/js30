window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
const transcription = document.querySelector('.words');

let p = document.createElement('p');
transcription.appendChild(p);

recognition.lang = 'ru-RU';
recognition.interimResults = true;
recognition.start();
recognition.onend = recognition.start;

recognition.onresult = (event) => {
  const transcript = Array.from(event.results)
    .map(result => result[0])
    .map(result => result.transcript)
    .join('');

  p.textContent = transcript;

  if (event.results[0].isFinal) {
    p = document.createElement('p');
    transcription.appendChild(p);
  };

};
