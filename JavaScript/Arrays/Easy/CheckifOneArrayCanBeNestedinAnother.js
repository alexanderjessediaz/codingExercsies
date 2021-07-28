// Create a function that returns true if the first array can be nested inside the second.

// arr1 can be nested inside arr2 if:

// arr1's min is greater than arr2's min.
// arr1's max is less than arr2's max.

// canNest([1, 2, 3, 4], [0, 6]) ➞ true

// canNest([3, 1], [4, 0]) ➞ true

// canNest([9, 9, 8], [8, 9]) ➞ false

// canNest([1, 2, 3, 4], [2, 3]) ➞ false

// Note the strict inequality (see example #3).

	const canNest = (arr1,arr2) => {
        const arr1LowestNum = Math.min(...arr1)
      const arr1HighestNum = Math.max(...arr1)
      
      const arr2LowestNum = Math.min(...arr2)
      const arr2HighestNum = Math.max(...arr2)
    
         if (arr1LowestNum > arr2LowestNum && arr1HighestNum < arr2HighestNum) {
          return true
      }  else {
          return false
      }
    } 
    