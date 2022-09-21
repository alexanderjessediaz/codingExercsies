// Create a function that takes an array of numbers and return both the minimum and maximum numbers, in that order.

// minMax([1, 2, 3, 4, 5]) ➞ [1, 5]

// minMax([2334454, 5]) ➞ [5, 2334454]

// minMax([1]) ➞ [1, 1]

// not final solution
const minMax = (minMaxArray) => { 
  if (minMaxArray.length === 1) {
  	const arr1 = minMaxArray[0];
    const newArr = minMaxArray.concat(arr1)
  };
  const smallElement = Math.min(...minMaxArray);
  const largestElement = Math.max(...minMaxArray);
  const result = [smallElement,largestElement];
 };