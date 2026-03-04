// Write a function called makeMultiplier that takes a number
// and returns a function that multiplies whatever you pass to it

// Example of how it should work:

function makeMultiplier(multiplier) {
  return function(number) {
    // This function receives the number to multiply
    // It needs to multiply 'number' by 'multiplier'
    // What goes here?
    return number * multiplier;
  }
}

const triple = makeMultiplier(3);
console.log(triple(5));  // should be 15

const double = makeMultiplier(2);
console.log(double(5));  // should be 10


