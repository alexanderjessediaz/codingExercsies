// Write a function that takes an integer minutes and converts it to seconds.

// convert(5) ➞ 300

// convert(3) ➞ 180

// convert(2) ➞ 120

const convert = minute => { 
  const seconds = minute * 60
  console.log(seconds)
  return seconds
 };
