//  Variable
//  var | let | const

//  DataType variable = value;  Strongly typed lan
//  JS --> loosely typed lan

console.log("------")

//  Naming Conv.
//  firstname
//  first_name
//  FirstName   Classes
//  firstName   (pref) Camel Casing

//  var
//  Var --> Global
//  Re-assign
//  Kahi bhi access krlo
if (true) {
    var age = 30;
    console.log(age);
}
console.log(age);

console.log("------")

//  let --> Local scope
//  Re-assign
//  Access sirf khud ke block ke andr
if (true) {
    let a = 0;
    console.log(a);
}

console.log("------")

let ab;
console.log(ab);  // Undefined
ab = 5;
console.log(ab);

console.log("------")

//  Const --> Local
//  Value Re-assigning is not allowed
//  Access sirf khud ke block ke andr

const abc = 100;

console.log(abc + 50);
