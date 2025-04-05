// Create a Uint8Array with length 5
let typedArr = new Uint8Array(5);

// Populate it with values
typedArr.set([10, 20, 30, 40, 50]);

// Print the original array
console.log("Original TypedArray:", typedArr);

// Reverse it (convert to regular array to use reverse)
let reversedArr = Array.from(typedArr).reverse();

console.log("Reversed Array:", reversedArr);
