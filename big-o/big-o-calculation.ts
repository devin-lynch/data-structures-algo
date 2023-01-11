// SIMPLIFYING BIG O

// RULE 1: Worst Case!! (For scalability!)
//  in the 'finding nemo' example, nemo was the 3rd index. Even if nemo was first, we would want to account for the 'worst case' aka if nemo was the 9th index. That would make it O(n) instead of O(1)

// RULE 2: Remove Constants
//  if it's O(n + 500000) we simplify to just O(n). Disregard the constants!

// RULE 3: Different terms for inputs

// RULE 4: Drop Non Dominants

// # ## # ## # ## # ## # ## # ## # ## # ## #


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

// function anotherFunChallenge(input) {
//     let a = 5; // O(1)
//     let b = 10; // O(1)
//     let c = 50; // O(1)
//     for (let i = 0; i < input; i++) { // O(n)
//         let x = i + 1; // O(n)
//         let y = i + 2; // O(n)
//         let z = i + 3; // O(n)
//     }
//     for (let j = 0; j < input; j++) { // O(n)
//         let p = j * 2; // O(n)
//         let q = j * 2; // O(n)
//     }
//     let whoAmI = "I don't know!" // O(1)
// }

// // 4 + n + n + n + n + n + n + n
// // BIG O(4 + 7n)  -- could be O(4 + 5n) if we don't include the loops (optional -- still results in O(n) when simplified!)


// # ## # ## # ## # ## # ## # ## # ## # ## #

// Rule 1
// function printFirstItemThenFirstHalfThenSayHi100Times(items: string[]) {
//     console.log(items[0]); // O(1)
    
//     let middleIndex = Math.floor(items.length / 2); // O(n/2)
//     let index = 0

//     while (index < middleIndex) {
//         console.log(items[index]);
//         index++;
//     }

//     for (let i = 0; i < 100; i++) { // Looping 100 times!
//         console.log('hi');
//     }
// }

// // O(1 + n/2 + 100)
// // O(n/2 + 101)
// // O(n/2 + 1)  -- as it scales higher and higher, the /2 becomes insignificant. Drop it!
// // O(n + 1) -- +1 is insignificant. drop it! drop constants!
// // O(n)


// # ## # ## # ## # ## # ## # ## # ## # ## #

// Rule 2
// function compressBoxesTwice(boxes) {
//     boxes.forEach(function(boxes) { // O(n)
//         console.log(boxes);
//     })

//     boxes.forEach(function(boxes) { // O(n)
//         console.log(boxes);
//     })
// }

// // O(n) + O(n)
// // O(2n)
// // O(n) -- Drop the constants!


// # ## # ## # ## # ## # ## # ## # ## # ## #

// Rule 3
// function compressBoxesTwiceTwo(boxes: string[], boxes2: string[]) {
//     boxes.forEach(function(boxes) { // O(n)
//         console.log(boxes);
//     })

//     boxes2.forEach(function(boxes) { // O(n)
//         console.log(boxes);
//     })
// }

// // O(a + b)


// # ## # ## # ## # ## # ## # ## # ## # ## #

// // Log all pairs of array

// const boxes: string[] = ['a', 'b', 'c', 'd', 'e'];

// function pair(array: string[]) {
//     for (let i = 0; i < array.length; i++) {
//         for (let j = 0; j < array.length; j++) { // nested loop! instead of two loops after each other (addition), loops that are nested use multiplication!
//             console.log(array[i], array[j]);
//         }
//     }
// }

// pair(boxes)

// // O(n * n)
// // O(n^2) -- Quadratic Time -- everytime the number of elements increase, the number of operations increases quadratically!


// # ## # ## # ## # ## # ## # ## # ## # ## #

//  function printAllNumbersThenAllPairSums(numbers: number[]) {

//     console.log('these are the numbers:'); // O(n)
//     numbers.forEach(number => {
//         console.log(number);
//     })

//     console.log('and these are their sums:');
//     numbers.forEach(firstNumber => {  // O(n)
//         numbers.forEach(secondNumber => { // O(n)
//             console.log(firstNumber + secondNumber);
//         })
//     })
//  }

//  const nums = [1, 2, 3, 4, 5]
//  printAllNumbersThenAllPairSums(nums)

//  // O(n + n^2)
//  // Rule 4!
//  // O(n^2) -- as size increases the n^2 is more imporant than O(n)

//  // O(x^2+3x+100+x/2)
//  // Simplify! Drop non dominant terms
//  // O(x^2)  -- all about scale! if x = 5 then 100 is the biggest, but it doesn't scale.


// # ## # ## # ## # ## # ## # ## # ## # ## #

// O(n!) -- worst/most expensive one! factorial time or O('no')
// it exists, but you won't encounter it
// adding a nested loop for EVERY input we have