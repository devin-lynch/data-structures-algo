// Implementing an array
var MyArray = /** @class */ (function () {
    function MyArray() {
        this.length = 0;
        this.data = {};
    }
    MyArray.prototype.get = function (index) {
        return this.data[index];
    };
    MyArray.prototype.push = function (item) {
        this.data[this.length] = item;
        this.length++;
        return this.length;
    };
    MyArray.prototype.pop = function () {
        var lastItem = this.data[this.length - 1];
        delete this.data[this.length - 1];
        this.length--;
        return lastItem;
    };
    MyArray.prototype["delete"] = function (index) {
        var item = this.data[index];
        this.shiftItems(index);
        return item;
    };
    MyArray.prototype.shiftItems = function (index) {
        for (var i = index; i < this.length - 1; i++) { // iterate through it until the end
            this.data[i] = this.data[i + 1]; // take each item in the data we have. instead of what we had before, we want to add plus 1.
        }
        delete this.data[this.length - 1];
        this.length--;
    };
    return MyArray;
}());
var newArray = new MyArray();
newArray.push('hi'); // returns: 'MyArray { length: 1, data: { '0': 'hi' } }'
newArray.push('you'); // returns: 'MyArray { length: 2, data: { '0': 'hi', '1': 'you' } }'
newArray.push('!');
// newArray.pop();
newArray["delete"](0);
newArray.push('are');
newArray.push('nice');
newArray["delete"](1);
// console.log(newArray.get(0));
// in interviews, treat any string question like an array question. strings are simply an array of characters. reverse a string? convert into an array, loop/operation (split method), then return as a string.
// # ## # ## # ## # ## # ## # ## # ## #
// Create a function that reverses a string:
// 'Hi my name is Andrei' should be:
// 'ierdnA si eman ym iH'
function reverse(str) {
    var arr = [];
    for (var i = 0; i < str.length; i++) {
        arr.unshift(str[i]);
        // console.log('looping here', arr);
    }
    // let reversed = arr.toString();
    var reversed = arr.join('');
    console.log('answer', reversed);
    return reversed;
}
// reverse('testing')
// reverse('Hi my name is Andrei')
function reverse2(str) {
    // check input -- TypeScript should take care of this
    if (!str || str.length < 2 || typeof str !== 'string') {
        return "hmm that's not good";
    }
    var backwards = [];
    var totalItems = str.length - 1;
    for (var i = totalItems; i > 0; i--) {
        backwards.push(str[i]);
    }
    console.log(backwards);
    return backwards.join('');
}
// reverse2('Hi my name is Andrei')
function reverse3(str) {
    console.log(str.split('').reverse().join(''));
    return str.split('').reverse().join(''); // built in js method 'reverse' and 'join'
}
// reverse3('Does it work?')
// # ## # ## # ## # ## # ## # ## # ## #
function mergeSortedArrays(array1, array2) {
    var mergedArray = [];
    var array1Item = array1[0];
    var array2Item = array2[0];
    var i = 1;
    var j = 1;
    if (array1.length === 0) {
        return array2;
    }
    if (array2.length === 0) {
        return array1;
    }
    while (array1Item || array2Item) {
        // console.log(array1Item, array2Item);
        if (!array2Item || array1Item < array2Item) { // can make this its own function 'shouldPushArray1Item'
            mergedArray.push(array1Item);
            array1Item = array1[i];
            i++;
        }
        else { // can make this its own function 'shouldPushArray2Item'
            mergedArray.push(array2Item);
            array2Item = array2[j];
            j++;
        }
    }
    return mergedArray;
}
mergeSortedArrays([0, 3, 4, 31], [4, 6, 30]);
