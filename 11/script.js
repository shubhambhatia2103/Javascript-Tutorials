//  Arrays High Order Functions


const students = ["Shubham", "John", "Doe"]
console.log(students.length);   //  lenght of array
console.log(students[0]);   //  Access particular array
students[2] = 'Dosa';   //  change array element
students.push('Alexa');
students.push('Ola');

console.log(students);



const numbers = [1,2,3,4,5,6,7];

// function double(n) {
//     return n * 2;
// }
// let newArr = numbers.forEach(double);
// console.log(newArr);


//  foreach don't return the value
//  map returns the value

// function double(n) {
//     return n * 2;
// }
// let newArr = numbers.map(double);
// console.log(newArr);

// let ans = numbers.findIndex((num) => num == 5);
// console.log(ans);

// const newArr = numbers.filter((num) => num % 2 == 0)
// console.log(newArr);

// let newArr = numbers.slice(1, 5);
// let newArr = numbers.slice(3);

let newArr = numbers.splice(1, 4);
console.log(newArr);
console.log(numbers);