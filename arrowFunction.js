// Rewrite the following function as an arrow function:
/******************************
	function greet(name) {
	  return `Hello, ${name}!`;
	}
********************************/
const greet = (name) => `Hello ${name}!`;
console.log(greet("lulu"));

// Write a simple arrow function that takes two parameters and returns their sum.
const math = (numberOne, numberTwo) => numberOne + numberTwo;
console.log(math(4, 3));

// Write a simple arrow function that squares a number.
const math2 = (number) => number ** 2;
console.log(math2(7));

// [🌶️🌶️] Create an arrow function that takes an array of numbers and returns a new array with each number squared.
// const hardMath = ()
numbers = [2, 4, 5, 7];
// const hardMath = numbers.map(function(num){
//     return num ** 2
// });
// console.log(hardMath);

const hardMath = numbers.map((num) => num ** 2);
console.log(hardMath);
