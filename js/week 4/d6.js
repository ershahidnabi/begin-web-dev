// n = prompt("Enter a number:");
// for (i = 0; i <= n; i++) {
// let result = 0;
// for(j = 1; j <= i; j++) {
//     result += j;
// }
// console.log("The sum of natural numbers from 1 to " + i + " is: " + result);
// }

// infinite loop example:

// for(i=1, i>0, i++){}

// let i=5;
// do {console.log(i); i++} while(i<10);

// for loop

// for(initialization; condition; increment/decrement){
//     code block
// }

// while loop

// while(condition){
//     code block
// }

// do-while loop

// do{
//     code block
// } while(condition);

// for of loop
// it is used to iterate over iterable objects like arrays, strings, maps, sets etc.

// for(let value of iterableObject){
//     code block
// }

// str = "Hello World!";
// for (let val of str) {
//     console.log(val);
// }

// for in loop

std = {
    name: "John Doe",
    age: 30,
    city: "New York",
};
for (let val in std) {
    console.log(std[val]); // Output: John Doe, 30, New York
    // console.log(std.val); // this will give error as std.val is not defined  // tries to access a property literally named val on the std object — which does not exist
}

// print all even numbers from 1 to 100
