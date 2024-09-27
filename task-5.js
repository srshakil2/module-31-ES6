// using reduce
const pepole = [
  { name: "Shakil", age: 20 },
  { name: "Robiul", age: 15 },
  { name: "Shabina", age: 22 },
];
let initialvalu = 0;
const totalAge = pepole.reduce((r, j) => {
  console.log(r);
  return r + j.age;
}, initialvalu);
console.log("The total age : ", totalAge);
