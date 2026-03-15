
// // ## **Your Tasks Today**

// // ### **1. JS Fundamentals (60 min) — THIS keyword & bind/call/apply**

// // Understanding `this` is crucial for avoiding bugs, especially in React and event handlers.

// // ===== UNDERSTANDING 'THIS' =====

// // 1. GLOBAL CONTEXT
// console.log(this);  // In browser: Window object, In Node: global object

// // 2. OBJECT METHOD
// const person = {
//   name: "Ram",
//   greet: function() {
//     console.log(this.name);  // 'this' refers to person object
//   }
// };

// person.greet();  // "Ram"

// // 3. THE PROBLEM: Lost 'this' context
// const greetFunc = person.greet;
// greetFunc();  // undefined (this is now global, not person)

// // 4. ARROW FUNCTIONS don't have their own 'this'
// const personArrow = {
//   name: "Sita",
//   greet: function() {
//     setTimeout(() => {
//       console.log(this.name);  // Arrow function inherits 'this' from parent
//     }, 1000);
//   }
// };

// personArrow.greet();  // "Sita" (works!)

// // Without arrow function (classic problem):
// const personClassic = {
//   name: "Lakshman",
//   greet: function() {
//     setTimeout(function() {
//       console.log(this.name);  // undefined! 'this' is lost
//     }, 1000);
//   }
// };

// // ===== BIND, CALL, APPLY =====

// const user = {
//   name: "Hanuman",
//   age: 25
// };

// function introduce(greeting, location) {
//   console.log(`${greeting}, I'm ${this.name}, ${this.age} years old, from ${location}`);
// }

// // CALL - invokes function immediately with specific 'this'
// introduce.call(user, "Hello", "Mumbai");
// // "Hello, I'm Hanuman, 25 years old, from Mumbai"

// // APPLY - same as call, but arguments as array
// introduce.apply(user, ["Hi", "Delhi"]);
// // "Hi, I'm Hanuman, 25 years old, from Delhi"

// // BIND - returns new function with 'this' permanently bound
// const boundIntroduce = introduce.bind(user);
// boundIntroduce("Hey", "Pune");
// // "Hey, I'm Hanuman, 25 years old, from Pune"

// // BIND with partial arguments (currying)
// const greetHanuman = introduce.bind(user, "Namaste");
// greetHanuman("Ayodhya");  // Only need to pass location
// // "Namaste, I'm Hanuman, 25 years old, from Ayodhya"

// // ===== REAL-WORLD REACT EXAMPLE =====

// // // Class Component (old way)
// // class Counter extends React.Component {
// //   constructor() {
// //     this.state = { count: 0 };
// //     // Must bind 'this' for event handlers
// //     this.increment = this.increment.bind(this);
// //   }
  
// //   increment() {
// //     this.setState({ count: this.state.count + 1 });
// //   }
  
// //   render() {
// //     return <button onClick={this.increment}>Count: {this.state.count}</button>;
// //   }
// // }

// // // Modern way with arrow functions (auto-binds)
// // class CounterModern extends React.Component {
// //   state = { count: 0 };
  
// //   increment = () => {  // Arrow function auto-binds 'this'
// //     this.setState({ count: this.state.count + 1 });
// //   }
  
// //   render() {
// //     return <button onClick={this.increment}>Count: {this.state.count}</button>;
// //   }
// // }

// // // ===== EVENT HANDLERS =====

// // const button = {
// //   text: "Click me",
// //   handleClick: function() {
// //     console.log(this.text);
// //   }
// // };

// // // Problem in DOM
// // // document.querySelector('button').addEventListener('click', button.handleClick);
// // // 'this' would be the button element, not our button object!

// // // Solution 1: bind
// // // document.querySelector('button').addEventListener('click', button.handleClick.bind(button));

// // // Solution 2: arrow function
// // // document.querySelector('button').addEventListener('click', () => button.handleClick());

// // // YOUR TASKS:

