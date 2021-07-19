// Given two strings, repeatedly cycle through all of the letters in the first string until it is the same length as the second string.

// stringCycling("abc", "hello") ➞ "abcab"

// stringCycling("programming", "edabit") ➞ "progra"

// stringCycling("the world in me evolves in hers", "i love Tesh, so much so") ➞ "the world in me evolves"

// stringCycling("a thing of beauty is a joy forever", "indulge me surely") ➞ "a thing of beauty"

// stringCycling("to", "hide") ➞ "toto"

// stringCycling("such a feeling coming over me", "top of the world") ➞ "such a feeling c"

// Notes
// All tests will include valid strings.

const string1 = "hello";
const string2 = "goodbye";
const string3 = "ax";
const string4 = "controller";
const sentence1 = "the dog ran outside.";
const sentence2 = "I like cake.";
stringCycling = (a,b) => {
    // b.length > a.length ? a.repeat(b.length) : new a.length === b.length
    let stringArray = [a,b]
    let rewrittenString = []
    
    let rewriteStringToArray = stringArray[0].split('')
    const bStringLength = stringArray[1].length
    
    
    for(let i=0;i<bStringLength; i++) {
    	if( bStringLength > rewriteStringToArray.length) {
      let repeatString =	rewrittenString.push(
      rewriteStringToArray[i])
      
  
      } else {
      	rewrittenString.push(rewriteStringToArray[i])
      }
    	
    }
    
   /* const newString = stringArray.reduce((acc,cv,ci,arr) => {
      let rewrittenString = arr[0].split('')
      let rewrittenStringLength = arr[1].length
      
      
    },[]) */
   

    console.log(rewrittenString)
}

console.log(stringCycling(string1,string2))