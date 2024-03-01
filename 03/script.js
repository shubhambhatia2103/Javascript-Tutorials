//  Data Types
//  Numbers

let num = 3.14;
let num2 = 10;

console.log(num + num2);

console.log('------')
//  Strings
//  String '1' + '1' = String
//  String + number = string
//  String * number = number
let firstName = '123shubh@m';    // using '--'
const lastName = "Bhatia";      // using "--"
console.log(firstName + ' ' + lastName);

console.log('123' * 1)  // JS multiplies String with No. ---> NO.
console.log('a' * 1)    // NaN
console.log('------')
//  Booleans    1 | 0
//  True --> 1
//  False --> 0
let isLoggedIn = true
console.log(isLoggedIn)
console.log(isLoggedIn + 10)    //  JS takes True as in 1
let isloggedout = false
console.log(isloggedout + 10)   //  JS takes False as in 0

console.log('------')
//  Null --> using Sapce
let lastLoginDate = null;
console.log(lastLoginDate)

//  Undefined --> not using Space
let midLoginDate = undefined;
console.log(midLoginDate)


//  Objects --> seperated by commas " , "
const person = {
    firstName: 'Shubham',
    lastname: 'bhatia',
    age: 20,
    isLoggedIn: false
}
console.log(person);
console.log(person.firstName)


console.log('------')
//  Typeof Operator
console.log(typeof (123))  
console.log(typeof('abc'))