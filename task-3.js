// even numbers
const numbers = [1, 3, 3, 5, 7, 9];
let newNumber = [];
for (let num of numbers) {
  let even = num + 1;
  newNumber.push(even);
}
// console.log(newNumber);
const even = numbers.map((num) => num + 1);
const evens = numbers.map((num) => num * 5);
// console.log(even);
// console.log(evens);

// divition number
const nums = [100, 33, 40, 55, 34, 57, 90, 60, 33, 20, 10, 80];
let newNum = [];
for (const numb of nums) {
  if (numb % 10 === 0) {
    newNum.push(numb);
  }
}
// console.log(newNum);
const newAreay = nums.filter((num) => num % 10 === 0);
// console.log(newAreay);

const newAreays = nums.find((num) => num % 10 === 0);
// console.log(newAreays);
