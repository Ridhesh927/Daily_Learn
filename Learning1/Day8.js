
// ## Your Tasks Today

// ### **1. JS Fundamentals (60 min) — Object Shorthand & Computed Properties**

// Modern ways to work with objects that you'll see everywhere in React.

// OBJECT SHORTHAND - when key and variable name match
// const name = "Ram";
// const age = 20;

// // Old way (repetitive)
// const user1 = {
//   name: name,
//   age: age
// };

// // New way (shorthand)
// const user2 = {
//   name,  // Same as name: name
//   age    // Same as age: age
// };

// console.log(user2);  // { name: 'Ram', age: 20 }

// // METHOD SHORTHAND
// const person = {
//   name: "Sita",
  
//   // Old way
//   greet: function() {
//     return `Hello, I'm ${this.name}`;
//   },
  
//   // New way
//   sayHi() {
//     return `Hi, I'm ${this.name}`;
//   }
// };

// console.log(person.sayHi());  // "Hi, I'm Sita"

// // COMPUTED PROPERTY NAMES - use variables as keys
// const key = "email";
// const value = "ram@example.com";

// const user3 = {
//   [key]: value  // key becomes "email"
// };

// console.log(user3);  // { email: 'ram@example.com' }

// // Dynamic keys
// const field = "username";
// const data = {
//   [field]: "ram123",
//   [`${field}_verified`]: true
// };

// console.log(data);  
// { username: 'ram123', username_verified: true }

// YOUR TASKS:
// 1. Given firstName="John", lastName="Doe", age=25
//    Create object using shorthand: {firstName, lastName, age}
//    Add a method greet() that returns "Hi, I'm John Doe"

// 2. Write function makeUser(id, name, email) that returns object
//    using shorthand properties

// 3. Write function createField(fieldName, fieldValue)
//    Returns object with computed property
//    Example: createField("phone", "123456") 
//    → { phone: "123456" }

// 4. Given propName = "score", create object:
//    { score: 100, score_max: 100, score_min: 0 }
//    Use computed properties with template literals
// ```

// Task 1: Given firstName="John", lastName="Doe", age=25
//    Create object using shorthand: {firstName, lastName, age}
//    Add a method greet() that returns "Hi, I'm John Doe"
 firstName = "John";
 lastName = " Doe";
 age = 25; 
 const user ={
    firstName,
    lastName,
    age,
  greet() {
    return `Hi ,I am ${this.firstName} ${this.lastName}`;
  }

};
console.log(user.greet());


// Task 2:  Write function makeUser(id, name, email) that returns object using shorthand properties


const makeUser = (id,name,email) => {
    return {id,name,email};
}
console.log(makeUser(1,"Ram","text@example.com"));

//Task 3: Write function createField(fieldName, fieldValue) Returns object with computed property Example: createField("phone", "123456") { phone: "123456" }

const createField =(fieldName , fieldValue) => {

    return {[fieldName] : fieldValue};
}

console.log(createField("phone", "123456"));

// Task 4: Given propName = "score", create object: { score: 100, score_max: 100, score_min: 0 } Use computed properties with template literals

const propName = "score";
const obj = {

    [propName] : 100,
    [`${propName}_max`] : 100,
    [`${propName}_min`] : 0


}
console.log(obj);


// // ### **2. LeetCode (30 min) — Climbing Stairs**

// // **Problem:** https://leetcode.com/problems/climbing-stairs/

// // **What it asks:** You're climbing stairs. You can take 1 or 2 steps at a time. How many different ways can you climb n steps?

// // **Examples:**
// // - `n = 2` → 2 ways (1+1, or 2)
// // - `n = 3` → 3 ways (1+1+1, 1+2, 2+1)

// // **Key insight:** This is a **Fibonacci pattern**!
// // - To reach step n, you either came from step (n-1) or step (n-2)
// // - So: `ways(n) = ways(n-1) + ways(n-2)`

// // **Approach:**
// // ```javascript
// // // Base cases
// n = 1 → 1 way (just 1 step)
// n = 2 → 2 ways (1+1 or 2)

// For n = 3:
// You can reach it from step 2 (take 1 step) OR from step 1 (take 2 steps)
// ways(3) = ways(2) + ways(1) = 2 + 1 = 3

// For n = 4:
// ways(4) = ways(3) + ways(2) = 3 + 2 = 5
// ```

// **Pattern hint:**
// ```javascript
// var climbStairs = function(n) {
//     if (n === 1) return 1;
//     if (n === 2) return 2;
    
//     let prev2 = 1;  // ways(1)
//     let prev1 = 2;  // ways(2)
    
//     for (let i = 3; i <= n; i++) {
//         let current = prev1 + prev2;
//         prev2 = prev1;
//         prev1 = current;
//     }
    
//     return prev1;
// };
// // ```

// ---

// ## Daily Structure

// ```
// 30 min → LeetCode (Climbing Stairs)
// 60 min → Object shorthand & computed properties
// ```

// ---


/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    
    if(n === 1 ) return 1;
    if(n === 2) return 2;

    let prev1 = 2;
    let prev2 = 1;

    for(let i=3; i <= n;i++) {
        let current = prev1 + prev2;
        prev2 = prev1;
        prev1 = current;
    }
    return prev1;
};