function secondLArgest(arr) {
    if (arr.length < 2) {
        return "Arr must have at least two element";
    }
    let max = -Infinity;
    let secMax = -Infinity;

    for (let i = 0; i < arr.length; i++) {
        let num = arr[i];

        if (num > max) {
            secMax = max;
            max = num;
        } else if (num > secMax && num !== max) {
            secMax = num;
        }
    }

    if (secMax === -Infinity) {
        return "no second largest number found";
    }
    return secMax;
}

let numbers = [4, 5, 7, 5, 4, 8, 6, 9];
console.log(secondLArgest(numbers));
