const instructors = [
  { name: "Rifat", age: 25, position: "Senior" },
  { name: "Munni", age: 18, position: "junior" },
  { name: "Rima", age: 26, position: "Senior" },
];

// using loop
let result = [];
for (let instructor of instructors) {
  if (instructor.position === "Senior") {
    result.push(instructor);
  }
}
// console.log(result);

// useing filter
const instruc = instructors.filter(
  (instruct) => instruct.position === "Senior"
);
// console.log(instruc);
