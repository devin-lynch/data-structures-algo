// What is the Big O of the below function? (Hint, you may want to go line by line)
function funChallenge(input) {
    var a = 10; // O(1)
    a = 50 + 3; // O(1)
    for (var i = 0; i < input.length; i++) { // O(n)
        console.log('test'); // O(n) -- runs every loop
        var stranger = true; // O(n) -- runs every loop
        a++; // O(n) -- runs every loop
    }
    return a; // O(1)
}
// 3 + n + n + n + n
// BIG O(3 + 4n)
// Simplified to O(n)
