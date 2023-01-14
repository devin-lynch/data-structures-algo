// // Given 2 arrays, create a function that let's a user know (true/false) whtether these two arrays contain any common items
// // For Example:

// const array1: string[] = ['a', 'b', 'c', 'x'];
// const array2: string[] = ['z', 'y', 'i'];
// // should return false

// // --------------------------

// const array3: string[] = ['a', 'b', 'c', 'x'];
// const array4: string[] = ['z', 'y', 'x'];
// // should return true


// 2 parameters -- arrays -- no size limit
// return true or false


// "Brute Force Solution" (first thing that comes to mind -- doesn't need to be the most efficient at this point)

// function containsCommonItem(arr1: string[], arr2: string[]) {
//     for (let i = 0; i < arr1.length; i++) {
//         for (let j = 0; j < arr2.length; j++) {
//             if (arr1[i] === arr2[j]) {
//                 // console.log('true');
//                 return true;
//             }
//         }
//     }
//     // console.log('false');
//     return false;
// }

// // O(a * b) time complexity -- due to different inputs (diff sized arrays -- if they were the same length then it would be O(n^2) )
// // O(1) Space Complexity

// containsCommonItem(array1, array2)



const array1: string[] = ['a', 'b', 'c', 'x'];
const array2: string[] = ['z', 'y', 'i'];
// should return false

const array3: string[] = ['a', 'b', 'c', 'x'];
const array4: string[] = ['z', 'y', 'x'];
// should return true

// array1 ==> object {  // create an object so you can compare it with array 2
//     a: true,
//     b: true,
//     c: true,
//     x: true
// }

// array2[index] === obj.properties

function containsCommonItem2(arr1: string[], arr2: string[]) {
    // loop through first array and create object where properties === items in the array
    // can we assume always 2 params?
    let map = {}; // creating a new object -- adds to space complexity
    for (let i = 0; i < arr1.length; i++) {
        if (!map[arr1[i]]) {
            const item = arr1[i];
            map[item] = true;
        }
    }
    // console.log(map);
    // loop through second array and check if item in second array exists on created object
    for (let j = 0; j < arr2.length; j++) {
        if (map[arr2[j]]) {
            return true
        }
    }
    return false
}

// O(a + b) Time Complexity
// O(a) Space Complexity

containsCommonItem2(array1, array2)


// using javascript methods as a diff solution to the problem -- more readable and concise
function containsCommonItem3(arr1, arr2) {
    return arr1.some(item => arr2.includes(item))
}

containsCommonItem3(array1, array2)