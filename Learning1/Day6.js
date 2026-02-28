// // TEMPLATE LITERALS - easier string building
// const name = "Ram";
// const age = 20;

// // Old way (annoying)
// const message1 = "Hello, my name is " + name + " and I am " + age + " years old.";

// // New way (clean)
// const message2 = `Hello, my name is ${name} and I am ${age} years old.`;
// console.log(message2);

// // Multi-line strings
// const html = `
//   <div>
//     <h1>${name}</h1>
//     <p>Age: ${age}</p>
//   </div>
// `;

// // ARROW FUNCTIONS - shorter function syntax
// // Old way
// function add(a, b) {
//   return a + b;
// }

// // New way
// const add1 = (a, b) => a + b;

// // With one parameter (no parentheses needed)
// const double = num => num * 2;

// // With multiple lines (need curly braces and return)
// const calculate = (x, y) => {
//   const sum = x + y;
//   const product = x * y;
//   return { sum, product };
// };

// YOUR TASKS:
// 1. Create variables: firstName="John", lastName="Doe", city="Mumbai"
//    Use template literal to create: "John Doe lives in Mumbai"

// 2. Convert this regular function to arrow function:
//    function square(num) { return num * num; }

// 3. Write an arrow function called greet that takes a name 
//    and returns "Hello, [name]!" using template literal

// 4. Write arrow function that takes array of numbers
//    and uses map to double each (combine what you learned)


// // Task 1: 
// const FirstName = "John";
// const LastName = "Doe";
// const City = "Mumbai";
// const message = `My Name is ${FirstName} ${LastName} and I live Inside ${City} `;
// console.log(message);

// // Task 2: 
// const square = num =>  num * num;
// console.log(square(5));

// // Task 3 :
// const greet = name => `Hello, ${name}`;
// console.log(greet("Ridhu"));

// // Task 4: 
// let arr = [1,2,3,4];
// const arrDouble = (arr) => arr.map(num => num * 2);
// console.log(arrDouble(arr));


// LEETCODE PROBLEMS: Reverse String, Palindrome Number

// Approach 1: 

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    
    const cleared = s.toLowerCase().replace(/[^a-z0-9]/g, '');

    const reserved = cleared.split('').reverse().join('');

    return cleared === reserved;

};

// Approach 2: Two Pointer
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    
    const cleared = s.toLowerCase().replace(/[^a-z0-9]/g, '');

    let left =0;
    let right = cleared.length - 1;

    while(left < right ) {

        if(cleared[left] !== cleared[right]) {
            return false;
        }
        left ++;
        right --;
    }
    return true;

};