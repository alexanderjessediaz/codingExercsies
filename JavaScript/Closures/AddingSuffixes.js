// Write a function that returns an anonymous function, which transforms its input by adding a particular suffix at the end.

// add_ly = add_suffix("ly")

// add_ly("hopeless") ➞ "hopelessly"
// add_ly("total") ➞ "totally"

// add_less = add_suffix("less")

// add_less("fear") ➞ "fearless"
// add_less("ruth") ➞ "ruthless"

const add_suffix = suffix => {
    if(suffix === "ly"){
        const add_ly = () => {
            return "ly"
        }
      return add_ly()
    } else{ 
        const add_less = () => {
            return "less"
        }
       return add_less()
    }

}