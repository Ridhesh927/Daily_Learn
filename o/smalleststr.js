// Program to find the smallest String in an array of strings of 3 

const firststr = 'meow'
const secstr = 'niggar'
const thirdstr = 'hehehe'


const lengthfirststr = firststr.length 
const lengthsecstr = secstr.length
const lengththridstr = thirdstr.length 

if(lengthfirststr < lengthsecstr && lengthfirststr < lengththridstr) {
    console.log(`The smallest String is  ${firststr}`);
} else if (lengthsecstr < lengthfirststr && lengthsecstr < lengththridstr) {
    console.log(`The smallest String is ${secstr}`);
} else if (lengththridstr < lengthfirststr && lengththridstr < lengthsecstr){
    console.log(`The smallest String is ${thirdstr}`);
} else {
    console.log("Two or more strings are equal")
}
