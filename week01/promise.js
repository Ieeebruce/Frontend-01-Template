// new Promise((resolve) => {
//   setTimeout(() => {
//     resolve(1);
//   }, 3000);
// }).then((res) => console.log(res));
// setTimeout(() => {
//     console.log(2)
// }, 1000);
console.log(1);

setTimeout(function () {
  console.log(2);

  new Promise(function (resolve) {
    console.log(3);
    resolve(4);
  }).then(function (num) {
    console.log(num);
  });
}, 300);

new Promise(function (resolve) {
  console.log(5);
  setTimeout(function () {
    resolve(6);
  }, 3000);
}).then(function (num) {
  console.log(num);
});

setTimeout(function () {
  console.log(7);
}, 400);
