// Find 1st and last tweet
// Find 1st, Find Nth...
var array = [{
        tweet: 'hi',
        date: 2012
    }, {
        tweet: 'my',
        date: 2014
    }, {
        tweet: 'tweet',
        date: 2018
    }];
// because we have to compare each item in the array with the others, we are doing nested loops.
// O(n^2)
array[0]; // O(1)
array[array.length - 1]; // O(1)
'ewrgbliudzbnlw'.length; // the Big O depends on the language for the method! in JavaScript it's built into the string, so it's O(1)!
