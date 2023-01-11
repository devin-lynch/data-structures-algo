// function booooo(n: number[]) {
//     for (let i = 0; i < n.length; i++) { // space added by the 'let i = 0' variable!
//         console.log('boooooo');
//     }
// }
// booooo([1, 2, 3, 4, 5]) // space complexity of O(1)
// # ## # ## # ## # ## # ## # ## # ## #
function arrayOfHiNTimes(n) {
    var hiArray = []; // created data structure (array)
    for (var i = 0; i < n; i++) { // created variable (let i = 0) -- ignore constant
        hiArray[i] = 'hi'; // filled array with n loops
    }
    return hiArray;
}
arrayOfHiNTimes(6); // O(n) space complexity!
