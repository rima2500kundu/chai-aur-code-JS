// let score = "33abc";
// let score = null;
// let score = undefined;
let score = true;

// console.log(typeof score);
// console.log(typeof (score));

let valueInNumber = Number(score);
// console.log(typeof valueInNumber);
// console.log(valueInNumber); // type is NAN

/*
"33" = 33
"33abc" = NaN
true = 1; false = 0;
*/

let isLoggedIn = "Rima";
let booleanIsLoggedIn = Boolean(isLoggedIn);
// console.log(typeof booleanIsLoggedIn);
// console.log(booleanIsLoggedIn);

/*
"" = false
"Rima" = true
1 = true
*/

let someNumber = 33;
let stringNumber = String(someNumber);
console.log(typeof stringNumber);
console.log(stringNumber);