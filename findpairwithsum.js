function findPairWithSum(arr, target) {
  const visited = new Set();  // To store visited numbers

  for (let num of arr) {
    const complement = target - num; // Check if the complement exists in the Set
    if (visited.has(complement)) {
      return [complement, num];  // Found the pair
    }
    visited.add(num);  // Add the current number to the Set
  }
  
  return [];  // Return an empty array if no pair found
}

// Example Usage:
console.log(findPairWithSum([1, 2, 3, 4, 5], 6)); // [1, 5]
console.log(findPairWithSum([8, 3, 7, 9], 15)); // [8, 7]
console.log(findPairWithSum([2, 4, 6], 10)); // []
