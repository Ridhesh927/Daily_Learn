// // **DAY 10. DOUBLE DIGITS.** 🔥

// // 10 days straight without breaking the streak. That's commitment most people don't have.

// // ---

// // ## Your Tasks Today

// // // ### **1. JS Fundamentals (60 min) — Array Methods Deep Dive (forEach, find, some, every)**

// // // You know map, filter, reduce. Now let's learn the rest of the essential array methods.

// // // FOREACH - Execute function for each element (no return value)
// // const numbers = [1, 2, 3, 4, 5];

// // numbers.forEach(num => {
// //   console.log(num * 2);
// // });
// // // Output: 2, 4, 6, 8, 10
// // // forEach returns undefined, just does action

// // // FIND - Returns FIRST element that matches condition
// // const users = [
// //   { id: 1, name: "Ram", age: 20 },
// //   { id: 2, name: "Sita", age: 25 },
// //   { id: 3, name: "Lakshman", age: 22 }
// // ];

// // const user = users.find(u => u.age > 21);
// // console.log(user);  // { id: 2, name: "Sita", age: 25 }

// // const notFound = users.find(u => u.age > 30);
// // console.log(notFound);  // undefined

// // // SOME - Returns true if AT LEAST ONE element matches
// // const hasAdult = users.some(u => u.age >= 18);
// // console.log(hasAdult);  // true

// // const hasKid = users.some(u => u.age < 18);
// // console.log(hasKid);  // false

// // // EVERY - Returns true if ALL elements match
// // const allAdults = users.every(u => u.age >= 18);
// // console.log(allAdults);  // true

// // const allOver25 = users.every(u => u.age > 25);
// // console.log(allOver25);  // false (Ram is 20)

// // // FINDINDEX - Returns INDEX of first matching element
// // const index = users.findIndex(u => u.name === "Lakshman");
// // console.log(index);  // 2

// // const notFoundIndex = users.findIndex(u => u.name === "Krishna");
// // console.log(notFoundIndex);  // -1

// // // INCLUDES - Check if array contains a value
// // const fruits = ["apple", "banana", "mango"];
// // console.log(fruits.includes("banana"));  // true
// // console.log(fruits.includes("orange"));  // false

// // YOUR TASKS:

// // 1. Given array of numbers [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// //    Use forEach to print only even numbers

// const number = [1,2,3,4,5,6,7,8,9,10];
// number.forEach(num => {
//     if(num % 2 == 0 ){
//         console.log(num);
//     }
// });

// //  2. Given array of products:
// //    const products = [
// //      { id: 1, name: "Phone", price: 500 },
// //      { id: 2, name: "Laptop", price: 1000 },
// //      { id: 3, name: "Tablet", price: 300 }
// //    ];
// //    Use find to get the product with name "Laptop"

// const products = [
//      { id: 1, name: "Phone", price: 500 },
//      { id: 2, name: "Laptop", price: 1000 },
//      { id: 3, name: "Tablet", price: 300 }
//    ];

// const product = products.find ( p => p.name === "Laptop");
// console.log(product);



// // 3.Given array [12, 5, 8, 130, 44]
// //    Use some to check if any number is greater than 100

// const arr = [12,5,8,130,44] ;
// const greater = arr.some(g => g > 100);
// console.log(greater);

// // 4. Given array [2, 4, 6, 8, 10]
// //    Use every to check if all numbers are even

// const arr1 = [2,4,6,8,10];
// const even = arr1.every(e => e% 2 == 0 );
// console.log(even);

// // 5. Given array ["Ram", "Sita", "Lakshman", "Hanuman"]
// //    Use findIndex to get the index of "Hanuman"

// const arr2 = ["Ram", "Sita", "Lakshman", "Hanuman"];
// const find = arr2.findIndex(f => f === "Hanuman");
// console.log(find);


// // 6. Bonus: Given array of users (from above)
// //    Use filter + map together:
// //    - Filter users older than 20
// //    - Map to get only their names
// //    Result should be: ["Sita", "Lakshman"]


// const users = [
//   { id: 1, name: "Ram", age: 20 },
//   { id: 2, name: "Sita", age: 25 },
//   { id: 3, name: "Lakshman", age: 22 }
// ];

// const names = users
//   .filter(u => u.age > 20)
//   .map(u => u.name);

// console.log(names);  // ["Sita", "Lakshman"]

// // ### **2. LeetCode (30 min) — Single Number**

// // **Problem:** https://leetcode.com/problems/single-number/

