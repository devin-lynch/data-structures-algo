// // Given 2 arrays, create a function that let's a user know (true/false) whtether these two arrays contain any common items
// // For Example:
var array1 = ['a', 'b', 'c', 'x'];
var array2 = ['z', 'y', 'i'];
// // should return false
// // --------------------------
var array3 = ['a', 'b', 'c', 'x'];
var array4 = ['z', 'y', 'x'];
// // should return true
// 2 parameters -- arrays -- no size limit
// return true or false
// "Brute Force Solution" (first thing that comes to mind -- doesn't need to be the most efficient at this point)
function containsCommonItem(arr1, arr2) {
    for (var i = 0; i < arr1.length; i++) {
        for (var j = 0; j < arr2.length; j++) {
            if (arr1[i] === arr2[j]) {
                // console.log('true');
                return true;
            }
        }
    }
    // console.log('false');
    return false;
}
// O(a * b) time complexity -- due to different inputs (diff sized arrays -- if they were the same length then it would be O(n^2) )
containsCommonItem(array1, array2);