// push
//  pop
// toString
// arrays are muable

// let arr = [1, 2, 3, 4, 5];
// console.log(arr.push(11));
// console.log(pop());
// console.log(arr.toString());
// console.log(typeof arr);
// console.log(arr.push(5));
// console.log(arr.pop());

let stack = [1, 2, 3];
let remved = stack.pop();
stack.push(stack.pop());
console.log(stack, remved);
