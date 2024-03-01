//  Conditional Statements 

const age = 22;
if (age >= 18) {
    console.log('Yes, you can vote')
}else if (age = 22){
    console.log('wow you are good to go')
}else {
    console.log('dont you dare to vote')
}


console.log('------')
//  Territory Operator ? :
//  ? --> if true
//  : --> else

const myage = 20;
myage >= 18 ? console.log ('drink') : console.log('dont')

console.log('------')
let result = age >= 18 ? 'yes' : 'No'
console.log(result)


console.log('------')
//  Switch Case

const Option = 3;

switch(Option) {
    case 1: console.log('Namaste!')
    break;
    case 2: console.log('Hello!')
    break;
    case 3: console.log('Bonjor!')
    break;
    default: console.log('Invalid Option')
}