// // // 1. Fix this code (it prints undefined):
// // const car = {
// //   brand: "Tesla",
// //   getBrand: function() {
// //     return this.brand;
// //   }
// // };
// // const getBrand = car.getBrand;
// // console.log(getBrand());  // undefined - FIX THIS using bind

//     const car = {
//    brand: "Tesla",
//    getBrand: function() {
//      return this.brand;
//    }
//    };
//    const getBrand = car.getBrand.bind(car);
// console.log(getBrand()); 

// // // 2. Create an object 'calculator' with methods add and multiply
// // //    Use call/apply to use these methods with different contexts
// // //    Example:
// // //    const calc1 = { a: 5, b: 3 };
// // //    const calc2 = { a: 10, b: 2 };
// // //    calculator.add.call(calc1) should return 8
// // //    calculator.multiply.apply(calc2) should return 20

//    const calculator = {
//   add: function() {
//     return this.a + this.b;
//   },
//   multiply: function() {
//     return this.a * this.b;
//   }
// };
// const calc1 = { a: 5, b: 3 };
// const calc2 = { a: 10, b: 2 };
// console.log(calculator.add.call(calc1));
// console.log(calculator.multiply.apply(calc2));

// // // 3. Explain why this prints "undefined":
// // const person2 = {
// //   name: "John",
// //   greet: function() {
// //     setTimeout(function() {
// //       console.log(this.name);
// //     }, 1000);
// //   }
// // };
// // person2.greet();
// // // Then fix it two ways: using arrow function and using bind

// // What happens

// // Inside setTimeout:

// // function() { console.log(this.name) }

// // That function is not called by person2.

// // It’s called by:

// // setTimeout

// // So this becomes global object, not person2.

// // Global doesn't have name.

// // So output:

// // undefined

// // // 4. Create a function makeCounter() that returns an object with
// // //    increment, decrement, and getValue methods
// // //    Use 'this' to maintain count privately
// // //    Example:
// // //    const counter = makeCounter();
// // //    counter.increment(); counter.increment();
// // //    counter.getValue(); // 2

// function makeCounter() {

//   let count = 0;

//   return {
//     increment: function() {
//       count++;
//     },

//     decrement: function() {
//       count--;
//     },

//     getValue: function() {
//       return count;
//     }
//   };

// }
// const counter = makeCounter();

// counter.increment();
// counter.increment();

// console.log(counter.getValue());
// // // ---

// // // ### **2. LeetCode (30 min) — Plus One**

// // **Problem:** https://leetcode.com/problems/plus-one/

// // **What it asks:** Given array representing a non-negative integer (each digit is an array element), add 1 to the integer.

// // **Examples:**
// // - `[1,2,3]` → `[1,2,4]` (123 + 1 = 124)
// // - `[4,3,2,1]` → `[4,3,2,2]` (4321 + 1 = 4322)
// // - `[9]` → `[1,0]` (9 + 1 = 10)
// // - `[9,9,9]` → `[1,0,0,0]` (999 + 1 = 1000)

// // ---

// Explainaton + Code 

// Good — this is a **very classic beginner algorithm problem**. The trick is not coding first. The trick is **understanding the number logic**.

// Let’s walk through it like an engineer instead of memorizing the solution.

// ---

// # 1️⃣ What the problem actually means

// You are given a number **as digits in an array**.

// Example:

// ```
// [1,2,3]
// ```

// represents the number:

// ```
// 123
// ```

// Your task:

// ```
// 123 + 1 = 124
// ```

// Return:

// ```
// [1,2,4]
// ```

// ---

// # 2️⃣ Why we cannot just convert to number

// You might think:

// ```javascript
// let num = Number(digits.join(""))
// return (num + 1).toString().split("")
// ```

// But that breaks when numbers are **very large** (millions of digits).

// So we must do **manual addition like we learned in school**.

// ---

// # 3️⃣ How humans add numbers

// Example:

// ```
// 129 + 1
// ```

// You start from the **rightmost digit**.

// ```
// 9 + 1 = 10
// write 0
// carry 1
// ```

// Now next digit:

// ```
// 2 + 1 = 3
// ```

// Result:

// ```
// 130
// ```

