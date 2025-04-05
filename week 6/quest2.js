function flattenArray(arr) {
    return arr.reduce((flat, current) => flat.concat(current), []);
  }
  
  // Example usage:
  const nested = [[1, 2], [3, 4], [5]];
  const flattened = flattenArray(nested);
  console.log(flattened); // Output: [1, 2, 3, 4, 5]
  