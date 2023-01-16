var strings = ['a', 'b', 'c', 'd'];
// 4 shelves of storage on a 32bit system
// 4 * 4 = 16 bytes of storage
// access
strings[2]; // O(1) -- go to the strings array and grab the 3rd item (index 2)
// push
strings.push('e'); // O(1) -- adds to the end of the array. no looping is done.
// pop
strings.pop(); // O(1) -- removes the last item from the array. no looping is done.
// unshift
strings.unshift('x'); // O(n) -- adds to the beginning of the array. have to iterate or loop to reassign the indexes.
// splice
strings.splice(2, 0, 'alien'); // O(n / 2) simplify to O(n) -- removes element/s of array at specified index and inserts new element from parameter. have to iterate or loop to reassign the indexes after the insertion.
console.log(strings);
