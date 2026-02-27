// SPREAD OPERATOR (...)
// Copies/combines arrays and objects

// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];
// const combined = [...arr1, ...arr2];
// console.log(combined);  // [1, 2, 3, 4, 5, 6]

// const person = { name: "John", age: 25 };
// const updatedPerson = { ...person, age: 26, city: "Mumbai" };
// console.log(updatedPerson);  // { name: "John", age: 26, city: "Mumbai" }

// // DESTRUCTURING
// // Extract values from arrays/objects easily

// const numbers = [10, 20, 30, 40];
// const [first, second] = numbers;
// console.log(first);   // 10
// console.log(second);  // 20

// const user = { name: "Sarah", age: 30, city: "Delhi" };
// const { name, age } = user;
// console.log(name);  // "Sarah"
// console.log(age);   // 30

// YOUR TASKS:
// 1. Create two arrays [1,2,3] and [4,5,6], combine them using spread
// 2. Create object {name: "Ram", age: 20}, add a new property 'college'
//    using spread (without changing original object)
// 3. Given array [100, 200, 300, 400], use destructuring to get
//    first and third values (skip the second)
//    Hint: const [first, , third] = array;


// // Task 1: 
// const arr1 = [1,2,3];
// const arr2 = [4,5,6];
// const combined = [...arr1,...arr2];
// console.log(combined);

// // Task 2: 
// const person = {name : "RAM" , age : 20};
// const upperson = {...person , college : "IIT"};
// console.log(upperson);

// //task 3: 
// const arr3 = [100,200,300,400];
// const [first, ,third] = arr3;
// console.log(first);
// console.log(third);

//MOre EXAMPLES:

// const colors = ["red", "blue", "green", "yellow"];

// // Get only first and last
// const [first, , , last] = colors;
// console.log(first, last);  // "red" "yellow"

// // Get only middle two
// const [ , second, third] = colors;
// console.log(second, third);  // "blue" "green"


// LEET CODE PROBLEM: BEST TIME TO BUY AND SELL STOCK:
var maxProfit = function(prices) {
    let minPrice = prices[0];  // Start with first price as cheapest
    let maxProfit = 0;         // No profit yet
    
    for (let price of prices) {
        // Step 1: Is this the cheapest we've seen?
        if (price < minPrice) {
            minPrice = price;
        }
        
        // Step 2: If we sell now, what's the profit?
        let profit = price - minPrice;
        
        // Step 3: Is this the best profit?
        if (profit > maxProfit) {
            maxProfit = profit;
        }
    }
    
    return maxProfit;
};