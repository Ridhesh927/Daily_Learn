const { resolve } = require("node:dns");

// First, understand this example:
// function wait(ms) {
//   return new Promise(resolve => setTimeout(resolve, ms));
// }

// async function countdown() {
//   console.log("Starting in 3...");
//   await wait(1000);
//   console.log("2...");
//   await wait(1000);
//   console.log("1...");
//   await wait(1000);
//   console.log("GO!");
// }

// countdown();

// Now YOUR TASK:
// Write an async function called fetchUserData that:
// 1. Waits 2 seconds (simulating API call)
// 2. Returns an object: { name: "John", age: 25 }
// 3. Then write another function that calls fetchUserData 
//    and logs the result

// function wait(ms) {
//     return new Promise(resolve => setTimeout(resolve, ms));
// }

// async function fetchUserData() {
//   console.log("Fetching user data...");
//   await wait(2000);
//   return{name : 'Ridhesh',age : '20'};
// }

// async function main() {
//   const user= await fetchUserData();
//   console.log(user);
// }

// main();


// function wait(ms) {
//   return new Promise(resolve => setTimeout(resolve, ms));
// }

// async function fetchUserData() {
//   console.log("Fetching...");
//   await wait(2000);
//   return {name: 'John', age: 25};  // Give back the data
// }

// async function showUser() {
//   const user = await fetchUserData();  // Get the data
//   console.log("User name:", user.name);  // Use it
//   console.log("User age:", user.age);   // Use it
// }

// showUser();

//Leetcode Problem :242. Valid Anagram

//Given two strings s and t, return true if t is an anagram of s, and false otherwise.


/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.length !== t.length) {
        return false;
    }
   const countS = {};
   const countT = {};

   for(let char of s){
    if(countS[char]) {
        countS[char] = countS[char] + 1;
    }else {
        countS[char] = 1;
    }
   }
console.log(countS);

    for(let char of t) {
        if(countT[char]) {
            countT[char] = countT[char] + 1;
        }else {
            countT[char] =1;
        }
    }
    console.log(countT);

    for(let char in countS) {
        if(countS[char] !== countT[char]) {
            return false;
        }
    }
    return true;
};