//  Arrays
const students = ["Shubham", "John", "Doe"]
console.log(students.length);   //  lenght of array
console.log(students[0]);   //  Access particular array

students[2] = 'Dosa';   //  change array element
console.log(students[2]);

students.push('Alexa');
students.push('Ola');
students.pop();
students.reverse();
console.log(students);

//  Heterogeneous
const myArrays = [1, true, 'Shubham', '🚀']

//having object inside Arrays
myArrays.push({name: 'Rocket'});
console.log(myArrays);

//  To find index of element
console.log(myArrays.indexOf('🚀'))