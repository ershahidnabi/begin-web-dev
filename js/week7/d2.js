// function rev(str) {
//     let text = "";
//     for (let i = str.length - 1; i >= 0; i--) {
//         text += str[i];
//     }
//     if (text === str) {
//         console.log("isPalindrome");
//     } else {
//         console.log("isNotPalindrome");
//     }
// }
// rev("racecar");

function rev(str) {
    let text = "";
    for (let i = str.length - 1; i >= 0; i--) {
        text += str[i];
    }
}

let str = "asrar is is the best";
let arr = str.split(" ");
console.log(arr);
revers = "";
for (i = arr.length - 1; 1 >= 0; i--) {
    revers += arr[i];
    console.log(revers);
}
console.log(arr);
