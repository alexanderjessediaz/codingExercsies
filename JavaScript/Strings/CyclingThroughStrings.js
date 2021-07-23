// Given two strings, repeatedly cycle through all of the letters in the first string until it is the same length as the second string.

// stringCycling("abc", "hello") ➞ "abcab"

// stringCycling("programming", "edabit") ➞ "progra"

// stringCycling("the world in me evolves in hers", "i love Tesh, so much so") ➞ "the world in me evolves"

// stringCycling("a thing of beauty is a joy forever", "indulge me surely") ➞ "a thing of beauty"

// stringCycling("to", "hide") ➞ "toto"

// stringCycling("such a feeling coming over me", "top of the world") ➞ "such a feeling c"

// Notes
// All tests will include valid strings.

const string1 = "hello"
const string2 = "goodbye"
const string3 = "ax"

stringCycling = (a,b) => {
  let stringArray = [a,b]  
  let rewrittenStringToArray = stringArray[0].split('')
  const bStringLength = stringArray[1].length
  
  for(let i=0;i<bStringLength; i++) {
  	if( bStringLength > rewrittenStringToArray.length) {
    	rewrittenStringToArray.splice(
      	rewrittenStringToArray.length,0,rewrittenStringToArray[i]
     	).join("")
    } else{
    	rewrittenStringToArray.length = bStringLength
      return rewrittenStringToArray.join("")
    } 
   }
   return rewrittenStringToArray
}

console.log(stringCycling(string1,string2))