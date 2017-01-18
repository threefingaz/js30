const video = document.querySelector('.player');
const canvas = document.querySelector('.photo');
const ctx = canvas.getContext('2d');
const strip = document.querySelector('.strip');
const snap = document.querySelector('.snap');

function playVideo() {
    navigator
        .mediaDevices
        .getUserMedia({video: true, audio: false})
        .then(video_stream => {
            video.src = window
                .URL
                .createObjectURL(video_stream);
            video.play();
        })
        .catch(error => console.error(error));
}

function playVideoOnCanvas() {
    const width = video.videoWidth;
    const height = video.videoHeight;
    canvas.width = width;
    canvas.height = height;

    return setInterval(() => {
        ctx.drawImage(video, 0, 0, width, height);
        let pixels = ctx.getImageData(0, 0, width, height);

        pixels = keyFrame(pixels);

        ctx.putImageData(pixels, 0, 0);
    }, 16);
}

function takePhoto() {
    snap.currentTime = 0;
    snap.play();

    const image_data = canvas.toDataURL('image/jpeg');
    const image_link = document.createElement('a');
    image_link.href = image_data;
    image_link.setAttribute = ('download', 'I');
    image_link.innerHTML = `<img src="${image_link}" alt="You"/>`;
    strip.appendChild(image_link);
}

function blueEffect(pixels) {
    for (let i = 0; i < pixels.data.length; i+=4) {
        pixels.data[i+0] = pixels.data[i+0] - 150;
        pixels.data[i+1] = pixels.data[i+1] * 0.8;
        pixels.data[i+2] = pixels.data[i+2] + 100;
    }
    return pixels;
}

function rgbEffect(pixels) {
    for (let i = 0; i < pixels.data.length; i+=4) {
        pixels.data[i-100] = pixels.data[i+0];
        pixels.data[i+500] = pixels.data[i+1];
        pixels.data[i-100] = pixels.data[i+2];
    }
    return pixels;
}

function keyFrame(pixels) {
  const levels = {};

  document.querySelectorAll('.rgb input').forEach((input) => {
    levels[input.name] = input.value;
  });

  for (i = 0; i < pixels.data.length; i = i + 4) {
    red = pixels.data[i + 0];
    green = pixels.data[i + 1];
    blue = pixels.data[i + 2];
    alpha = pixels.data[i + 3];

    if (red >= levels.rmin
      && green >= levels.gmin
      && blue >= levels.bmin
      && red <= levels.rmax
      && green <= levels.gmax
      && blue <= levels.bmax) {
      // take it out!
      pixels.data[i + 3] = 0;
    }
  }

  return pixels;
}

playVideo();
video.addEventListener('canplay', playVideoOnCanvas);
