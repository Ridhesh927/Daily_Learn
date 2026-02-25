console.log("Hello world")
console.log("First code of JS Here we GOOOOOOOOOOO!!!!!!!!!!!!!!!!!!!!")

let text = "My Name Is My Name Is !!!!!!!!!!!!!!!!!!!"
console.log(text)

const number = 23 
console.log(number)

let _username = 'Ridhesh'
console.log(_username)

let $ = 'money'
console.log($)

/* String */
let username = "Raj"
console.log(typeof username)
console.log(username)

/* Number */
let age = 20
console.log(typeof age)
console.log(age)

/* Boolean */
let isinCart = true
console.log(typeof isinCart)
console.log(isinCart)

/* Null */
let no = null 
console.log(typeof no)
console.log(no)

/* Undefined */
let undef
console.log(typeof undef)
console.log(undef)

/* Object */
const details = {name : 'Raj',rollno : 26 }
console.log(typeof details)
console.log(details)


/* Concatentation $ Template Literal  */

/* Old Fashion  */

let name1 = 'Raj '
let age1 = 19
let message = "My name is "+username + " and I am "+age1+" years old "
console .log(message)

/* New Fashion */

let text1 = `My name is ${username} & I am ${age} years old`

/* Arithmetic Operations */

const x = 10
const y = 10

console.log(x+y)   
console.log(x-y)
console.log(x*y)
console.log(x/y)
console.log(x%y) //mod
console.log(x**y) //power()
console.log(x**3) ///cube
console.log(x**0.5) //square root
console.log(x**2) //square


// Type Conversion 

const a = "13"
const b = "12"

console.log(a+b) // string concatenation

console.log(Number("13")+ Number(b));

const c = Number(a);
const d = Number(b);

console.log(typeof a);
console.log(typeof b);
console.log(typeof c);
console.log(typeof d);


// Readline Sync 

const readlinesync = require("readline-sync");
const username2 = readlinesync.question("What is your name?");

// Comparsion Operator 

// 1) Basic Comparison Operator

console.log(5 == 5);
console.log(5 > 3);
console.log(5 < 3);
console.log(5 >= 5);

// 2) Comparsion Of String 

console.log("apple" > "banana"); // Flase
console.log("apple" < "banana"); // True

// apple >banana  flase cause string are compared with ASCII value of each character ie a=97 and b = 98


// 3) Strict Equality Operator (===) , Strict Inequality Operator (!==) and Loose Equality Operator (==) 

//Strict inequality operator (!==) in JavaScript checks whether two values are not equal, considering both their value and data type.
//Loose Equality operator(==) Converts the values before comparing them 
//Strict Equality operator (===) checks both the value and data type of the variables before comparing them

console.log("01" == 1); //Flase

// 5) NULL & Undefined In Comparsion 

console.log(null == undefined) //true
console.log(null === undefined) // false

//true cause js thinks there are the same values 
// flase cause there are the same data type and values (null is object and undefined is a type itself)


// 6) Type of Coerion in Comparsion
// In JavaScript, when you compare a string with a number, JavaScript will convert the string to number

console.log("2">1)

// Conditional Statements

/* Syntax :
        if(condition) {} else if(condition) {} else {}
*/

const readlinesync2 = require("readline-sync");
const age2 = readlinesync2.question("How old are u ? : ");

if (age2 >= 18) {
    console.log("You are eligible to vote");
}else {
    console.log("You are not eligible to vote");
}

// Ternary Operator

// syntzx : condtion ? expressionIfTrue : expressionIfFalse

const totalmarks = 60;
if(totalmarks < 40) {
    console.log("Niiga Fail")
} else {
    console.log("Niiga Pass")
}


//in tenary  ex1)
const marks = 60 ;
console.log(marks < 40 ? "Niiga Fail" : "Niiga pass");


// ex 2
const totalMarks = 60;

const result = totalMarks < 40 ? "You need to work hard." :
              totalMarks < 60 ? "B grade" :
              totalMarks < 75 ? "A grade" :
              totalMarks < 85 ? "A+ grade" : "Genius";

console.log(result);


//Logical Operators


//1) AND Operator (&&) : True is all condtion true else false

const sub1 = 90;
const sub2 = 95;
const sub3 = 87;

if (sub1 > 80 && sub2 > 80 && sub3 > 80) {
    console.log("You pass");
} else {
    console.log("You fail");
}

// 2) OR Operator (||) : True if any one condition is true else false

const sub4 = 90;
const sub5 = 95;    
const sub6 = 87;

if (sub4 > 90 || sub5 > 90 || sub6 > 90) {
    console.log("You pass");
} else {
    console.log("You fail");
}

// 3) NOT Operator (!): Inverts the boolean value

const isStudentEligible = false;

if (!isStudentEligible) {
    console.log("You are not eligible.");
} else {
    console.log("You are eligible.");
}

// Nullish Coalescing Operator (??)

//Syntax: expression1 ?? expression2

//ex1)

const firstName = "hehe";
console.log(firstName ?? "Hidden Geek");  // Output: "hehe"

/*|| (OR operator) treats all falsy values (false, 0, "", null, undefined, etc.) as false.
?? (Nullish Coalescing operator) only considers null and undefined as "nullish" values, and treats other falsy values (0, "", false) as valid. */




