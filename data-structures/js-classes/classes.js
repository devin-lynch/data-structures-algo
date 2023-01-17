// reference type
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var object1 = { value: 10 };
var object2 = object1;
var object3 = { value: 10 };
object1 === object2; // true
object1 === object3; // false
object1.value = 15;
object2.value; // 15
object3.value; // 10
// context vs scope
// context tells us where we are within the object
console.log(this); // window object
console.log(this === window); // true
this.alert('hello');
function a() {
    console.log(this);
}
a(); // window object
window.a(); // same thing
var object4 = {
    a: function () {
        console.log(this); // {a: ƒ}
    }
};
// function b() {
//     let a = 4;
// }
// instantiation
var Player = /** @class */ (function () {
    function Player(name, type) {
        console.log('player', this);
        this.name = name;
        this.type = type;
    }
    Player.prototype.introduce = function () {
        console.log("Hi I am ".concat(this.name, ", I'm a ").concat(this.type));
    };
    return Player;
}());
var Wizard = /** @class */ (function (_super) {
    __extends(Wizard, _super);
    function Wizard(name, type) {
        var _this = _super.call(this, name, type) || this;
        console.log('wizard', _this);
        return _this;
    }
    Wizard.prototype.play = function () {
        console.log("WEEEEE I'm a ".concat(this.type));
    };
    return Wizard;
}(Player));
var wizard1 = new Wizard('Shelly', 'Healer');
var wizard2 = new Wizard('Sean', 'Dark Magic');
