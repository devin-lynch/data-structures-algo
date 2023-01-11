// different ways of solving problems with loops
var everyone = ['dory', 'bruce', 'marlin', 'nemo', 'gill', 'bloat', 'nigel', 'squirt', 'darla', 'hank'];
function findNemo(array) {
    for (var i = 0; i < array.length; i++) {
        if (array[i] === 'nemo') {
            console.log('Found Nemo!');
        }
    }
}
findNemo(everyone);
var findNemo2 = function (array) {
    array.forEach(function (fish) {
        if (fish === 'nemo') {
            console.log('Found Nemo!');
        }
    });
};
var findNemo3 = function (array) {
    for (var _i = 0, array_1 = array; _i < array_1.length; _i++) {
        var fish = array_1[_i];
        if (fish === 'nemo') {
            console.log('Found Nemo!');
        }
    }
};
findNemo2(everyone);
findNemo3(everyone);
