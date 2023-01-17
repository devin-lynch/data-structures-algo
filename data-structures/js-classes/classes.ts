// reference type

let object1 = { value: 10 };
let object2 = object1
let object3 = { value: 10 };

object1 === object2 // true
object1 === object3 // false

object1.value = 15
object2.value // 15
object3.value // 10


// context vs scope
    // context tells us where we are within the object

console.log(this); // window object
console.log(this === window) // true
this.alert('hello');

function a() {
    console.log(this);
}

a() // window object
window.a() // same thing

const object4 = {
    a: function() {
        console.log(this); // {a: ƒ}
    }
}

// function b() {
//     let a = 4;
// }


// instantiation

class Player {
    name: string;
    type: string;

    constructor(name: string, type: string,) {
        console.log('player', this);
        this.name = name;
        this.type = type;
    }

    introduce() {
        console.log(`Hi I am ${this.name}, I'm a ${this.type}`);
    }
}

class Wizard extends Player {
    constructor(name: string, type: string) {
        super(name, type) // have to call the super when extending class
        console.log('wizard', this);
    }

    play() {
        console.log(`WEEEEE I'm a ${this.type}`);       
    }
}

const wizard1 = new Wizard('Shelly', 'Healer');
const wizard2 = new Wizard('Sean', 'Dark Magic');