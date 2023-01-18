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
console.log(newArray.get(0));
