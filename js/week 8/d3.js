// function countoccurrences(arr) {
//     const counts = {};

//     for (let i = 0; i < arr.length; i++) {
//         const val = arr[ i ];

//         if (counts[ val ] === undefined) {
//             counts[ val ] = 0;
//         }

//         counts[ val ] = counts[ val ] + 1;

//     }

//     return counts;
// }


// const data = [ 5, 5, 5, 2, 2, 2, 2, 2, 9, 4 ];
// console.log(countoccurrences(data))



function countOccurrences(arr) {
    const counts = {};

    for (let i = 0; i < arr.length; i++) {
        const val = arr[ i ];

        if (counts[ val ] === undefined) {
            counts[ val ] = 1; // First occurrence
        } else {
            counts[ val ] = counts[ val ] + 1; // Increment count
        }
    }

    return counts;
}

const data = [ 5, 5, 5, 2, 2, 2, 2, 2, 9, 4 ];
console.log(countOccurrences(data));



// find the first non repeated character in a string 