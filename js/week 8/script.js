// let arr = [2, 3, 4, 5];
// let min = arr[0];
// for (i = 1; i < arr.length; i++) {
//     if (arr < arr[i]) {
//         console.log(min);
//     }
// }

// arr = [1, 2, 3, 4, 5, 6];

// arr.forEach((val, index) => {
//     console.log(val);
//     console.log(index);
// });

// diff for each and map
/*


*/
let n = prompt("enter num: ");

let arr = [];
for (let i = 0; i <= n; i++) {
    arr.push(i);
}

// let arr = [1, 2, 3, 4, 5];

let sum = arr.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
});

console.log(sum);
