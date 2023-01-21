// send the key through a hash function that will hash and then map it into a memory address to store our data

// hash function is a function that generates a value of fixed length for each input that it gets
    // one way!


// insert O(1)
// lookup O(1)
// delete O(1)
// search O(1)

let user: {[k: string]: any} = {
    age: 54,
    name: 'Kylie',
    magic: true,
    scream: function() {
        console.log('ahhhhh!');
    }
}

user.age // O(1)
user.spell = 'abra kadabra'; // O(1)
user.scream(); // O(1)