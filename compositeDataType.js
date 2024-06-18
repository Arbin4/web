let person = {
  name: "Arabinda",
  age: 24,
};
// console.log(person);

let myArr = [1, 5, 3, 6, 7, 8, 9, 1, "Two", 3.98, true, false];
// console.log(myArr);

function add(a, b) {
  return a + b;
}

// console.log(add(1, 2));

add.name = "Something";
add.concat = (a, b) => {
  // console.log(`${a}${b}`);
};

add.concat(1, 2);

const firstname = "Arbin";
const lastname = "Sigdel";

const fullName = firstname + " " + lastname;
const fullName2 = `My name is ${firstname} ${lastname}`;

// console.log(fullName);
// console.log(fullName2);

const myArray = [1, 2, 3, 4, 5];

const [first, second, ...remaning] = myArray;

console.log(first, second);
console.log(remaning);

const { name, age } = person;
console.log(name);
console.log(age);
