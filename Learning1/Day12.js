// ===== SCOPE =====

// GLOBAL SCOPE - accessible everywhere
const globalVar = "I'm global";

function test() {
  console.log(globalVar);  // ✅ Can access
}

test();
console.log(globalVar);  // ✅ Can access

// FUNCTION SCOPE - only inside function
function myFunction() {
  const localVar = "I'm local";
  console.log(localVar);  // ✅ Works
}

myFunction();
// console.log(localVar);  // ❌ Error: localVar is not defined

// BLOCK SCOPE (let/const) - only inside {}
if (true) {
  let blockVar = "I'm in a block";
  const alsoBlock = "Me too";
  console.log(blockVar);  // ✅ Works here
}
// console.log(blockVar);  // ❌ Error: not defined outside block

// var has NO BLOCK SCOPE (old, avoid using)
if (true) {
  var oldStyle = "I leak out!";
}
console.log(oldStyle);  // ✅ Works (but shouldn't!)

// NESTED SCOPE - inner can access outer
function outer() {
  const outerVar = "outer";
  
  function inner() {
    const innerVar = "inner";
    console.log(outerVar);  // ✅ Can access outer
    console.log(innerVar);  // ✅ Can access own
  }
  
  inner();
  // console.log(innerVar);  // ❌ Can't access inner's variables
}

outer();

// ===== HOISTING =====

// HOISTING = JavaScript moves declarations to the top

// FUNCTION HOISTING - functions are fully hoisted
sayHello();  // ✅ Works! Called before declaration

function sayHello() {
  console.log("Hello!");
}

// VAR HOISTING - declaration hoisted, but not value
console.log(x);  // undefined (not error!)
var x = 5;
console.log(x);  // 5

// What JavaScript actually does:
// var x;  // Declaration hoisted to top
// console.log(x);  // undefined
// x = 5;  // Assignment stays here

// LET/CONST HOISTING - "Temporal Dead Zone"
// console.log(y);  // ❌ Error: Cannot access before initialization
let y = 10;

// FUNCTION EXPRESSIONS are NOT hoisted
// greet();  // ❌ Error: greet is not a function
const greet = function() {
  console.log("Hi");
};
greet();  // ✅ Now it works

// ARROW FUNCTIONS are NOT hoisted
// sayBye();  // ❌ Error
const sayBye = () => console.log("Bye");
sayBye();  // ✅ Works

// ===== CLOSURES + SCOPE =====

function createCounter() {
  let count = 0;  // Private variable (closure)
  
  return {
    increment: function() {
      count++;
      return count;
    },
    decrement: function() {
      count--;
      return count;
    },
    getCount: function() {
      return count;
    }
  };
}

const counter = createCounter();
console.log(counter.increment());  // 1
console.log(counter.increment());  // 2
console.log(counter.decrement());  // 1
console.log(counter.getCount());   // 1
// console.log(counter.count);  // undefined - can't access directly!

// YOUR TASKS:

// 1. What will this print? (Predict first, then run)
var name = "Global";
function printName() {
  console.log(name);
  var name = "Local";
  console.log(name);
}
printName();

// 2. Fix this code (it has a scope issue):
function createFunctions() {
  var functions = [];
  for (var i = 0; i < 3; i++) {
    functions.push(function() {
      console.log(i);
    });
  }
  return functions;
}
const funcs = createFunctions();
funcs[0]();  // Should print 0, but prints 3!
funcs[1]();  // Should print 1, but prints 3!
funcs[2]();  // Should print 2, but prints 3!
// Fix it so it prints 0, 1, 2

// 3. Create a function makeMultiplier(factor) that returns
//    a function which multiplies its input by factor
//    Use closures to keep factor private
//    Example:
//    const times5 = makeMultiplier(5);
//    times5(3) → 15
//    times5(10) → 50

// 4. What's the output? Explain why.
let a = 1;
function outer() {
  let a = 2;
  function inner() {
    let a = 3;
    console.log(a);
  }
  inner();
  console.log(a);
}
outer();
console.log(a);




// 2. LeetCode (30 min) — Intersection of Two Arrays II
// Problem: https://leetcode.com/problems/intersection-of-two-arrays-ii/
// What it asks: Given two arrays, return their intersection. Each element in result must appear as many times as it shows in both arrays.
// Examples:

// nums1 = [1,2,2,1], nums2 = [2,2] → [2,2]
// nums1 = [4,9,5], nums2 = [9,4,9,8,4] → [4,9] or [9,4]


