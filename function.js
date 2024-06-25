// function add1(a, b) {
//   return a + b;
// }

// const add2 = function (a, b) {
//   return a + b;
// };

// const add3 = (a, b) => a + b;

// const square = (a) => a * a;

// console.log(add1(2, 4));
// console.log(add2(2, 4));
// console.log(add3(2, 4));
// console.log(square(2));

// console.log(greet("Pre function"));
// function greet(name) {
//   console.log("Hello " + name);
//   return "Hello " + name;
// }

// const greet2 = (name) => {
//   console.log("Hello " + name);
// };

// greet("someone");
// greet2("someone");

// function Person(name) {
//   this.name = name;
// }

// const person1 = new Person("Krisha Aapanga");

// console.log(person1);

person1 = {
  name: "Krisha Aapanga",
  printName: function () {
    console.log(this.name);
  },
};

person1.printName();
