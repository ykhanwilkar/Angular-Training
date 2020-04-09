//Create a sample application in Typescript to find the factorial of a number.
let x: number = 5;
let i = x;
while (i > 1) {
    i--;
    x *= i;
 }

console.log(x);