console.log(2 + "2"); // 22  Concatenation
console.log(2 - "2"); // 0   The - sign only works on numbers. Number operator.

// Given the array [1,2,2,3], eliminate the duplicate item without using a loop or reduce.
let nums = [1, 2, 2, 3];
console.log([...new Set(nums)]);

/*  Fix this function so that var v is undefined. Varriables originally looked like this:

{
  let l = 'let';
  var v = 'var';
}

The solution is to wrap the variables with an IIFE.
*/

let func = function() {
  {
    (function() {
      let l = "let";
      var v = "var";
    })();
  }

  console.log(v);
  console.log(l);
};

func();

// What is the output?
/*
  In console.log(5 < 6 < 7); the 5 < 6 evaluate to true and true becomes 1 and 1 is less than 7.
  In console.log(7 > 6 > 5); the 7 > 6 evaluates to true and true becomes 1 and 1 is not greater than 5.
*/

console.log(5 < 6 < 7); // true
console.log(7 > 6 > 5); // false
