const key1 = Symbol("key");
const key2 = Symbol("key");

console.log(key1 == key2);

const email = Symbol("email");

const person = {
  name: "Arbin",
  age: 21,
  [email]: "csit22081014_arabinda@achsnepal.edu.np",
};

for (key in person) {
  console.log(person[key]);
}

console.log(person[email]);
