const canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const ctx = canvas.getContext('2d');
ctx.lineWidth = 100;
ctx.lineCap = 'round';
ctx.lineJoin = 'round';
ctx.shadowColor = 'rgba(0, 0, 30, .1)';
ctx.shadowOffsetX = 1;
ctx.shadowOffsetY = 1;

let drawing = false;
let last_x = 0;
let last_y = 0;
let hue = 0;
let direction = true;

function draw(e) {
    if(!drawing) return;

    ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
    ctx.beginPath();
    ctx.moveTo(last_x, last_y);
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();

    [last_x, last_y] = [e.offsetX, e.offsetY];

    hue++;
    if(hue > 360) hue = 0;
    if(ctx.lineWidth <= 10 || ctx.lineWidth >= 300) direction = !direction;

    direction ? ctx.lineWidth++ : ctx.lineWidth--;
}

canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mousedown', (e) => {
    drawing = true;
    [last_x, last_y] = [e.offsetX, e.offsetY];
});
canvas.addEventListener('mouseup', () => drawing = false);
