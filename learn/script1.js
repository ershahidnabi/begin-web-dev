// add two nums
// let num1=10;
// num2=20;
// sum=num1+num2
// console.log(sum)

//  Check if a number is even or odd
// let num = 1101;

// if (num%2==0){
//     console.log('num is even')
// } else {
//     console.log('num is odd')
// }

//  Find the largest of three numbers 
// var a=10,b=25,c=90, d=50;

// var largest = a;

// if(b>largest) largest = b;
// if(c>largest) largest = c;
// if(d>largest)largest=d;

// console.log(largest)

function largesNum(num1,num2,num3){
    if(num1>num2 && num1> num3){
        return num1
    }else if(num2>num3 && num2 > num1){
        return num2
    }else{
        return null
    }
}
// console.log(largesNum(150,60,210))


let n1=300
let n2=8
let n3=100

let big=n3
if(n1>big) big=n1
if(n2>big) big=n2
// if(n3>big) big=n3
// console.log(big)


/*
Hour
if hour is between 6am and 12pm: good morning
if it is between 12pm and 6pm: good afternoon
otherwise: good evening

if(condition){
statement
}else if(another condition){
statement
}else if(yetAnotherCondition){
statement
}else{
statement
}
*/


let hour = 15;
if(hour >=6 && hour <12){
    console.log("Good Morning!")
}else if(hour >=12 && hour <18){
    console.log("Good Afternoon!")
}else{
    console.log("Good Evening!")
}
