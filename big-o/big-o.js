var nemo = ['nemo'];
var everyone = ['dory', 'bruce', 'marlin', 'nemo', 'gill', 'bloat', 'nigel', 'squirt', 'darla', 'hank'];
function findNemo(array) {
    var t0 = performance.now();
    for (var i = 0; i < array.length; i++) {
        if (array[i] === 'nemo') {
            console.log('Found Nemo!');
        }
    }
    var t1 = performance.now();
    console.log('Call to find Nemo took ' + (t1 - t0) + ' milliseconds');
}
// findNemo(nemo)
findNemo(everyone);