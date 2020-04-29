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
function a() {}
function foo() {
  return a;
}
console.log(new foo);
