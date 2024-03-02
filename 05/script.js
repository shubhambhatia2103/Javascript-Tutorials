//  Logical Operators
//  AND | OR | NOT

//  AND --> (&&) all condition must be true

const age = 20;
const gender = 'female';
 
if (age >= 18 && gender == 'male'){
    console.log('good to go')
}else {
    console.log('nope')
}


console.log('--------')
//  OR --> (||) Atleast one Cond. should be True
const myage = 20;
const mygender = 'female';

if (myage >= 50 || mygender == 'female'){
    console.log('good to go')
}else {
    console.log('nope')
}


console.log('--------')
//  NOT --> (!) 
//  True --> False
//  False --> True

const number = 4;
if (number % 2 != 0){
    console.log('Odd')
}else {
    console.log('Even')
}