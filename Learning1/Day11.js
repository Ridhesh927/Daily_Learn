// ## Your Tasks Today

// ### **1. JS Fundamentals (60 min) — Error Handling & Try/Catch**

// Real-world code breaks. You need to handle errors properly.

// // WHY ERROR HANDLING MATTERS
// // Without try/catch, one error crashes your entire program

function divide(a, b) {
  return a / b;
}

console.log(divide(10, 2));  // 5
console.log(divide(10, 0));  // Infinity (not an error in JS, but problematic)

// But what if we call an API that might fail?
// Or parse JSON that might be invalid?
// Or access a property that doesn't exist?

// TRY/CATCH BASIC SYNTAX
try {
  // Code that might throw an error
  const result = riskyOperation();
  console.log(result);
} catch (error) {
  // Handle the error
  console.log("Something went wrong:", error.message);
}

// REAL EXAMPLE: Parsing JSON
const jsonString1 = '{"name": "Ram", "age": 20}';
const jsonString2 = '{name: Ram, age: 20}';  // Invalid JSON (no quotes)

// Without try/catch (CRASHES)
// const data = JSON.parse(jsonString2);  // ❌ Program stops here
// console.log("This never runs");

// With try/catch (HANDLES ERROR)
try {
  const data = JSON.parse(jsonString2);
  console.log(data);
} catch (error) {
  console.log("Invalid JSON:", error.message);
  // Program continues!
}
console.log("Program still running!");

// THROWING YOUR OWN ERRORS
function checkAge(age) {
  if (age < 0) {
    throw new Error("Age cannot be negative");
  }
  if (age < 18) {
    throw new Error("Must be 18 or older");
  }
  return "Access granted";
}

try {
  console.log(checkAge(25));   // "Access granted"
  console.log(checkAge(-5));   // Throws error
  console.log("This won't run");
} catch (error) {
  console.log("Error:", error.message);  // "Age cannot be negative"
}

// FINALLY BLOCK (Always runs, error or not)
function fetchData() {
  console.log("Opening connection...");
  try {
    throw new Error("Network failed");
    return "Data received";
  } catch (error) {
    console.log("Error:", error.message);
    return "Failed";
  } finally {
    console.log("Closing connection...");  // Always runs
  }
}

console.log(fetchData());
// Output:
// Opening connection...
// Error: Network failed
// Closing connection...
// Failed

// ASYNC ERROR HANDLING
async function fetchUser(id) {
  try {
    const response = await fetch(`https://api.example.com/users/${id}`);
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("Failed to fetch user:", error.message);
    return null;
  }
}

// // YOUR TASKS:

// // 1. Write function safeDivide(a, b) that:
// //    - Returns a/b if b is not 0
// //    - Throws error "Cannot divide by zero" if b is 0
// //    - Use try/catch when calling it

function  safeDivide(a,b) {
 if (b === 0) {
    throw new Error("Cannot divide by zero");
  }
 return a/b;
}
try {
  console.log(safeDivide(10, 2));   // 5
  console.log(safeDivide(10, 0));   // Throws error
} catch (error) {
  console.log("Error:", error.message);  // "Cannot divide by zero"
}


// // 2. Write function parseJSON(jsonString) that:
// //    - Tries to parse the JSON
// //    - Returns parsed object if successful
// //    - Returns null and logs error if it fails
// //    Test with: '{"name":"Ram"}' and '{invalid}'


function parseJSON(jsonString) {
  try {
    const parsed = JSON.parse(jsonString);
    return parsed;
  } catch (error) {
    console.log("Error:", error.message);
    return null;
  }
}

// Test it
console.log(parseJSON('{"name":"Ram"}'));  // { name: 'Ram' }
console.log(parseJSON('{invalid}'));       // null (logs error)

// // 3. Write function validateEmail(email) that:
// //    - Throws error if email doesn't contain "@"
// //    - Throws error if email is empty
// //    - Returns true if valid
// //    Use try/catch to handle errors


function validateEmail(email) {
  if (email === "" || email === null || email === undefined) {
    throw new Error("Email is empty");
  }
  if (!email.includes("@")) {
    throw new Error("Email doesn't contain @");
  }
  return true;
}

// Using it with try/catch
try {
  console.log(validateEmail("ridhesh@gmail.com"));  // true
  console.log(validateEmail("ridhesh"));  // Throws error
} catch (error) {
  console.log("Error:", error.message);
}

try {
  console.log(validateEmail(""));  // Throws error
} catch (error) {
  console.log("Error:", error.message);  // "Email is empty"
}

// // 4. Write async function safeAPICall(url) that:
// //    - Simulates API call with setTimeout
// //    - Randomly succeeds or fails (Math.random())
// //    - Uses try/catch/finally
// //    - Finally block logs "Request completed"

