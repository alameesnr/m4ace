// Function to calculate the sum of two numbers
function sum(a, b) {
    return a + b;
}

// Program to print "Hello, World!" and log the current date
console.log("Hello, World!");
console.log("Current Date:", new Date().toLocaleString());

// Program to print numbers from 1 to 10
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// Function to find the largest number in an array
function findLargestNumber(arr) {
    return Math.max(...arr);
}

// Example usage
console.log("Sum:", sum(5, 10));
console.log("Largest Number:", findLargestNumber([3, 7, 2, 9, 5]));