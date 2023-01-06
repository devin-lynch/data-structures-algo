// // What is the Big O of the below function? (Hint, you may want to go line by line)
// function funChallenge(input) {
//     let a = 10; // O(1)
//     a = 50 + 3; // O(1)
//     for (let i = 0; i < input.length; i++) { // O(n)
//         console.log('test'); // O(n) -- runs every loop
//         let stranger = true; // O(n) -- runs every loop
//         a++; // O(n) -- runs every loop
//     }
//     return a; // O(1)
// }
// // 3 + n + n + n + n
// // BIG O(3 + 4n)
// // Simplified to O(n)
// # ## # ## # ## # ## # ## # ## # ## # ## #
function anotherFunChallenge(input) {
    var a = 5; // O(1)
    var b = 10; // O(1)
    var c = 50; // O(1)
    for (var i = 0; i < input; i++) { // O(n) -- optional to include!
        var x = i + 1; // O(n)
        var y = i + 2; // O(n)
        var z = i + 3; // O(n)
    }
    for (var j = 0; j < input; j++) { // O(n) -- optional to include!
        var p = j * 2; // O(n)
        var q = j * 2; // O(n)
    }
    var whoAmI = "I don't know!"; // O(1)
}
// 4 + n + n + n + n + n + n + n
// BIG O(4 + 7n)  -- could be O(4 + 5n) if we don't include the loops (optional -- still results in O(n) when simplified!)
