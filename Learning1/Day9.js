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




//Explaination of Approach 1:

// ---

// ## **Missing Number - Complete Guide**

// **Problem:** Given array with numbers 0 to n (one missing), find the missing number.

// **Example:**
// - Input: `[3, 0, 1]`
// - Expected: `[0, 1, 2, 3]` but we only have `[0, 1, 3]`
// - Missing: `2`

// ---

// ## **APPROACH 1: MATH (EASIEST) - Use This One**

// ### **The Logic (Super Simple)**

// If you have numbers from 0 to n, you can calculate what the sum SHOULD be.

// **Example with n=3:**
// ```
// Numbers should be: 0, 1, 2, 3
// Sum should be: 0 + 1 + 2 + 3 = 6
// ```

// **But your array is:** `[3, 0, 1]`
// ```
// Actual sum: 3 + 0 + 1 = 4
// ```

// **Missing number:**
// ```
// Expected sum - Actual sum = 6 - 4 = 2
// ```

// ---

// ### **The Math Formula**

// Sum of numbers from 0 to n:
// ```
// 0 + 1 + 2 + 3 + ... + n = n × (n + 1) / 2
// ```

// **Example:**
// ```
// n = 3
// Sum = 3 × (3 + 1) / 2 = 3 × 4 / 2 = 12 / 2 = 6 ✓

// n = 5
// Sum = 5 × (5 + 1) / 2 = 5 × 6 / 2 = 30 / 2 = 15
// (0+1+2+3+4+5 = 15 ✓)
// ```

// ---

// ### **The Code (Approach 1)**

// ```javascript
// var missingNumber = function(nums) {
//     const n = nums.length;
    
//     // Calculate expected sum (0 to n)
//     const expectedSum = (n * (n + 1)) / 2;
    
//     // Calculate actual sum of array
//     const actualSum = nums.reduce((sum, num) => sum + num, 0);
    
//     // Missing number = difference
//     return expectedSum - actualSum;
// };
// ```

// ---

// ### **Step-by-Step Trace**

// **Input:** `[9, 6, 4, 2, 3, 5, 7, 0, 1]`

// ```javascript
// Step 1: n = nums.length = 9
//   (Array has 9 numbers, so missing one from 0-9)

// Step 2: expectedSum = (9 × 10) / 2 = 90 / 2 = 45
//   (Sum of 0+1+2+3+4+5+6+7+8+9 = 45)

// Step 3: actualSum = 9+6+4+2+3+5+7+0+1 = 37
//   (Add all numbers in the array)

// Step 4: missing = 45 - 37 = 8

// Answer: 8 ✓
// ```

// ---

// ### **Another Example**

// **Input:** `[3, 0, 1]`

// ```javascript
// Step 1: n = 3
//   (Array has 3 numbers, missing one from 0-3)

// Step 2: expectedSum = (3 × 4) / 2 = 12 / 2 = 6
//   (0+1+2+3 = 6)

// Step 3: actualSum = 3 + 0 + 1 = 4

// Step 4: missing = 6 - 4 = 2

// Answer: 2 ✓
// ```

// ---

// ## **APPROACH 2: XOR (BIT MANIPULATION) - Advanced**

// ### **XOR Properties You Need to Know**

// ```
// a ^ a = 0  (any number XOR itself = 0)
// a ^ 0 = a  (any number XOR 0 = itself)
// XOR is commutative: a ^ b = b ^ a
// ```

// **Example:**
// ```
// 5 ^ 5 = 0
// 7 ^ 0 = 7
// 3 ^ 5 ^ 3 = 5  (the 3s cancel out)
// ```

// ---

// ### **The Trick**

// If we XOR all numbers from 0 to n AND all numbers in the array, everything will cancel out EXCEPT the missing number.

// **Example:** `[3, 0, 1]` (missing 2)

// ```
// XOR all expected:  0 ^ 1 ^ 2 ^ 3
// XOR all in array:  3 ^ 0 ^ 1

// Combined: 0 ^ 1 ^ 2 ^ 3 ^ 3 ^ 0 ^ 1

// Cancel pairs:
//   0 ^ 0 = 0 (cancel)
//   1 ^ 1 = 0 (cancel)
//   3 ^ 3 = 0 (cancel)
  
// Left with: 2

// Answer: 2 ✓
// ```

// ---

// ### **The Code (Approach 2)**

// ```javascript
// var missingNumber = function(nums) {
//     let result = nums.length;  // Start with n
    
//     for (let i = 0; i < nums.length; i++) {
//         result ^= i;        // XOR with index
//         result ^= nums[i];  // XOR with value
//     }
    
//     return result;
// };
// ```

// ---

// ### **Step-by-Step Trace**

// **Input:** `[3, 0, 1]`

// ```javascript
// Initial: result = 3 (n = 3)

// Loop i=0:
//   result ^= 0  → result = 3 ^ 0 = 3
//   result ^= 3  → result = 3 ^ 3 = 0

// Loop i=1:
//   result ^= 1  → result = 0 ^ 1 = 1
//   result ^= 0  → result = 1 ^ 0 = 1

// Loop i=2:
//   result ^= 2  → result = 1 ^ 2 = 3
//   result ^= 1  → result = 3 ^ 1 = 2

// Answer: 2 ✓
// ```

// ---

// ## **Which Approach to Use?**

// | | Approach 1 (Math) | Approach 2 (XOR) |
// |---|---|---|
// | **Difficulty** | Easy | Medium |
// | **Code Length** | 3 lines | 5 lines |
// | **Understanding** | Simple arithmetic | Bit manipulation |
// | **Interview** | Perfect | Shows advanced knowledge |
// | **My Recommendation** | ✅ Use this | Learn for bonus points |

// ---

// ## **Full Working Code (Approach 1)**

// ```javascript
// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
// var missingNumber = function(nums) {
//     const n = nums.length;
//     const expectedSum = (n * (n + 1)) / 2;
//     const actualSum = nums.reduce((sum, num) => sum + num, 0);
//     return expectedSum - actualSum;
// };
