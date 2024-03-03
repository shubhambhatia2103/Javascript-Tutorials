//  Arrow Functions

//  1. Syntax
// function sayHello() {
//     console.log('Hello!')
// }
// sayHello();

const sayHello = () => {    //  Arrow Function
    console.log('Hello!');
}
sayHello();

// const add = (a, b) => {
//     return a + b;
// }
// console.log(add(2, 3));

const add = (a, b) => a + b;    //  One Liner 
console.log(add(3, 3));

//  2. 'arguments' keywords
//  access multiple arguments

const addNumbers = (...nums) => {
    console.log(nums);
}
addNumbers(12, 13, 14, 15)