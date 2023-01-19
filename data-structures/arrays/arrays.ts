// Implementing an array

class MyArray {
    length: number;
    data: {};

    constructor() {
        this.length = 0;
        this.data = {}
    }
    
    get(index: number) {
        return this.data[index];
    }

    push(item: string) {
        this.data[this.length] = item;
        this.length++;
        return this.length;
    }

    pop() {
        const lastItem = this.data[this.length - 1];
        delete this.data[this.length - 1];
        this.length--;
        return lastItem;
    }

    delete(index: number) {
        const item = this.data[index];
        this.shiftItems(index);
        return item;
    }

    shiftItems(index: number) { // start at the index we want to start the delete from
        for (let i = index; i < this.length - 1; i++) { // iterate through it until the end
            this.data[i] = this.data[i + 1]; // take each item in the data we have. instead of what we had before, we want to add plus 1.
        }
        delete this.data[this.length - 1];
        this.length--;
    }
}

const newArray = new MyArray();
newArray.push('hi'); // returns: 'MyArray { length: 1, data: { '0': 'hi' } }'
newArray.push('you'); // returns: 'MyArray { length: 2, data: { '0': 'hi', '1': 'you' } }'
newArray.push('!');
// newArray.pop();
newArray.delete(0);
newArray.push('are');
newArray.push('nice');
newArray.delete(1);
// console.log(newArray.get(0));


// in interviews, treat any string question like an array question. strings are simply an array of characters. reverse a string? convert into an array, loop/operation (split method), then return as a string.


// # ## # ## # ## # ## # ## # ## # ## #

// Create a function that reverses a string:
// 'Hi my name is Andrei' should be:
// 'ierdnA si eman ym iH'

function reverse(str: string) {
    let arr: string[] = [];
    for (let i = 0; i < str.length; i++) {
        arr.unshift(str[i]);
        // console.log('looping here', arr);
    }
    // let reversed = arr.toString();
    let reversed = arr.join('');
    console.log('answer', reversed);
    return reversed
}

reverse('testing')
reverse('Hi my name is Andrei')

function reverse2(str: string) {
    // check input -- TypeScript should take care of this
    if (!str || str.length < 2 || typeof str !== 'string') {
        return "hmm that's not good"
    }

    const backwards: string[] = [];
    const totalItems = str.length - 1;
    for (let i = totalItems; i > 0; i--) {
        backwards.push(str[i])
    }
    console.log(backwards);

    return backwards.join('');
}

reverse2('Hi my name is Andrei')

function reverse3(str: string) {
    console.log(str.split('').reverse().join(''));
    return str.split('').reverse().join('') // built in js method 'reverse' and 'join'
}

reverse3('Does it work?')