// // **What it asks:** Every element appears twice except one. Find that single one.

// // **Examples:**
// // - `[2,2,1]` → 1
// // - `[4,1,2,1,2]` → 4
// // - `[1]` → 1

// // **Constraint:** Must solve in linear time O(n) and constant space O(1)

// // ---

// // ## **Two Approaches:**

// // ### **Approach 1: Hash Map (Easy to Understand)**

// // Count how many times each number appears, return the one with count = 1.

// // ```javascript
// // var singleNumber = function(nums) {
// //     const count = {};
    
// //     // Count occurrences
// //     for (let num of nums) {
// //         count[num] = (count[num] || 0) + 1;
// //     }
    
// //     // Find the one with count = 1
// //     for (let num in count) {
// //         if (count[num] === 1) {
// //             return Number(num);  // Convert string key back to number
// //         }
// //     }
// // };
// // ```

// // **Example trace:** `[4,1,2,1,2]`
// // ```
// // After counting:
// // count = { 4: 1, 1: 2, 2: 2 }

// // Loop through count:
// //   4 has count 1 → return 4 ✓
// // ```

// // ---

// // ### **Approach 2: XOR (Optimal - One Line)**

// // Remember XOR from Missing Number? Same trick!

// // **XOR Properties:**
// // - `a ^ a = 0` (same numbers cancel)
// // - `a ^ 0 = a` (XOR with 0 gives original)
// // - XOR is commutative (order doesn't matter)

// // ```javascript
// // var singleNumber = function(nums) {
// //     let result = 0;
// //     for (let num of nums) {
// //         result ^= num;
// //     }
// //     return result;
// // };

// // // One-liner version:
// // var singleNumber = function(nums) {
// //     return nums.reduce((result, num) => result ^ num, 0);
// // };
// // ```

// // **Example trace:** `[4,1,2,1,2]`
// // ```
// // result = 0

// // 0 ^ 4 = 4
// // 4 ^ 1 = 5
// // 5 ^ 2 = 7
// // 7 ^ 1 = 6  (the first 1 is here)
// // 6 ^ 2 = 4  (the 2s cancelled, the 1s cancelled)

// // Result: 4 ✓
// // ```

// // **Why it works:**
// // ```
// // 4 ^ 1 ^ 2 ^ 1 ^ 2
// // = 4 ^ (1 ^ 1) ^ (2 ^ 2)  (reorder due to commutative)
// // = 4 ^ 0 ^ 0
// // = 4
// // ```

// // All pairs cancel to 0, leaving only the single number!

// // ---

// // ## **Which Approach?**

// // | | Hash Map | XOR |
// // |---|---|---|
// // | **Difficulty** | Easy | Medium |
// // | **Space** | O(n) | O(1) ✓ |
// // | **Time** | O(n) | O(n) |
// // | **Interview** | Good | Optimal |

// // CODE AND EXPLAINATION 

// // ## **Single Number - Both Approaches + Full Explanation**

// // ---

// // ### **Approach 1: Hash Map (Easy to Understand)**

// // ```javascript
// // /**
// //  * @param {number[]} nums
// //  * @return {number}
// //  */
// // var singleNumber = function(nums) {
// //     const count = {};
    
// //     // Step 1: Count how many times each number appears
// //     for (let num of nums) {
// //         count[num] = (count[num] || 0) + 1;
// //     }
    
// //     // Step 2: Find the number that appears only once
// //     for (let num in count) {
// //         if (count[num] === 1) {
// //             return Number(num);
// //         }
// //     }
// // };
// // ```

// // ---

// // ### **Approach 2: XOR (Optimal - One Line)**

// // ```javascript
// // /**
// //  * @param {number[]} nums
// //  * @return {number}
// //  */
// // var singleNumber = function(nums) {
// //     let result = 0;
// //     for (let num of nums) {
// //         result ^= num;
// //     }
// //     return result;
// // };

// // // Or as one-liner with reduce:
// // var singleNumber = function(nums) {
// //     return nums.reduce((result, num) => result ^ num, 0);
// // };
// // ```

// // ---

// // ## **Detailed Explanation of Approach 1 (Hash Map)**

// // Let me walk you through this line by line with an example.

// // **Input:** `[4, 1, 2, 1, 2]`

// // ---

// // ### **Line 1: Create empty object**

// // ```javascript
// // const count = {};
// // ```

// // This object will store: `{ number: howManyTimes }`

// // ```
// // count = {}
// // ```

