// class Parent {
//   constructor() {
//     this.a = 1;
//   }
// }
// class Child extends Parent {
//   constructor() {
//     super();
//     console.log(this.a);
//   }
// }
// new Child();
// var name = "lht";
// function foo() {
//   console.log(arguments);
// }
// foo`hello${name}`;
// function a() {}
// function foo() {
//   return a;
// }
// console.log(new foo);
// var i = 1;
// while (i < 10) {
//   console.log(i);
//   i++;
//   if (i > 5) {
//     break;
//   }
// }
// new Promise((res) => res()).then(
//   () => setTimeout(() => console.log(1), 10000),
//   console.log(0)
// );
// console.log(2);
// new Promise((res) => res()).then(() => console.log(1)), 1 + 1;
// new Promise((res) => res()).then(() => console.log(1)), console.log(2);
async function async1() {
  console.log("async1 start");
  await async2();
  console.log("async1 end");
}
async function async2() {
  console.log("async2");
}
async1();
new Promise(function (resolve) {
  console.log("promise1");
  resolve();
}).then(function () {
  console.log("promise2");
});
var lists = document.getElementById('container').children
let result = []
lists.forEach(node => {
  if (node.getAttribute('data-tag').match(/css/))
    result.push({
      name: node.children[1].innerText,
      url: node.children[1].children[0].href
    })
});