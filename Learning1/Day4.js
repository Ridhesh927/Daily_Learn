// Study these array methods by running this code:

// const numbers = [1, 2, 3, 4, 5];

// // MAP - transforms each element
// const doubled = numbers.map(num => num * 2);
// console.log(doubled);  // [2, 4, 6, 8, 10]

// // FILTER - keeps elements that pass a test
// const evenNumbers = numbers.filter(num => num % 2 === 0);
// console.log(evenNumbers);  // [2, 4]

// // REDUCE - combines all elements into one value
// const sum = numbers.reduce((total, num) => total + num, 0);
// console.log(sum);  // 15

// NOW YOUR TASKS:
// 1. Given [10, 15, 20, 25, 30], use map to subtract 5 from each
// 2. Given [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], use filter to get numbers > 5
// 3. Given [2, 4, 6, 8], use reduce to multiply all numbers togecther

// Write your code below:
//  // 1. MAP: Subtract 5 from each number
//     const num1 = [10, 15, 20, 25, 30];
//     const sub = num1.map(num => num - 5 );
//     console.log(sub);
//  // 2. FILTER: Get numbers > 5
//     const num2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//     const fil  = num2.filter(num => num > 5);
//     console.log(fil);

//  // 3. REDUCE: Multiply all numbers together
//     const num3 = [2, 4, 6, 8];
//     const nul = num3.reduce((total,num) => total * num , 1);
//     console.log(nul);




// ---



// // 1. MAP: Add 5 to each number
// const nums1 = [1, 2, 3];
// const result1 = nums1.map(n => n + 5);
// console.log(result1);  // Should be [6, 7, 8]

// // 2. FILTER: Keep only numbers less than 10
// const nums2 = [5, 12, 8, 20, 3];
// const result2 = nums2.filter(n => n < 10);
// console.log(result2);  // Should be [5, 8, 3]

// // 3. REDUCE: Multiply all numbers together
// const nums3 = [2, 3, 4];
// const result3 = nums3.reduce((product, n) => product * n, 1);
// console.log(result3);  // Should be 24 (because 2*3*4=24)



// ### **2. LeetCode (30 min) — Contains Duplicate**

// **Problem:** https://leetcode.com/problems/contains-duplicate/

// **What it asks:** Given an array, return `true` if any number appears more than once.

// **Examples:**
// - `[1,2,3,1]` → true (1 appears twice)
// - `[1,2,3,4]` → false (all unique)

// **Hint:** Use the hash map pattern you learned in Two Sum. But this time, you're just checking if you've seen a number before, not looking for a specific sum.

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    
    const count = {};

    for (let num of nums) {
        if(count[num]) {
            return true;
        }
        count[num] = true;
    }
    return false;
};