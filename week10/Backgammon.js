const canvas = document.querySelector("#canvas");
const float = document.querySelector("#float");
const context = canvas.getContext("2d");
const context2 = float.getContext("2d");
const size = 50;
const count = 14;
const beginX = 50;
const beginY = 50;
let black = true;
const history = [];
const radius = 20;
initCanvas("canvas");
initCanvas("float");
drawBoard();
const pattern = new Array((count + 1) * (count + 1)).fill(0);
function initCanvas(id) {
  let canvas = document.getElementById(id);
  canvas.width = beginX * 2 + size * count;
  canvas.height = beginY * 2 + size * count;
}

function drawBoard() {
  context.strokeRect(beginX, beginY, count * size, count * size); //边框
  const endX = beginX + count * size;
  for (let i = 1; i < count; i++) {
    context.beginPath();
    context.moveTo(beginX, beginY + size * i);
    context.lineTo(endX, beginY + size * i); // 横线
    context.stroke();
    context.closePath();
  }

  const endY = beginY + count * size;
  for (let i = 1; i < count; i++) {
    context.beginPath();
    context.moveTo(beginX + size * i, beginY);
    context.lineTo(beginX + size * i, endY); // 纵线
    context.stroke();
    context.closePath();
  }
}

function locateX(currentX) {
  if (currentX < beginX) {
    return -1;
  }
  const index = Math.floor((currentX - beginX) / size); // X 取整
  const decimalPart = currentX - index * size - size; // 余数
  if (index > 14) {
    return -1;
  }
  if (decimalPart >= size / 2) {
    return (index + 1) * size + beginX;
  } else {
    return index * size + beginX;
  }
}

function exists(x, y) {
  if (pattern[((count + 1) * y) / size + x / size] !== 0) {
    return true;
  }
  return false;
}

function drawPoint(x, y, black) {
  context.beginPath();
  context.arc(x, y, radius, 0, Math.PI * 2, true);
  const g = context.createRadialGradient(x, y, 10, x, y, 0);
  if (black) {
    g.addColorStop(0, "#0A0A0A");
    g.addColorStop(1, "#636766");
    context.fillStyle = g;
  } else {
    g.addColorStop(0, "#D1D1D1");
    g.addColorStop(1, "#F9F9F9");
    context.fillStyle = g;
  }
  context.fill();
  context.closePath();
}

float.addEventListener("mousemove", function (e) {
  const currentX = e.offsetX;
  const currentY = e.offsetY;
  const x = locateX(currentX);
  const y = locateX(currentY);
  if (x === -1 || y === -1 || exists(x, y)) {
    return;
  }
  context2.clearRect(0, 0, float.width, float.height);
  context2.beginPath();
  context2.moveTo(x - 5, y - 5);
  context2.lineTo(x + 5, y + 5);
  context2.stroke();
  context2.moveTo(x - 5, y + 5);
  context2.lineTo(x + 5, y - 5);
  context2.stroke();
  context2.closePath();
});

float.addEventListener("click", function (e) {
  const x = locateX(e.offsetX);
  const y = locateX(e.offsetY);
  if (x === -1 || y === -1 || exists(x, y)) {
    return;
  } else {
    context2.clearRect(0, 0, float.width, float.height);
    drawPoint(x, y, black);
    black = !black;
    pattern[(count + 1) * (y / size) + x / size] = black ? 1 : 2;
  }
});

function win(pattern,[x,y])