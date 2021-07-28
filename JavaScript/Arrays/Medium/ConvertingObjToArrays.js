// Write a function that converts an object into an array, where each element represents a key-value pair in the form of an array.

// Examples
// toArray({ a: 1, b: 2 }) ➞ [["a", 1], ["b", 2]]

// toArray({ shrimp: 15, tots: 12 }) ➞ [["shrimp", 15], ["tots", 12]]

// toArray({}) ➞ []
// Notes
// Return an empty array if the object is empty.

const toArray = (obj) => {
    const emptyArr = [];
    let arr = [];
    if(obj === {}) return emptyArr;
    else {
        for( const [key,value] of Object.entries(obj)){
            arr.push([key,value])
        }
        return arr
    }

}