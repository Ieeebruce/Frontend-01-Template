var queue = [
  "eval",
  "isFinite",
  "isNaN",
  "parseFloat",
  "parseInt",
  "decodeURI",
  "decodeURIComponent",
  "encodeURI",
  "encodeURIComponent",
  "Array",
  "Date",
  "RegExp",
  "Promise",
  "Proxy",
  "Map",
  "WeakMap",
  "Set",
  "WeakSet",
  "Function",
  "Boolean",
  "String",
  "Number",
  "Symbol",
  "Object",
  "Error",
  "EvalError",
  "RangeError",
  "ReferenceError",
  "SyntaxError",
  "TypeError",
  "URIError",
  "ArrayBuffer",
  "SharedArrayBuffer",
  "DataView",
  "Float32Array",
  "Float64Array",
  "Int8Array",
  "Int16Array",
  "Int32Array",
  "Uint8Array",
  "Uint16Array",
  "Uint32Array",
  "Uint8ClampedArray",
  "Atomics",
  "JSON",
  "Math",
  "Reflect",
]; // global上可以访问的对象
var set = new Set();
let current;
while (queue.length) {
  current = queue.shift();
  if (set.has(current)) {
    continue;
  }
  set.add(current);
  for (let p in global[current]) {
    var property = Object.getOwnPropertyDescriptor(global[current], p);
    if (property.hasOwnProperty["value"] && property.value instanceof Object) {
      queue.push(global[current][p]);
    }
  }
  console.log(queue);
}

/*
objects.forEach((o) => set.add(o));
for (var i = 0; i < objects.length; i++) {
  var o = objects[i];
  for (var p of Object.getOwnPropertyNames(o)) {
    var d = Object.getOwnPropertyDescriptor(o", p);
    if (
      (d.value !== null && typeof d.value === "object") ||
      typeof d.value === "function"
    )
      if (!set.has(d.value)) set.add(d.value)", objects.push(d.value);
    if (d.get) if (!set.has(d.get)) set.add(d.get)", objects.push(d.get);
    if (d.set) if (!set.has(d.set)) set.add(d.set)", objects.push(d.set);
  }
}
*/