async function safeAPICall(url) {
  try {
    // Simulate API call with setTimeout
    await new Promise((resolve, reject) => {
      setTimeout(() => {
        const success = Math.random() > 0.5;  // 50% chance
        
        if (success) {
          resolve({ data: "Success!", url: url });
        } else {
          reject(new Error("Network failed"));
        }
      }, 1000);  // Wait 1 second
    });
    
    console.log("API call succeeded");
    return "Data received";
    
  } catch (error) {
    console.log("API call failed:", error.message);
    return null;
    
  } finally {
    console.log("Request completed");  // Always runs
  }
}

// Test it
safeAPICall("https://example.com");
// Output (random):
// Either:
//   API call succeeded
//   Request completed
// Or:
//   API call failed: Network failed
//   Request completed




// ### **2. LeetCode (30 min) — Move Zeroes**

// **Problem:** https://leetcode.com/problems/move-zeroes/

// **What it asks:** Move all 0's to the end while maintaining the order of non-zero elements. Must modify array **in-place** (no extra array).

// **Examples:**
// - `[0,1,0,3,12]` → `[1,3,12,0,0]`
// - `[0]` → `[0]`
// - `[1,2,3]` → `[1,2,3]` (no zeros)

// **Constraint:** Must be done **in-place** with O(1) extra space

// ---

// ## **The Approach: Two Pointers**

// Think of it like organizing books on a shelf:
// - One pointer finds non-zero elements
// - Another pointer marks where to place them

// ```javascript
// var moveZeroes = function(nums) {
//     let writePos = 0;  // Where to write next non-zero
    
//     // Step 1: Move all non-zeros to the front
//     for (let i = 0; i < nums.length; i++) {
//         if (nums[i] !== 0) {
//             nums[writePos] = nums[i];
//             writePos++;
//         }
//     }
    
//     // Step 2: Fill remaining positions with zeros
//     for (let i = writePos; i < nums.length; i++) {
//         nums[i] = 0;
//     }
// };
// ```

// ---

// ## **Step-by-Step Trace**

// **Input:** `[0, 1, 0, 3, 12]`

// ### **Part 1: Move non-zeros forward**

// ```
// Initial: [0, 1, 0, 3, 12]
// writePos = 0

// i=0, nums[0]=0: Skip (it's zero)
// writePos stays 0

// i=1, nums[1]=1: Not zero!
//   nums[writePos] = nums[1]
//   nums[0] = 1
//   writePos = 1
//   Array: [1, 1, 0, 3, 12]

// i=2, nums[2]=0: Skip (it's zero)
// writePos stays 1

// i=3, nums[3]=3: Not zero!
//   nums[writePos] = nums[3]
//   nums[1] = 3
//   writePos = 2
//   Array: [1, 3, 0, 3, 12]

// i=4, nums[4]=12: Not zero!
//   nums[writePos] = nums[4]
//   nums[2] = 12
//   writePos = 3
//   Array: [1, 3, 12, 3, 12]

// After loop 1: [1, 3, 12, 3, 12]
// writePos = 3
// ```

// ### **Part 2: Fill rest with zeros**

// ```
// Fill from writePos (3) to end:

// nums[3] = 0
// nums[4] = 0

// Final: [1, 3, 12, 0, 0] ✓
// ```

// ---

// ## **Another Example: `[2, 1]`**

// ```
// No zeros, so:

// Part 1: Copies everything in place
//   nums[0] = 2, nums[1] = 1
//   writePos = 2

// Part 2: No space to fill (writePos = length)

// Result: [2, 1] ✓
// ```

// ---

// ## **Why This Works**

// 1. **First loop:** Collect all non-zeros at the beginning
// 2. **Second loop:** Fill the rest with zeros
// 3. **In-place:** No extra array needed
// 4. **Order preserved:** Non-zeros maintain their original order

// ---

// ## **Optimized One-Pass Version (Bonus)**

// ```javascript
// var moveZeroes = function(nums) {
//     let writePos = 0;
    
//     for (let i = 0; i < nums.length; i++) {
//         if (nums[i] !== 0) {
//             // Swap non-zero with writePos
//             [nums[writePos], nums[i]] = [nums[i], nums[writePos]];
//             writePos++;
//         }
//     }
// };
// ```

// This swaps as it goes, doing everything in one pass!

// ---


/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let writePos = 0;

    for(let i =0; i  < nums.length; i++) {
        if(nums[i] !== 0) {
            nums[writePos] = nums[i];
            writePos++;
        }
    }
    for(let i = writePos; i < nums.length; i++) {
        nums[i] = 0;
    }
};