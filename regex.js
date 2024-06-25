// const str = "Hello, how are you?\nI am Fine.";
// const regex = /./;
// const isThereFullStop = regex.test(str);
// console.log(isThereFullStop);

// const str = "Hello apple, \\ ball, car_123@ \n. cabc";
// const regex = new RegExp(/\S/g);
// const str = "2024-06-23";
const str = "foobarbarfoo";
// const regex = new RegExp(/[abc]/g);
// const regex = new RegExp(/[a-e]/g);
//Everything except a to e
// const regex = new RegExp(/[^a-e]/g);

// const regex = new RegExp(/\Babc\b$/g);
// const regex = new RegExp(/\Bppl\B/g);
// const regex = new RegExp(/ab|cd/g);
// const regex = new RegExp(/(\d{4})-(\d{2})-(\d{2})/);
const regex = new RegExp(/(foo)(bar)\2\1/);
// const reformattedDate = str.replace(regex, "$3/$2/$1");
console.log(str.match(regex));
// console.log(reformattedDate);
