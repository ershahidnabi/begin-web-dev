// recurrsion  - calling function again and again
// function factorial(n) {
//     if (n === 0 || n === 1) {
//         return 1;
//     } else {
//         return n * factorial(n - 1);
//     }
// }

// console.log(factorial(5));

// wap to find prime numbers from 1 to 20

// for (let i = 2; i <= 20; i++) {
//     let isPrime = true;

//     for (let j = 2; j < i; j++) {
//         if (i % j === 0) {
//             isPrime = false;
//             break;
//         }
//     }
//     if (isPrime) {
//         console.log(i);
//     }
// }

// function getPrimesUpTo20() {
//     const primes = [];

//     for (let i = 2; i <= 20; i++) {
//         let isPrime = true;

//         for (let j = 2; j < i; j++) {
//             if (i % j === 0) {
//                 isPrime = false;
//                 break;
//             }
//         }

//         if (isPrime) {
//             primes.push(i);
//         }
//     }

//     return primes;
// }

// console.log(getPrimesUpTo20());

function prine(n) {
    if (n <= 1) {
        console.log(n + "is not a prime num");
        return;
    }

    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            console.log(n + "is not a prime num");
            return;
        }
    }
    console.log(n + "is a prime num");
}

prine(10);
