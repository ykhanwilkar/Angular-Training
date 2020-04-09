//Create a sample application in Typescript to find the prime numbers from 1 to 100
function isPrime(x:number) { 
    let rem: number;
    for (let i = 2; i <= x / 2; i++) {
        rem = x % i;
        if (rem == 0) {
            return false;
        }
     }
    return true;
}

for (let i = 2; i < 101; i++) {
    if (isPrime(i)) { 
        console.log(i);
    }
 }