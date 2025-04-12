function getFirstElement<T>(arr: T[]): T | undefined {
    return arr[0];
  }
  
  // Example usage:
  const num = getFirstElement([1, 2, 3]);            // number
  const str = getFirstElement(['a', 'b', 'c']);      // string
  const bool = getFirstElement([true, false, true]); // boolean
  
  console.log(num);  // 1
  console.log(str);  // 'a'
  console.log(bool); // true
  