// Array form:

// ```
// [1,3,0]
// ```

// This is exactly the logic we implement.

// ---

// # 4️⃣ The algorithm idea

// Start from **last digit**.

// Two possibilities:

// ### Case 1 — digit < 9

// Example:

// ```
// [1,2,3]
// ```

// Last digit:

// ```
// 3 + 1 = 4
// ```

// No carry needed.

// Return immediately.

// ---

// ### Case 2 — digit = 9

// Example:

// ```
// [1,2,9]
// ```

// ```
// 9 + 1 = 10
// ```

// So:

// ```
// digit becomes 0
// carry 1
// ```

// Then continue left.

// ---

// ### Case 3 — all digits are 9

// Example:

// ```
// [9,9,9]
// ```

// ```
// 999 + 1 = 1000
// ```

// So result becomes:

// ```
// [1,0,0,0]
// ```

// Which means:

// ```
// 1 + the rest of digits
// ```

// ---

// # 5️⃣ Writing the code step-by-step

// ### Step 1 — start from last digit

// ```javascript
// for (let i = digits.length - 1; i >= 0; i--)
// ```

// We go **right → left**.

// ---

// ### Step 2 — check if digit < 9

// ```javascript
// if (digits[i] < 9)
// ```

// Example:

// ```
// 3 < 9 → true
// ```

// So:

// ```javascript
// digits[i]++
// return digits
// ```

// Done.

// ---

// ### Step 3 — if digit is 9

// Then:

// ```
// 9 + 1 = 10
// ```

// We write:

// ```
// 0
// ```

// Code:

// ```javascript
// digits[i] = 0
// ```

// Then continue loop.

// ---

// ### Step 4 — if loop finishes

// That means **all digits were 9**.

// Example:

// ```
// [9,9,9]
// ```

// Now digits became:

// ```
// [0,0,0]
// ```

// So we add a **1 at the front**.

// ```javascript
// return [1, ...digits]
// ```

// The `...` means:

// ```
// spread digits
// ```

// Example:

// ```
// [1, ...[0,0,0]]

// = [1,0,0,0]
// ```

// ---

// # 6️⃣ Final clean solution


// function plusOne(digits) {

//   for (let i = digits.length - 1; i >= 0; i--) {

//     if (digits[i] < 9) {
//       digits[i]++
//       return digits
//     }

//     digits[i] = 0
//   }

//   return [1, ...digits]
// }


// ---

// # 7️⃣ Run through example

// ### Input

// ```
// [1,2,9]
// ```

// Loop:

// ```
// i = 2
// digits[2] = 9
// ```

// Set:

// ```
// [1,2,0]
// ```

// Continue.

// ```
// i = 1
// digits[1] = 2
// ```

// Now:

// ```
// 2 < 9
// ```

// So:

// ```
// 2 + 1 = 3
// ```

// Result:

// ```
// [1,3,0]
// ```

// Done.

// ---

// # 8️⃣ Time Complexity

// ```
// O(n)
// ```

// Because in worst case we scan the entire array.

// Example:

// ```
// [9,9,9,9,9]
// ```

// ---

// # 9️⃣ Why interviewers ask this

// This problem tests:

// * array traversal
// * carry handling
// * edge cases
// * thinking right → left

// Not syntax.

// ---

// # 🔟 Quick practice

// Predict outputs:

// ### Case 1

// ```
// [2,3,4]
// ```

// Result?

// ```
// [2,3,5]
// ```

// ---

// ### Case 2

// ```
// [1,9,9]
// ```

// Result?

// ```
// [2,0,0]
// ```

// ---

// ### Case 3

// ```
// [9]
// ```

// Result?

// ```
// [1,0]
// ```

// ---

// # 1️⃣1️⃣ Important lesson

// LeetCode problems are almost always:

// ```
// 1 small idea
// + edge case
// ```

// Here the idea is:

// ```
// carry handling
// ```

// That’s it.

// ---

// If you want, I can also show you **3 patterns that solve 80% of easy LeetCode problems** so these stop feeling random.



