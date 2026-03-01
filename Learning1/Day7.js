// // DEFAULT PARAMETERS - set fallback values
// function greet(name = "Guest") {
//   return `Hello, ${name}!`;
// }

// console.log(greet("Ram"));     // "Hello, Ram!"
// console.log(greet());          // "Hello, Guest!"

// // Works with arrow functions too
// const multiply = (a, b = 1) => a * b;
// console.log(multiply(5, 2));   // 10
// console.log(multiply(5));      // 5 (b defaults to 1)

// // REST OPERATOR (...) - collect remaining arguments into array
// function sum(...numbers) {
//   return numbers.reduce((total, num) => total + num, 0);
// }

// console.log(sum(1, 2, 3));           // 6
// console.log(sum(1, 2, 3, 4, 5));     // 15
// console.log(sum(10));                // 10

// // Combining regular params with rest
function introduce(greeting, ...names) {
  return `${greeting} ${names.join(", ")}!`;
}

// console.log(introduce("Hello", "Ram", "Sita", "Lakshman"));
// // "Hello Ram, Sita, Lakshman!"

// Key Rules

// REST must be the LAST parameter

//    function test(a, ...rest, b) {}  // ❌ Error! REST must be last
//    function test(a, b, ...rest) {}  // ✅ Correct

// Can only have ONE rest parameter

//    function test(...a, ...b) {}  // ❌ Error! Only one REST allowed

// REST creates an array

//    function test(...items) {
//      console.log(Array.isArray(items));  // true
//    }


// YOUR TASKS:
// 1. Write function createUser(name, age = 18, city = "Mumbai")
//    that returns object {name, age, city}
//    Test with: createUser("Ram"), createUser("Sita", 20), 
//    createUser("Lakshman", 25, "Delhi")

// 2. Write function getMax(...numbers) that returns the largest number
//    Hint: Use Math.max() or reduce
//    Test with: getMax(5, 2, 9, 1), getMax(100), getMax(-5, -10, -1)

// 3. Write function makeFullName(firstName, lastName, ...titles)
//    Returns: "firstName lastName" followed by titles in parentheses
//    Example: makeFullName("John", "Doe", "Dr", "PhD") 
//    → "John Doe (Dr, PhD)"

// Task 1: 
function createuser (name, age = 18, city = "Mumbai") {
    return{name,age,city};
}
console.log(createuser("RAM"));
console.log(createuser("Sita", 20));
console.log(createuser("Lakshman", 25, "Delhi"));

// Task 2 : 
const getmax  = (...numbers) => Math.max(...numbers);
console.log(getmax(5,2,9,1));
console.log(getmax(100));
console.log(getmax(-5, -10, -1));

// Task 3 : 
const makeFullName = (firstName , LastName, ...titles) => {
    return `${firstName}  ${LastName} (${titles.join(", ")})`;
}
    console.log(makeFullName("John", "Doe", "Dr", "PhD"));



// ### **2. LeetCode (30 min) — Merge Two Sorted Lists**

// **Problem:** https://leetcode.com/problems/merge-two-sorted-lists/

// **What it asks:** Given two sorted linked lists, merge them into one sorted list.

// **Example:**
// ```
// list1 = [1,2,4]
// list2 = [1,3,4]
// Output: [1,1,2,3,4,4]

var mergeTwoLists = function(list1, list2) {
    let dummy = new ListNode(0);  // 🚉 Starting point
    let current = dummy;           // You standing at dummy
    
    // While both trains have cars
    while (list1 !== null && list2 !== null) {
        
        // Which car is smaller?
        if (list1.val < list2.val) {
            current.next = list1;   // Hook up list1's car
            list1 = list1.next;     // Move list1 forward
        } else {
            current.next = list2;   // Hook up list2's car
            list2 = list2.next;     // Move list2 forward
        }
        
        current = current.next;     // You move forward
    }
    
    // One train is empty, hook up whatever's left
    if (list1 !== null) {
        current.next = list1;       // Attach rest of train 1
    } else {
        current.next = list2;       // Attach rest of train 2
    }
    
    return dummy.next;  // Skip the dummy, return real train
};
// ```

// ---

// ## Key Points (Super Simple)

// 1. **`current.next = list1`** → "Hook this car to my train"
// 2. **`list1 = list1.next`** → "Move to the next car in that train"
// 3. **`current = current.next`** → "I move forward on my new train"

// ---

// ## Your Turn - Trace This
// ```
// list1: 5 → 7
// list2: 2 → 6

// Step 1: Compare 5 vs 2 → 2 is smaller
//         New train: dummy → 2
//         Move list2 forward

// Step 2: Compare 5 vs 6 → 5 is smaller
//         New train: dummy → 2 → 5
//         Move list1 forward

// Step 3: Compare 7 vs 6 → 6 is smaller
//         New train: dummy → 2 → 5 → 6
//         Move list2 forward

// Step 4: list2 is empty, attach rest of list1
//         New train: dummy → 2 → 5 → 6 → 7

// Final: 2 → 5 → 6 → 7