// // ---

// // ### **Step 1: Count occurrences**

// // ```javascript
// // for (let num of nums) {
// //     count[num] = (count[num] || 0) + 1;
// // }
// // ```

// // **What `(count[num] || 0) + 1` means:**
// // - If `count[num]` exists, use it
// // - If it doesn't exist (undefined), use 0
// // - Then add 1

// // ---

// // #### **Loop Iteration 1: num = 4**

// // ```javascript
// // count[4] = (count[4] || 0) + 1
// //          = (undefined || 0) + 1
// //          = 0 + 1
// //          = 1

// // count = { 4: 1 }
// // ```

// // ---

// // #### **Loop Iteration 2: num = 1**

// // ```javascript
// // count[1] = (count[1] || 0) + 1
// //          = (undefined || 0) + 1
// //          = 0 + 1
// //          = 1

// // count = { 4: 1, 1: 1 }
// // ```

// // ---

// // #### **Loop Iteration 3: num = 2**

// // ```javascript
// // count[2] = (count[2] || 0) + 1
// //          = (undefined || 0) + 1
// //          = 0 + 1
// //          = 1

// // count = { 4: 1, 1: 1, 2: 1 }
// // ```

// // ---

// // #### **Loop Iteration 4: num = 1 (again)**

// // ```javascript
// // count[1] = (count[1] || 0) + 1
// //          = (1 || 0) + 1       // count[1] exists now!
// //          = 1 + 1
// //          = 2

// // count = { 4: 1, 1: 2, 2: 1 }
// // ```

// // ---

// // #### **Loop Iteration 5: num = 2 (again)**

// // ```javascript
// // count[2] = (count[2] || 0) + 1
// //          = (1 || 0) + 1
// //          = 1 + 1
// //          = 2

// // count = { 4: 1, 1: 2, 2: 2 }
// // ```

// // **After first loop:**
// // ```javascript
// // count = {
// //   4: 1,   // appears once
// //   1: 2,   // appears twice
// //   2: 2    // appears twice
// // }
// // ```

// // ---

// // ### **Step 2: Find the single number**

// // ```javascript
// // for (let num in count) {
// //     if (count[num] === 1) {
// //         return Number(num);
// //     }
// // }
// // ```

// // **Loop through the count object:**

// // ```
// // Check num = "4":
// //   count["4"] === 1? YES!
// //   return Number("4") = 4

// // Answer: 4 ✓
// // ```

// // **Why `Number(num)`?**  
// // Object keys are always strings in JavaScript, so we convert back to number.

// // ---

// // ## **Visual Summary of Approach 1**

// // ```
// // Input: [4, 1, 2, 1, 2]

// // Step 1: Count
// //   4 appears 1 time
// //   1 appears 2 times
// //   2 appears 2 times

// // Step 2: Find count = 1
// //   4 has count 1 → return 4

// // Output: 4
// // ```

// // ---

// // ## **Why Approach 2 (XOR) is Better**

// // **Approach 1:**
// // - Space: O(n) - stores count object
// // - Time: O(n) - two loops

// // **Approach 2:**
// // - Space: O(1) - only one variable
// // - Time: O(n) - one loop

// // **XOR in one line:**
// // ```javascript
// // return nums.reduce((result, num) => result ^ num, 0);
// // ```

// // **For interview:** Start with Approach 1 (shows clear thinking), then optimize to Approach 2 (shows you know bit manipulation).

// // ---

// // ## **Which One to Submit?**

// // **Submit Approach 2 (XOR)** - it's optimal and meets the O(1) space requirement.


// **Absolutely!** Let me explain the XOR approach you just submitted.

// ---

// ## **Your Code (XOR Approach)**

// ```javascript
// var singleNumber = function(nums) {
//     let result = 0;
//     for(let num of nums) {
//         result ^= num;
//     }
//     return result;
// };
// ```

// **Runtime: 2ms - Beats 58.67%**  
// **Memory: 56.56 MB - Beats 56.60%**

// Solid performance! Now let me explain **WHY** this works.

// ---

// ## **What is XOR (^)?**

// XOR is a **bitwise operator** that compares bits and follows these rules:

// ```
// 0 ^ 0 = 0
// 0 ^ 1 = 1
// 1 ^ 0 = 1
// 1 ^ 1 = 0
// ```

// **Simple rule:** If bits are **same** → 0, if **different** → 1

// ---

// ## **XOR Properties (The Magic)**

// These three properties make the solution work:

