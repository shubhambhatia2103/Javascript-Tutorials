//  High Order Functions and Callbacks 
//  A function that takes a function as an argument

function add(a, b, cb){
    let result = a + b;
    cb(result);
}

// add(2, 4 , function (val) {
//     console.log(val)
// });

add(2, 4, (val) => console.log(val));
add(5, 5, (res) => console.log(res));