//  Functions
//  A block of code that performs a particular task

function sayHello() {
    console.log('Hey Shubham')
}
sayHello()  //  Calling of Function

//  Arguments
function add(a ,b) {
    console.log(a + b);
}
add(5, 5)   //  Parameters

console.log('-------')
function multi(a, b) {
    // console.log(a * b);
    return a * b;
}
let c = multi(2, 4)
console.log('Hey user your result is', c)


console.log('-------')
//  Add multiple number
//  Unlimited Arguments accept

function addNumbers() {
    let ans = 0
    for (let i = 0; i < arguments.length; i++){
        ans = ans + arguments[i]
    }
    return ans
}

let results = addNumbers(20, 30, 40, 50, 60)
console.log(results)


console.log('-------')
// Spread Operator --> ...
function addNumbersV2(...shubham) {
    let ans = 0
    for (let i = 0; i < shubham.length; i++){
        ans = ans + shubham[i]
    }
    return ans
}

let result = addNumbers(200, 30, 40, 50, 60)
console.log(result)




