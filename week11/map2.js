class Sorted {
  constructor(data, compare) {
    this.data = data;
    this.compare = compare;
  }
  take() {
    if (!this.data.length) return;
    let min = this.data[0];
    let minIndex = 0;
    for (let i = 1; i < this.data.length; i++) {
      if (this.compare(this.data[i], min) < 0) {
        console.log(min, this.data[i]);
        min = this.data[i];
        minIndex = i;
      }
    }
    this.data[minIndex] = this.data[this.data.length - 1];
    this.data.pop();
    return min;
  }
  insert(v) {
    this.data.push(v);
  }
  get length() {
    return this.data.length;
  }
}
// 二叉树结构
// 数组结构模拟 二叉树
class BinaryHeap {
  constructor(data, compare) {
    this.data = data;
    this.compare = compare;
  }
  take() {
    if (!this.data.length) return;
    let min = this.data[0];
    let i = 0;
    while (i < data.length) {
      // 两个叶子节点
      // 2*i + 1
      // 2*i + 2
      if (2 * i + 1 < this.data.length  && 2 * i + 2 < this.data.length) {
        if (this.compare(this.data[2 * i + 1], this.data[2 * i + 2] < 0)) {
          this.data[i] = this.data[2 * i + 1]; // 子节点上位
          i = i * 2 + 1;
        } else {
          this.data[i] = this.data[2 * i + 2];
          i = i * 2 + 2;
        }
      }
    }
    return min;
  }
  insertAt(i, v) {
    this.data[i] = v
    while(i>0&&this.compare()){}
  }
  insert(v) {
    this.data.push(v);
  }
  get length() {
    return this.data.length;
  }
}

let map = localStorage.map
  ? JSON.parse(localStorage.map)
  : new Array(10000).fill(0);
let container = document.createElement("div");
for (let i = 0, len = map.length; i < len; i++) {
  let cell = document.createElement("div");
  cell.classList.add("cell");
  if (map[i]) {
    cell.style.background = "#000";
  }
  cell.addEventListener("mouseover", (e) => {
    if (clear) {
      e.target.style.background = "";
      map[i] = 0;
    } else if (mouse) {
      e.target.style.background = "#000";
      map[i] = 1;
    }
  });
  container.appendChild(cell);
}
document.getElementById("map").appendChild(container);
let mouse = false;
let clear = false;
document.body.addEventListener("mousedown", (e) => {
  mouse = true;
  clear = e.which === 3;
});
document.body.addEventListener("mouseup", () => (mouse = false));
document.getElementById("map").addEventListener("contextmenu", (e) => {
  e.preventDefault();
});

async function findPath(map, start, end) {
  map = map.slice();
  let queue = new Sorted([start], (a, b) => {
    return distance(a) - distance(b);
  });
  while (queue.length) {
    let [x, y] = queue.take();
    console.log([x, y]);
    if (x === end[0] && y === end[1]) {
      let path = [];
      while (x !== start[0] && y !== start[1]) {
        path.push([x, y]);
        document.querySelectorAll(".cell")[100 * y + x].style.background =
          "pink";
        [x, y] = map[y * 100 + x];
      }
      return path;
    }
    await insert([x, y - 1], [x, y]);
    await insert([x - 1, y], [x, y]);
    await insert([x + 1, y + 1], [x, y]);
    await insert([x, y + 1], [x, y]);
    await insert([x - 1, y - 1], [x, y]);
    await insert([x - 1, y + 1], [x, y]);
    await insert([x + 1, y + 1], [x, y]);
    await insert([x + 1, y - 1], [x, y]);
  }
  return null;

  async function insert([x, y], pre) {
    if (map[100 * y + x] !== 0) {
      return;
    }
    if (x < 0 || y < 0 || x > 100 || y > 100) {
      return;
    }
    map[100 * y + x] = pre;
    document.querySelectorAll(".cell")[100 * y + x].style.background = "green";
    await sleep(1);
    queue.insert([x, y]);
  }

  function distance([x, y]) {
    return (x - end[0]) ** 2 + (y - end[1]) ** 2;
  }
}

function sleep(time) {
  return new Promise((resolve) => {
    setTimeout(resolve, time);
  });
}
