/**
 Palindrome String
 */

// const str = "Ridhesh";
// //with loop

// function getreservedStr(str){
//   let reversedStr = "";
//   for(let i=str.length-1;i >=0;i--){
//     reversedStr +=str[i];
//   }
//   return reversedStr;
// }

// const result = getreservedStr(str);
// console.log(result);

// without loop below only function

// const arroffChar = str.split("");
// const reservedChar = arroffChar.reverse();
// const reservedStr = reservedChar.join("");
// console.log(reservedStr);

// const reservedStr = str.split("").reverse().join("");

// if (str === reservedStr) {
//   console.log("The string is a palindrome.");
// } else {
//   console.log("The string is not a palindrome.");
// } 



/*
WAP to delete all the vowels from a string
*/
// const str = "Ridhesh is coding here and enjoying";

// function getStrWithNoVowels(str){
//     const vowels = ["a","e","i","o","u"];
//     let result ="";
//     for(let char of str) {
//         if(!vowels.includes(char.toLowerCase())){
//             result += char;
//         }
//     }
//     return result;
// }

// const result = getStrWithNoVowels(str);
// console.log(result);

/*
Masking last 4 number
*/

// const str = "12345678901";

// const MaskChar = "#".repeat(4);
// const result = str.slice(0 , str.length -4) + MaskChar;

// console.log(result);


/*
Generating Number from a String to the Next to char from ACII code
*/

// const inputString = "Ridhesh" 
// const shiftByPos = 4;

// const getEncodedStr = (str , shiftByPos) => {
//     let EncodedStr = "";
//     let currentPos = 0 , newPos = 0;
//     for(let i =0; i < str.length; i++) {
//         currentPos = str.charCodeAt(i);
//         newPos = currentPos + shiftByPos;
//         EncodedStr += String.fromCharCode(newPos);
//     }
//     return EncodedStr;
// }

// console.log(getEncodedStr(inputString , shiftByPos));

/*
Sub-String
*/

// const str = "Ridhesh_Mahajan";

// for(let i =0 ; i<= str.length ; i++) {
//     for(let j = i+1 ; j<= str.length ; j++) {
//         console.log(str.slice(i,j));
//     }
// }


/*
ODD to Even & vice versa
*/

// const arr = [1,2,3,4,5,6,7,8,9];
// const result = arr.map(num => num % 2 == 0 ? num +1 : num - 1);

// console.log(result);

/*
Sum of number less than 40
*/

// const arr = [10,20,30,40,50,60,70,80,90];

// const result = arr.reduce((acc,cur) => cur < 40 ? acc + cur : acc , 0 );

// console.log(result);

/*
Generate an Object with Sum of Even and Odd Numbers 
*/

// const arr = [1,2,4,5,6,7,8];

// const reducefuction = (acc , cur) => {
//     if(cur % 2 === 0) {
//         return {...acc, even: acc.even + cur };
//     } else {
//         return {...acc , odd: acc.odd + cur};
//     }
// }

// const result = arr.reduce(reducefuction , {even: 0 , odd: 0});
// console.log(result);


