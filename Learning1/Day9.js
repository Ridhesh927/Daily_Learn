// ## Your Tasks Today

// ### **1. JS Fundamentals (60 min) — Higher-Order Functions & Callbacks**

// This is **critical** for understanding how JavaScript really works, especially for React later.


// WHAT IS A HIGHER-ORDER FUNCTION?
// A function that either:
// 1. Takes another function as a parameter, OR
// 2. Returns a function

// // Example 1: Function that takes a function
// function doTwice(fn) {
//   fn();
//   fn();
// }

// function sayHello() {
//   console.log("Hello!");
// }

// doTwice(sayHello);
// // Output:
// // Hello!
// // Hello!

// // Example 2: Function that returns a function
// function makeMultiplier(factor) {
//   return function(number) {
//     return number * factor;
//   };
// }

// const double = makeMultiplier(2);
// const triple = makeMultiplier(3);

// console.log(double(5));  // 10
// console.log(triple(5));  // 15

// // CALLBACKS - Functions passed as arguments
// // You've already used these!

// const numbers = [1, 2, 3, 4, 5];

// // map takes a CALLBACK function
// numbers.map(function(num) {
//   return num * 2;
// });

// // filter takes a CALLBACK function
// numbers.filter(function(num) {
//   return num > 3;
// });

// // setTimeout takes a CALLBACK function
// setTimeout(function() {
//   console.log("3 seconds later!");
// }, 3000);

// // REAL-WORLD EXAMPLE: Custom forEach
// function myForEach(array, callback) {
//   for (let i = 0; i < array.length; i++) {
//     callback(array[i], i);
//   }
// }

// myForEach([10, 20, 30], function(value, index) {
//   console.log(`Index ${index}: ${value}`);
// });
// // Output:
// Index 0: 10
// Index 1: 20
// Index 2: 30

// YOUR TASKS:

// 1. Write a function called repeat(n, action)
//    that calls the action function n times
//    Example: repeat(3, () => console.log("Hi"))
//    Should print "Hi" three times


function  repeat(n,action) {
    for(let i = 0; i < n; i++) {
    action();
    }
}

repeat(3,() => console.log("HI"))




// 2. Write a function called applyOperation(x, y, operation)
//    that takes two numbers and a function
//    Returns the result of calling operation(x, y)
//    Test with: applyOperation(5, 3, (a, b) => a + b) → 8
//                applyOperation(5, 3, (a, b) => a * b) → 15

function  applyOperation(x,y,operation) {
   return operation(x,y)
}

console.log(applyOperation(5,3,(a,b) => a+ b));

console.log(applyOperation(5,3,(a,b) => a * b));



// 3. Write a function called filterArray(array, condition)
//    that filters an array based on a condition function
//    Example: filterArray([1,2,3,4,5], num => num > 3) → [4,5]
//    (Yes, this is your own implementation of filter!)

function filterArray(array,condition) {
    const result = [];
    for(let i =0; i < array.length; i++) {
        if(condition(array[i])) {
            result.push(array[i]);
        }
    }
    return result;
}
console.log(filterArray([1,2,3,4,5], num => num > 3));
console.log(filterArray([1,2,3,4,5], num => num % 2 === 0));



// 4. Write a function called createGreeter(greeting)
//    that returns a function that greets someone
//    Example:
//    const sayHi = createGreeter("Hi");
//    sayHi("Ram") → "Hi, Ram!"
//    const sayHello = createGreeter("Hello");
//    sayHello("Sita") → "Hello, Sita!"

function createGreeter(greeting) {
    return function(name) {
        return `${greeting}, ${name}!`;
    }

}

// 2. LeetCode (30 min) — Missing Number
// Problem: https://leetcode.com/problems/missing-number/
// What it asks: Given an array containing n distinct numbers from 0 to n, find the one number that is missing.
// Examples:

// [3,0,1] → 2 (we have 0,1,3 but missing 2)
// [0,1] → 2 (we have 0,1 but missing 2)
// [9,6,4,2,3,5,7,0,1] → 8

// Two Approaches:
// Approach 1: Math (Sum formula)

// Sum of 0 to n = n * (n + 1) / 2
// Sum of array = add all numbers in array
// Missing number = expected sum - actual sum

// javascriptvar missingNumber = function(nums) {
//     const n = nums.length;
//     const expectedSum = (n * (n + 1)) / 2;
//     const actualSum = nums.reduce((sum, num) => sum + num, 0);
//     return expectedSum - actualSum;
// };
// ```

// **Approach 2: XOR (Bit manipulation - advanced)**
// Using XOR properties, but Approach 1 is simpler.

// Approach 1:
/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    
    const n = nums.length;

    const expectedSum = (n * (n + 1)/ 2);

    const actualSum = nums.reduce((sum,nums)=> sum + nums ,0);

    return expectedSum - actualSum; 
};

// Approach 2: XOR
var missingNumber = function(nums) {
    let result = nums.length;  // Start with n
    
    for (let i = 0; i < nums.length; i++) {
        result ^= i;        // XOR with index
        result ^= nums[i];  // XOR with value
    }
    
    return result;
};