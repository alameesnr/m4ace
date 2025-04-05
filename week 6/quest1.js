const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

// 1. Return a new array with only the even numbers
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log("Even Numbers:", evenNumbers); // [2, 4, 6, 8]

// 2. Return the sum of all numbers using .reduce()
const sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log("Sum of Numbers:", sum); // 36
