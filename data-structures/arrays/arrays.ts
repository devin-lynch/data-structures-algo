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
console.log(newArray.get(0));
