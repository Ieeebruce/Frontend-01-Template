let pattern = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
];
let shapes = ["", "O", "X"];
let shape = 1;
show();

function show() {
  let board = document.getElementById("board");
  board.innerHTML = "";
  for (let i in pattern) {
    for (let j in pattern[i]) {
      let cell = document.createElement("div");
      cell.classList.add("cell");
      cell.innerText = shapes[pattern[i][j]];
      cell.addEventListener("click", () => move(j, i));
      board.appendChild(cell);
    }
    board.appendChild(document.createElement("br"));
  }
}

function move(x, y) {
  if (pattern[y][x] !== 0) {
    return;
  }
  pattern[y][x] = shape;
  if (check(pattern, shape)) {
    alert(shapes[shape] + "win");
  }
  shape = 3 - shape;
  show();
  console.log(willWin(pattern, shape));
  computerMove()
}

function computerMove(){
  let choice = bestChoice(pattern, shape)
  if(choice.point){
    pattern[choice.point[1]][choice.point[0]] = shape
  }
  shape = 3 - shape
  show()
}

function check(pattern, shape) {
  for (let i = 0; i < 3; i++) {
    let win = true;
    for (let j = 0; j < 3; j++) {
      if (pattern[i][j] !== shape) {
        win = false;
      }
    }
    if (win) {
      return win;
    }
  }
  for (let i = 0; i < 3; i++) {
    let win = true;
    for (let j = 0; j < 3; j++) {
      if (pattern[j][i] !== shape) {
        win = false;
      }
    }
    if (win) {
      return win;
    }
  }
  {
    let win = true;
    for (let i = 0; i < 3; i++) {
      if (pattern[i][2 - i] !== shape) {
        win = false;
      }
    }
    if (win) {
      return win;
    }
  }
  {
    let win = true;
    for (let i = 0; i < 3; i++) {
      if (pattern[i][i] !== shape) {
        win = false;
      }
    }
    if (win) {
      return win;
    }
  }
  return false;
}

function willWin(pattern, shape) {
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (pattern[i][j] !== 0) {
        continue;
      }
      let temp = clone(pattern);
      temp[i][j] = shape;
      if (check(temp, shape)) {
        return [i, j];
      }
    }
  }
  return null;
}

function clone(pattern) {
  return JSON.parse(JSON.stringify(pattern));
}

function bestChoice(pattern, shape) {
  let point = willWin(pattern, shape);
  if (point) {
    return { point, result: 1 };
  }

  let result = -1;
  outer: for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (pattern[i][j] !== 0) {
        continue;
      }
      let tmp = clone(pattern);
      tmp[i][j] = shape;
      let opp = bestChoice(tmp, 3 - shape);
      const op = 0 - opp.result;
      if (op >= result) {
        point = [j, i];
        result = op;
      }
      if (result === 1) {
        break outer;
      }
    }
  }
  return {
    point,
    result: point ? result : 0,
  };
}
