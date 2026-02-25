//Check if the number is even and divisible by 4 or not and check if odd and divisible by 5 or not


const number  = require("readline-sync").questionInt("Enter a number: ");

if (number % 2 ==0 && number % 4 ==0) {
    console.log("The number is even and divisible by 4");
} else if (number % 2 == 0 && number % 4 != 0) {
    console.log("The number is even but not dividible by 4");
} 
else {
    if(number % 2 != 0 && number % 5 == 0) {
        console.log("The number is odd and divisible by 5");
    } else if (number % 2 != 0 && number % 5 != 0) {
        console.log("The number is odd but not divisible by 5");
    }
}