// ### **Property 1: `a ^ a = 0`**
// Any number XOR itself equals 0.

// ```javascript
// 5 ^ 5 = 0
// 12 ^ 12 = 0
// 100 ^ 100 = 0
// ```

// ---

// ### **Property 2: `a ^ 0 = a`**
// Any number XOR 0 equals itself.

// ```javascript
// 5 ^ 0 = 5
// 12 ^ 0 = 12
// ```

// ---

// ### **Property 3: XOR is commutative**
// Order doesn't matter.

// ```javascript
// a ^ b ^ c = c ^ a ^ b = b ^ c ^ a
// ```

// ---

// ## **How Your Code Works**

// **Input:** `[2, 2, 1]`

// Let's trace through step by step:

// ---

// ### **Initial State**

// ```javascript
// let result = 0;
// ```

// ```
// result = 0 (binary: 0000)
// ```

// ---

// ### **Iteration 1: num = 2**

// ```javascript
// result ^= num
// result = result ^ 2
// ```

// **Binary:**
// ```
//   0000  (result = 0)
// ^ 0010  (num = 2)
// ------
//   0010  (result = 2)
// ```

// **After step 1:** `result = 2`

// ---

// ### **Iteration 2: num = 2 (again)**

// ```javascript
// result ^= num
// result = result ^ 2
// ```

// **Binary:**
// ```
//   0010  (result = 2)
// ^ 0010  (num = 2)
// ------
//   0000  (result = 0)
// ```

// **After step 2:** `result = 0`

// **The two 2s cancelled each other out!** (`2 ^ 2 = 0`)

// ---

// ### **Iteration 3: num = 1**

// ```javascript
// result ^= num
// result = result ^ 1
// ```

// **Binary:**
// ```
//   0000  (result = 0)
// ^ 0001  (num = 1)
// ------
//   0001  (result = 1)
// ```

// **After step 3:** `result = 1`

// ---

// ### **Return**

// ```javascript
// return result;  // 1
// ```

// **Answer: 1** ✓

// ---

// ## **Another Example: `[4, 1, 2, 1, 2]`**

// Let's see how pairs cancel:

// ```javascript
// result = 0

// Step 1: 0 ^ 4 = 4
// Step 2: 4 ^ 1 = 5
// Step 3: 5 ^ 2 = 7
// Step 4: 7 ^ 1 = 6  (first 1 here)
// Step 5: 6 ^ 2 = 4  (the 2s cancelled, the 1s cancelled)

// Result: 4
// ```

// **Let me show you why pairs cancel:**

// ```
// 4 ^ 1 ^ 2 ^ 1 ^ 2

// Rearrange (order doesn't matter):
// = 4 ^ (1 ^ 1) ^ (2 ^ 2)

// Cancel the pairs:
// = 4 ^ 0 ^ 0

// Simplify:
// = 4
// ```

// ---

// ## **Visual Explanation**

// Think of XOR like a **light switch**:

// - Start: Light is OFF (result = 0)
// - See number 2: Flip switch → Light ON (result = 2)
// - See number 2 again: Flip switch → Light OFF (result = 0)
// - See number 1: Flip switch → Light ON (result = 1)

// **Every duplicate flips the switch twice (back to off). Only the single number leaves it on.**

// ---

// ## **Why This is Brilliant**

// **Space Complexity: O(1)**  
// - Only one variable (`result`)
// - No hash map, no extra array

// **Time Complexity: O(n)**  
// - Just one loop through array

// **It's mathematically perfect:**  
// - All duplicates cancel to 0
// - Only the single number remains

// ---

// ## **The Pattern in Your Code**

// ```javascript
// let result = 0;              // Start with 0
// for(let num of nums) {       // Go through each number
//     result ^= num;           // XOR it with result
// }
// return result;               // Pairs cancelled, single remains
// ```

// ---

// ## **One-Liner Version (Same Logic)**

// ```javascript
// return nums.reduce((result, num) => result ^ num, 0);
// ```

// This does exactly what your loop does, just using `reduce`.

// ---

// ## **Key Takeaway**

// **XOR has a "cancel duplicates" superpower:**
// - `a ^ a = 0` (duplicates vanish)
// - `a ^ 0 = a` (single number survives)
// - Order doesn't matter

// Your code exploits this perfectly!

// ---

// **You just solved it optimally with O(1) space. That's interview-level code.** 🔥

// **✅ Day 10 COMPLETE. Push to Git and rest up!** 💪